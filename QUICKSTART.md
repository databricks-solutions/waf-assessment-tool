# Quick Start Guide

Get the Databricks WAF Assessment tool running in 5 minutes.

## Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Python 3.x (for local server)

## Step 1: Generate Icons

The PWA requires icon files. Generate them using the provided script:

```bash
# Install required dependency
pip install cairosvg

# Generate icons
python3 generate_icons.py
```

This will create all required icon sizes in `src/assets/icons/`.

## Step 2: Start Local Server

Start a local web server to run the application:

```bash
# Using Python 3
python3 -m http.server 8000
```

Or use any other local server:

```bash
# Using Node.js
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

## Step 3: Open Application

Open your browser and navigate to:

```
http://localhost:8000
```

You should see the Databricks WAF Assessment home page.

## Step 4: Install as PWA (Optional)

To install the app on your device:

1. Look for the install icon in your browser's address bar
2. Click "Install" or follow the browser prompt
3. The app will be added to your home screen/app drawer
4. Launch it like a native application

## Using the Application

### Navigation

- **Home**: Introduction and overview
- **Assessment**: Conduct WAF assessments (to be implemented)
- **Results**: View results and recommendations (to be implemented)
- **About**: Learn about the Well Architected Framework (to be implemented)

### Working Offline

Once installed as a PWA, the application works completely offline. All data is stored locally on your device.

## Troubleshooting

### Icons not appearing

Make sure you ran the icon generation script:
```bash
python3 generate_icons.py
```

### Service Worker errors

Clear your browser cache and reload:
- Chrome/Edge: Ctrl+Shift+Delete (Cmd+Shift+Delete on Mac)
- Firefox: Ctrl+Shift+Delete (Cmd+Shift+Delete on Mac)
- Safari: Cmd+Option+E

### Can't install as PWA

- Ensure you're using HTTPS or localhost
- Check browser console for errors
- Try a different browser
- Verify manifest.json loads correctly

## Next Steps

1. Read the full [README.md](README.md) for detailed information
2. Check [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md) for development guidelines
3. Review [docs/ICONS.md](docs/ICONS.md) for icon customization

## File Structure

```
databricks-waf/
├── index.html              # Main application
├── manifest.json           # PWA configuration
├── service-worker.js       # Offline support
├── generate_icons.py       # Icon generator
├── src/
│   ├── css/main.css       # Styles
│   ├── js/
│   │   ├── app.js         # Main logic
│   │   └── pwa.js         # PWA features
│   └── assets/icons/      # App icons
└── docs/                  # Documentation
```

## Support

For help, see:
- [README.md](README.md) - Full documentation
- [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md) - Development guide
- Browser console - Error messages and logs

Happy assessing!
