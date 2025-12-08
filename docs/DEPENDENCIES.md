# Dependencies

This document describes the external libraries used in the Databricks WAF Assessment tool and why they are needed.

## Chart Libraries (Local)

All chart libraries are installed locally via npm and copied to `src/js/libs/` for offline PWA functionality.

### Chart.js v4.4.1

**Purpose**: Radar chart for pillar score comparison

**Why Chart.js?**
- Most popular JavaScript charting library (65k+ GitHub stars)
- Excellent documentation and community support
- Highly customizable and responsive
- Works perfectly offline
- Small bundle size
- Active maintenance

**Usage**: Creates the radar chart showing scores across all 7 WAF pillars on a 0-10 scale

**Files**:
- `src/js/libs/chart.umd.js` (204 KB)

**License**: MIT

**Links**:
- GitHub: https://github.com/chartjs/Chart.js
- Documentation: https://www.chartjs.org/docs/latest/

### canvas-gauges v2.1.7

**Purpose**: Speedometer/gauge charts for pillar scores

**Why canvas-gauges?**
- Specialized library for gauge/speedometer visualizations
- Highly customizable appearance
- Smooth animations
- Works with HTML5 Canvas
- No dependencies
- Small footprint

**Usage**: Creates individual radial gauges for each pillar showing score percentage with color-coded zones (red/orange/green)

**Files**:
- `src/js/libs/gauge.min.js` (44 KB)

**License**: MIT

**Links**:
- GitHub: https://github.com/Mikhus/canvas-gauges
- Documentation: https://canvas-gauges.com/documentation/user-guide/

## Installation

Libraries are managed via npm and automatically copied to the local directory:

```bash
npm install
```

This runs the `postinstall` script which executes `scripts/copy-libs.js` to copy the necessary files from `node_modules/` to `src/js/libs/`.

## Why Local Libraries Instead of CDN?

1. **Offline Functionality**: PWA must work completely offline
2. **Performance**: No external network requests required
3. **Reliability**: No dependency on external CDN availability
4. **Privacy**: No tracking or external data sharing
5. **Version Control**: Specific versions committed to repository

## Updating Libraries

To update to newer versions:

1. Update version in `package.json`
2. Run `npm install`
3. Test the application thoroughly
4. Commit the updated files in `src/js/libs/`

## Total Size Impact

- Chart.js: ~204 KB
- canvas-gauges: ~44 KB
- **Total**: ~248 KB

This adds approximately 248 KB to the initial download size, which is acceptable for the rich visualization functionality provided.
