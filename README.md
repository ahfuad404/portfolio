# Abir Hasan Fuad — Personal Portfolio (GitHub Pages)

A modern, minimal, dark-themed personal portfolio website built with **HTML + CSS + vanilla JS**.  
Designed to be **static** and deployable directly on **GitHub Pages**.

## Files

- `index.html` — Main page
- `styles.css` — Styling (dark theme + glass cards + responsive)
- `script.js` — Animations, mobile nav, scroll-to-top, year
- `assets/profile.jpg` — Your profile photo (add this)
- `assets/qr.png` — Your QR image (add this)

## Image placement (required)

1. Create a folder named `assets/` in the project root.
2. Add your images:
   - `assets/profile.jpg` (your portrait photo)
   - `assets/qr.png` (your QR code image)

> If your files use different names (e.g., `.png`), update the paths in `index.html`.

## Deploy to GitHub Pages

### Option A: Deploy from `main` branch (root)

1. Create a new GitHub repository (e.g., `abir-portfolio`).
2. Upload all files and folders (`index.html`, `styles.css`, `script.js`, `assets/`, `README.md`) to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Save. Wait 1–2 minutes.
6. Your site will be live at:
   - `https://YOUR_USERNAME.github.io/REPO_NAME/`

### Option B: Deploy with `/docs` folder

1. Move `index.html`, `styles.css`, `script.js`, and `assets/` into a `docs/` folder.
2. Go to **Settings → Pages**.
3. Select:
   - **Branch**: `main`
   - **Folder**: `/docs`
4. Save.

## Local preview

Just open `index.html` in your browser, or use a simple local server:

- VS Code: install “Live Server” and click **Go Live**
- Or any static server of your choice

## Customize

- Text content: `index.html`
- Colors and spacing: `styles.css` (`:root` variables)
- Social links: `index.html` (Contact section + Footer icons)
