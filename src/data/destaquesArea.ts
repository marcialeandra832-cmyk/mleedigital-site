// Projeto em destaque de cada página de área (rodapé "Por área").
// Para trocar o projeto de uma área, edite o item com o endereço da página.
import helenaMartins from '../assets/modelos/helena-martins.webp';
import cleanArquitetura from '../assets/modelos/clean-arquitetura.webp';
import figueiredoAdvocacia from '../assets/modelos/figueiredo-advocacia.webp';
import vivianeMengatto from '../assets/clientes/viviane-mengatto.webp';

export type DestaqueArea = {
  nome: string;
  area: string;
  link: string;
  tipo: 'real' | 'modelo';
  descricao: string;
  img?: string; // print do site (formato computador)
  formato: 'computador' | 'celular'; // celular mostra o site ao vivo dentro de um celular
};

export const destaquesArea: Record<string, DestaqueArea> = {
  'sites-para-clinicas': {
    nome: 'Dra. Helena Martins',
    area: 'Ginecologia e saúde da mulher',
    link: 'https://site-ginecologia-menopausa.vercel.app/',
    tipo: 'modelo',
    descricao: 'Site para ginecologista, com os tratamentos explicados de forma clara, apresentação da médica e agendamento direto pelo WhatsApp.',
    img: helenaMartins,
    formato: 'computador',
  },
  'sites-para-esteticistas': {
    nome: 'Dra. Viviane Mengatto',
    area: 'Biomedicina estética',
    link: 'https://dravivianemengatto.com.br/',
    tipo: 'real',
    descricao: 'Site da Dra. Viviane, biomédica esteta: procedimentos organizados, apresentação profissional e contato rápido pelo WhatsApp.',
    img: vivianeMengatto,
    formato: 'computador',
  },
  'sites-para-arquitetos': {
    nome: 'Clean Arquitetura',
    area: 'Arquitetura e interiores',
    link: 'https://clean-arquitetura.vercel.app/',
    tipo: 'modelo',
    descricao: 'Site para escritório de arquitetura, com os projetos em destaque, visual limpo e contato direto para orçamento.',
    img: cleanArquitetura,
    formato: 'computador',
  },
  'sites-para-advogados': {
    nome: 'Figueiredo Advocacia',
    area: 'Advocacia',
    link: 'https://figueiredoadvocacia.vercel.app/',
    tipo: 'modelo',
    descricao: 'Site para escritório de advocacia, com as áreas de atuação explicadas sem juridiquês e canal direto para o primeiro atendimento.',
    img: figueiredoAdvocacia,
    formato: 'computador',
  },
  'catalogo-digital': {
    nome: 'Matriz Grill',
    area: 'Cardápio digital',
    link: 'https://cardapio-matrizgrill.vercel.app/',
    tipo: 'real',
    descricao: 'Cardápio digital do Matriz Grill, em Videira: pratos e bebidas organizados por categoria, fácil de navegar no celular e de atualizar.',
    formato: 'celular',
  },
};
