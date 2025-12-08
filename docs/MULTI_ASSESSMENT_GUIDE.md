# Multi-Assessment Management Guide

This guide explains how to work with multiple assessments in the Databricks WAF Assessment tool.

## Overview

The application supports managing multiple WAF assessments simultaneously. Each assessment is stored locally in your browser and can be:
- Created with a unique name
- Loaded and edited independently
- Exported for sharing
- Imported from others
- Deleted when no longer needed

## Key Features

### 1. Multiple Assessments

You can maintain assessments for different:
- **Clients**: "Acme Corp - Q4 2024", "TechStart Inc - Initial Assessment"
- **Environments**: "Production Environment", "Development Setup"
- **Time Periods**: "Q1 Review", "Annual Assessment"
- **Purposes**: "Pre-migration Check", "Post-implementation Review"

### 2. No Backend Required

All data is stored locally in your browser using localStorage:
- **Benefits**: Works offline, no server costs, complete privacy
- **Considerations**: Data is browser-specific, not synced across devices
- **Recommendation**: Use export/import to share between browsers or team members

## Using the Assessment Manager

### Accessing the Manager

There are two ways to open the Assessment Manager:

1. **Header Button**: Click the 📋 clipboard icon in the header
2. **Start Assessment**: Click "Start Assessment" on the home page

### Creating a New Assessment

1. Click **"+ New Assessment"** in the Assessment Manager
2. Enter a descriptive name (required)
   - Examples: "Client XYZ - WAF Review 2024", "Production Assessment"
3. Optionally add a description with notes
4. Click **"Create Assessment"**

The new assessment becomes active immediately, and you'll be taken to the Assessment page.

### Assessment Information

Each assessment stores:
- **Unique ID**: Automatically generated
- **Name**: Your chosen identifier
- **Description**: Optional notes
- **Created Date**: When the assessment was first created
- **Updated Date**: Last modification timestamp
- **Data**: All pillar responses and metadata
- **Modified Flag**: Tracks unsaved changes

### Loading an Existing Assessment

1. Open the Assessment Manager
2. Find the assessment in the list (sorted by last updated)
3. Click the **📂 Load** icon
4. The assessment becomes active and loads its data

**Note**: Only one assessment can be active at a time.

### Active Assessment Display

The currently active assessment is shown in the header:
```
Assessment: Client XYZ - Q4 2024 [📋]
```

- **Green border**: Assessment is active
- **"Active" badge**: Shows in the assessment list
- **Gray border**: No assessment selected

### Switching Between Assessments

To switch from one assessment to another:
1. Open the Assessment Manager (📋 icon in header)
2. Click **Load** on the assessment you want to switch to
3. The previous assessment's data is automatically saved
4. The new assessment's data is loaded

**Important**: All changes are auto-saved to localStorage.

## Export and Import

### Exporting an Assessment

**Use Cases**:
- Share with team members
- Backup before making changes
- Transfer to another browser/device
- Send to client for review
- Archive completed assessments

**Steps**:
1. Open Assessment Manager
2. Find the assessment to export
3. Click the **↓ Export** icon
4. A JSON file downloads: `waf-{name}-{date}.json`

**Export File Contains**:
- Assessment name and description
- All pillar responses
- Metadata and timestamps
- Complete assessment state

### Importing an Assessment

**Use Cases**:
- Load assessment from colleague
- Restore from backup
- Transfer between browsers
- Continue work on different device

**Steps**:
1. Open Assessment Manager
2. Click **"↑ Import Assessment"**
3. Select the JSON file
4. Click **"Import Assessment"**

**What Happens**:
- A new assessment is created (new ID generated)
- Original name is preserved
- Import timestamp is added
- Assessment becomes active
- Appears in your assessment list

**Note**: Importing creates a copy. The original file is not modified.

### Sharing Assessments with Clients

**Recommended Workflow**:

1. **Complete Assessment**:
   - Finish all pillar evaluations
   - Review responses
   - Add recommendations

2. **Export**:
   - Export the assessment
   - File name: `waf-acme-corp-q4-2024-2024-12-08.json`

3. **Share**:
   - Email the JSON file
   - Upload to shared drive
   - Include instructions (link to this guide)

4. **Client Imports**:
   - Client opens the tool
   - Imports the JSON file
   - Reviews the assessment
   - Can add comments or export again

### Sharing with Team Members

**Collaboration Pattern**:

```
Architect A                    Architect B
    |                              |
    | 1. Create assessment         |
    | 2. Fill initial data         |
    | 3. Export JSON          ---> | 4. Import JSON
    |                              | 5. Add more data
    |                         <--- | 6. Export back
    | 7. Import updated            |
    | 8. Continue work             |
```

## Deleting Assessments

### When to Delete

- Assessment is completed and archived elsewhere
- Duplicate or test assessments
- Outdated assessments
- Cleaning up to save space

### How to Delete

1. Open Assessment Manager
2. Find the assessment
3. Click the **🗑 Delete** icon
4. Confirm deletion (cannot be undone)

**What Happens**:
- Assessment is permanently removed from localStorage
- If it was active, no assessment will be selected
- Cannot be recovered (ensure you have exports if needed)

## Data Storage

### Browser Storage

