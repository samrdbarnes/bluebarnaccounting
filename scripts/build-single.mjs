// Builds the React app and writes one self-contained HTML file (JS, CSS, logo and favicon inlined).
// Usage: npm run build:single [-- path/to/output.html]
import { build } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, readdirSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'

const out = resolve(process.argv[2] || 'dist-single/blue-barn-accounting.html')
const tmp = resolve('dist-single/.tmp')
rmSync(tmp, { recursive: true, force: true })

await build({
  plugins: [react()],
  logLevel: 'warn',
  build: { outDir: tmp, emptyOutDir: true, assetsInlineLimit: 100_000_000, cssCodeSplit: false, copyPublicDir: false },
})

let html = readFileSync(join(tmp, 'index.html'), 'utf8')
const assets = join(tmp, 'assets')
const read = (ext) => readdirSync(assets).filter((f) => f.endsWith(ext)).map((f) => readFileSync(join(assets, f), 'utf8'))

html = html.replace(/<link rel="stylesheet"[^>]*>/g, '')
html = html.replace(/<script type="module"[^>]*><\/script>/g, '')
const css = read('.css').join('\n')
const js = read('.js').join('\n').replace(/<\/script/gi, '<\\/script')
const favicon = 'data:image/svg+xml;base64,' + readFileSync('public/favicon.svg').toString('base64')
html = html.replace(/href="\/favicon\.svg"/, () => `href="${favicon}"`)
// function replacers: the bundle contains `$&`-style sequences that string replacements would expand
html = html.replace('</head>', () => `<style>${css}</style>\n</head>`)
html = html.replace('</body>', () => `<script type="module">${js}</script>\n</body>`)

mkdirSync(dirname(out), { recursive: true })
writeFileSync(out, html)
rmSync(tmp, { recursive: true, force: true })
console.log('wrote', out, (html.length / 1024).toFixed(0) + ' kB')
