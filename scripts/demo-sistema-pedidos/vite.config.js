// Build da demonstração: troca o Firebase por um banco em memória e publica em uma subpasta do site da MLee.
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
const raiz = fileURLToPath(new URL('..', import.meta.url))
const fake = fileURLToPath(new URL('../testes/fake.mjs', import.meta.url))
const semConfig = fileURLToPath(new URL('./sem-config.js', import.meta.url))
const BASE = '/demonstracao/sistema-de-pedidos/'

// caminhos fixos das imagens (/logo.webp, /costela.webp) passam a apontar para a subpasta
const caminhos = {
  name: 'caminhos-demo',
  transform(code, id) {
    if (/src\/(util|dados)\.js/.test(id)) return code.replace(/@resenhaebrasa\.com/g, '@demonstracao').replace(/5549991443679/g, '5500000000000')
    if (!/src\/(telas|comum)/.test(id)) return
    return code.replace(/(["'`])\/(logo\.webp|costela\.webp|og-logo\.jpg)/g, `$1${BASE}$2`)
  },
  transformIndexHtml: { order: 'pre', handler: (html) => html
    .replace('/src/main.jsx', '/demo/demo-main.jsx')
    .replaceAll('href="/logo.webp"', `href="${BASE}logo.webp"`)
    .replace('content="/og-logo.jpg"', `content="${BASE}og-logo.jpg"`)
    .replace('<title>Resenha e Brasa · Faça seu pedido</title>', '<title>Demonstração · Sistema de pedidos | MLee Digital</title><meta name="robots" content="noindex">') },
}

export default defineConfig({
  root: raiz,
  base: BASE,
  plugins: [react(), caminhos],
  build: { outDir: fileURLToPath(new URL('../dist-demo', import.meta.url)), emptyOutDir: true, target: 'es2022' },
  define: { 'import.meta.env.VITE_DEMO': '"1"' },
  resolve: { alias: [
    { find: 'firebase/firestore', replacement: fake },
    { find: 'firebase/auth', replacement: fake },
    { find: 'firebase/app', replacement: fake },
    { find: /.*\/firebase-config\.js$/, replacement: semConfig },
  ] },
})
