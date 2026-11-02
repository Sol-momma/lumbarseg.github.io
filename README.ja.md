[English](README.md) | **日本語**

# LumbarSeg Website

このリポジトリは、LumbarSeg プロジェクトのウェブサイトのソースコードです。

## 開発

```bash
npm install
npm run dev
```

## ビルド

```bash
npm run build
```

## 公開

このリポジトリは、研究・実装の本体リポジトリとは別に、GitHub Pages で公開することを想定しています。

- コード: `Sol-momma/LumbarSeg`
- ウェブサイトのソース: `lumbarseg.github.io`

公開サイトは、Cloudflare Workers の静的アセットとして次の URL で配信しています。

```text
https://lumbarseg.sol-momma.com/
```

デプロイは `npm run deploy:cf` です（`SITE_BASE=/` でビルドしたあと、`wrangler deploy` を実行します）。
旧コピー `https://sol-momma.github.io/lumbarseg/`（既定の `base: "/lumbarseg"` でビルドしたもの）も、まだ公開されています。
