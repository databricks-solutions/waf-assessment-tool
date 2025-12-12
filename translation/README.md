# Sistema de Tradução Automática

Sistema Python monolítico para tradução automática de mensagens do inglês para outros idiomas, com suporte a tradução incremental, controle de hash CRC32 embutido nos JSONs, lock simples e validação quantitativa.

## Requisitos

- Python 3.x
- Ambiente virtual (venv) ativado
- Biblioteca `deep-translator` instalada

## Instalação

1. Ative o ambiente virtual:
```bash
source venv/bin/activate  # Linux/Mac
# ou
venv\Scripts\activate  # Windows
```

2. Instale as dependências (se ainda não estiver instalado):
```bash
pip install deep-translator
```

## Estrutura

```
translation/
├── translate.py              # Script principal monolítico
├── glossary.json             # Glossário de termos técnicos
└── README.md                 # Esta documentação

# Arquivo de lock temporário (criado durante execução)
translation/.translate.lock
```

## Módulos Suportados

O sistema detecta automaticamente dois módulos de tradução:

1. **i18n**: Arquivos de interface (`src/js/i18n/{lang}.json`)
   - Arquivos JSON simples com chaves aninhadas
   - Todos os valores de string são traduzíveis

2. **waf-data**: Dados do WAF (`src/data/waf-data-{lang}.json`)
   - Arquivos JSON complexos com estrutura hierárquica
   - Campos traduzíveis: `name`, `description`, `principle`, `title`, `details`, `context`, etc.

## Sistema de Hash CRC32

Cada campo traduzível possui um hash CRC32 associado armazenado diretamente no JSON:

- Hash é calculado a partir do texto original em inglês
- Armazenado como campo `{campo}_hash` (ex: `title_hash`)
- Hash tem 8 caracteres hexadecimais
- Permite detecção de mudanças no texto fonte

Exemplo:
```json
{
  "title": "Título traduzido",
  "title_hash": "a1b2c3d4"
}
```

## Detecção Automática de Idiomas

O sistema detecta automaticamente os idiomas disponíveis:

- **i18n**: Escaneia `src/js/i18n/` procurando arquivos `{lang}.json` (excluindo `en.json`)
- **waf-data**: Escaneia `src/data/` procurando arquivos `waf-data-{lang}.json` (excluindo `waf-data.json`)

Novos idiomas são detectados automaticamente a cada execução.

## Glossário de Termos Técnicos

O arquivo `glossary.json` contém termos técnicos que devem ser preservados durante a tradução:

- Lista de termos em `preserve`
- Mapeamentos de substituição por idioma em `replacements`

Após a tradução automática, o sistema substitui termos técnicos conforme o glossário.

## Uso

### Tradução Incremental (Padrão)

Traduz apenas textos com hash novo ou modificado:

```bash
python translation/translate.py
```

### Tradução Completa

Retraduz tudo, ignorando hashes existentes:

```bash
python translation/translate.py --full
# ou
python translation/translate.py -f
```

### Traduzir Módulo Específico

```bash
python translation/translate.py --module i18n
# ou
python translation/translate.py -m i18n
python translation/translate.py -m waf-data
```

### Traduzir Idioma Específico

```bash
python translation/translate.py --lang pt-BR
# ou
python translation/translate.py -l pt-BR
python translation/translate.py -l es
```

### Status das Traduções

Mostra estatísticas de tradução por módulo e idioma:

```bash
python translation/translate.py --status
# ou
python translation/translate.py -s
```

Exemplo de saída:
```
📊 Status das Traduções
======================================================================

📦 Módulo: i18n (Total em inglês: 150)
  ✅ pt-BR    | Traduzidas:  150 | Pendentes:    0 | Inglês:  150 | 100.0%
  ⚠️  es     | Traduzidas:  140 | Pendentes:   10 | Inglês:  150 |  93.3%

📦 Módulo: waf-data (Total em inglês: 500)
  ✅ pt-BR    | Traduzidas:  500 | Pendentes:    0 | Inglês:  500 | 100.0%
  ✅ es      | Traduzidas:  500 | Pendentes:    0 | Inglês:  500 | 100.0%

======================================================================
Total Geral: 1290 traduzidas, 10 pendentes, 650 em inglês
Progresso: 99.2%
```

Com saída JSON:
```bash
python translation/translate.py --status --json-output
# ou
python translation/translate.py -s -j
```

### Apenas Validar

Valida traduções sem traduzir:

```bash
python translation/translate.py --validate-only
```

### Ignorar Lock

Força execução mesmo com lock existente:

```bash
python translation/translate.py --force
```

### Saída JSON (para CI/CD)

Gera saída estruturada em JSON:

```bash
python translation/translate.py --validate-only --json-output
# ou
python translation/translate.py --status -j
```

### Modo Verboso

Mostra informações detalhadas:

```bash
python translation/translate.py --verbose
# ou
python translation/translate.py -v
```

## Códigos de Saída

- `0`: Sucesso (tudo traduzido e válido)
- `1`: Pendências encontradas (traduções faltando ou hashes desatualizados)
- `2`: Erro de execução

## Controle de Lock

