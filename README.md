# ITA website

International Testing Alliance. Next.js (App Router), TypeScript, Tailwind CSS 3, static export.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # writes the site to out/
```

Upload the contents of `out/` to the web server.

## Layout

- `src/app` routes. `/` is the homepage, `[...slug]` serves the other pages listed in `published`.
- `src/components/sections` one file per page section; `index.tsx` maps a section name to its component.
- `src/data` all page content. `pages.ts` lists which sections each page shows and in what order.
- `public/images`, `public/film` photos and video.

## Notes

- The enquiry forms open the visitor's mail app (`src/lib/mailto.ts`); replace with a form endpoint when one is chosen.
- Pages not in `published` (`src/app/[...slug]/page.tsx`) return 404.
