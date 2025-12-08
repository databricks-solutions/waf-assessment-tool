#!/usr/bin/env node
/**
 * Copy library files from node_modules to src/js/libs
 * This ensures libraries are available locally for offline PWA usage
 */
const fs = require('fs');
const path = require('path');

const LIBS_DIR = path.join(__dirname, '..', 'src', 'js', 'libs');

// Ensure libs directory exists
if (!fs.existsSync(LIBS_DIR)) {
    fs.mkdirSync(LIBS_DIR, { recursive: true });
}

// Files to copy
const filesToCopy = [
    {
        from: 'node_modules/chart.js/dist/chart.umd.js',
        to: 'src/js/libs/chart.umd.js'
    },
    {
        from: 'node_modules/canvas-gauges/gauge.min.js',
        to: 'src/js/libs/gauge.min.js'
    }
];

console.log('Copying library files...\n');

filesToCopy.forEach(file => {
    const fromPath = path.join(__dirname, '..', file.from);
    const toPath = path.join(__dirname, '..', file.to);

    try {
        fs.copyFileSync(fromPath, toPath);
        console.log(`✓ Copied ${file.from} -> ${file.to}`);
    } catch (error) {
        console.error(`✗ Failed to copy ${file.from}:`, error.message);
    }
});

console.log('\n✅ Library files copied successfully!');
