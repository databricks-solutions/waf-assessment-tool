#!/usr/bin/env python3
"""
Transform category mapping to JavaScript module
"""
import json

def transform_category_mapping():
    """Transform category mapping to JavaScript format"""

    # Load category mapping
    with open('docs/category-mapping.json', 'r', encoding='utf-8') as f:
        mapping = json.load(f)

    print(f"Loaded mapping for {len(mapping)} questions\n")

    # Normalize category names (fix double spaces)
    normalized_mapping = {}
    for identifier, categories in mapping.items():
        normalized_categories = []
        for category in categories:
            # Normalize spacing
            normalized = ' '.join(category.split())
            normalized_categories.append(normalized)
        normalized_mapping[identifier] = normalized_categories

    # Create JavaScript module
    js_content = """/**
 * Category Mapping - Question to Category Mapping
 * Auto-generated - Do not edit manually
 * Maps question identifiers to their applicable categories
 */

const CATEGORY_MAPPING = """

    js_content += json.dumps(normalized_mapping, indent=2, ensure_ascii=False)
    js_content += ";\n"

    # Save to file
    output_path = 'src/js/category-mapping.js'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(js_content)

    print(f"✅ Saved JavaScript module to {output_path}")

    # Show statistics
    all_categories = set()
    for categories in normalized_mapping.values():
        all_categories.update(categories)

    print(f"\nStatistics:")
    print(f"  Total questions: {len(normalized_mapping)}")
    print(f"  Total categories: {len(all_categories)}")
    print(f"\nCategories found:")
    for cat in sorted(all_categories):
        count = sum(1 for cats in normalized_mapping.values() if cat in cats)
        print(f"  - {cat}: {count} questions")

if __name__ == '__main__':
    print("Transforming category mapping...\n")
    transform_category_mapping()
