#!/usr/bin/env python3
"""
Update version across all application files
Usage: python3 update_version.py 1.2.2
"""
import sys
import re

def update_version(new_version):
    """Update version in all necessary files"""

    # Validate version format
    if not re.match(r'^\d+\.\d+\.\d+$', new_version):
        print(f"❌ Invalid version format: {new_version}")
        print("Expected format: X.Y.Z (e.g., 1.2.1)")
        return False

    files_updated = []
    errors = []

    # 1. Update index.html
    try:
        with open('index.html', 'r', encoding='utf-8') as f:
            content = f.read()

        # Update CSS version
        content = re.sub(
            r'src/css/main\.css\?v=[\d.]+',
            f'src/css/main.css?v={new_version}',
            content
        )

        # Update JS versions
        content = re.sub(
            r'src/js/waf-data\.js\?v=[\d.]+',
            f'src/js/waf-data.js?v={new_version}',
            content
        )
        content = re.sub(
            r'src/js/category-mapping\.js\?v=[\d.]+',
            f'src/js/category-mapping.js?v={new_version}',
            content
        )
        content = re.sub(
            r'src/js/app\.js\?v=[\d.]+',
            f'src/js/app.js?v={new_version}',
            content
        )
        content = re.sub(
            r'src/js/pwa\.js\?v=[\d.]+',
            f'src/js/pwa.js?v={new_version}',
            content
        )

        # Update footer version
        content = re.sub(
            r'<p class="version">Version [\d.]+</p>',
            f'<p class="version">Version {new_version}</p>',
            content
        )

        with open('index.html', 'w', encoding='utf-8') as f:
            f.write(content)

        files_updated.append('index.html (CSS, JS, Footer)')
    except Exception as e:
        errors.append(f'index.html: {e}')

    # 2. Update manifest.json
    try:
        with open('manifest.json', 'r', encoding='utf-8') as f:
            content = f.read()

        content = re.sub(
            r'"version":\s*"[\d.]+"',
            f'"version": "{new_version}"',
            content
        )

        with open('manifest.json', 'w', encoding='utf-8') as f:
            f.write(content)

        files_updated.append('manifest.json')
    except Exception as e:
        errors.append(f'manifest.json: {e}')

    # 3. Update VERSION_UPDATE.md
    try:
        with open('VERSION_UPDATE.md', 'r', encoding='utf-8') as f:
            content = f.read()

        content = re.sub(
            r'## Current Version: [\d.]+',
            f'## Current Version: {new_version}',
            content
        )

        with open('VERSION_UPDATE.md', 'w', encoding='utf-8') as f:
            f.write(content)

        files_updated.append('VERSION_UPDATE.md')
    except Exception as e:
        errors.append(f'VERSION_UPDATE.md: {e}')

    # Report results
    print(f"\n{'='*60}")
    print(f"Version Update: {new_version}")
    print(f"{'='*60}\n")

    if files_updated:
        print("✅ Files updated:")
        for file in files_updated:
            print(f"   - {file}")

    if errors:
        print("\n❌ Errors:")
        for error in errors:
            print(f"   - {error}")
        return False

    print(f"\n✅ Successfully updated to version {new_version}")
    print("\nNext steps:")
    print("1. Review changes with: git diff")
    print("2. Test the application")
    print("3. Commit with: git commit -m 'Version {}'".format(new_version))

    return True

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: python3 update_version.py X.Y.Z")
        print("Example: python3 update_version.py 1.2.2")
        sys.exit(1)

    new_version = sys.argv[1]
    success = update_version(new_version)
    sys.exit(0 if success else 1)
