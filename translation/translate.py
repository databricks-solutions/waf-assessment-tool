#!/usr/bin/env python3
"""
Automatic Translation System
Automatically translates messages from English to other languages with SHA1 hash control,
stored in separate .hashes files, simple lock and quantitative validation.
"""
import json
import os
import sys
import re
import hashlib
import pickle
import time
import argparse
from pathlib import Path
from typing import Dict, List, Any, Optional, Tuple
from dataclasses import dataclass
from deep_translator import GoogleTranslator

# Checkpoint settings
# Save progress every N *new translations* (not counting preserved entries).
CHECKPOINT_EVERY_N = 10

# Module configuration
MODULES = {
    'i18n': {
        'source_dir': 'src/js/i18n',
        'source_file': 'en.json',
        'target_pattern': '{lang}.json',
        'base_lang': 'en'
    },
    'waf-data': {
        'source_dir': 'src/data',
        'source_file': 'waf-data.json',
        'target_pattern': 'waf-data-{lang}.json',
        'base_lang': 'en'
    }
}

# Translatable fields per module
TRANSLATABLE_FIELDS = {
    'i18n': None,  # All string values
    'waf-data': {
        'category': ['name', 'description'],
        'question': ['principle', 'title', 'details'],
        'databricksGuidance': ['context'],
        'validationChecklist': ['category', 'questions'],
        'additionalResources': ['title']
    }
}

# Language codes for translation
LANG_CODES = {
    'pt-BR': 'pt',
    'es': 'es',
    'en': 'en',
    'fr': 'fr',
    'it': 'it'
}

def _atomic_write_json(path: Path, data: Any, indent: int = 2) -> None:
    """
    Atomically writes a complete JSON file.

    Important: we always write the *full* JSON object (never partial fragments) to avoid
    inconsistent state and loss of structure/context on interruptions.
    """
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp_path = path.with_name(f".{path.name}.tmp.{os.getpid()}.{int(time.time() * 1000)}")
    try:
        with open(tmp_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=indent)
            f.flush()
            try:
                os.fsync(f.fileno())
            except OSError:
                # Best-effort fsync (some environments/filesystems may not support it)
                pass
        os.replace(tmp_path, path)
    finally:
        # Cleanup temp file if anything failed before os.replace
        try:
            if tmp_path.exists():
                tmp_path.unlink()
        except Exception:
            pass


def _atomic_write_pickle(path: Path, obj: Any) -> None:
    """Atomically writes a pickle file (used for .hashes)."""
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp_path = path.with_name(f".{path.name}.tmp.{os.getpid()}.{int(time.time() * 1000)}")
    try:
        with open(tmp_path, 'wb') as f:
            pickle.dump(obj, f, protocol=4)
            f.flush()
            try:
                os.fsync(f.fileno())
            except OSError:
                pass
        os.replace(tmp_path, path)
    finally:
        try:
            if tmp_path.exists():
                tmp_path.unlink()
        except Exception:
            pass


@dataclass(frozen=True)
class EmptyValueIssue:
    """Represents an empty/null value found in a translatable field."""
    module: str
    file: str
    line: int
    key: str
    value: str
    snippet: str


# Matches JSON lines like:   "title": ""   or   "title": null
_EMPTY_OR_NULL_KV_RE = re.compile(r'^\s*"(?P<key>[^"]+)"\s*:\s*(?P<val>null|"")\s*(?:,)?\s*$')

# Tracks which source files we already warned for in this run (avoid repeated warnings on repeated reads)
_WARNED_EMPTY_SOURCE_FILES: set[str] = set()


def _get_source_file_path(module: str) -> Path:
    """Returns the English source file path for the given module."""
    cfg = MODULES.get(module)
    if not cfg:
        return Path()
    return Path(cfg['source_dir']) / cfg['source_file']


def _get_waf_data_translatable_keys() -> set:
    keys = set()
    fields = TRANSLATABLE_FIELDS.get('waf-data') or {}
    for group in fields.values():
        for k in group:
            keys.add(k)
    return keys


def find_empty_or_null_translatables(module: str) -> List[EmptyValueIssue]:
    """
    Scans the *source* (English) JSON for empty/null values in translatable fields and returns issues with line numbers.

    Notes:
    - We intentionally scan the raw text to provide stable file+line pointers.
    - This is conservative: it flags only key/value pairs on a single line like: "key": "" or "key": null
    """
    source_path = _get_source_file_path(module)
    if not source_path or not source_path.exists():
        return []

    try:
        lines = source_path.read_text(encoding='utf-8').splitlines()
    except Exception:
        return []

    waf_keys = _get_waf_data_translatable_keys() if module == 'waf-data' else None
    issues: List[EmptyValueIssue] = []

    for idx, line in enumerate(lines, start=1):
        m = _EMPTY_OR_NULL_KV_RE.match(line)
        if not m:
            continue
        key = m.group('key')
        val = m.group('val')

        # For waf-data, only flag known translatable keys; for i18n, any leaf key is considered translatable.
        if waf_keys is not None and key not in waf_keys:
            continue

        snippet = line.strip()
        if len(snippet) > 240:
            snippet = snippet[:237] + "..."

        issues.append(
            EmptyValueIssue(
                module=module,
                file=str(source_path),
                line=idx,
                key=key,
                value=val,
                snippet=snippet,
            )
        )

    return issues


def warn_on_empty_or_null_translatables(modules: List[str]) -> int:
    """Prints warnings (to stderr) for all empty/null translatable fields found in source files."""
    all_issues: List[EmptyValueIssue] = []
    for module in modules:
        all_issues.extend(find_empty_or_null_translatables(module))

    if not all_issues:
        return 0

    print(
        "\n⚠️  WARNING: Empty/null values found in translatable fields of source files (execution will continue).",
        file=sys.stderr,
    )
    for issue in all_issues:
        print(
            f"⚠️  {issue.file}:{issue.line} | module={issue.module} | key={issue.key} | value={issue.value}",
            file=sys.stderr,
        )
        print(f"    {issue.snippet}", file=sys.stderr)

    return len(all_issues)


class HashManager:
    """SHA1 hash management for change detection"""
    
    @staticmethod
    def calculate_hash(text: str) -> str:
        """Calculates SHA1 hash of a text"""
        if not text:
            return ''
        return hashlib.sha1(text.encode('utf-8')).hexdigest()
    
    @staticmethod
    def get_hashes_file_path(json_path: Path) -> Path:
        """Returns path to corresponding .hashes file"""
        return json_path.with_suffix(json_path.suffix + '.hashes')
    
    @staticmethod
    def load_hashes(hashes_path: Path) -> Dict[str, str]:
        """Loads hash dictionary from pickle file"""
        if not hashes_path.exists():
            return {}
        try:
            with open(hashes_path, 'rb') as f:
                return pickle.load(f)
        except (pickle.UnpicklingError, EOFError, FileNotFoundError):
            return {}
    
    @staticmethod
    def save_hashes(hashes_path: Path, hashes_dict: Dict[str, str]):
        """Saves hash dictionary to pickle file"""
        _atomic_write_pickle(hashes_path, hashes_dict)
    
    @staticmethod
    def get_hash_path(key_path: str) -> str:
        """Generates unique path identifier for nested fields"""
        return key_path
    
    @staticmethod
    def split_sentences(text: str) -> List[str]:
        """Splits text into sentences"""
        if not text:
            return []
        # Split by final punctuation, line breaks and periods followed by space
        sentences = re.split(r'([.!?]\s+|\.\n|\n\n)', text)
        # Remove spaces and join sentences with their delimiters
        result = []
        for i in range(0, len(sentences) - 1, 2):
            if i + 1 < len(sentences):
                sentence = sentences[i] + sentences[i + 1]
            else:
                sentence = sentences[i]
            sentence = sentence.strip()
            if sentence:
                result.append(sentence)
        if len(sentences) % 2 == 1 and sentences[-1].strip():
            result.append(sentences[-1].strip())
        
        # If splitting didn't work well, return the entire text
        if not result:
            return [text.strip()] if text.strip() else []
        return result


