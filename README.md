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

The public site is served by Cloudflare Workers static assets at:

```text
https://lumbarseg.sol-momma.com/
```

Deploy with `npm run deploy:cf` (builds with `SITE_BASE=/` and runs `wrangler deploy`).
The legacy copy at `https://sol-momma.github.io/lumbarseg/` (built with the default `base: "/lumbarseg"`) is still online.
