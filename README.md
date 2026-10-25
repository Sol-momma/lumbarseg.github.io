# LumbarSeg Website

腰椎MRIセグメンテーション研究 LumbarSeg のプロジェクトページ（Astro）のソースです。

Source for the project page of [LumbarSeg](https://github.com/Sol-momma/LumbarSeg), a research project on four-class lumbar spine MRI segmentation (vertebrae, spinal canal and intervertebral discs) with a Modified U-Net.

Live: https://sol-momma.github.io/lumbarseg/

![LumbarSeg project page](docs/images/home.png)

## What the site contains

- Overview of the target paper (Ahmed et al., 2025) and the SPIDER dataset
- Data flow, method, label mapping and metrics sections
- Reproduction results and resources (paper and dataset PDFs)
- Study notes page
- English and Japanese pages (`/en`, `/ja`)

## Usage

Node.js 22 and npm are used (same as CI).

```sh
git clone https://github.com/Sol-momma/lumbarseg.github.io.git
cd lumbarseg.github.io
npm ci
npm run dev       # local dev server
npm run build     # static output in dist/
npm run format:check
```

The Astro `base` is `/lumbarseg`, so pages, CSS, JavaScript and PDFs resolve under `https://sol-momma.github.io/lumbarseg/`.

## Deployment

[.github/workflows/pages.yml](.github/workflows/pages.yml) builds the site on every pull request and deploys `dist/` to GitHub Pages on pushes to `main`.

## Project structure

```text
src/pages/        # index, en, ja, notes
src/components/   # page sections (data flow, metrics, timeline, glossary ...)
src/content/      # MDX: paper memo (ja / en) and learning notes
public/           # hero image, paper PDFs, small client script
```

## Tech stack

- [Astro](https://astro.build/) with MDX, static output
- Prettier
- GitHub Pages and GitHub Actions

## License

No license file for the site source. The paper and dataset PDFs in `public/papers/` belong to their authors.