class GlossaryManager:
    """Technical terms glossary management"""
    
    def __init__(self, glossary_path: str):
        """Loads glossary"""
        self.glossary_path = glossary_path
        self.preserve_terms = []
        self.force_refresh_terms: List[str] = []
        self.replacements = {}
        self._preserve_patterns: List[re.Pattern] = []
        self._force_refresh_patterns: List[re.Pattern] = []
        self._load_glossary()
    
    def _load_glossary(self):
        """Loads glossary from JSON file"""
        try:
            with open(self.glossary_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
                self.preserve_terms = data.get('preserve', [])
                self.force_refresh_terms = data.get('forceRefresh', [])
                self.replacements = data.get('replacements', {})
                self._preserve_patterns = self._build_preserve_patterns(self.preserve_terms)
                self._force_refresh_patterns = self._build_preserve_patterns(self.force_refresh_terms)
        except FileNotFoundError:
            print(f"⚠️  Glossary not found at {self.glossary_path}")
            self.preserve_terms = []
            self.force_refresh_terms = []
            self.replacements = {}
            self._preserve_patterns = []
            self._force_refresh_patterns = []

    @staticmethod
    def _build_preserve_patterns(terms: List[str]) -> List[re.Pattern]:
        """
        Builds regex patterns for all preserve terms.

        Rules:
        - Case-insensitive matching.
        - Prefer whole-token matching to avoid replacing inside other words.
        - Sort by length (desc) to reduce partial/overlap issues.
        """
        cleaned = [t for t in (terms or []) if isinstance(t, str) and t.strip()]
        cleaned.sort(key=lambda s: len(s), reverse=True)

        patterns: List[re.Pattern] = []
        for term in cleaned:
            escaped = re.escape(term)

            # If term starts/ends with a word char, enforce "not inside another word"
            left = r"(?<!\w)" if re.match(r"\w", term[0]) else ""
            right = r"(?!\w)" if re.match(r"\w", term[-1]) else ""
            patterns.append(re.compile(left + escaped + right, re.IGNORECASE))

        return patterns

    def protect(self, text: str) -> Tuple[str, Dict[str, str]]:
        """
        Replaces preserve terms with stable placeholder tokens before translation.

        Returns:
        - protected_text: text with tokens
        - token_map: token -> original matched substring (preserves original casing/spacing)
        """
        if not text or not self._preserve_patterns:
            return text, {}

        token_map: Dict[str, str] = {}
        protected = text
        counter = 0

        for pattern in self._preserve_patterns:
            def _repl(m: re.Match) -> str:
                nonlocal counter
                # IMPORTANT:
                # Use a placeholder that is very unlikely to be modified by machine translation.
                # Avoid real words like "GLOSSARY" (we have seen translators localize it, breaking unprotect()).
                token = f"__DBX{counter}__"
                counter += 1
                token_map[token] = m.group(0)
                return token

            protected = pattern.sub(_repl, protected)

        return protected, token_map

    def unprotect(self, text: str, token_map: Dict[str, str]) -> str:
        """Restores preserve tokens back to their original matched substrings."""
        if not text or not token_map:
            return text

        restored = text
        # Deterministic: longer tokens first (defensive, though tokens shouldn't overlap)
        for token in sorted(token_map.keys(), key=len, reverse=True):
            restored = restored.replace(token, token_map[token])
        return restored

    def should_force_refresh(self, source_text: str) -> bool:
        """
        Returns True if this source string should be retranslated even when hashes match.

        Purpose: allow “glossary corrections” (e.g., stop literal translations of specific terms)
        without forcing a full retranslation of the entire corpus.
        """
        if not source_text:
            return False

        # User intent: retranslate any sentence that contains a term from `preserve`.
        # We also keep support for the narrower `forceRefresh` list.
        if self._preserve_patterns and any(p.search(source_text) for p in self._preserve_patterns):
            return True
        if self._force_refresh_patterns and any(p.search(source_text) for p in self._force_refresh_patterns):
            return True
        return False
    
    def post_process(self, text: str, target_lang: str) -> str:
        """Post-processes translated text by replacing technical terms"""
        if not text:
            return text
        
        result = text
        lang_replacements = self.replacements.get(target_lang, {})
        
        # Replace glossary terms
        for term, replacement in lang_replacements.items():
            # Uses regex to replace preserving case
            pattern = re.compile(re.escape(term), re.IGNORECASE)
            result = pattern.sub(replacement, result)
        
        return result


class LockManager:
    """Simple lock management"""
    
    def __init__(self, lock_path: str):
        """Initializes lock manager"""
        self.lock_path = lock_path
    
    def exists(self) -> bool:
        """Checks if lock exists"""
        return os.path.exists(self.lock_path)
    
    def create(self, module: str, lang: str):
        """Creates lock"""
        lock_data = {
            'module': module,
            'lang': lang,
            'timestamp': time.time(),
            'pid': os.getpid()
        }
        with open(self.lock_path, 'w', encoding='utf-8') as f:
            json.dump(lock_data, f, indent=2)
    
    def remove(self):
        """Removes lock"""
        if os.path.exists(self.lock_path):
            os.remove(self.lock_path)


class LanguageDetector:
    """Dynamic language detection"""
    
    @staticmethod
    def detect_languages(module: str) -> List[str]:
        """Detects available languages for a module"""
        if module not in MODULES:
            return []
        
        config = MODULES[module]
        source_dir = Path(config['source_dir'])
        
        if not source_dir.exists():
            return []
        
        languages = []
        base_lang = config['base_lang']
        
        if module == 'i18n':
            # Procura arquivos {lang}.json excluindo en.json
            pattern = '*.json'
            for file in source_dir.glob(pattern):
                lang = file.stem
                if lang != base_lang:
                    languages.append(lang)
        
        elif module == 'waf-data':
            # Procura arquivos waf-data-{lang}.json excluindo waf-data.json
            pattern = 'waf-data-*.json'
            for file in source_dir.glob(pattern):
                lang = file.stem.replace('waf-data-', '')
                if lang:
                    languages.append(lang)
        
        return sorted(languages)


def migrate_hashes_from_json(json_path: Path, module: str) -> Dict[str, str]:
    """Migrate hashes from JSON file to .hashes file structure"""
    hashes_dict = {}
    json_data = None
    
    try:
        with open(json_path, 'r', encoding='utf-8') as f:
            json_data = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return {}
    
    if json_data is None:
        return {}
    
    def extract_hashes_recursive(data: Any, path: str = '', hashes: Dict[str, str] = None) -> Dict[str, str]:
        """Extract hash fields from JSON structure"""
        if hashes is None:
            hashes = {}
        
        if isinstance(data, dict):
            for key, value in data.items():
                if key.endswith('_hash') and isinstance(value, str):
                    # Found a hash field, extract the corresponding field path
                    field_key = key[:-5]  # Remove '_hash' suffix
                    parent_path = path if path else ''
                    field_path = f"{parent_path}.{field_key}" if parent_path else field_key
                    hashes[field_path] = value
                elif not key.endswith('_hash'):
                    # Recursively process non-hash fields
                    new_path = f"{path}.{key}" if path else key
                    extract_hashes_recursive(value, new_path, hashes)
        elif isinstance(data, list):
            for idx, item in enumerate(data):
                new_path = f"{path}.{idx}" if path else str(idx)
                extract_hashes_recursive(item, new_path, hashes)
        
        return hashes
    
    # Extract hashes from JSON
    hashes_dict = extract_hashes_recursive(json_data)
    
    # Remove _hash fields from JSON
    def remove_hash_fields(data: Any) -> Any:
        """Remove all _hash fields from JSON structure"""
        if isinstance(data, dict):
            result = {}
            for key, value in data.items():
                if not key.endswith('_hash'):
                    result[key] = remove_hash_fields(value)
            return result
        elif isinstance(data, list):
            return [remove_hash_fields(item) for item in data]
        else:
            return data
    
    # Save cleaned JSON (without hash fields)
    cleaned_data = remove_hash_fields(json_data)
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(cleaned_data, f, ensure_ascii=False, indent=2)
    
    return hashes_dict


class Validator:
    """Quantitative translation validator"""
    
    def __init__(self):
        """Initializes validator"""
        pass
    
    def validate(self, module: str, lang: str) -> Tuple[int, int]:
        """Validates translations and returns (translated, pending)"""
        handler = ModuleHandler(module, GlossaryManager('translation/glossary.json'))
        
        source_path = handler.get_source_path()
        target_path = handler.get_target_path(lang)
        
        source_data = handler.load_json(source_path)
        target_data = handler.load_json(target_path)
        
        if source_data is None:
            return 0, 0
        
        if target_data is None:
            # Everything pending
            return 0, self._count_translatable_items(source_data, module)
        
        # Load hashes from .hashes file
        hashes_path = HashManager.get_hashes_file_path(target_path)
        hashes_dict = HashManager.load_hashes(hashes_path)
        
        # Migrate hashes from JSON if .hashes file doesn't exist but JSON has hash fields
        if not hashes_path.exists() and target_data:
            json_str = json.dumps(target_data)
            if '_hash' in json_str:
                migrated_hashes = migrate_hashes_from_json(target_path, module)
                hashes_dict.update(migrated_hashes)
                # Reload target_data after migration
                target_data = handler.load_json(target_path) or ({} if module == 'i18n' else [])
        
        # Count translated vs pending
        translated = 0
        pending = 0
        
        if module == 'i18n':
            translated, pending = self._validate_i18n(source_data, target_data, hashes_dict)
        elif module == 'waf-data':
            translated, pending = self._validate_waf_data(source_data, target_data, hashes_dict)
        
        return translated, pending
    
    def _count_translatable_items(self, data: Any, module: str) -> int:
        """Counts translatable items"""
        # NOTE:
        # - For i18n, we treat every non-empty string leaf as translatable.
        # - For waf-data, we must count only the specific fields validated in _validate_waf_data,
        #   otherwise the "Total/Progress" denominator includes non-translatable strings and
        #   progress will never reach 100% even when pending==0 (Complete).
        if module == 'waf-data':
            return self._count_waf_data_translatable_items(data)

        # Simplified implementation for i18n - counts translatable strings
        count = 0
        if isinstance(data, dict):
            for v in data.values():
                count += self._count_translatable_items(v, module)
        elif isinstance(data, list):
            for item in data:
                count += self._count_translatable_items(item, module)
        elif isinstance(data, str) and data.strip():
            count = 1
        return count

    def _count_waf_data_translatable_items(self, data: Any) -> int:
        """
        Counts *only* waf-data translatable items, mirroring the paths handled by _validate_waf_data.

        This ensures that when status is Complete (pending==0), translated == total and progress is 100%.
        """
        if not isinstance(data, list):
            return 0

        count = 0
        for source_cat in data:
            if not isinstance(source_cat, dict):
                continue

            # Category fields
            for field in ['name', 'description']:
                if field in source_cat:
                    count += 1

            # Questions
            source_questions = source_cat.get('questions', [])
            if not isinstance(source_questions, list):
                continue

            for source_q in source_questions:
                if not isinstance(source_q, dict):
                    continue

                for field in ['principle', 'title', 'details']:
                    if field in source_q:
                        count += 1

                # databricksGuidance
                if 'databricksGuidance' in source_q and isinstance(source_q['databricksGuidance'], dict):
                    source_guidance = source_q['databricksGuidance']

                    if 'context' in source_guidance:
                        count += 1

                    # validationChecklist
                    if 'validationChecklist' in source_guidance and isinstance(source_guidance['validationChecklist'], list):
                        for item in source_guidance['validationChecklist']:
                            if not isinstance(item, dict):
                                continue
                            if 'category' in item:
                                count += 1
                            if 'questions' in item and isinstance(item['questions'], list):
                                count += len(item['questions'])

                    # additionalResources
                    if 'additionalResources' in source_guidance and isinstance(source_guidance['additionalResources'], list):
                        for res in source_guidance['additionalResources']:
                            if isinstance(res, dict) and 'title' in res:
                                count += 1

        return count
    
    def _validate_i18n(self, source: Dict, target: Dict, hashes_dict: Dict[str, str]) -> Tuple[int, int]:
        """Validates i18n module"""
        translated = 0
        pending = 0
        
        def validate_recursive(source_val: Any, target_val: Any, key_path: str = '') -> Tuple[int, int]:
            trans = 0
            pend = 0
            
            if isinstance(source_val, dict):
                if not isinstance(target_val, dict):
                    target_val = {}
                for k, v in source_val.items():
                    new_path = f"{key_path}.{k}" if key_path else k
                    t, p = validate_recursive(v, target_val.get(k), new_path)
                    trans += t
                    pend += p
            elif isinstance(source_val, str) and source_val.strip():
                # Checks if there's a corresponding hash in the .hashes file
                stored_hash = hashes_dict.get(key_path)
                current_hash = HashManager.calculate_hash(source_val)
                
                if stored_hash == current_hash:
                    trans += 1
                else:
                    pend += 1
            elif isinstance(source_val, list):
                if not isinstance(target_val, list):
                    target_val = []
                for i, item in enumerate(source_val):
                    new_path = f"{key_path}.{i}" if key_path else str(i)
                    t, p = validate_recursive(item, target_val[i] if i < len(target_val) else None, new_path)
                    trans += t
                    pend += p
            
            return trans, pend
        
        return validate_recursive(source, target)
    
    def _validate_waf_data(self, source: List, target: List, hashes_dict: Dict[str, str]) -> Tuple[int, int]:
        """Validates waf-data module"""
        translated = 0
        pending = 0
        
        # Validation using .hashes file
        for cat_idx, source_cat in enumerate(source):
            if cat_idx >= len(target):
                # Count pending fields for missing category
                for field in ['name', 'description']:
                    if field in source_cat:
                        pending += 1
                source_questions = source_cat.get('questions', [])
                for q_idx, source_q in enumerate(source_questions):
                    for field in ['principle', 'title', 'details']:
                        if field in source_q:
                            pending += 1
                # Count databricksGuidance fields
                if 'databricksGuidance' in source_q:
                    source_guidance = source_q['databricksGuidance']
                    if 'context' in source_guidance:
                        pending += 1
                    if 'validationChecklist' in source_guidance:
                        for item in source_guidance['validationChecklist']:
                            if 'category' in item:
                                pending += 1
                            if 'questions' in item:
                                pending += len(item['questions'])
                    if 'additionalResources' in source_guidance:
                        for res in source_guidance['additionalResources']:
                            if 'title' in res:
                                pending += 1
                continue
            
            target_cat = target[cat_idx]
            
            # Verifica campos da categoria
            for field in ['name', 'description']:
                if field in source_cat:
                    field_path = f"category.{cat_idx}.{field}"
                    stored_hash = hashes_dict.get(field_path)
                    current_hash = HashManager.calculate_hash(str(source_cat[field]))
                    
                    if stored_hash == current_hash:
                        translated += 1
                    else:
                        pending += 1
            
            # Verifica perguntas
            source_questions = source_cat.get('questions', [])
            target_questions = target_cat.get('questions', [])
            
            for q_idx, source_q in enumerate(source_questions):
                if q_idx >= len(target_questions):
                    # Count pending fields for missing question
                    for field in ['principle', 'title', 'details']:
                        if field in source_q:
                            pending += 1
                    # Count databricksGuidance fields
                    if 'databricksGuidance' in source_q:
                        source_guidance = source_q['databricksGuidance']
                        if 'context' in source_guidance:
                            pending += 1
                        if 'validationChecklist' in source_guidance:
                            for item in source_guidance['validationChecklist']:
                                if 'category' in item:
                                    pending += 1
                                if 'questions' in item:
                                    pending += len(item['questions'])
                        if 'additionalResources' in source_guidance:
                            for res in source_guidance['additionalResources']:
                                if 'title' in res:
                                    pending += 1
                    continue
                
                target_q = target_questions[q_idx]
                
                for field in ['principle', 'title', 'details']:
                    if field in source_q:
                        field_path = f"category.{cat_idx}.questions.{q_idx}.{field}"
                        stored_hash = hashes_dict.get(field_path)
                        current_hash = HashManager.calculate_hash(str(source_q[field]))
                        
                        if stored_hash == current_hash:
                            translated += 1
                        else:
                            pending += 1
                
                # Validate databricksGuidance
                if 'databricksGuidance' in source_q:
                    source_guidance = source_q['databricksGuidance']
                    target_guidance = target_q.get('databricksGuidance', {})
                    
                    # Context
                    if 'context' in source_guidance:
                        field_path = f"category.{cat_idx}.questions.{q_idx}.databricksGuidance.context"
                        stored_hash = hashes_dict.get(field_path)
                        current_hash = HashManager.calculate_hash(str(source_guidance['context']))
                        
                        if stored_hash == current_hash:
                            translated += 1
                        else:
                            pending += 1
                    
                    # ValidationChecklist
                    if 'validationChecklist' in source_guidance:
                        source_checklist = source_guidance['validationChecklist']
                        target_checklist = target_guidance.get('validationChecklist', [])
                        
                        for cl_idx, source_item in enumerate(source_checklist):
                            target_item = target_checklist[cl_idx] if cl_idx < len(target_checklist) else {}
                            
                            # Category
                            if 'category' in source_item:
                                field_path = f"category.{cat_idx}.questions.{q_idx}.databricksGuidance.validationChecklist.{cl_idx}.category"
                                stored_hash = hashes_dict.get(field_path)
                                current_hash = HashManager.calculate_hash(str(source_item['category']))
                                
                                if stored_hash == current_hash:
                                    translated += 1
                                else:
                                    pending += 1
                            
                            # Questions
                            if 'questions' in source_item:
                                source_qs = source_item['questions']
                                target_qs = target_item.get('questions', [])
                                
                                for qq_idx, source_q_text in enumerate(source_qs):
                                    field_path = f"category.{cat_idx}.questions.{q_idx}.databricksGuidance.validationChecklist.{cl_idx}.questions.{qq_idx}"
                                    stored_hash = hashes_dict.get(field_path)
                                    current_hash = HashManager.calculate_hash(str(source_q_text))
                                    
                                    if stored_hash == current_hash:
                                        translated += 1
                                    else:
                                        pending += 1
                    
                    # AdditionalResources
                    if 'additionalResources' in source_guidance:
                        source_resources = source_guidance['additionalResources']
                        target_resources = target_guidance.get('additionalResources', [])
                        
                        for res_idx, source_res in enumerate(source_resources):
                            if 'title' in source_res:
                                field_path = f"category.{cat_idx}.questions.{q_idx}.databricksGuidance.additionalResources.{res_idx}.title"
                                stored_hash = hashes_dict.get(field_path)
                                current_hash = HashManager.calculate_hash(str(source_res['title']))
                                
                                if stored_hash == current_hash:
                                    translated += 1
                                else:
                                    pending += 1
        
        return translated, pending


class ModuleHandler:
    """Translation module processor"""
    
    def __init__(self, module: str, glossary_manager: GlossaryManager):
        """Initializes module handler"""
        self.module = module
        self.glossary = glossary_manager
        self.config = MODULES[module]
        self.translatable_fields = TRANSLATABLE_FIELDS[module]
    
    def get_source_path(self) -> Path:
        """Returns source file path (English)"""
        return Path(self.config['source_dir']) / self.config['source_file']
    
    def get_target_path(self, lang: str) -> Path:
        """Returns translated file path"""
        pattern = self.config['target_pattern']
        filename = pattern.format(lang=lang)
        return Path(self.config['source_dir']) / filename
    
    def load_json(self, path: Path) -> Any:
        """Loads JSON file"""
        try:
            # Warn about empty/null values in translatable fields for *English source* files.
            # This must happen during JSON read, must not stop execution, and must show all issues.
            # Printed to stderr so --json-output on stdout remains machine-readable.
            try:
                p_str = path.as_posix()
                is_i18n_source = p_str.endswith('src/js/i18n/en.json') or p_str == 'src/js/i18n/en.json'
                is_waf_source = p_str.endswith('src/data/waf-data.json') or p_str == 'src/data/waf-data.json'

                if (is_i18n_source or is_waf_source) and p_str not in _WARNED_EMPTY_SOURCE_FILES:
                    _WARNED_EMPTY_SOURCE_FILES.add(p_str)

                    # Read raw text for stable line numbers
                    lines = path.read_text(encoding='utf-8').splitlines()

                    waf_keys = _get_waf_data_translatable_keys() if is_waf_source else None
                    issues_found = 0

                    for idx, line in enumerate(lines, start=1):
                        m = _EMPTY_OR_NULL_KV_RE.match(line)
                        if not m:
                            continue
                        key = m.group('key')
                        val = m.group('val')

                        # For waf-data, only consider known translatable keys.
                        if waf_keys is not None and key not in waf_keys:
                            continue

                        if issues_found == 0:
                            print(
                                f"\n⚠️  WARNING: Empty/null values found in translatable fields while reading source JSON (execution will continue).",
                                file=sys.stderr,
                            )

                        issues_found += 1
                        snippet = line.strip()
                        if len(snippet) > 240:
                            snippet = snippet[:237] + "..."

                        print(
                            f"⚠️  {p_str}:{idx} | module={self.module} | key={key} | value={val}",
                            file=sys.stderr,
                        )
                        print(f"    {snippet}", file=sys.stderr)
            except Exception:
                # Never fail JSON loading due to warnings
                pass

            with open(path, 'r', encoding='utf-8') as f:
                return json.load(f)
        except FileNotFoundError:
            return None
        except json.JSONDecodeError as e:
            print(f"❌ Error reading JSON {path}: {e}")
            return None
    
    def save_json(self, path: Path, data: Any, indent: int = 2):
        """Save JSON file"""
        try:
            _atomic_write_json(path, data, indent=indent)
        except Exception as e:
            print(f"❌ Error saving JSON {path}: {e}")
            raise
    
    def translate_text(self, text: str, target_lang: str, source_lang: str = 'en') -> str:
        """Translates text using Google Translate"""
        if not text or not text.strip():
            return text
        
        try:
            # Protect glossary preserve terms so they are never translated.
            protected_text, token_map = self.glossary.protect(text)

            # Maps language code
            source_code = LANG_CODES.get(source_lang, source_lang)
            target_code = LANG_CODES.get(target_lang, target_lang)
            
            if source_code == target_code:
                return text
            
            translator = GoogleTranslator(source=source_code, target=target_code)
            translated = translator.translate(protected_text)

            # Restore preserved terms back to their original form (case/spacing as in source).
            translated = self.glossary.unprotect(translated, token_map)
            
            # Post-processes with glossary
            translated = self.glossary.post_process(translated, target_lang)
            
            return translated
        except Exception as e:
            print(f"⚠️  Translation error: {e}")
            return text
    
    def process_i18n(self, source_data: Dict, target_data: Optional[Dict], 
                     target_path: Path, target_lang: str, full: bool = False, progress_callback=None) -> Tuple[Dict, int, int]:
        """Processes i18n module"""
        if target_data is None:
            target_data = {}
        
        # Get hashes file path
        hashes_path = HashManager.get_hashes_file_path(target_path)
        
        # Load hashes from file
        hashes_dict = HashManager.load_hashes(hashes_path)
        
        # Migrate hashes from JSON if .hashes file doesn't exist but JSON has hash fields
        if not hashes_path.exists() and target_data:
            # Check if JSON has hash fields
            json_str = json.dumps(target_data)
            if '_hash' in json_str:
                print(f"    🔄 Migrating hashes from JSON to .hashes file...")
                migrated_hashes = migrate_hashes_from_json(target_path, self.module)
                hashes_dict.update(migrated_hashes)
                # Reload target_data after migration (hash fields removed)
                target_data = self.load_json(target_path) or {}
        
        # Count total items for progress
        def count_items(data: Any) -> int:
            """Counts translatable items"""
            count = 0
            if isinstance(data, dict):
                for v in data.values():
                    count += count_items(v)
            elif isinstance(data, list):
                for item in data:
                    count += count_items(item)
            elif isinstance(data, str) and data.strip():
                count = 1
            return count
        
        total_items = count_items(source_data)
        processed_items = 0
        
        # Initialize result with existing target_data (to preserve unmodified translations)
        result = json.loads(json.dumps(target_data)) if target_data else {}

        # Periodic checkpointing: always save the complete JSON + complete hashes dict
        checkpoint_every = max(1, int(CHECKPOINT_EVERY_N))
        last_checkpoint_translated = 0
        translated_total = 0
        preserved_total = 0

        def checkpoint_save() -> None:
            """Best-effort checkpoint; does not stop translation if it fails."""
            nonlocal last_checkpoint_translated
            if translated_total - last_checkpoint_translated < checkpoint_every:
                return
            try:
                self.save_json(target_path, result)
                HashManager.save_hashes(hashes_path, hashes_dict)
                last_checkpoint_translated = translated_total
            except Exception as e:
                print(f"⚠️  Checkpoint save failed for {target_path}: {e}", file=sys.stderr)
        
        # Process recursively
        def process_recursive(source: Dict, target: Dict, path: str = '') -> Tuple[int, int]:
            """Processes recursively maintaining structure"""
            nonlocal processed_items, hashes_dict, translated_total, preserved_total
            trans_count = 0
            preserved_count = 0
            
            for key, value in source.items():
                current_path = f"{path}.{key}" if path else key
                
                if isinstance(value, dict):
                    if key not in target:
                        target[key] = {}
                    t, p = process_recursive(value, target[key], current_path)
                    trans_count += t
                    preserved_count += p
                elif isinstance(value, str) and value.strip():
                    processed_items += 1
                    if progress_callback and (processed_items % 10 == 0 or processed_items == total_items):
                        # Use global counters for accurate reporting across the full tree
                        progress_callback(processed_items, total_items, translated_total, preserved_total)
                    
                    current_hash = HashManager.calculate_hash(value)
                    stored_hash = hashes_dict.get(current_path)
                    
                    if not full and stored_hash == current_hash and key in target:
                        # Uses existing translation (hash matches), unless glossary refresh is requested.
                        if self.glossary.should_force_refresh(value):
                            translated = self.translate_text(value, target_lang)
                            target[key] = translated
                            hashes_dict[current_path] = current_hash
                            trans_count += 1
                            translated_total += 1
                            checkpoint_save()
                        else:
                            # Still apply post_process to keep glossary replacements up to date (no network call).
                            target[key] = self.glossary.post_process(str(target.get(key, "")), target_lang)
                            preserved_count += 1
                            preserved_total += 1
                    elif not full and stored_hash is None and key in target:
                        # Preserves existing translation when no hash exists
                        # Generate hash from current source text for future detection
                        hashes_dict[current_path] = current_hash
                        # Apply post_process to keep replacements consistent
                        target[key] = self.glossary.post_process(str(target.get(key, "")), target_lang)
                        preserved_count += 1
                        preserved_total += 1
                    else:
                        # Translates (new or changed)
                        translated = self.translate_text(value, target_lang)
                        target[key] = translated
                        # Update hashes dictionary
                        hashes_dict[current_path] = current_hash
                        trans_count += 1
                        translated_total += 1
                        checkpoint_save()
            
            return trans_count, preserved_count
        
        trans_count, preserved_count = process_recursive(source_data, result)
        if progress_callback:
            progress_callback(processed_items, total_items, translated_total, preserved_total)
        
        # Save hashes to file
        HashManager.save_hashes(hashes_path, hashes_dict)
        
        return result, trans_count, preserved_count
    
    def process_waf_data(self, source_data: List, target_data: Optional[List],
                        target_path: Path, target_lang: str, full: bool = False, progress_callback=None) -> Tuple[List, int, int]:
        """Processes waf-data module"""
        if target_data is None:
            target_data = []
        
        # Get hashes file path
        hashes_path = HashManager.get_hashes_file_path(target_path)
        
        # Load hashes from file
        hashes_dict = HashManager.load_hashes(hashes_path)
        
        # Migrate hashes from JSON if .hashes file doesn't exist but JSON has hash fields
        if not hashes_path.exists() and target_data:
            # Check if JSON has hash fields
            json_str = json.dumps(target_data)
            if '_hash' in json_str:
                print(f"    🔄 Migrating hashes from JSON to .hashes file...")
                migrated_hashes = migrate_hashes_from_json(target_path, self.module)
                hashes_dict.update(migrated_hashes)
                # Reload target_data after migration (hash fields removed)
                target_data = self.load_json(target_path) or []
        
        translated_count = 0
        preserved_count = 0

        # Periodic checkpointing: always save the complete JSON + complete hashes dict
        checkpoint_every = max(1, int(CHECKPOINT_EVERY_N))
        last_checkpoint_translated = 0

        def checkpoint_save() -> None:
            nonlocal last_checkpoint_translated
            if translated_count - last_checkpoint_translated < checkpoint_every:
                return
            try:
                self.save_json(target_path, target_data)
                HashManager.save_hashes(hashes_path, hashes_dict)
                last_checkpoint_translated = translated_count
            except Exception as e:
                print(f"⚠️  Checkpoint save failed for {target_path}: {e}", file=sys.stderr)
        
        # Count total items for progress
        total_categories = len(source_data)
        total_items = sum(len(cat.get('questions', [])) for cat in source_data) + total_categories
        
        # Ensures target_data has the same structure
        if len(target_data) != len(source_data):
            target_data = [{} for _ in source_data]
        
        for cat_idx, source_cat in enumerate(source_data):
            if progress_callback:
                progress_callback(cat_idx + 1, total_categories, translated_count, preserved_count, f"Category {cat_idx + 1}/{total_categories}")
            target_cat = target_data[cat_idx] if cat_idx < len(target_data) else {}
            
            # Translates category fields
            for field in self.translatable_fields.get('category', []):
                if field in source_cat:
                    source_value = source_cat[field]
                    if not source_value:
                        continue
                    
                    field_path = f"category.{cat_idx}.{field}"
                    current_hash = HashManager.calculate_hash(str(source_value))
                    stored_hash = hashes_dict.get(field_path)
                    
                    if not full and stored_hash == current_hash:
                        if self.glossary.should_force_refresh(str(source_value)):
                            translated = self.translate_text(source_value, target_lang)
                            target_cat[field] = translated
                            hashes_dict[field_path] = current_hash
                            translated_count += 1
                            checkpoint_save()
                        else:
                            # Keep existing, but apply post_process for replacements
                            target_cat[field] = self.glossary.post_process(str(target_cat.get(field, "")), target_lang)
                            preserved_count += 1
                        continue
                    elif not full and stored_hash is None and field in target_cat:
                        # Preserve existing translation, generate hash
                        hashes_dict[field_path] = current_hash
                        target_cat[field] = self.glossary.post_process(str(target_cat.get(field, "")), target_lang)
                        preserved_count += 1
                        continue
                    
                    translated = self.translate_text(source_value, target_lang)
                    target_cat[field] = translated
                    hashes_dict[field_path] = current_hash
                    translated_count += 1
                    checkpoint_save()
            
            # Copies non-translatable fields
            for field in ['id']:
                if field in source_cat:
                    target_cat[field] = source_cat[field]
            
            # Processes questions
            source_questions = source_cat.get('questions', [])
            target_questions = target_cat.get('questions', [])
            
            if len(target_questions) != len(source_questions):
                target_questions = [{} for _ in source_questions]
            
            for q_idx, source_q in enumerate(source_questions):
                if progress_callback and (q_idx > 0 and q_idx % 5 == 0 or q_idx == len(source_questions) - 1):
                    progress_callback(cat_idx + 1, total_categories, translated_count, preserved_count, 
                                    f"Question {q_idx + 1}/{len(source_questions)} of category {cat_idx + 1}")
                target_q = target_questions[q_idx] if q_idx < len(target_questions) else {}
                
                # Translates question fields
                for field in self.translatable_fields.get('question', []):
                    if field in source_q:
                        source_value = source_q[field]
                        if not source_value:
                            continue
                        
                        field_path = f"category.{cat_idx}.questions.{q_idx}.{field}"
                        current_hash = HashManager.calculate_hash(str(source_value))
                        stored_hash = hashes_dict.get(field_path)
                        
                        if not full and stored_hash == current_hash:
                            if self.glossary.should_force_refresh(str(source_value)):
                                translated = self.translate_text(source_value, target_lang)
                                target_q[field] = translated
                                hashes_dict[field_path] = current_hash
                                translated_count += 1
                                checkpoint_save()
                            else:
                                target_q[field] = self.glossary.post_process(str(target_q.get(field, "")), target_lang)
                                preserved_count += 1
                            continue
                        elif not full and stored_hash is None and field in target_q:
                            # Preserve existing translation, generate hash
                            hashes_dict[field_path] = current_hash
                            target_q[field] = self.glossary.post_process(str(target_q.get(field, "")), target_lang)
                            preserved_count += 1
                            continue
                        
                        translated = self.translate_text(source_value, target_lang)
                        target_q[field] = translated
                        hashes_dict[field_path] = current_hash
                        translated_count += 1
                        checkpoint_save()
                
                # Copies non-translatable fields
                for field in ['id', 'identifier', 'capabilities', 'type', 'status']:
                    if field in source_q:
                        target_q[field] = source_q[field]
                
                # Processes databricksGuidance
                if 'databricksGuidance' in source_q:
                    source_guidance = source_q['databricksGuidance']
                    target_guidance = target_q.get('databricksGuidance', {})
                    
                    # Context
                    if 'context' in source_guidance:
                        source_context = source_guidance['context']
                        field_path = f"category.{cat_idx}.questions.{q_idx}.databricksGuidance.context"
                        current_hash = HashManager.calculate_hash(str(source_context))
                        stored_hash = hashes_dict.get(field_path)
                        
                        if not full and stored_hash == current_hash:
                            if self.glossary.should_force_refresh(str(source_context)):
                                translated = self.translate_text(source_context, target_lang)
                                target_guidance['context'] = translated
                                hashes_dict[field_path] = current_hash
                                translated_count += 1
                                checkpoint_save()
                            else:
                                target_guidance['context'] = self.glossary.post_process(str(target_guidance.get('context', "")), target_lang)
                                preserved_count += 1
                        elif not full and stored_hash is None and 'context' in target_guidance:
                            # Preserve existing translation, generate hash
                            hashes_dict[field_path] = current_hash
                            target_guidance['context'] = self.glossary.post_process(str(target_guidance.get('context', "")), target_lang)
                            preserved_count += 1
                        else:
                            translated = self.translate_text(source_context, target_lang)
                            target_guidance['context'] = translated
                            hashes_dict[field_path] = current_hash
                            translated_count += 1
                            checkpoint_save()
                    
                    # ValidationChecklist
                    if 'validationChecklist' in source_guidance:
                        source_checklist = source_guidance['validationChecklist']
                        target_checklist = target_guidance.get('validationChecklist', [])
                        
                        if len(target_checklist) != len(source_checklist):
                            target_checklist = [{} for _ in source_checklist]
                        
                        for cl_idx, source_item in enumerate(source_checklist):
                            target_item = target_checklist[cl_idx] if cl_idx < len(target_checklist) else {}
                            
                            # Category
                            if 'category' in source_item:
                                source_cat_name = source_item['category']
                                field_path = f"category.{cat_idx}.questions.{q_idx}.databricksGuidance.validationChecklist.{cl_idx}.category"
                                current_hash = HashManager.calculate_hash(str(source_cat_name))
                                stored_hash = hashes_dict.get(field_path)
                                
                                if not full and stored_hash == current_hash:
                                    if self.glossary.should_force_refresh(str(source_cat_name)):
                                        translated = self.translate_text(source_cat_name, target_lang)
                                        target_item['category'] = translated
                                        hashes_dict[field_path] = current_hash
                                        translated_count += 1
                                        checkpoint_save()
                                    else:
                                        target_item['category'] = self.glossary.post_process(str(target_item.get('category', "")), target_lang)
                                        preserved_count += 1
                                elif not full and stored_hash is None and 'category' in target_item:
                                    # Preserve existing translation, generate hash
                                    hashes_dict[field_path] = current_hash
                                    target_item['category'] = self.glossary.post_process(str(target_item.get('category', "")), target_lang)
                                    preserved_count += 1
                                else:
                                    translated = self.translate_text(source_cat_name, target_lang)
                                    target_item['category'] = translated
                                    hashes_dict[field_path] = current_hash
                                    translated_count += 1
                                    checkpoint_save()
                            
                            # Questions
                            if 'questions' in source_item:
                                source_qs = source_item['questions']
                                target_qs = target_item.get('questions', [])
                                
                                if len(target_qs) != len(source_qs):
                                    target_qs = [''] * len(source_qs)
                                
                                for qq_idx, source_q_text in enumerate(source_qs):
                                    field_path = f"category.{cat_idx}.questions.{q_idx}.databricksGuidance.validationChecklist.{cl_idx}.questions.{qq_idx}"
                                    current_hash = HashManager.calculate_hash(str(source_q_text))
                                    stored_hash = hashes_dict.get(field_path)
                                    
                                    if not full and stored_hash == current_hash:
                                        if self.glossary.should_force_refresh(str(source_q_text)):
                                            translated = self.translate_text(source_q_text, target_lang)
                                            target_qs[qq_idx] = translated
                                            hashes_dict[field_path] = current_hash
                                            translated_count += 1
                                            checkpoint_save()
                                        else:
                                            target_qs[qq_idx] = self.glossary.post_process(str(target_qs[qq_idx]), target_lang)
                                            preserved_count += 1
                                        continue
                                    elif not full and stored_hash is None and qq_idx < len(target_qs) and target_qs[qq_idx]:
                                        # Preserve existing translation, generate hash
                                        hashes_dict[field_path] = current_hash
                                        target_qs[qq_idx] = self.glossary.post_process(str(target_qs[qq_idx]), target_lang)
                                        preserved_count += 1
                                        continue
                                    
                                    translated = self.translate_text(source_q_text, target_lang)
                                    target_qs[qq_idx] = translated
                                    hashes_dict[field_path] = current_hash
                                    translated_count += 1
                                    checkpoint_save()
                                
                                target_item['questions'] = target_qs
                            
                            target_checklist[cl_idx] = target_item
                        
                        target_guidance['validationChecklist'] = target_checklist
                    
                    # AdditionalResources
                    if 'additionalResources' in source_guidance:
                        source_resources = source_guidance['additionalResources']
                        target_resources = target_guidance.get('additionalResources', [])
                        
                        if len(target_resources) != len(source_resources):
                            target_resources = [{} for _ in source_resources]
                        
                        for res_idx, source_res in enumerate(source_resources):
                            target_res = target_resources[res_idx] if res_idx < len(target_resources) else {}
                            
                            # Title
                            if 'title' in source_res:
                                source_title = source_res['title']
                                field_path = f"category.{cat_idx}.questions.{q_idx}.databricksGuidance.additionalResources.{res_idx}.title"
                                current_hash = HashManager.calculate_hash(str(source_title))
                                stored_hash = hashes_dict.get(field_path)
                                
                                if not full and stored_hash == current_hash:
                                    if self.glossary.should_force_refresh(str(source_title)):
                                        translated = self.translate_text(source_title, target_lang)
                                        target_res['title'] = translated
                                        hashes_dict[field_path] = current_hash
                                        translated_count += 1
                                        checkpoint_save()
                                    else:
                                        target_res['title'] = self.glossary.post_process(str(target_res.get('title', "")), target_lang)
                                        preserved_count += 1
                                elif not full and stored_hash is None and 'title' in target_res:
                                    # Preserve existing translation, generate hash
                                    hashes_dict[field_path] = current_hash
                                    target_res['title'] = self.glossary.post_process(str(target_res.get('title', "")), target_lang)
                                    preserved_count += 1
                                else:
                                    translated = self.translate_text(source_title, target_lang)
                                    target_res['title'] = translated
                                    hashes_dict[field_path] = current_hash
                                    translated_count += 1
                                    checkpoint_save()
                            
                            # URL (preservar)
                            if 'url' in source_res:
                                target_res['url'] = source_res['url']
                            
                            target_resources[res_idx] = target_res
                        
                        target_guidance['additionalResources'] = target_resources
                    
                    target_q['databricksGuidance'] = target_guidance
                
                target_questions[q_idx] = target_q
            
            target_cat['questions'] = target_questions
            target_data[cat_idx] = target_cat
        
        if progress_callback:
            progress_callback(total_categories, total_categories, translated_count, preserved_count, "Completed")
        
        # Save hashes to file
        HashManager.save_hashes(hashes_path, hashes_dict)
        
        return target_data, translated_count, preserved_count
    
    def process(self, target_lang: str, full: bool = False, verbose: bool = False) -> Tuple[Any, int, int]:
        """Processes module translation"""
        source_path = self.get_source_path()
        target_path = self.get_target_path(target_lang)
        
        # Load files
        print(f"    📖 Loading files...")
        source_data = self.load_json(source_path)
        if source_data is None:
            raise FileNotFoundError(f"Source file not found: {source_path}")
        
        target_data = self.load_json(target_path)
        if target_data is None:
            target_data = {} if self.module == 'i18n' else []
        
        # Calculate total pending before starting using Validator
        # Create a temporary Validator instance to count pending
        temp_validator = Validator()
        _, initial_pending = temp_validator.validate(self.module, target_lang)
        
        # Start timestamp for time calculation
        start_time = time.time()
        
        # Helper function to format time
        def format_time(seconds: float) -> str:
            """Format time in seconds to readable format"""
            if seconds < 60:
                return f"{int(seconds)}s"
            elif seconds < 3600:
                minutes = int(seconds // 60)
                secs = int(seconds % 60)
                return f"{minutes}m {secs}s"
            else:
                hours = int(seconds // 3600)
                minutes = int((seconds % 3600) // 60)
                secs = int(seconds % 60)
                return f"{hours}h {minutes}m {secs}s"
        
        # Progress callback (always shows basic progress)
        def progress_callback(current, total, translated, preserved, extra_info=None):
            # Calculate current pending (initial pending - translated in session)
            current_pending = max(0, initial_pending - translated)
            
            # Calculate elapsed time
            elapsed_time = time.time() - start_time
            
            # Calculate translation rate (translations per second)
            # Only calculate if there are translations done and elapsed time
            if translated > 0 and elapsed_time > 0:
                translation_rate = translated / elapsed_time  # translations per second
                
                # Estimate remaining time based on remaining pending translations
                if translation_rate > 0:
                    estimated_remaining = current_pending / translation_rate
                    time_info = f" | Time: {format_time(elapsed_time)} | Estimated: {format_time(estimated_remaining)}"
                else:
                    time_info = f" | Time: {format_time(elapsed_time)}"
            else:
                time_info = f" | Time: {format_time(elapsed_time)}"
            
            # Calculate percentage
            percentage = round((current / total * 100) if total > 0 else 0, 1)
            
            # Main progress message
            progress_msg = f"Translating message {current} of {total} ({percentage}%)"
            
            if extra_info:
                print(f"    ⏳ {progress_msg} | {extra_info} | Translated in session: {translated} | Preserved: {preserved} | Pending: {current_pending}/{initial_pending}{time_info}", end='\r')
            else:
                print(f"    ⏳ {progress_msg} | Translated in session: {translated} | Preserved: {preserved} | Pending: {current_pending}/{initial_pending}{time_info}", end='\r')
            sys.stdout.flush()
        
        # Process according to module type
        if self.module == 'i18n':
            result = self.process_i18n(source_data, target_data, target_path, target_lang, full, progress_callback)
            print()  # New line after progress
            return result
        elif self.module == 'waf-data':
            result = self.process_waf_data(source_data, target_data, target_path, target_lang, full, progress_callback)
            print()  # New line after progress
            return result
        else:
            raise ValueError(f"Unknown module: {self.module}")


class TranslationManager:
    """Main translation manager"""
    
    def __init__(self, glossary_path: str = 'translation/glossary.json'):
        """Initializes manager"""
        self.glossary = GlossaryManager(glossary_path)
        self.lock_manager = LockManager('translation/.translate.lock')
        self.validator = Validator()
    
    def translate(self, module: str, lang: str, full: bool = False, verbose: bool = False) -> Tuple[bool, int, int]:
        """Translates specific module/language"""
        handler = ModuleHandler(module, self.glossary)
        
        try:
            translated_data, translated_count, preserved_count = handler.process(lang, full, verbose)
            
            # Save translated file
            print(f"    💾 Saving translated file...")
            target_path = handler.get_target_path(lang)
            handler.save_json(target_path, translated_data)
            
            return True, translated_count, preserved_count
        except Exception as e:
            print(f"❌ Error translating {module}/{lang}: {e}")
            return False, 0, 0
    
    def validate_all(self, modules: List[str], langs: List[str]) -> Dict[str, Dict[str, Tuple[int, int]]]:
        """Validates all translations"""
        results = {}
        
        for module in modules:
            results[module] = {}
            for lang in langs:
                translated, pending = self.validator.validate(module, lang)
                results[module][lang] = (translated, pending)
        
        return results
    
    def get_source_counts(self, modules: List[str]) -> Dict[str, int]:
        """Returns count of translatable items in source file (English) per module"""
        counts = {}
        for module in modules:
            handler = ModuleHandler(module, self.glossary)
            source_path = handler.get_source_path()
            source_data = handler.load_json(source_path)
            if source_data:
                counts[module] = self.validator._count_translatable_items(source_data, module)
            else:
                counts[module] = 0
        return counts
    
    def generate_hashes_if_missing(self, modules: List[str], langs: List[str]) -> int:
        """Generates hashes for existing translations if .hashes files don't exist"""
        generated_count = 0
        
        for module in modules:
            handler = ModuleHandler(module, self.glossary)
            source_path = handler.get_source_path()
            source_data = handler.load_json(source_path)
            
            if source_data is None:
                continue
            
            for lang in langs:
                target_path = handler.get_target_path(lang)
                target_data = handler.load_json(target_path)
                
                if target_data is None:
                    continue
                
                # Check if .hashes file exists
                hashes_path = HashManager.get_hashes_file_path(target_path)
                
                if hashes_path.exists():
                    continue  # Hashes already exist
                
                # Migrate hashes from JSON if they exist in old format
                hashes_dict = HashManager.load_hashes(hashes_path)
                if not hashes_path.exists() and target_data:
                    json_str = json.dumps(target_data)
                    if '_hash' in json_str:
                        migrated_hashes = migrate_hashes_from_json(target_path, module)
                        hashes_dict.update(migrated_hashes)
                        target_data = handler.load_json(target_path) or ({} if module == 'i18n' else [])
                
                # Generate hashes for existing translations
                if module == 'i18n' and isinstance(source_data, dict) and isinstance(target_data, dict):
                    def generate_hashes_recursive(source: Dict, target: Dict, path: str = ''):
                        nonlocal hashes_dict
                        for key, value in source.items():
                            current_path = f"{path}.{key}" if path else key
                            if isinstance(value, dict):
                                if key in target and isinstance(target.get(key), dict):
                                    generate_hashes_recursive(value, target[key], current_path)
                            elif isinstance(value, str) and value.strip():
                                if key in target and isinstance(target.get(key), str):
                                    # Translation exists, generate hash from source
                                    current_hash = HashManager.calculate_hash(value)
                                    hashes_dict[current_path] = current_hash
                    
                    generate_hashes_recursive(source_data, target_data)
                    if hashes_dict:
                        HashManager.save_hashes(hashes_path, hashes_dict)
                        generated_count += len(hashes_dict)
                
                elif module == 'waf-data' and isinstance(source_data, list) and isinstance(target_data, list):
                    for cat_idx, source_cat in enumerate(source_data):
                        if cat_idx >= len(target_data):
                            continue
                        target_cat = target_data[cat_idx]
                        
                        # Category fields
                        for field in ['name', 'description']:
                            if field in source_cat and field in target_cat:
                                field_path = f"category.{cat_idx}.{field}"
                                current_hash = HashManager.calculate_hash(str(source_cat[field]))
                                hashes_dict[field_path] = current_hash
                        
                        # Questions
                        source_questions = source_cat.get('questions', [])
                        target_questions = target_cat.get('questions', [])
                        for q_idx, source_q in enumerate(source_questions):
                            if q_idx >= len(target_questions):
                                continue
                            target_q = target_questions[q_idx]
                            
                            for field in ['principle', 'title', 'details']:
                                if field in source_q and field in target_q:
                                    field_path = f"category.{cat_idx}.questions.{q_idx}.{field}"
                                    current_hash = HashManager.calculate_hash(str(source_q[field]))
                                    hashes_dict[field_path] = current_hash
                            
                            # DatabricksGuidance context
                            if 'databricksGuidance' in source_q and 'databricksGuidance' in target_q:
                                source_guidance = source_q['databricksGuidance']
                                target_guidance = target_q['databricksGuidance']
                                if 'context' in source_guidance and 'context' in target_guidance:
                                    field_path = f"category.{cat_idx}.questions.{q_idx}.databricksGuidance.context"
                                    current_hash = HashManager.calculate_hash(str(source_guidance['context']))
                                    hashes_dict[field_path] = current_hash
                                
                                # ValidationChecklist
                                if 'validationChecklist' in source_guidance and 'validationChecklist' in target_guidance:
                                    source_checklist = source_guidance['validationChecklist']
                                    target_checklist = target_guidance['validationChecklist']
                                    for cl_idx, source_item in enumerate(source_checklist):
                                        if cl_idx >= len(target_checklist):
                                            continue
                                        target_item = target_checklist[cl_idx]
                                        
                                        if 'category' in source_item and 'category' in target_item:
                                            field_path = f"category.{cat_idx}.questions.{q_idx}.databricksGuidance.validationChecklist.{cl_idx}.category"
                                            current_hash = HashManager.calculate_hash(str(source_item['category']))
                                            hashes_dict[field_path] = current_hash
                                        
                                        if 'questions' in source_item and 'questions' in target_item:
                                            source_qs = source_item['questions']
                                            target_qs = target_item['questions']
                                            for qq_idx, source_q_text in enumerate(source_qs):
                                                if qq_idx < len(target_qs) and target_qs[qq_idx]:
                                                    field_path = f"category.{cat_idx}.questions.{q_idx}.databricksGuidance.validationChecklist.{cl_idx}.questions.{qq_idx}"
                                                    current_hash = HashManager.calculate_hash(str(source_q_text))
                                                    hashes_dict[field_path] = current_hash
                                
                                # AdditionalResources
                                if 'additionalResources' in source_guidance and 'additionalResources' in target_guidance:
                                    source_resources = source_guidance['additionalResources']
                                    target_resources = target_guidance['additionalResources']
                                    for res_idx, source_res in enumerate(source_resources):
                                        if res_idx >= len(target_resources):
                                            continue
                                        target_res = target_resources[res_idx]
                                        if 'title' in source_res and 'title' in target_res:
                                            field_path = f"category.{cat_idx}.questions.{q_idx}.databricksGuidance.additionalResources.{res_idx}.title"
                                            current_hash = HashManager.calculate_hash(str(source_res['title']))
                                            hashes_dict[field_path] = current_hash
                    
                    if hashes_dict:
                        HashManager.save_hashes(hashes_path, hashes_dict)
                        generated_count += len(hashes_dict)
        
        return generated_count


def format_table(headers: List[str], rows: List[List[str]], col_widths: Optional[List[int]] = None) -> str:
    """Format data as a table"""
    if not rows:
        return ""
    
    # Calculate column widths if not provided
    # Use simple byte length (len())
    if col_widths is None:
        col_widths = []
        for i in range(len(headers)):
            # Use byte length
            max_width = len(str(headers[i]))
            for row in rows:
                if i < len(row):
                    max_width = max(max_width, len(str(row[i])))
            col_widths.append(max(max_width, 8))  # Minimum width of 8
    
    # Ensure col_widths matches headers length
    col_widths = col_widths[:len(headers)]
    while len(col_widths) < len(headers):
        col_widths.append(max(len(str(headers[len(col_widths)])), 8))
    
    # Create separator line
    separator = "+" + "+".join("-" * (w + 2) for w in col_widths) + "+"
    
    # Create header row
    header_row = "|" + "|".join(f" {headers[i]:<{col_widths[i]}} " for i in range(len(headers))) + "|"
    
    # Create data rows
    data_rows = []
    for row in rows:
        padded_row = row + [""] * (len(headers) - len(row))
        data_row = "|" + "|".join(f" {str(padded_row[i]):<{col_widths[i]}} " for i in range(len(headers))) + "|"
        data_rows.append(data_row)
    
    # Combine all parts
    result = [separator, header_row, separator] + data_rows + [separator]
    return "\n".join(result)


def main():
    """Main function"""
    parser = argparse.ArgumentParser(description='Automatic Translation System')
    parser.add_argument('--module', '-m', default='all', help='Specific module (i18n, waf-data) or all')
    parser.add_argument('--lang', '-l', default='all', help='Specific language or all')
    parser.add_argument('--incremental', action='store_true', default=True, help='Incremental translation (default)')
    parser.add_argument('--full', '-f', action='store_true', help='Full translation (retranslate everything)')
    parser.add_argument('--validate-only', action='store_true', help='Only validate, do not translate')
    parser.add_argument('--status', '-s', action='store_true', help='Show translation status by module and language')
    parser.add_argument('--force', action='store_true', help='Ignore existing locks')
    parser.add_argument('--json-output', '-j', action='store_true', help='JSON output for CI/CD')
    parser.add_argument('--verbose', '-v', action='store_true', help='Verbose mode')
    
    args = parser.parse_args()
    
    # Determine modules and languages
    if args.module == 'all':
        modules = list(MODULES.keys())
    else:
        modules = [args.module] if args.module in MODULES else []
    
    if args.lang == 'all':
        # Detect languages dynamically
        langs = set()
        for module in modules:
            detected = LanguageDetector.detect_languages(module)
            langs.update(detected)
        langs = sorted(list(langs))
    else:
        langs = [args.lang]
    
    manager = TranslationManager()
    
    # Status mode only
    if args.status:
        # Generate hashes if they don't exist
        generated_hashes = manager.generate_hashes_if_missing(modules, langs)
        if generated_hashes > 0 and not args.json_output:
            print(f"📝 Generated {generated_hashes} hashes for existing translations\n")
        
        results = manager.validate_all(modules, langs)
        source_counts = manager.get_source_counts(modules)
        total_translated = 0
        total_pending = 0
        total_source = sum(source_counts.values())
        
        for module, module_results in results.items():
            for lang, (translated, pending) in module_results.items():
                total_translated += translated
                total_pending += pending
        
        if args.json_output:
            output = {
                'status': 'success' if total_pending == 0 else 'pending',
                'translated': total_translated,
                'pending': total_pending,
                'total': total_translated + total_pending,
                'source_total': total_source,
                'percentage': round((total_translated / total_source * 100) if total_source > 0 else 0, 1),
                'details': {}
            }
            for module, module_results in results.items():
                source_count = source_counts.get(module, 0)
                output['details'][module] = {
                    'source_count': source_count,
                    'languages': {}
                }
                for lang, (translated, pending) in module_results.items():
                    output['details'][module]['languages'][lang] = {
                        'translated': translated,
                        'pending': pending,
                        'total': translated + pending,
                        'source_count': source_count,
                        'percentage': round((translated / source_count * 100) if source_count > 0 else 0, 1)
                    }
            print(json.dumps(output, indent=2))
        else:
            print(f"\n📊 Translation Status")
            
            # Prepare table data
            all_rows = []
            for module, module_results in results.items():
                source_count = source_counts.get(module, 0)
                for lang, (translated, pending) in module_results.items():
                    percentage = round((translated / source_count * 100) if source_count > 0 else 0, 1)
                    status = "Complete" if pending == 0 else "Pending"
                    all_rows.append([
                        module,
                        lang,
                        str(source_count),
                        str(translated),
                        f"{percentage:.1f}%",
                        status
                    ])
            
            # Print table
            if all_rows:
                headers = ["Module", "Language", "Total", "Translated", "Progress", "Status"]
                print(format_table(headers, all_rows))
        
        sys.exit(0 if total_pending == 0 else 1)
    
    # Validation mode only
    if args.validate_only:
        results = manager.validate_all(modules, langs)
        total_translated = 0
        total_pending = 0
        
        for module, module_results in results.items():
            for lang, (translated, pending) in module_results.items():
                total_translated += translated
                total_pending += pending
        
        if args.json_output:
            output = {
                'status': 'success' if total_pending == 0 else 'pending',
                'translated': total_translated,
                'pending': total_pending,
                'details': results
            }
            print(json.dumps(output, indent=2))
        else:
            print(f"\n📊 Translation Validation")
            print(f"{'='*80}")
            
            # Prepare table data
            all_rows = []
            for module, module_results in results.items():
                for lang, (translated, pending) in module_results.items():
                    status = "Complete" if pending == 0 else "Pending"
                    all_rows.append([
                        module,
                        lang,
                        str(translated),
                        status
                    ])
            
            # Print table
            if all_rows:
                headers = ["Module", "Language", "Translated", "Status"]
                print(format_table(headers, all_rows))
        
        sys.exit(0 if total_pending == 0 else 1)
    
    # Check if any languages were detected
    if not langs:
        print("❌ No target languages detected. Check if translation files exist.")
        sys.exit(2)
    
    # Check lock
    if manager.lock_manager.exists() and not args.force:
        print("❌ Lock exists. Use --force to ignore.")
        sys.exit(2)
    
    # Create lock
    manager.lock_manager.create('all' if len(modules) > 1 else modules[0], 
                                'all' if len(langs) > 1 else langs[0])
    
    try:
        full_mode = args.full
        
        print(f"\n🌐 Starting Translation")
        print(f"{'='*70}")
        print(f"Modules: {', '.join(modules)}")
        print(f"Languages: {', '.join(langs)}")
        print(f"Mode: {'Full' if full_mode else 'Incremental'}")
        print(f"{'='*70}\n")
        
        total_translated = 0
        total_preserved = 0
        errors = []
        
        for module in modules:
            print(f"\n📦 Processing module: {module}")
            
            for lang in langs:
                print(f"  🌍 Language: {lang}")
                
                success, translated, preserved = manager.translate(module, lang, full_mode, args.verbose)
                
                if success:
                    print(f"    ✅ Translated: {translated}, Preserved: {preserved}")
                    total_translated += translated
                    total_preserved += preserved
                else:
                    errors.append(f"{module}/{lang}")
                    print(f"    ❌ Translation error")
        
        print(f"\n{'='*70}")
        print(f"📊 Summary")
        print(f"{'='*70}")
        print(f"Translated: {total_translated}")
        print(f"Preserved: {total_preserved}")
        
        if errors:
            print(f"Errors: {len(errors)}")
            sys.exit(2)
        
        # Show status after translation
        print(f"\n📊 Translation Status")
        results = manager.validate_all(modules, langs)
        source_counts = manager.get_source_counts(modules)
        total_translated_status = 0
        total_pending = 0
        total_source = sum(source_counts.values())
        
        for module, module_results in results.items():
            for lang, (translated, pending) in module_results.items():
                total_translated_status += translated
                total_pending += pending
        
        # Prepare table data
        all_rows = []
        for module, module_results in results.items():
            source_count = source_counts.get(module, 0)
            for lang, (translated, pending) in module_results.items():
                percentage = round((translated / source_count * 100) if source_count > 0 else 0, 1)
                status = "Complete" if pending == 0 else "Pending"
                all_rows.append([
                    module,
                    lang,
                    str(source_count),
                    str(translated),
                    f"{percentage}%",
                    status
                ])
        
        # Print table
        if all_rows:
            headers = ["Module", "Language", "Total", "Translated", "Progress", "Status"]
            print(format_table(headers, all_rows))
        
        if total_pending > 0:
            print(f"\n⚠️  {total_pending} pending items found")
            sys.exit(1)
        else:
            print(f"\n✅ All translations are complete")
            sys.exit(0)
    
    finally:
        # Remove lock
        manager.lock_manager.remove()


if __name__ == '__main__':
    main()

