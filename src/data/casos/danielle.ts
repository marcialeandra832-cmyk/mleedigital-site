// Estudo de caso da Dra. Danielle Carvão (página /portfolio/dra-danielle-carvao/).
// As telas deste caso vêm da gravação de tela do site (public/showreel/dani-*.mp4).
import { Caso } from '../../types';
import telaSobre from '../../assets/casos/danielle/tela-sobre.webp';
import telaMetodo from '../../assets/casos/danielle/tela-metodo.webp';
import telaTratamentos from '../../assets/casos/danielle/tela-tratamentos.webp';
import telaLista from '../../assets/casos/danielle/tela-lista.webp';
import celularCapa from '../../assets/casos/danielle/celular-capa.webp';
import celularSobre from '../../assets/casos/danielle/celular-sobre.webp';
import celularMetodo from '../../assets/casos/danielle/celular-metodo.webp';
import celularTratamentos from '../../assets/casos/danielle/celular-tratamentos.webp';

export const casoDanielle: Caso = {
  resumo: 'Site para dentista com 31 anos de experiência, no Rio de Janeiro. Rejuvenescimento facial para mulheres 40+ e o Método DC Renova 360.',
  ficha: [
    { rotulo: 'Área', valor: 'Odontologia e rejuvenescimento facial' },
    { rotulo: 'Local', valor: 'Largo do Machado, Rio de Janeiro' },
    { rotulo: 'Plano', valor: 'Site Essencial' },
  ],
  palco: { fundo: '#26140E', moldura: '#0B0908' },
  video: { src: '/showreel/dani-desktop.mp4', poster: '/showreel/dani-desktop.jpg' },
  capaCelular: celularCapa,
  contexto: [
    'A Dra. Danielle Carvão é dentista há 31 anos e atende no Largo do Machado, no Rio de Janeiro. O trabalho dela é o rejuvenescimento facial com naturalidade para mulheres 40+, organizado no Método DC Renova 360.',
    'O site reúne em uma página o que antes estava espalhado em um link na bio: quem ela é, como funciona o método, os tratamentos e o caminho para agendar.',
  ],
  cores: {
    texto: 'Dourado envelhecido, marfim e marrom profundo, tirados do material que a própria cliente já usava.',
    paleta: [
      { nome: 'Marrom profundo', hex: '#26140E', escura: true },
      { nome: 'Vinho', hex: '#4A161E', escura: true },
      { nome: 'Dourado', hex: '#C8A46A' },
      { nome: 'Dourado claro', hex: '#DCC498' },
      { nome: 'Marfim', hex: '#F4EEE4' },
    ],
  },
  fonte: {
    nome: 'Cinzel',
    uso: 'Nos títulos, uma letra de estilo clássico, toda em maiúsculas. Nos textos, Inter.',
    amostra: 'Cuidar do agora, pensando no depois',
    css: '"Cinzel", serif',
    link: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400&display=swap',
    peso: 400,
  },
  telas: [
    {
      img: telaSobre,
      titulo: 'Sobre a doutora',
      texto: 'A foto dela em destaque, a trajetória e a pergunta que guia cada plano de tratamento.',
    },
    {
      img: telaMetodo,
      titulo: 'Método DC Renova 360',
      texto: 'Uma seção só para o método, explicando o que ele inclui.',
    },
    {
      img: telaTratamentos,
      titulo: 'Por que tratar',
      texto: 'Antes da lista de procedimentos, o site explica como o rosto muda com o tempo.',
    },
    {
      img: telaLista,
      titulo: 'Tratamentos',
      texto: 'Cada tratamento com foto e uma explicação curta.',
    },
  ],
  celular: {
    texto: 'No celular, o botão de agendar fica sempre no topo e os textos ganham tamanho confortável para ler.',
    fundo: '#ECE0C8',
    proporcao: '3 / 5',
    telas: [
      { img: celularSobre, legenda: 'Sobre a doutora' },
      { img: celularMetodo, legenda: 'Método DC Renova 360' },
      { img: celularTratamentos, legenda: 'Tratamentos' },
    ],
  },
  entregas: [
    'Página única com apresentação, método, tratamentos, resultados, diferenciais, depoimentos, dúvidas e localização',
    'Seção dedicada ao Método DC Renova 360',
    'Seis tratamentos com foto e explicação',
    'Depoimentos e perguntas frequentes',
    'Instagram, endereço do consultório e agendamento pelo WhatsApp',
    'Domínio próprio configurado: dradanicarvao.com.br',
    'Versão para computador e para celular',
  ],
};
