// Estudo de caso da Dra. Soray Abbud (página /portfolio/dra-soraya-abbud/).
import { Caso } from '../../types';
import telaConteudos from '../../assets/casos/soray/tela-conteudos.webp';
import telaDepoimentos from '../../assets/casos/soray/tela-depoimentos.webp';
import telaAssinatura from '../../assets/casos/soray/tela-assinatura.webp';
import celularCapa from '../../assets/casos/soray/celular-capa.webp';
import celularDepoimentos from '../../assets/casos/soray/celular-depoimentos.webp';
import celularConteudos from '../../assets/casos/soray/celular-conteudos.webp';
import celularAssinatura from '../../assets/casos/soray/celular-assinatura.webp';

export const casoSoray: Caso = {
  resumo: 'Site para a Dra. Soray Abbud, de odontologia estética e estética avançada, em Botafogo, no Rio de Janeiro.',
  ficha: [
    { rotulo: 'Área', valor: 'Odontologia estética' },
    { rotulo: 'Local', valor: 'Botafogo, Rio de Janeiro' },
    { rotulo: 'Plano', valor: 'Site Essencial' },
  ],
  palco: { fundo: '#4A4646', moldura: '#2F2C2C' },
  video: { src: '/showreel/soray-desktop.mp4', poster: '/showreel/soray-desktop.jpg' },
  capaCelular: celularCapa,
  contexto: [
    'A Dra. Soray trabalha com harmonização facial, lentes e facetas, clareamento, bioestimuladores de colágeno e reabilitação oral, em Botafogo, no Rio de Janeiro.',
    'O site mostra os resultados dela por categoria, os depoimentos das pacientes e uma explicação curta de cada tratamento, com o botão de agendar avaliação ao longo da página.',
  ],
  cores: {
    texto: 'Cinza quente e rosé sobre um fundo quase branco, para um visual leve e calmo.',
    paleta: [
      { nome: 'Cinza quente', hex: '#4A4646', escura: true },
      { nome: 'Cinza', hex: '#67686A', escura: true },
      { nome: 'Rosé', hex: '#D4A392' },
      { nome: 'Off-white', hex: '#FDFBF7' },
    ],
  },
  fonte: {
    nome: 'Cinzel',
    uso: 'Nos títulos, uma letra de estilo clássico, toda em maiúsculas. Nos textos, Montserrat.',
    amostra: 'Cada rosto exige estratégia',
    css: '"Cinzel", serif',
    link: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400&display=swap',
    peso: 400,
  },
  telas: [
    {
      img: telaConteudos,
      titulo: 'Conteúdos sobre os tratamentos',
      texto: 'Seis cartões explicam em poucas linhas cada tratamento, de lentes e facetas a bioestimuladores de colágeno.',
    },
    {
      img: telaDepoimentos,
      titulo: 'Depoimentos',
      texto: 'Os relatos das pacientes aparecem logo antes da chamada para agendar a avaliação.',
    },
    {
      img: telaAssinatura,
      titulo: 'Fechamento',
      texto: 'A página termina com a frase que resume o trabalho dela e a logo.',
    },
  ],
  celular: {
    texto: 'No celular, cartões e depoimentos ficam em uma coluna só, com letras grandes e espaço para respirar.',
    fundo: '#EBD3C8',
    telas: [
      { img: celularDepoimentos, legenda: 'Depoimentos' },
      { img: celularConteudos, legenda: 'Conteúdos' },
      { img: celularAssinatura, legenda: 'Fechamento' },
    ],
  },
  entregas: [
    'Página única com abertura, resultados, depoimentos, conteúdos e apresentação da doutora',
    'Galeria de resultados com filtro por categoria: facial, dental e lábios',
    'Depoimentos de pacientes',
    'Seis tratamentos explicados em cartões',
    'Botão de agendar avaliação pelo WhatsApp',
    'Domínio próprio configurado: drasorayabbud.com.br',
    'Versão para computador e para celular',
  ],
};
