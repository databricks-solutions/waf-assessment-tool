#!/usr/bin/env python3
"""
Inspect Excel structure to find headers
"""
import pandas as pd

excel_path = 'docs/Well-Architected Framework (WAF) (go_waf_checklist) - Updated 2024-12-03.xlsx'

# Read Excel file
excel_file = pd.ExcelFile(excel_path)

# Check the 9th sheet (Data And AI Governance)
sheet_name = excel_file.sheet_names[8]

print(f"Inspecting sheet: {sheet_name}\n")

# Read first 20 rows without headers
df = pd.read_excel(excel_file, sheet_name=sheet_name, header=None, nrows=20)

print("First 20 rows:")
print(df.to_string())
print("\n" + "="*100 + "\n")

# Try different header rows
for header_row in range(0, 10):
    print(f"\n--- Trying header_row={header_row} ---")
    try:
        df_test = pd.read_excel(excel_file, sheet_name=sheet_name, header=header_row, nrows=5)
        print(f"Columns: {list(df_test.columns)}")
        print(f"First row:\n{df_test.iloc[0] if len(df_test) > 0 else 'No data'}")
    except Exception as e:
        print(f"Error: {e}")