O sistema cria um arquivo `.translate.lock` durante a execução para evitar execuções simultâneas:

- Lock é criado no início da tradução
- Lock é removido ao finalizar (sucesso ou erro)
- Use `--force` para ignorar locks existentes
- Útil para retomar traduções interrompidas

## Validação Quantitativa

A validação conta:

- **Traduzidas**: Campos com hash correspondente ao texto fonte atual
- **Pendentes**: Campos sem hash ou com hash desatualizado

Exemplo de saída:
```
📊 Validação de Traduções
======================================================================

📦 Módulo: i18n
  ✅ pt-BR: 150 traduzidas, 0 pendentes
  ⚠️  es: 140 traduzidas, 10 pendentes

📦 Módulo: waf-data
  ✅ pt-BR: 500 traduzidas, 0 pendentes
  ✅ es: 500 traduzidas, 0 pendentes

======================================================================
Total: 1290 traduzidas, 10 pendentes
```

## Integração com CI/CD

### Exemplo de Pipeline

```yaml
# Exemplo para GitHub Actions
- name: Validar Traduções
  run: |
    source venv/bin/activate
    python translation/translate.py --validate-only --json-output > translation_status.json
    exit_code=$?
    if [ $exit_code -eq 1 ]; then
      echo "⚠️ Traduções pendentes encontradas"
      cat translation_status.json
    fi
    exit $exit_code
```

### Saída JSON

Com `--json-output`, a saída é estruturada:

```json
{
  "status": "pending",
  "translated": 1290,
  "pending": 10,
  "details": {
    "i18n": {
      "pt-BR": [150, 0],
      "es": [140, 10]
    },
    "waf-data": {
      "pt-BR": [500, 0],
      "es": [500, 0]
    }
  }
}
```

## Processo de Tradução

1. **Detecção**: Detecta módulos e idiomas dinamicamente
2. **Lock**: Cria lock para evitar execuções simultâneas
3. **Carregamento**: Carrega arquivos fonte (inglês) e destino
4. **Hash**: Calcula hash CRC32 de cada campo traduzível
5. **Comparação**: Compara hash atual vs. hash armazenado
6. **Tradução**: Traduz apenas campos com hash novo/modificado (modo incremental)
7. **Pós-processamento**: Substitui termos técnicos do glossário
8. **Armazenamento**: Salva tradução e hash no arquivo JSON
9. **Validação**: Valida traduções completas
10. **Limpeza**: Remove lock

## Tratamento de Erros

- Retry automático com backoff exponencial para API de tradução
- Lock sempre removido ao finalizar (sucesso ou erro)
- Preservação de traduções existentes em caso de erro parcial
- Mensagens de erro claras com códigos de saída apropriados

## Adicionando Novos Idiomas

1. Crie o arquivo de tradução vazio no diretório apropriado:
   - `i18n`: `src/js/i18n/{novo-lang}.json` (cópia de `en.json` vazia)
   - `waf-data`: `src/data/waf-data-{novo-lang}.json` (cópia de `waf-data.json` vazia)

2. Execute a tradução:
```bash
python translation/translate.py --lang {novo-lang} --full
```

O sistema detectará automaticamente o novo idioma nas próximas execuções.

## Adicionando Termos ao Glossário

Edite `translation/glossary.json`:

```json
{
  "preserve": [
    "Unity Catalog",
    "Novo Termo Técnico"
  ],
  "replacements": {
    "pt-BR": {
      "Novo Termo Técnico": "Novo Termo Técnico"
    }
  }
}
```

## Parâmetros Disponíveis

| Parâmetro | Alias | Descrição |
|-----------|-------|-----------|
| `--module` | `-m` | Módulo específico (i18n, waf-data) ou 'all' |
| `--lang` | `-l` | Idioma específico ou 'all' |
| `--incremental` | | Tradução incremental (padrão) |
| `--full` | `-f` | Tradução completa (retraduzir tudo) |
| `--validate-only` | | Apenas validar, não traduzir |
| `--status` | `-s` | Mostrar status de traduções por módulo e idioma |
| `--force` | | Ignorar locks existentes |
| `--json-output` | `-j` | Saída em JSON para CI/CD |
| `--verbose` | `-v` | Modo verboso |

## Notas Importantes

- O inglês (`en`) é sempre o idioma base
- Hashes são calculados a partir do texto em inglês
- Mudanças no texto em inglês são detectadas automaticamente
- Traduções são preservadas mesmo em caso de erro parcial
- O sistema mantém a estrutura e formatação dos arquivos JSON originais

## Troubleshooting

### Erro: "Lock existente"
- Use `--force` para ignorar o lock
- Ou remova manualmente `translation/.translate.lock`

### Erro: "Arquivo fonte não encontrado"
- Verifique se os arquivos fonte existem:
  - `src/js/i18n/en.json`
  - `src/data/waf-data.json`

### Traduções não estão sendo atualizadas
- Use `--full` para forçar retradução completa
- Verifique se os hashes estão sendo atualizados nos arquivos JSON

### Erro de conexão com API de tradução
- O sistema tenta novamente automaticamente
- Verifique sua conexão com a internet
- Google Translate pode ter limites de taxa

