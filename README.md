# AdminTech Norway (React Rebuild)

Premium Next.js rebuild of `admintech.no` with the same content, pages, and color palette.

## Project Structure

- `app/` – Next.js App Router pages
- `components/` – shared UI building blocks
- `content/` – extracted content from the legacy site
- `public/assets/` – images/fonts

## Development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production

```bash
npm run build
npm run start
```

## Railway Deploy

Use the provided `Dockerfile` configured for Next.js.
