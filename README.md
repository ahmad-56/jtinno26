# JT Innoventions '26

The website for JT Innoventions '26, LGS Johar Town's three-day science olympiad. Delegates can browse the categories, download study guides, and find registration and contact details here.

The site is built with React, React Router, Vite, and Tailwind CSS.

[Visit the website](https://lgsjtinnoventions.com/) · [Vercel URL](https://jtinno26.vercel.app/)

## Running locally

You'll need Node.js and npm installed. From the project folder, run:

```bash
npm install
npm run dev
```

Open [localhost:5173](http://localhost:5173/) to see the site. Changes you save will show up in the browser while the development server is running.

## Finding your way around

| What you want to change | Where to look |
| --- | --- |
| Page layouts and content | `app/routes/` |
| Shared elements, such as the navigation and category cards | `app/components/` |
| Category descriptions, artwork, and study-guide links | `app/categoryData.js` |
| Colours, fonts, and shared styles | `app/app.css` |
| Study-guide PDFs | `public/StudyGuides/` |
| Registration documents | `public/rules/` |
| Image and PDF compression helpers | `scripts/` |

## Building and deploying

To build the site and run the production server locally:

```bash
npm run build
npm start
```

The build puts browser assets in `build/client/` and server code in `build/server/`. If you're hosting it on a Node server, include both folders along with `package.json` and `package-lock.json`, then install the production dependencies.

For Vercel, use `npm run build` as the build command. Include new images, PDFs, scripts, and `vercel.json` when committing changes. Before publishing, check the homepage, category pages, and document downloads in a preview deployment.

There's also a Dockerfile if you'd rather run the site in a container:

```bash
docker build -t jtinno26 .
docker run -p 3000:3000 jtinno26
```

## Keeping downloads small

Large backgrounds and study guides can use a lot of bandwidth. A few choices in the site help keep that down:

- `HeroBg` loads one shared background, using AVIF where supported and WebP as a fallback. Individual pages add their own gradients over it.
- The first four category cards load straight away. The rest load as visitors get closer to them. Keep image dimensions in place so cards don't jump around while loading.
- PDFs load when someone clicks Open or Download, so browsing a category doesn't also download its guide.
- Browser caching lets returning visitors reuse files they've already downloaded. In `vercel.json`, Vite's files with content hashes in their names are cached for a year; public PDFs and sponsor images are cached for a day. Pages don't get that long cache.

PDF and sponsor links include a version based on the file's contents. When a file changes, its link changes too, so visitors can get the update without clearing their browser cache. Previously shared links still work.

Both `npm run dev` and `npm run build` refresh these versions in `app/assetVersions.json`. If you replace a file while the development server is already running, refresh them yourself:

```bash
node scripts/generate-asset-versions.mjs
```

### Updating the background or logo

The original photo and logo are kept in `app/assets/`. After replacing them, regenerate the smaller versions with Python and Pillow with AVIF support:

```bash
python scripts/optimize-site-images.py
```

The site uses the generated images, so remember to include those in your commit too.

### Compressing study guides

The PDF helper needs Python, Pillow, and `pypdf>=6.10`. It compresses images inside each PDF while preserving text and page layout, and saves a backup before making changes.

For a folder of new, uncompressed guides:

```bash
python scripts/optimize-study-guides.py --source-dir ../new-guides --backup-dir ../guide-originals
```

Replace those paths with your own folders. The script updates the PDFs in the source folder; copy the checked results into `public/StudyGuides/` afterwards. Without `--source-dir`, it processes every PDF in `public/StudyGuides/`.

Start from the original PDF each time rather than repeatedly compressing an already optimized copy. To retry with the originals you've backed up, use `--from-backups` and the same source and backup folders.

To compare the site's guides with their originals, install `pypdfium2` and run:

```bash
python scripts/check-study-guide-rendering.py --backup-dir ../guide-originals --output-dir ../guide-checks
```

This checks every PDF in `public/StudyGuides/`, so the backup folder needs a matching original for each one. It creates page comparisons and flags large visual differences. Look through the comparisons before deploying, especially pages with small text or diagrams.

Keep originals and comparison images outside `public/` so they don't get published with the site. Once the checked PDFs are in place, refresh the file versions before building.
