#!/usr/bin/env python3
"""
Extract WAF questions from Excel spreadsheet
"""
import pandas as pd
import json
import sys

def extract_waf_questions(excel_path):
    """Extract questions from WAF Excel file starting from 9th sheet"""

    # Read Excel file
    excel_file = pd.ExcelFile(excel_path)

    # Print all sheet names to identify them
    print("All sheets in the workbook:")
    for i, sheet_name in enumerate(excel_file.sheet_names, 1):
        print(f"{i}. {sheet_name}")

    # Get sheets starting from the 9th one
    sheets_to_process = excel_file.sheet_names[8:]  # Index 8 = 9th sheet

    print(f"\nProcessing {len(sheets_to_process)} sheets starting from sheet 9...")

    all_data = {}

    for sheet_name in sheets_to_process:
        print(f"\nReading sheet: {sheet_name}")

        # Read the sheet with header in row 1 (second row, index 1)
        df = pd.read_excel(excel_file, sheet_name=sheet_name, header=1)

        # Print columns to verify structure
        print(f"Columns found: {list(df.columns)[:7]}")  # Show first 7 columns

        # Extract relevant columns
        columns_to_extract = [
            'Identifier',
            'Pillars of the Data Intelligence Platform',
            'Principles',
            'Best Practice',
            'Databricks Capabilities',
            'Details',
            'Databricks Solution'  # Alternative column name used in some sheets
        ]

        # Check which columns exist
        available_columns = [col for col in columns_to_extract if col in df.columns]
        missing_columns = [col for col in columns_to_extract if col not in df.columns]

        if missing_columns:
            print(f"Warning: Missing columns: {missing_columns}")

        # Extract data
        sheet_data = []
        for idx, row in df.iterrows():
            question = {}
            for col in available_columns:
                value = row[col]
                # Convert NaN to None
                if pd.isna(value):
                    question[col] = None
                else:
                    question[col] = str(value).strip()

            # Only add if there's at least an identifier
            if question.get('Identifier') and question.get('Identifier') not in ['', 'nan']:
                sheet_data.append(question)

        print(f"Extracted {len(sheet_data)} questions from {sheet_name}")

        # Show first question as example
        if sheet_data:
            print(f"Example first question: {sheet_data[0].get('Identifier')} - {sheet_data[0].get('Best Practice', '')[:80]}...")

        all_data[sheet_name] = sheet_data

    return all_data

if __name__ == '__main__':
    excel_path = 'docs/Well-Architected Framework (WAF) (go_waf_checklist) - Updated 2024-12-03.xlsx'

    print(f"Reading Excel file: {excel_path}\n")

    try:
        data = extract_waf_questions(excel_path)

        # Save to JSON
        output_path = 'docs/waf-questions.json'
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)

        print(f"\n✅ Successfully extracted data to {output_path}")
        print(f"\nTotal sheets processed: {len(data)}")
        total_questions = sum(len(questions) for questions in data.values())
        print(f"Total questions extracted: {total_questions}")

        # Show summary per sheet
        print("\nSummary per sheet:")
        for sheet_name, questions in data.items():
            print(f"  {sheet_name}: {len(questions)} questions")

    except Exception as e:
        print(f"❌ Error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
