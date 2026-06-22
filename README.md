# LumbarSeg Website

This repository contains the source code for the LumbarSeg project website.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Publishing

This repository is intended to be published with GitHub Pages, separate from the main research/code repository:

- Code: `Sol-momma/LumbarSeg`
- Website source: `lumbarseg.github.io`

The public site is intended to be served from the existing user Pages repository under:

```text
https://sol-momma.github.io/lumbarseg/
```

The Astro `base` setting is configured for that path so generated CSS, JavaScript, PDFs, and page links resolve correctly.

Build this repository, then publish the generated `dist/` contents into the `lumbarseg/` directory of `Sol-momma/Sol-momma.github.io`.
