#!/usr/bin/env python3
"""
Extract Category Mapping from Excel spreadsheet
"""
import pandas as pd
import json
import sys

def extract_category_mapping(excel_path):
    """Extract category mapping from Category Mapping sheet"""

    # Read Excel file
    excel_file = pd.ExcelFile(excel_path)

    # Find the Category Mapping sheet (handles both "Category" and "Catagory" typo)
    sheet_name = None
    for name in excel_file.sheet_names:
        name_lower = name.lower()
        if ('category' in name_lower or 'catagory' in name_lower) and 'mapping' in name_lower:
            sheet_name = name
            break

    if not sheet_name:
        print("❌ Category Mapping sheet not found!")
        print(f"Available sheets: {excel_file.sheet_names}")
        return None

    print(f"✓ Found sheet: {sheet_name}\n")

    # Read the sheet
    df = pd.read_excel(excel_file, sheet_name=sheet_name, header=0)

    print(f"Sheet columns: {list(df.columns)[:10]}...")  # Show first 10 columns
    print(f"Total rows: {len(df)}\n")

    # Find the Identifier column
    identifier_col = None
    for col in df.columns:
        if 'identifier' in str(col).lower():
            identifier_col = col
            break

    if not identifier_col:
        print("❌ Identifier column not found!")
        return None

    print(f"✓ Identifier column: {identifier_col}")

    # Get all category columns (exclude Identifier, Best Practice, and any metadata columns)
    excluded_columns = [identifier_col, 'Best Practice', 'Best Practices', 'Features & Best Practices']
    category_columns = [col for col in df.columns
                       if col not in excluded_columns and not pd.isna(col)]

    print(f"✓ Found {len(category_columns)} category columns")
    print(f"Categories: {category_columns}\n")

    # Build mapping
    mapping = {}

    for idx, row in df.iterrows():
        identifier = row[identifier_col]

        # Skip if identifier is empty
        if pd.isna(identifier):
            continue

        identifier = str(identifier).strip()

        # Get categories where this question has an X
        question_categories = []
        for category in category_columns:
            value = row[category]
            # Check if value is 'X' or 'x' (case insensitive)
            if isinstance(value, str) and value.strip().upper() == 'X':
                question_categories.append(category)

        mapping[identifier] = question_categories

    print(f"✓ Extracted mapping for {len(mapping)} questions")

    # Show statistics
    questions_by_category_count = {}
    for identifier, categories in mapping.items():
        count = len(categories)
        if count not in questions_by_category_count:
            questions_by_category_count[count] = 0
        questions_by_category_count[count] += 1

    print(f"\nStatistics:")
    print(f"  Questions with 0 categories: {questions_by_category_count.get(0, 0)}")
    print(f"  Questions with 1 category: {questions_by_category_count.get(1, 0)}")
    print(f"  Questions with 2+ categories: {sum(v for k, v in questions_by_category_count.items() if k >= 2)}")

    # Show example mappings
    print(f"\nExample mappings (first 3):")
    for i, (identifier, categories) in enumerate(list(mapping.items())[:3]):
        print(f"  {identifier}: {categories if categories else '(no categories)'}")

    return mapping

if __name__ == '__main__':
    excel_path = 'docs/Well-Architected Framework (WAF) (go_waf_checklist) - Updated 2024-12-03.xlsx'

    print(f"Reading Excel file: {excel_path}\n")

    try:
        mapping = extract_category_mapping(excel_path)

        if mapping:
            # Save to JSON
            output_path = 'docs/category-mapping.json'
            with open(output_path, 'w', encoding='utf-8') as f:
                json.dump(mapping, f, indent=2, ensure_ascii=False)

            print(f"\n✅ Successfully extracted category mapping to {output_path}")
        else:
            print("\n❌ Failed to extract category mapping")
            sys.exit(1)

    except Exception as e:
        print(f"❌ Error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
