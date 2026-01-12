# DMR Contact List Editor - Project Context

## Overview

A professional web-based CSV editor for DMR (Digital Mobile Radio) contact lists. Built as a single-page application (SPA) with modern design principles. This file provides comprehensive context for AI assistants working on this codebase.

## Tech Stack

- **Frontend**: Pure HTML/JavaScript (no build step required)
- **Styling**: Tailwind CSS (via CDN) + Custom CSS
- **Table Component**: DataTables jQuery plugin (via CDN)
- **Deployment**: GitHub Pages (static hosting)
- **APIs**:
  - RadioID.net (via Cloudflare Worker CORS proxy)
  - TACALLBOOK (via Cloudflare Worker CORS proxy)
  - QRZ.com (via Cloudflare Worker CORS proxy)

## Project Structure

```
DMRListEditor/
├── index.html              # Main application (self-contained SPA)
├── README.md               # User documentation
├── CLAUDE.md               # This file (AI context)
├── .copilot-instructions.md # Additional context
├── logo.png                # ARC organization logo
├── radioid-worker.js       # Cloudflare Worker for CORS proxy (optional)
└── .gitignore              # Git ignore rules
```

## Design Philosophy

### Current Design System (v2.1)

**Color Palette:**
- Background: `bg-slate-50`
- Cards: `bg-white` with `border-slate-200`
- Primary buttons: `bg-slate-700` → `hover:bg-slate-800`
- Secondary buttons: `bg-white border border-slate-200` outlined style
- Destructive: `bg-red-600` (delete only)
- Text: `text-slate-900` (primary), `text-slate-500` (secondary)
- Footer: Dark theme `bg-slate-900`

**Accent Color (for actions/highlights):**
- Primary accent: `#0b6b64` (teal) - used for links, active states
- Strong accent: `#074b47` (darker teal)
- Accent soft: `rgba(11, 107, 100, 0.12)` (backgrounds)

**Typography:**
- Title: `text-2xl font-semibold tracking-tight`
- Section headers: `text-lg font-semibold`
- Body: `text-sm`
- Section dividers: `text-sm font-medium uppercase tracking-wide`

**UI Patterns:**
- Clean, minimal design with professional aesthetics
- Consistent spacing with `gap-3` and `space-y-5`
- Rounded corners: `rounded-xl` for cards, `rounded-lg` for buttons
- Subtle shadows: `shadow-sm` or none
- Hover states: Simple color changes, subtle transforms

### Important Design Constraints

1. **NO GRADIENTS** - Use solid colors only (except in specific button hover states)
2. **SUBTLE HOVER EFFECTS** - Keep it professional, avoid excessive animations
3. **CONSISTENT BORDER RADIUS** - `rounded-xl` (22px) for cards, `rounded-lg` (14px) for buttons/inputs
4. **SUBTLE SHADOWS** - Prefer `shadow-sm` over heavy shadows

## Key Features

### Export Formats
- **Anytone CSV**: Standard format with all fields (Radio ID, Callsign, Name, City, State, Country, Remarks, Call Type, Call Alert)
- **TYT CSV**: Compressed format (Callsign + Name + Radio ID with Call Type 2)
- **TYT No GPS**: TYT format without GPS coordinates (includes NickName field)

### API Integrations

#### RadioID.net
- **Purpose**: Fetches all Turkish DMR users
- **Pagination**: Fully supports pagination (fetches all 38 pages, ~7,500 users)
- **Progress**: Shows progress bar during fetch
- **Multi-select**: Uses both `country=Turkiye` and `country=Türkiye` to catch spelling variations
- **Proxy**: `radioid.bugra.workers.dev/api/dmr/user/`

#### TACALLBOOK
- **Purpose**: Turkish amateur radio callsign database
- **Data**: Callsign, name, address, phone, photo
- **Proxy**: `tacallbook.bugra.workers.dev/{callsign}`

#### QRZ.com
- **Purpose**: International amateur radio database
- **Data**: Callsign, name, address, grid, license class, photo
- **Proxy**: `qrz.bugra.workers.dev/qrz/{callsign}`

### Table Operations
- **Inline editing**: All fields editable directly in table
- **Row selection**: Checkboxes for multi-row operations
- **City filtering**: Dropdown with all 81 Turkish provinces + Cyprus
- **Pagination**: 25/50/100/200 rows per page
- **Search**: Global search across all columns
- **Grouping**: Optional city-based grouping

## Development Notes

### File Upload
- Uses HTML5 File API
- Parses CSV client-side with JavaScript
- Auto-trims fields to 16 characters (DMR standard)
- Auto-assigns sequential row numbers

### Field Constraints
- All text fields limited to 16 characters max
- Radio ID must be numeric
- Required fields: Radio ID, Callsign, Name, City
- Call Type defaults to "Private Call"
- Call Alert defaults to "None"

### Browser Compatibility
- Modern browsers only (ES6+ features)
- No IE support
- Mobile responsive (Tailwind breakpoints)
- Works offline after initial load

