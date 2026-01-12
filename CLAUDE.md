# DMR Contact List Editor - Project Context

## Overview

A professional web-based CSV editor for DMR (Digital Mobile Radio) contact lists. Built as a single-page application (SPA) with modern design principles.

## Tech Stack

- **Frontend**: Pure HTML/JavaScript (no build step)
- **Styling**: Tailwind CSS (via CDN)
- **Table Component**: DataTables jQuery plugin (via CDN)
- **Deployment**: GitHub Pages (static hosting)
- **APIs**:
  - RadioID.net (via Cloudflare Worker CORS proxy)
  - TACALLBOOK (via Cloudflare Worker CORS proxy)
  - QRZ.com (via Cloudflare Worker CORS proxy)

## Project Structure

```
DMRListEditor/
├── index.html              # Main application (self-contained)
├── README.md               # User documentation
├── CLAUDE.md               # This file
├── .copilot-instructions.md # Additional context
├── logo.png                # ARC organization logo
├── radioid-worker.js       # Cloudflare Worker for CORS proxy (optional)
└── .gitignore              # Git ignore rules
```

## Design Philosophy

### Current Design System (v2.0)

**Color Palette:**
- Background: `bg-slate-50`
- Cards: `bg-white` with `border-slate-200`
- Primary buttons: `bg-slate-700` → `hover:bg-slate-800`
- Secondary buttons: `bg-white border border-slate-200` outlined style
- Destructive: `bg-red-600` (delete only)
- Text: `text-slate-900` (primary), `text-slate-500` (secondary)
- Footer: Dark theme `bg-slate-900`

**Typography:**
- Title: `text-2xl font-semibold tracking-tight`
- Section headers: `text-lg font-semibold`
- Body: `text-sm`
- Section dividers: `text-sm font-medium uppercase tracking-wide`

**UI Patterns:**
- Clean, minimal design without gradients
- Consistent spacing with `gap-3` and `space-y-5`
- Rounded corners: `rounded-xl` for cards, `rounded-lg` for buttons
- Subtle shadows: `shadow-sm` or none
- Hover states: Simple color changes, no transforms

### Important Design Constraints

1. **NO GRADIENTS** - Use solid colors only
2. **NO EXCESSIVE HOVER EFFECTS** - Keep it professional/stable
3. **CONSISTENT BORDER RADIUS** - `rounded-xl` for cards, `rounded-lg` for buttons/inputs
4. **SUBTLE SHADOWS** - Prefer `shadow-sm` or no shadow over heavy shadows

## Key Features

### Export Formats
- **Anytone CSV**: Standard format with all fields (Radio ID, Callsign, Name, City, etc.)
- **TYT CSV**: Compressed format (Name + Radio ID)
- **TYT No GPS**: TYT format without GPS coordinates

### API Integrations
- **RadioID.net**: Fetches all Turkish DMR users
- **TACALLBOOK**: Turkish amateur radio callsign database
- **QRZ.com**: International amateur radio database

### Table Operations
- Inline editing of all fields
- Row selection with checkboxes
- City-based filtering
- Pagination (25 rows per page)
- Search functionality

## Development Notes

### File Upload
- Uses HTML5 File API
- Parses CSV client-side with JavaScript
- Auto-trims fields to 16 characters (DMR standard)

### Field Constraints
- All text fields limited to 16 characters max
- Radio ID must be numeric
- Required fields: Radio ID, Callsign, Name, City

### Browser Compatibility
- Modern browsers only (ES6+ features)
- No IE support
- Mobile responsive (Tailwind breakpoints)

## Cloudflare Workers

The project uses Cloudflare Workers as CORS proxies for external APIs:
- `radioid.bugra.workers.dev` → RadioID.net API
- `tacallbook.bugra.workers.dev` → TACALLBOOK API
- `qrz.bugra.workers.dev` → QRZ.com API

## Deployment

1. Push to `main` branch
2. GitHub Pages automatically deploys from `main`
3. Live at: https://dmr.radio.org.tr

## Localization

- Language: Turkish (tr)
- All UI text in Turkish
- DataTables localized to Turkish

## Common Tasks

### Adding a New Export Format
1. Add button in HTML action buttons section
2. Create `exportXYZ()` function in JavaScript
3. Wire up event listener: `$('#exportXyz').on('click', exportXYZ);`

### Modifying Table Columns
- Edit `columns` array in `initializeTable()` function
- Update CSV export headers if needed

### Styling Changes
- Edit Tailwind classes directly in HTML
- Custom styles in `<style>` tag for popup and DataTable overrides

## Contact

**ARC - Amatör Radyocular Derneği**
- Website: https://radio.org.tr
- Email: bilgi@radio.org.tr
- GitHub: https://github.com/YM1KTC/DMRListEditor
