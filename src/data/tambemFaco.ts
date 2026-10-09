// Seção "Também faço" da página de portfólio: catálogos, cardápios e apps.
// Catálogo novo: coloque o print do celular em src/assets/catalogos/ e acrescente um item em "catalogos".
// App novo: acrescente um item em "apps" (o "slug" é o endereço da página do app em /apps/).
import cardapioMatrizGrill from '../assets/catalogos/cardapio-matriz-grill.webp';
import nailFinance from '../assets/apps/nail-finance.webp';
import elasticFit from '../assets/apps/elastic-fit.webp';

export type Catalogo = { nome: string; tipo: string; img: string; link: string };
export type AppPortfolio = { nome: string; resumo: string; img: string; slug: string };

export const catalogos: Catalogo[] = [
  { nome: 'Matriz Grill', tipo: 'Cardápio digital de cliente', img: cardapioMatrizGrill, link: 'https://cardapio-matrizgrill.vercel.app/' },
];

export const apps: AppPortfolio[] = [
  { nome: 'Nail Finance Pro', resumo: 'Controle financeiro e precificação para nail designers.', img: nailFinance, slug: 'nail-finance-pro' },
  { nome: 'Elastic Fit', resumo: 'Treinos com elásticos para mulheres 40+.', img: elasticFit, slug: 'elastic-fit' },
];
