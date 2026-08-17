# frxctured.com

Personal landing page / link hub for the online alias **@frxctured**. Static site, vanilla HTML/CSS/JS, no build step or framework required.

## Features

- Random inspirational quote shown in the header on each page load
- Reusable modal dialog component (`createDialog`) with positive/negative button styling
- Optional CRT-style scanline overlay effect
- Links out to Roblox, Discord, and GitHub profiles

## Structure

```
src/
├── index.html         # Page markup
├── css/
│   └── style.css      # Styling, dialog, and scanline effect
├── js/
│   ├── main.js        # Entry point — wires up quote + scanlines
│   ├── dialogs.js     # Dialog/modal creation helper
│   └── quotes.js      # Quote list + random picker
└── assets/
    └── frxctured.png  # Profile image
```

## Running locally

Serve the `src` directory with any static file server, e.g.:

```bash
npx serve src
```

Then open the printed local URL in your browser.