### Turkish City Handling
- 81 official Turkish provinces (with plate codes 1-81)
- 3 Cyprus cities (ID 501-503)
- Normalization function for Turkish characters (Ç→C, Ğ→G, İ→I, Ö→O, Ş→S, Ü→U)
- Title case conversion for city names

## Recent Changes (v2.1)

### RadioID API Pagination Fix
**Issue**: Only fetched first 200 results (page 1 of 38)
**Solution**: Added pagination loop to fetch all pages
**Impact**: Now fetches all ~7,500 Turkish DMR users

### Progress Visualization
**Added**: Progress bar with percentage during RadioID fetch
**Shows**: "RadioID.net verileri çekiliyor... (X/38 sayfa)"
**Functions**: `showProgressAlert()`, `updateProgressAlert()`, `removeProgressAlert()`

### Action Buttons Redesign
**Changed**: Replaced emoji icons (👀🔍📡) with professional SVG icons
**Styling**:
- 32x32px rounded buttons (8px border-radius)
- Color-coded: Purple (Query), Orange (KEGM), Green (QRZ)
- Smooth hover effects with lift animation
- Each button has unique color scheme

### Row Highlighting Fix
**Issue**: `row-new` background only colored button area
**Solution**: Added `createdRow` callback to apply class to `<tr>` element
**Result**: Entire row now gets green background for new records

## Cloudflare Workers

The project uses Cloudflare Workers as CORS proxies for external APIs:
- `radioid.bugra.workers.dev` → RadioID.net API
- `tacallbook.bugra.workers.dev` → TACALLBOOK API
- `qrz.bugra.workers.dev` → QRZ.com API

These workers handle CORS headers and cache responses for better performance.

## Deployment

1. Push to `main` branch
2. GitHub Pages automatically deploys from `main`
3. Live at: https://dmr.radio.org.tr
4. No build step required - static HTML file

## Localization

- Language: Turkish (tr)
- All UI text in Turkish
- DataTables localized to Turkish
- Turkish character support throughout

## Common Tasks

### Adding a New Export Format
1. Add button in HTML export buttons section (around line 740)
2. Create `exportXYZ()` function in JavaScript
3. Wire up event listener: `$('#exportXyz').on('click', exportXYZ);`
4. Use `table.rows().data().toArray()` to get current data
5. Collect input values from table cells: `rowElement.querySelectorAll('input[type="text"]')`

### Modifying Table Columns
- Edit `columns` array in `initializeTable()` function (starts around line 1410)
- Update `columnDefs` for custom rendering
- Update CSV export headers if needed
- Remember to update `createdRow` callback if adding new data properties

### Styling Changes
- Edit Tailwind classes directly in HTML
- Custom styles in `<style>` tag for DataTables overrides
- Action buttons use `.action-btn` base class with modifiers (`.btn-query`, `.btn-kegm`, `.btn-qrz`)
- Table rows use `.row-new` for highlighting new records

### Adding API Integration
1. Add Cloudflare Worker for CORS proxy
2. Create fetch function with error handling
3. Add progress visualization for long-running operations
4. Handle pagination if API supports it
5. Update documentation in CLAUDE.md

## Code Conventions

### JavaScript
- Use jQuery for DOM manipulation (DataTables dependency)
- Use `async/await` for API calls
- Use template literals for HTML generation
- Use Turkish variable names for UI-facing code
- Use English for technical/internal code

### CSS
- Use Tailwind utility classes for most styling
- Custom CSS for DataTables overrides
- BEM-like naming for custom components
- CSS custom properties (variables) for theming

### HTML
- Semantic HTML5 elements
- Turkish language attribute: `<html lang="tr">`
- Accessible markup (aria-labels, titles)
- Responsive design with Tailwind breakpoints

## Known Issues & Limitations

1. **RadioID API Rate Limiting**: Multiple rapid requests may be blocked
2. **Large CSV Files**: Files >10MB may cause browser slowdown
3. **Mobile Editing**: Inline editing can be difficult on small screens
4. **Turkish Character Sorting**: City dropdown may not sort correctly for Turkish locale

## Testing

### Manual Testing Checklist
- [ ] CSV upload with valid file
- [ ] CSV upload with invalid/malformed file
- [ ] Inline editing of all fields
- [ ] Row selection and deletion
- [ ] City filtering
- [ ] RadioID.net fetch (check progress bar)
- [ ] Callsign details popup
- [ ] All export formats
- [ ] Browser console for errors

### API Testing
```bash
# Test RadioID proxy
curl "https://radioid.bugra.workers.dev/api/dmr/user/?country=Turkiye&page=1"

# Test TACALLBOOK proxy
curl "https://tacallbook.bugra.workers.dev/TA1ABC"

# Test QRZ proxy
curl "https://qrz.bugra.workers.dev/qrz/TA1ABC"
```

## Contact

**ARC - Amatör Radyocular Derneği**
- Website: https://radio.org.tr
- Email: bilgi@radio.org.tr
- GitHub: https://github.com/YM1KTC/DMRListEditor

## Version History

- **v2.1** (2026-01): RadioID pagination fix, progress visualization, action buttons redesign
- **v2.0** (2025): UI redesign, new styling system
- **v1.x**: Initial releases

---

*Last updated: 2026-01-13*
