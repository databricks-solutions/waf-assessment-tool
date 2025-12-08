#!/usr/bin/env python3
"""
Transform extracted WAF questions to application format
"""
import json

# Pillar name mapping (Excel -> App)
PILLAR_MAPPING = {
    'Data And AI Governance': {
        'id': 'data-ai-governance',
        'name': 'Data & AI Governance',
        'description': 'Ensure data brings value and supports business strategy while maintaining quality and compliance.'
    },
    'Interoperability & Usability': {
        'id': 'interoperability-usability',
        'name': 'Interoperability & Usability',
        'description': 'Enable seamless interaction between users, systems, and data across the lakehouse platform.'
    },
    'Operational Excellence': {
        'id': 'operational-excellence',
        'name': 'Operational Excellence',
        'description': 'Maintain production systems efficiently with proper monitoring, automation, and best practices.'
    },
    'Security, Compliance and Privac': {
        'id': 'security-compliance-privacy',
        'name': 'Security, Compliance & Privacy',
        'description': 'Protect data and systems from threats while maintaining regulatory compliance and privacy standards.'
    },
    'Reliability': {
        'id': 'reliability',
        'name': 'Reliability',
        'description': 'Recover from failures and continue functioning with minimal downtime and data loss.'
    },
    'Performance efficiency': {
        'id': 'performance-efficiency',
        'name': 'Performance Efficiency',
        'description': 'Optimize resource usage and adapt to changing demands efficiently.'
    },
    'Cost Optimization': {
        'id': 'cost-optimization',
        'name': 'Cost Optimization',
        'description': 'Maximize value while minimizing costs through efficient resource management.'
    }
}

def transform_questions():
    """Transform extracted questions to app format"""

    # Load extracted questions
    with open('docs/waf-questions.json', 'r', encoding='utf-8') as f:
        raw_data = json.load(f)

    transformed_pillars = []

    for sheet_name, questions in raw_data.items():
        if sheet_name not in PILLAR_MAPPING:
            print(f"Warning: Unknown pillar '{sheet_name}', skipping...")
            continue

        pillar_info = PILLAR_MAPPING[sheet_name]

        # Transform questions
        transformed_questions = []
        for q in questions:
            # Handle column name variations
            best_practice = q.get('Best Practice') or q.get('Best Practices') or q.get('Features & Best Practices') or ''

            transformed_q = {
                'id': q.get('Identifier', ''),
                'identifier': q.get('Identifier', ''),
                'principle': q.get('Principles', ''),
                'title': best_practice,
                'capabilities': q.get('Databricks Capabilities'),
                'details': q.get('Details') or q.get('Databricks Solution'),
                'type': 'status',
                'status': 'open'  # Default status
            }

            transformed_questions.append(transformed_q)

        # Sort by identifier
        transformed_questions.sort(key=lambda x: x['identifier'])

        pillar = {
            'id': pillar_info['id'],
            'name': pillar_info['name'],
            'description': pillar_info['description'],
            'questions': transformed_questions
        }

        transformed_pillars.append(pillar)

        print(f"✓ Transformed {pillar_info['name']}: {len(transformed_questions)} questions")

    return transformed_pillars

def save_as_js_module(pillars):
    """Save as JavaScript module"""

    # Convert to JavaScript format
    js_content = """/**
 * WAF Assessment Questions - Real Data from Excel
 * Auto-generated - Do not edit manually
 */

export const WAF_PILLARS_DATA = """

    js_content += json.dumps(pillars, indent=2, ensure_ascii=False)
    js_content += ";\n"

    # Save to file
    output_path = 'src/js/waf-data.js'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(js_content)

    print(f"\n✅ Saved JavaScript module to {output_path}")

    return output_path

if __name__ == '__main__':
    print("Transforming WAF questions...\n")

    pillars = transform_questions()

    # Save as JS module
    save_as_js_module(pillars)

    # Save as JSON for inspection
    with open('docs/waf-transformed.json', 'w', encoding='utf-8') as f:
        json.dump(pillars, f, indent=2, ensure_ascii=False)

    print(f"✅ Also saved JSON to docs/waf-transformed.json")

    print(f"\n📊 Summary:")
    print(f"Total pillars: {len(pillars)}")
    total_questions = sum(len(p['questions']) for p in pillars)
    print(f"Total questions: {total_questions}")

    print(f"\nQuestions per pillar:")
    for pillar in pillars:
        print(f"  {pillar['name']}: {len(pillar['questions'])} questions")
