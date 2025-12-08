#!/usr/bin/env python3
"""
Generate PWA icons from SVG source
Requires: pip install pillow cairosvg
"""

import os
import sys

try:
    import cairosvg
except ImportError:
    print("Error: cairosvg is not installed")
    print("Install with: pip install cairosvg")
    sys.exit(1)

# Icon sizes required for PWA
SIZES = [72, 96, 128, 144, 152, 192, 384, 512]

# Paths
INPUT_SVG = 'src/assets/icons/icon.svg'
OUTPUT_DIR = 'src/assets/icons'

def generate_icons():
    """Generate PNG icons from SVG source"""

    # Check if input file exists
    if not os.path.exists(INPUT_SVG):
        print(f"Error: Input file not found: {INPUT_SVG}")
        sys.exit(1)

    # Create output directory if it doesn't exist
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    print(f"Generating icons from {INPUT_SVG}...")
    print("-" * 50)

    # Generate each size
    for size in SIZES:
        output_file = os.path.join(OUTPUT_DIR, f'icon-{size}x{size}.png')

        try:
            # Convert SVG to PNG
            cairosvg.svg2png(
                url=INPUT_SVG,
                write_to=output_file,
                output_width=size,
                output_height=size
            )
            print(f"✓ Generated {size}x{size} → {output_file}")

        except Exception as e:
            print(f"✗ Failed to generate {size}x{size}: {e}")

    print("-" * 50)
    print("Icon generation complete!")

    # Generate apple-touch-icon (180x180 for iOS)
    apple_icon = os.path.join(OUTPUT_DIR, 'apple-touch-icon.png')
    try:
        cairosvg.svg2png(
            url=INPUT_SVG,
            write_to=apple_icon,
            output_width=180,
            output_height=180
        )
        print(f"✓ Generated Apple Touch Icon → {apple_icon}")
    except Exception as e:
        print(f"✗ Failed to generate Apple Touch Icon: {e}")

if __name__ == '__main__':
    generate_icons()
