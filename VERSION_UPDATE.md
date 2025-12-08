# Version Update Checklist

When updating the application version, follow these steps:

## Files to Update

### 1. **index.html**
Update version in 3 locations:

```html
<!-- Line ~20: CSS -->
<link rel="stylesheet" href="src/css/main.css?v=X.X.X">

<!-- Line ~268: Footer -->
<p class="version">Version X.X.X</p>

<!-- Lines ~273-276: JavaScript files -->
<script src="src/js/waf-data.js?v=X.X.X"></script>
<script src="src/js/category-mapping.js?v=X.X.X"></script>
<script src="src/js/app.js?v=X.X.X"></script>
<script src="src/js/pwa.js?v=X.X.X"></script>
```

### 2. **manifest.json**
Update version:

```json
{
  "version": "X.X.X",
  ...
}
```

### 3. **service-worker.js**
Update cache name:

```javascript
const CACHE_NAME = 'databricks-waf-vX.X.X';
```

## Current Version: 0.1.0

## Cache Busting

The `?v=X.X.X` parameter ensures browsers always load the latest version of CSS and JavaScript files, preventing cache issues after updates.