Assessments are stored in localStorage under the key: `waf-assessments`

**Structure**:
```json
{
  "assessments": {
    "assessment-123": {
      "id": "assessment-123",
      "name": "Client XYZ Assessment",
      "description": "Q4 2024 review",
      "createdAt": "2024-12-08T10:00:00.000Z",
      "updatedAt": "2024-12-08T14:30:00.000Z",
      "data": {
        "pillars": {},
        "metadata": {}
      }
    }
  },
  "currentAssessmentId": "assessment-123",
  "lastSaved": "2024-12-08T14:30:00.000Z"
}
```

### Storage Limits

**Browser localStorage Limits**:
- Chrome: ~10 MB
- Firefox: ~10 MB
- Safari: ~5 MB
- Edge: ~10 MB

**Typical Assessment Size**:
- Empty assessment: ~1 KB
- Completed assessment: ~10-50 KB
- **You can store**: 100+ assessments easily

### Storage Best Practices

1. **Regular Exports**: Export important assessments periodically
2. **Delete Old**: Remove completed/outdated assessments
3. **Naming**: Use clear, consistent names
4. **Descriptions**: Add context for future reference
5. **Backup**: Keep JSON exports in a safe location

## Browser Considerations

### Same Browser Only

Assessments are stored in the specific browser where they were created:
- Chrome assessments won't appear in Firefox
- Private/Incognito mode has separate storage
- Clearing browser data deletes assessments

### Multiple Devices

To work across devices:
1. **Export** from Device A
2. **Transfer** the JSON file (email, drive, etc.)
3. **Import** on Device B

### Browser Updates

- Assessments persist through browser updates
- Service worker updates don't affect stored data
- PWA reinstalls keep the data

## Troubleshooting

### "No assessment selected"

**Cause**: No active assessment loaded

**Solution**:
1. Open Assessment Manager
2. Create a new assessment OR
3. Load an existing assessment

### "Assessment not found"

**Cause**: Assessment was deleted or localStorage was cleared

**Solution**:
1. Import from backup JSON if available
2. Create a new assessment

### Export doesn't download

**Cause**: Browser blocking downloads or popup blocker

**Solution**:
1. Allow downloads for this site
2. Disable popup blocker temporarily
3. Try different browser

### Import fails

**Cause**: Invalid JSON file or wrong format

**Solution**:
1. Ensure file is from this tool
2. Check file isn't corrupted
3. Verify it's a valid JSON file
4. Try exporting and re-importing to test

### localStorage is full

**Cause**: Too many assessments or browser storage limit reached

**Solution**:
1. Export important assessments
2. Delete old assessments
3. Clear other website data
4. Use different browser

## Advanced Usage

### Naming Conventions

**Recommended format**: `{Client} - {Purpose} - {Date}`

Examples:
- "Acme Corp - Initial Assessment - Q4 2024"
- "TechStart - Migration Review - Dec 2024"
- "Production - Security Audit - 2024-12-08"

**Benefits**:
- Easy to find specific assessments
- Chronological sorting
- Clear purpose identification

### Organizing Assessments

Since assessments are sorted by last updated:
- **Recent work**: Appears at top
- **Touch** assessments to bump them up: Load and save
- **Archive**: Export old assessments and delete

### Template Assessments

Create reusable templates:

1. Create an assessment with standard settings
2. Export it as template: `waf-template-standard.json`
3. Import for each new client
4. Rename and customize

### Batch Operations

**Exporting Multiple**:
- Open Assessment Manager
- Export each assessment individually
- Collect all JSON files in a folder

**Importing Multiple**:
- Import one JSON at a time
- Each creates a separate assessment
- Rename if needed to avoid confusion

## Security and Privacy

### Data Privacy

- **No server**: Data never leaves your browser
- **No tracking**: No analytics or monitoring
- **No accounts**: No user authentication needed

### Sensitive Data

If assessments contain sensitive information:
1. Don't share exported JSON files insecurely
2. Consider encrypting JSON files before sharing
3. Delete assessments when no longer needed
4. Use private/incognito for extra privacy

### Access Control

- Anyone with access to your browser can view assessments
- Anyone with the exported JSON can import and view
- **Lock your computer** when away
- **Don't export sensitive assessments** to shared drives without encryption

## Best Practices Summary

✅ **DO**:
- Use descriptive assessment names
- Export regularly for backup
- Delete old/completed assessments
- Share via secure channels
- Document in descriptions

❌ **DON'T**:
- Share sensitive data insecurely
- Rely only on browser storage
- Use generic names like "Assessment 1"
- Keep unnecessary duplicates
- Clear browser data without exports

## Getting Help

If you encounter issues:
1. Check this guide
2. Review [DEVELOPMENT.md](DEVELOPMENT.md) for technical details
3. Check browser console for errors
4. Report issues to the development team

## Future Enhancements

Planned features:
- Cloud sync capability (optional)
- Assessment comparison
- Merge assessments
- Assessment templates library
- Version history
- Collaborative editing

---

For more information, see:
- [README.md](../README.md) - Main documentation
- [DEVELOPMENT.md](DEVELOPMENT.md) - Technical details
- [WAF_FRAMEWORK.md](WAF_FRAMEWORK.md) - Framework reference
