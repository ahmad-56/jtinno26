# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Keeping data transfer low

- `HeroBg` serves one shared responsive AVIF background with a WebP fallback.
  Page gradients stay in the route components; avoid adding another background
  image there. Vite gives imported images content-hashed filenames.
- Category cards below the first four use native lazy loading. Keep the first
  visible cards eager and preserve the image dimensions to avoid layout shifts.
- PDFs load only when someone opens or downloads them. Keep document links
  behind these actions instead of embedding PDFs in iframes.
- `npm run build` and `npm run dev` regenerate `app/assetVersions.json` before
  starting. `assetUrl()` adds a content version to public PDF and sponsor URLs.
  After replacing a file while the dev server is running, run
  `node scripts/generate-asset-versions.mjs` to refresh the version.
- `vercel.json` caches Vite's hashed `/assets/` files in the browser for a year.
  Public guides, registration documents, and sponsor images use a one-day
  browser cache; new site links get a new version when the file changes.
  Existing unversioned links remain available. HTML is not given a long cache.

To regenerate the photo and logo variants, install Pillow with AVIF support and
run `python scripts/optimize-site-images.py`. Original images remain in
`app/assets/` as inputs and are not imported by the running site.

For future study guides, use Python with `pypdf>=6.10` and Pillow:

```bash
python scripts/optimize-study-guides.py --backup-dir /path/outside/public/originals
```

The script keeps an original backup and verifies text, page dimensions, and
link annotations after recompressing embedded images. It does not flatten text,
resize PDF images, or prune the PDF resource graph. To rebuild using the same
originals, add `--from-backups`; avoid recompressing already optimized PDFs.
Use `--source-dir` to process a directory containing only new guides.

For visual validation, install `pypdfium2` and run:

```bash
python scripts/check-study-guide-rendering.py --backup-dir /path/outside/public/originals --output-dir /path/outside/public/pdf-qa
```

Review the generated comparisons before deploying. The script renders every
page and rejects large pixel differences. Keep backups and QA images outside
`public/` so they are not deployed as downloadable assets.

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
# JTInnoventions26
- [https://lgsjtinnoventions.com/](https://lgsjtinnoventions.com/)
- [jtinno26.vercel.app](jtinno26.vercel.app)
