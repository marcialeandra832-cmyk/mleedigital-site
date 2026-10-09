// Estudo de caso da Dra. Maria Junqueira (página /portfolio/dra-maria-junqueira/).
import { Caso } from '../../types';
import telaSobre from '../../assets/casos/maria/tela-sobre.webp';
import telaTratamentos from '../../assets/casos/maria/tela-tratamentos.webp';
import telaDiferenciais from '../../assets/casos/maria/tela-diferenciais.webp';
import telaDuvidas from '../../assets/casos/maria/tela-duvidas.webp';
import celularCapa from '../../assets/casos/maria/celular-capa.webp';
import celularSobre from '../../assets/casos/maria/celular-sobre.webp';
import celularTratamentos from '../../assets/casos/maria/celular-tratamentos.webp';
import celularDiferenciais from '../../assets/casos/maria/celular-diferenciais.webp';

export const casoMaria: Caso = {
  resumo: 'Site para biomédica esteta que atende em Videira, SC, e Batatais, SP. Tratamentos corporais e faciais, com agendamento pelo WhatsApp.',
  ficha: [
    { rotulo: 'Área', valor: 'Biomedicina estética' },
    { rotulo: 'Local', valor: 'Videira, SC, e Batatais, SP' },
    { rotulo: 'Plano', valor: 'Site Essencial' },
  ],
  palco: { fundo: '#3E2F24', moldura: '#2A1F17' },
  video: { src: '/showreel/maria-desktop.mp4', poster: '/showreel/maria-desktop.jpg' },
  capaCelular: celularCapa,
  contexto: [
    'A Dra. Maria Junqueira é biomédica esteta formada pela UFTM e atende em duas cidades. O principal tratamento é o Método CRIO 4D, para gordura localizada, ao lado da harmonização facial.',
    'O site apresenta quem ela é, explica cada tratamento com os benefícios e responde às dúvidas mais comuns antes do agendamento.',
  ],
  cores: {
    texto: 'Bege e creme no fundo, dourado nos destaques e marrom nos textos.',
    paleta: [
      { nome: 'Marrom', hex: '#3E2F24', escura: true },
      { nome: 'Taupe', hex: '#8E7C71', escura: true },
      { nome: 'Dourado', hex: '#C5A059' },
      { nome: 'Areia', hex: '#EADCD2' },
      { nome: 'Creme', hex: '#FAF6F0' },
    ],
  },
  fonte: {
    nome: 'Playfair Display',
    uso: 'Nos títulos, uma letra com serifa, elegante. Nos textos, Plus Jakarta Sans.',
    amostra: 'Seu corpo merece um cuidado especializado.',
    css: '"Playfair Display", serif',
    link: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400&display=swap',
    peso: 400,
  },
  telas: [
    {
      img: telaSobre,
      titulo: 'Quem é a doutora',
      texto: 'Foto, formação e a forma de atender, com os pontos principais em lista.',
    },
    {
      img: telaTratamentos,
      titulo: 'Tratamentos',
      texto: 'Cada tratamento em um cartão, com os benefícios e o botão para falar no WhatsApp.',
    },
    {
      img: telaDiferenciais,
      titulo: 'Diferenciais',
      texto: 'Seis motivos para escolher o consultório, em cartões curtos.',
    },
    {
      img: telaDuvidas,
      titulo: 'Perguntas e respostas',
      texto: 'As dúvidas mais comuns respondidas antes do primeiro contato.',
    },
  ],
  celular: {
    texto: 'No celular, os botões de agendar e de WhatsApp aparecem logo na primeira tela, e cada bloco vira uma coluna fácil de rolar.',
    fundo: '#EADCD2',
    telas: [
      { img: celularSobre, legenda: 'Quem é a doutora' },
      { img: celularTratamentos, legenda: 'Tratamentos' },
      { img: celularDiferenciais, legenda: 'Diferenciais' },
    ],
  },
  entregas: [
    'Página única com apresentação, tratamentos, antes e depois, diferenciais, depoimentos, dúvidas e contato',
    'Método CRIO 4D e harmonização facial explicados com os benefícios',
    'Avaliações do Google e relatos de pacientes',
    'Perguntas e respostas',
    'Endereços de Videira e Batatais',
    'Agendamento pelo WhatsApp',
    'Versão para computador e para celular',
  ],
};
