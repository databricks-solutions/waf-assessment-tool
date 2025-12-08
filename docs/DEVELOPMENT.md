# Development Guide

This guide provides information for developers working on the Databricks WAF Assessment tool.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A code editor (VS Code, Sublime, Atom, etc.)
- Basic knowledge of HTML, CSS, and JavaScript
- A local web server for testing

### Initial Setup

1. Clone the repository
2. Generate PWA icons (see `docs/ICONS.md`)
3. Start a local web server
4. Open the application in your browser

### Development Workflow

1. Make changes to HTML, CSS, or JavaScript files
2. Refresh the browser to see changes
3. Check the browser console for errors
4. Test on different screen sizes using browser dev tools

## Project Architecture

### File Organization

```
databricks-waf/
├── index.html              # Main entry point
├── manifest.json           # PWA configuration
├── service-worker.js       # Offline functionality
├── src/
│   ├── css/
│   │   └── main.css       # All styles
│   ├── js/
│   │   ├── app.js         # Main application logic
│   │   └── pwa.js         # PWA functionality
│   └── assets/
│       ├── icons/         # App icons
│       └── images/        # Other images
└── docs/                  # Documentation
```

### Key Components

#### HTML (index.html)
- Semantic HTML5 structure
- Page sections with navigation
- References to CSS and JavaScript files
- PWA manifest and meta tags

#### CSS (src/css/main.css)
- CSS custom properties (variables) for theming
- Responsive design with media queries
- Flexbox and Grid layouts
- Animations and transitions

#### JavaScript (src/js/app.js)
- WAFApp class for main application logic
- Page navigation system
- Local storage management
- Data import/export functionality

#### PWA (src/js/pwa.js)
- Service worker registration
- Install prompt handling
- Update notifications
- Offline support

## Coding Standards

### HTML

- Use semantic HTML5 elements
- Include ARIA attributes where appropriate
- Keep markup clean and indented (2 spaces)
- Add comments for complex sections

Example:
```html
<!-- Assessment Section -->
<section id="assessment-page" class="page">
    <h2>Assessment</h2>
    <!-- Content here -->
</section>
```

### CSS

- Use CSS custom properties for repeated values
- Follow BEM or similar naming convention
- Group related styles together
- Mobile-first responsive design
- Comment major sections

Example:
```css
/* ==============================
   Section Name
   ============================== */
.component {
    property: value;
}

.component__element {
    property: value;
}

.component--modifier {
    property: value;
}
```

### JavaScript

- Use ES6+ features
- Write descriptive variable and function names
- Add JSDoc comments for functions
- Use const/let (avoid var)
- Handle errors gracefully

Example:
```javascript
/**
 * Navigate to a specific page
 * @param {string} pageName - Name of the page to navigate to
 * @param {boolean} updateHistory - Whether to update browser history
 */
navigateToPage(pageName, updateHistory = true) {
    // Implementation
}
```

## Testing

### Browser Testing

Test the application on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest, if on macOS)

### Device Testing

Test on:
- Desktop (various screen sizes)
- Tablet (iPad, Android tablets)
- Mobile (iOS, Android)

### PWA Testing

1. **Service Worker**
   - Open DevTools → Application → Service Workers
   - Verify service worker is registered
   - Test offline mode (Network tab → Offline)

2. **Manifest**
   - Open DevTools → Application → Manifest
   - Verify all properties are correct
   - Check icon loading

3. **Install**
   - Test installation on desktop and mobile
   - Verify app appears on home screen
   - Test launching as standalone app

### Console Testing

Open browser console and test:
```javascript
// Check app instance
console.log(wafApp);

// Test navigation
wafApp.navigateToPage('assessment');

// Test data management
wafApp.saveData();
wafApp.loadSavedData();
wafApp.exportData();
```

## Debugging

### Common Issues

1. **Service Worker not updating**
   - Clear browser cache
   - Unregister service worker manually
   - Update CACHE_NAME in service-worker.js

2. **Styles not applying**
   - Check CSS syntax errors
   - Verify file paths are correct
   - Clear browser cache

