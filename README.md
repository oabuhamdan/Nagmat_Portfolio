# Nagmat Portfolio

A multi-page static portfolio for GitHub Pages — hiring-focused, content from `original_file.md`.

## Pages

- `index.html` — home (thesis, open-to-work, focus, stack)
- `about.html` — career narrative
- `projects.html` — case studies from career work
- `contact.html` — email, LinkedIn, résumé

All pages link to each other with relative paths.

## Static assets

| Path | Purpose |
|------|---------|
| `assets/profile.png` | Portrait (replace with your photo) |
| `assets/resume.pdf` | Résumé download (replace with your PDF) |
| `styles.css` | Shared styles |
| `scripts.js` | Year + scroll reveal |

## GitHub Pages

1. Push this repository to GitHub.
2. **Settings → Pages** → Source: **Deploy from a branch**.
3. Branch: `main` (or your default), folder: `/ (root)`.
4. Save. The site serves from `index.html`.

`.nojekyll` is included so static files are served without Jekyll processing.

## Local preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.
