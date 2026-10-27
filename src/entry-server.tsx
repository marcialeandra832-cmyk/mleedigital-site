import { renderToString } from 'react-dom/server';
import { App } from './App';
import { seoPrerender } from './components/layout/SEOHead';

// Usado só no build: gera o HTML de uma rota e devolve os dados de SEO que a página definiu
export function render(url: string) {
  seoPrerender.atual = null;
  const html = renderToString(<App url={url} />);
  return { html, seo: seoPrerender.atual };
}
