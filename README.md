# Muhamad Fadil — Personal Website

> A concise personal website containing a CV, media, and certificates.

## Table of Contents
- Project overview
- File structure
- Local preview
- Development notes
- Contact

## Project overview

This is a small static website for Muhamad Fadil. It contains a main landing page, a CV section, media (songs), and certificates. The site is built with plain HTML, CSS, and JavaScript and is intended to be served from a local web server or via XAMPP.

## File structure

- `index.html` — Main landing page
- `css/` — Styles (style.css)
- `js/` — JavaScript (script.js)
- `cv/` — CV page (cv/index.html)
- `mysong/` — Song page (mysong/index.html)
- `img/` — Images and media (contains subfolders)
- `sertif/` — Certificates

Note: Some folders or filenames include spaces (for example, `img/P. Speaking/`). Be careful when linking or deploying — either remove spaces or use URL-encoded paths.

## Local preview

Option 1 — Open directly
- Double-click `index.html` in your browser. This works for static assets but may fail for some AJAX/local fetches.

Option 2 — Use XAMPP (recommended on Windows)
- Place the project folder inside your XAMPP `htdocs` (already located there).
- Start Apache from the XAMPP Control Panel and visit `http://localhost/<folder-name>/`.

Option 3 — Quick Python server

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Development notes
- Edit styles in `css/style.css` and scripts in `js/script.js`.
- Keep images in `img/` and reference paths without raw spaces where possible.
- If adding new pages, link them from `index.html` and update navigation accordingly.

## Contact

If you want changes to the README or help with deployment, reach out to the project owner.

---

Created for the local project at the repository root.
