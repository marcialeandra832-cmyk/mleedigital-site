// Gera um index.html pronto para cada página do sitemap.
// Assim o Google, o ChatGPT e outros robôs leem o conteúdo sem precisar rodar JavaScript.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const raiz = process.cwd();
const dist = path.join(raiz, 'dist');
const { render } = await import(pathToFileURL(path.join(raiz, 'dist-ssr', 'entry-server.js')).href);

const SITE = 'https://www.mleedigital.com.br';
const modelo = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');
// Cópia vazia do app para endereços sem página pronta (o vercel.json manda para ela)
fs.writeFileSync(path.join(dist, 'app.html'), modelo);
const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf-8');
const rotas = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);

const escapar = (t) => String(t).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const trocarMeta = (html, attr, nome, valor) => {
  const re = new RegExp(`<meta ${attr}="${nome}" content="[^"]*"\\s*/?>`);
  const tag = `<meta ${attr}="${nome}" content="${escapar(valor)}" />`;
  return re.test(html) ? html.replace(re, tag) : html.replace('</head>', `    ${tag}\n  </head>`);
};

let geradas = 0;
const falhas = [];
for (const rota of rotas) {
  try {
    const { html, seo } = render(rota);
    let pagina = modelo.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    if (seo) {
      const titulo = seo.title.includes('MLee Digital') ? seo.title : `${seo.title} | MLee Digital`;
      const url = `${SITE}${seo.canonicalPath ?? rota}`;
      pagina = pagina.replace(/<title>[^<]*<\/title>/, `<title>${escapar(titulo)}</title>`);
      pagina = trocarMeta(pagina, 'name', 'description', seo.description);
      pagina = trocarMeta(pagina, 'property', 'og:title', titulo);
      pagina = trocarMeta(pagina, 'property', 'og:description', seo.description);
      pagina = trocarMeta(pagina, 'property', 'og:url', url);
      pagina = trocarMeta(pagina, 'property', 'og:type', seo.ogType ?? 'website');
      if (seo.ogImage) pagina = trocarMeta(pagina, 'property', 'og:image', seo.ogImage);
      pagina = pagina.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}" />`);
      if (seo.schemaJson) {
        const json = JSON.stringify(seo.schemaJson).replace(/</g, '\u003c');
        pagina = pagina.replace('</head>', `    <script type="application/ld+json" id="mlee-json-ld">${json}</script>\n  </head>`);
      }
    }

    const destino = path.join(dist, rota, 'index.html');
    fs.mkdirSync(path.dirname(destino), { recursive: true });
    fs.writeFileSync(destino, pagina);
    geradas++;
  } catch (erro) {
    falhas.push(`${rota}: ${erro.message}`);
  }
}

console.log(`Prerender: ${geradas} de ${rotas.length} páginas geradas.`);
if (falhas.length) {
  // Uma página que falha continua funcionando como antes (só com JavaScript), então o build não para
  console.warn('Páginas sem prerender:\n' + falhas.join('\n'));
}
