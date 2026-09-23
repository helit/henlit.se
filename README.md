# henlit.se

A digital business card, built as a fake terminal. It reads as a plain card if
you never touch the keyboard, and takes typed commands if you do.

One page, plus a CV download.

## Running it

```sh
npm install
npm run dev
```

## Deploying

Two steps, because the source and the published site live on different
branches. Pushing `main` on its own changes nothing that visitors see.

```sh
git push origin main   # source
npm run deploy         # builds, then pushes dist/ to the gh-pages branch
```

`npm run deploy` runs `npm run build` first, which runs the checks below and
then copies `index.html` to `404.html`. GitHub Pages serves that file at the
requested URL for any path it has no file for, which is what lets routes
survive a hard refresh. `public/CNAME` keeps the custom domain attached.

## Adding your CV

Drop the PDF in and redeploy. `public/` is source and gets copied into the
build; `dist/` is generated output and is wiped every time.

```sh
cp ~/my-cv.pdf public/cv.pdf
```

## Checks

`npm run check` runs before every build, so none of these can reach production:

- `check-copy.mjs` fails on an em dash (U+2014) anywhere in the source.
- `check-contrast.mjs` reads the palette out of `theme.ts` and fails below
  WCAG AA (4.5:1) for any colour that carries text.
- `check-assets.mjs` fails if a file the site links to is missing from
  `public/`, so the CV link can never ship as a 404.

## How it fits together

```
src/
  system/
    types.ts        page and block types
    filesystem.ts   all site content, as data
    pages.ts        page lookup, plus /help and /sitemap built from the tree
    commands.ts     command registry and parser
    router.ts       History API, about 35 lines
    selection.ts    maps a page's links onto screenfuls; pure
    layout.ts       the compact-layout media query
    browser.ts      downloads, boot gate, document metadata, window keydown
  components/
    Screen/         the glass, scanlines, corner readouts, the 4:3 stage
    Views/          block renderer, and the pagination that feeds it
    Terminal/       the prompt line
    Boot/           first-visit boot sequence
```

Content is data, not JSX. `filesystem.ts` is the single source of truth: the
router, the command parser, the page tree and the renderer all read the same
structure, so adding a page back means adding one entry.

Every navigable row is a real `<a href>`, so tapping, middle-clicking and
crawling all work. The command line is a layer on top, never the only way in.

## Layout

The glass fills the browser. Inside it, an invisible 4:3 stage holds the
readouts, the content and the prompt, so the page composes like a CRT without
anything being drawn around it.

Wide screens never scroll. Content that doesn't fit is measured off-screen and
packed into screenfuls, turned with the left and right arrow keys. Selection
spans the whole page rather than the screenful on view, so arrowing past the
last link on screen turns to the next one instead of dead-ending.

Below 640px there is no keyboard to turn pages with, so the 4:3 constraint and
the pagination both switch off and it becomes an ordinary scrolling document.

## Commands

`help` lists them. Arrow keys move the selection, `ENTER` opens, `TAB`
completes when there is something to complete and otherwise moves focus
normally, `ESC` clears, `ctrl+p` / `ctrl+n` walk command history.

## Accessibility

Each page carries an `<h1>` for assistive technology that the visual design has
no room for. The wordmark is `aria-hidden`, being several hundred block
characters. Arrow selection sets `aria-current` and is announced through a live
region, because focus deliberately stays in the command input. Contrast is
enforced by a build check rather than by good intentions. Motion stops under
`prefers-reduced-motion`.

## Effects

The CRT look is pure CSS: scanlines, vignette, phosphor bloom and flicker all
live in one non-interactive overlay, so nothing costs a frame of JavaScript.
