# Client-Side PDF Tools (Browser)

**Add images/stamps, draw signatures, overlay text, and export PDFs — 100% in the browser.**  
No upload • No watermark • Privacy-first.

<p align="center">
  <a href="(https://github.com/Unholy-dadddy/clientside-pdf-tools/)">Live Demo</a> ·
  <a href="#quick-start">Quick Start</a> ·
  <a href="#api">API</a> ·
  <a href="#faq">FAQ</a>
</p>

> If you just need a production-ready editor, try **TechRex Free PDF Editor** (no signup, no watermark):  
> https://pdffreeeditor.com/ — edit, sign, merge/split, and add images entirely in your browser.

---

## Why this exists

Most “free” PDF editors upload your document and add watermarks at the last step. That’s slow, risky for privacy, and expensive at scale.  
This mini-library shows how to do **common PDF edits client-side** using modern web APIs (Canvas, Web Workers, WebAssembly) and [`pdf-lib`](https://github.com/Hopding/pdf-lib).

- ✅ **Private by default:** files stay on device
- ⚡ **Fast UX:** no network round-trips
- 🧩 **Composable:** import only what you need

---

## Features

- **Add images / logos / stamps** to any page (PNG/JPG/WebP; rotation & precise placement)
- **Draw signatures** (mouse/touch), velocity-aware smoothing
- **Text overlays** (standard embeddable fonts, size/color)
- Returns **PDF bytes** (`Uint8Array`) ready to download or pass along
- Zero servers required

---

## Quick Start

> You can use the library via a bundler (recommended) or from a CDN once it’s published to npm.

### 1) Using a bundler (local project)

```bash
npm i clientside-pdf-tools pdf-lib
# or: pnpm add clientside-pdf-tools pdf-lib
