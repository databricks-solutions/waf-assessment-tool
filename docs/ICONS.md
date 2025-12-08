# PWA Icons Guide

This document explains how to generate the required PWA icons for the Databricks WAF Assessment application.

## Required Icon Sizes

The PWA requires icons in the following sizes:
- 72x72
- 96x96
- 128x128
- 144x144
- 152x152
- 192x192
- 384x384
- 512x512

## Base Icon

The base SVG icon is located at: `src/assets/icons/icon.svg`

This icon features:
- Databricks brand color (#FF3621) as background
- "WAF" text in white
- "DATABRICKS" branding
- Checkmark symbol representing assessment completion

## Generating PNG Icons

### Option 1: Using Online Tools

1. Visit a tool like [Real Favicon Generator](https://realfavicongenerator.net/) or [PWA Builder](https://www.pwabuilder.com/imageGenerator)
2. Upload the `icon.svg` file
3. Download the generated icon pack
4. Place the icons in `src/assets/icons/`

### Option 2: Using Command Line (ImageMagick)

If you have ImageMagick installed:

```bash
cd src/assets/icons

# Generate all required sizes
for size in 72 96 128 144 152 192 384 512; do
  convert icon.svg -resize ${size}x${size} icon-${size}x${size}.png
done
```

### Option 3: Using Node.js (sharp)

Create a script `generate-icons.js`:

```javascript
const sharp = require('sharp');
const fs = require('fs');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const inputSVG = './src/assets/icons/icon.svg';

sizes.forEach(size => {
  sharp(inputSVG)
    .resize(size, size)
    .png()
    .toFile(`./src/assets/icons/icon-${size}x${size}.png`)
    .then(() => console.log(`Generated ${size}x${size}`))
    .catch(err => console.error(err));
});
```

Run with:
```bash
npm install sharp
node generate-icons.js
```

### Option 4: Using Python (Pillow)

Create a script `generate_icons.py`:

```python
from PIL import Image
import cairosvg

sizes = [72, 96, 128, 144, 152, 192, 384, 512]
input_svg = 'src/assets/icons/icon.svg'

for size in sizes:
    # Convert SVG to PNG
    png_data = cairosvg.svg2png(url=input_svg, output_width=size, output_height=size)

    # Save PNG
    output_file = f'src/assets/icons/icon-{size}x{size}.png'
    with open(output_file, 'wb') as f:
        f.write(png_data)

    print(f'Generated {size}x{size}')
```

Run with:
```bash
pip install Pillow cairosvg
python generate_icons.py
```

## Icon Design Guidelines

### Colors
- **Primary Background**: #FF3621 (Databricks Red)
- **Text/Graphics**: #FFFFFF (White)
- **Secondary**: #1C3E5A (Dark Blue) - optional for variations

### Safe Area
- Keep important content within 80% of the icon area
- This ensures visibility across different platforms and sizes

### Testing Icons
- Test icons on different backgrounds (light, dark)
- Check visibility at small sizes (72x72)
- Verify icons look good on both iOS and Android

## Apple Touch Icon

For iOS devices, ensure you have:
- `apple-touch-icon.png` (180x180) - highest quality for iOS

This is already referenced in the HTML:
```html
<link rel="apple-touch-icon" href="src/assets/icons/icon-192x192.png">
```

## Favicon

For browser tabs, you may also want to create:
- `favicon.ico` (16x16, 32x32, 48x48)
- `favicon-16x16.png`
- `favicon-32x32.png`

## Maskable Icons

The manifest.json is configured to support maskable icons. These icons should have:
- Important content in the center "safe zone"
- Background that extends to edges
- Purpose: `maskable any`

The current icon design already follows these guidelines.

## Verification

After generating icons, verify:
1. All files exist in `src/assets/icons/`
2. File names match manifest.json entries
3. Images are properly sized (check dimensions)
4. Images display correctly when opened

## Quick Verification Script

```bash
cd src/assets/icons
for file in icon-*.png; do
  echo -n "$file: "
  file "$file" | grep -o '[0-9]* x [0-9]*'
done
```

## Troubleshooting

### Icons not appearing in PWA
- Clear browser cache
- Uninstall and reinstall PWA
- Check browser console for 404 errors
- Verify manifest.json paths are correct

### Icons look pixelated
- Ensure you're generating from the SVG (vector) source
- Don't upscale from smaller PNGs
- Check that PNG generation settings include anti-aliasing

### Different icon appearing
- Check service worker cache
- Update service worker version
- Force refresh (Ctrl+Shift+R or Cmd+Shift+R)

## Future Customization

To customize the icon:
1. Edit `src/assets/icons/icon.svg` with your preferred SVG editor
2. Regenerate all PNG sizes
3. Update service worker cache version
4. Test across devices

## References

- [PWA Icons Guidelines](https://web.dev/maskable-icon/)
- [Add a web app manifest](https://web.dev/add-manifest/)
- [Icon Design Best Practices](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/How_to/Define_app_icons)
