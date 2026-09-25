// Sites reais usados no topo e na seção de projetos da página inicial.
// Para adicionar uma cliente: coloque a capa em src/assets/clientes/ e acrescente um item aqui.
import sorayAbbud from '../assets/clientes/soray-abbud.webp';
import mariaJunqueira from '../assets/clientes/maria-junqueira.webp';
import danielleCarvao from '../assets/clientes/danielle-carvao.webp';
import vivianeMengatto from '../assets/clientes/viviane-mengatto.webp';
import matrizGrill from '../assets/clientes/matriz-grill.webp';

export type ClienteDestaque = {
  cliente: string;
  area: string;
  img: string;
  link?: string; // endereço do site no ar
  slug?: string; // página "Como foi feito" no portfólio
};

export const clientesDestaque: ClienteDestaque[] = [
  { cliente: 'Dra. Soray Abbud', area: 'Estética avançada', img: sorayAbbud, link: 'https://www.drasorayabbud.com.br/', slug: 'dra-soraya-abbud' },
  { cliente: 'Dra. Maria Junqueira', area: 'Biomedicina estética', img: mariaJunqueira, link: 'https://dramariajunqueira.vercel.app/', slug: 'dra-maria-junqueira' },
  { cliente: 'Dra. Danielle Carvão', area: 'Odontologia e rejuvenescimento facial', img: danielleCarvao, link: 'https://dradanicarvao.com.br/' },
  { cliente: 'Dra. Viviane Mengatto', area: 'Estética avançada', img: vivianeMengatto, link: 'https://dra-viviane-mengatto.vercel.app/', slug: 'dra-viviane-mengatto' },
  { cliente: 'Matriz Grill', area: 'Restaurante e bar', img: matrizGrill, link: 'https://matrizgrillvideira.vercel.app/', slug: 'matriz-grill' },
];
