# AdminTech Norway (Static Rebuild)

Static HTML/CSS/JS rebuild of `admintech.no`, mirrored from the live site and prepared for GitHub + Railway deployment.

## Project Structure

- `src/site/` – HTML pages for all public routes
- `public/assets/` – downloaded assets (images, fonts, JS bundles)
- `dist/` – build output (generated)
- `nginx.conf` + `Dockerfile` – Railway static deployment

The previous Framer/Unframer Vite export remains in `src/` but is not used by the static rebuild.

## Build

```bash
npm run build:static
```

This copies `src/site/` and `public/` into `dist/`.

## Local Preview

```bash
cd dist
python3 -m http.server 5173
```

Then visit `http://localhost:5173`.

## Railway Deploy

Builds a static site and serves it with Nginx using the included `Dockerfile` and `nginx.conf`.