3. **JavaScript errors**
   - Open browser console
   - Check for syntax errors
   - Verify all function calls are correct

### Debug Tools

- **Chrome DevTools**: F12 or Right-click → Inspect
- **Lighthouse**: Audit tool for PWA, performance, accessibility
- **Application Tab**: View service workers, storage, manifest
- **Console**: Log messages, errors, warnings

## Performance Optimization

### Best Practices

1. **Minimize HTTP Requests**
   - Combine files where possible
   - Use local libraries (no CDN)
   - Optimize images

2. **Optimize CSS**
   - Remove unused styles
   - Use CSS minification for production
   - Avoid redundant selectors

3. **Optimize JavaScript**
   - Minimize DOM manipulation
   - Use event delegation
   - Defer non-critical scripts

4. **Optimize Images**
   - Use appropriate formats (SVG for icons)
   - Compress PNG/JPG images
   - Use responsive images

### Service Worker Caching

Update the cache strategy in `service-worker.js`:
- Cache static assets (HTML, CSS, JS)
- Network-first for dynamic content
- Cache-first for images and fonts

## Adding New Features

### Adding a New Page

1. **HTML**: Add page section
```html
<section id="new-page" class="page">
    <h2>New Page</h2>
    <!-- Content -->
</section>
```

2. **CSS**: Add page-specific styles
```css
#new-page {
    /* Styles */
}
```

3. **JavaScript**: Update navigation
```javascript
// Navigation button should have data-page="new"
<button class="nav-btn" data-page="new">New</button>
```

### Adding Assessment Questions

1. Create question data structure
2. Build question UI dynamically
3. Handle user responses
4. Store answers in assessmentData
5. Calculate scores/recommendations

Example structure:
```javascript
const questions = [
    {
        id: 'q1',
        pillar: 'security',
        question: 'Do you use encryption at rest?',
        options: ['Yes', 'No', 'Partial'],
        weight: 1.0
    }
    // More questions...
];
```

## Deployment

### Preparing for Deployment

1. **Update Version**
   - Update version in manifest.json
   - Update CACHE_NAME in service-worker.js
   - Update version in README.md

2. **Test Thoroughly**
   - Test all features
   - Run Lighthouse audit
   - Test installation
   - Test offline mode

3. **Optimize Assets**
   - Minify CSS (optional)
   - Minify JavaScript (optional)
   - Optimize images
   - Generate all icon sizes

### Deployment Options

1. **Static Hosting**
   - GitHub Pages
   - Netlify
   - Vercel
   - AWS S3 + CloudFront

2. **Requirements**
   - HTTPS (required for PWA)
   - Proper MIME types
   - CORS headers (if using separate domains)

### Post-Deployment

1. Verify PWA functionality
2. Test installation on multiple devices
3. Monitor browser console for errors
4. Verify all icons load correctly

## Troubleshooting

### Service Worker Issues

```javascript
// Unregister service worker
navigator.serviceWorker.getRegistrations().then(registrations => {
    registrations.forEach(registration => registration.unregister());
});

// Clear all caches
caches.keys().then(names => {
    names.forEach(name => caches.delete(name));
});
```

### Clear Local Storage

```javascript
// Clear all data
localStorage.clear();

// Clear specific item
localStorage.removeItem('waf-assessment-data');
```

## Resources

### Documentation
- [MDN Web Docs](https://developer.mozilla.org/)
- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

### Tools
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [PWA Builder](https://www.pwabuilder.com/)

### Testing
- [BrowserStack](https://www.browserstack.com/) - Cross-browser testing
- [Chrome DevTools Device Mode](https://developer.chrome.com/docs/devtools/device-mode/) - Responsive testing

## Getting Help

For questions or issues:
1. Check the documentation in `/docs`
2. Review browser console errors
3. Contact the development team
4. Consult the Databricks Solution Architecture team

## Contributing

1. Follow the coding standards
2. Test thoroughly
3. Update documentation
4. Keep commits focused and descriptive

## Next Steps

See the project roadmap in README.md for planned features and improvements.
