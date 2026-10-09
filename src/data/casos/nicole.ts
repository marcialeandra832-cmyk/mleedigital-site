// Estudo de caso da Nicole Bordignon (página /portfolio/nicole-bordignon/).
import { Caso } from '../../types';
import telaAbertura from '../../assets/casos/nicole/tela-abertura.webp';
import telaServicos from '../../assets/casos/nicole/tela-servicos.webp';
import telaNoivas from '../../assets/casos/nicole/tela-noivas.webp';
import telaAtendimento from '../../assets/casos/nicole/tela-atendimento.webp';
import celularCapa from '../../assets/casos/nicole/celular-capa.webp';
import celularAbertura from '../../assets/casos/nicole/celular-abertura.webp';
import celularServicos from '../../assets/casos/nicole/celular-servicos.webp';
import celularContato from '../../assets/casos/nicole/celular-contato.webp';

export const casoNicole: Caso = {
  resumo: 'Site para designer de sobrancelhas e maquiadora em Videira, SC. Serviços, área para noivas e agendamento pelo WhatsApp.',
  ficha: [
    { rotulo: 'Área', valor: 'Sobrancelhas e maquiagem' },
    { rotulo: 'Local', valor: 'Videira, SC' },
    { rotulo: 'Plano', valor: 'Site Essencial' },
    { rotulo: 'No ar desde', valor: 'Outubro de 2026' },
  ],
  palco: { fundo: '#1C1410', moldura: '#3A2C24' },
  capaCelular: celularCapa,
  contexto: [
    'A Nicole faz design e reconstrução de sobrancelhas, brow lamination, lash lifting e maquiagem, inclusive para noivas, em Videira. Ela ainda não tinha site.',
    'A página abre com a foto e o nome dela em letras grandes e mostra cada serviço com uma frase curta. No celular, o botão de agendar pelo WhatsApp acompanha a pessoa por toda a página.',
  ],
  cores: {
    texto: 'Marrom escuro e nude, com vinho nos botões.',
    paleta: [
      { nome: 'Marrom escuro', hex: '#1C1410', escura: true },
      { nome: 'Café', hex: '#846955', escura: true },
      { nome: 'Vinho', hex: '#7A2E2B', escura: true },
      { nome: 'Nude', hex: '#EAD9CB' },
      { nome: 'Papel', hex: '#F7EFE7' },
    ],
  },
  fonte: {
    nome: 'Unbounded',
    uso: 'Nos títulos, uma letra larga e moderna. Nos textos, Hanken Grotesk.',
    amostra: 'A sobrancelha muda o rosto inteiro.',
    css: '"Unbounded", sans-serif',
    link: 'https://fonts.googleapis.com/css2?family=Unbounded:wght@300&display=swap',
    peso: 300,
  },
  telas: [
    {
      img: telaAbertura,
      titulo: 'Uma foto, uma frase',
      texto: 'Logo depois da abertura, uma foto em tela cheia e uma frase apresentam o trabalho dela.',
    },
    {
      img: telaServicos,
      titulo: 'Serviços',
      texto: 'Cada serviço aparece com uma foto que gira conforme a pessoa rola a página.',
    },
    {
      img: telaNoivas,
      titulo: 'Noivas',
      texto: 'Uma área só para a maquiagem do dia do casamento.',
    },
    {
      img: telaAtendimento,
      titulo: 'Como ela atende',
      texto: 'A avaliação vem antes de qualquer procedimento, e o atendimento é sempre com hora marcada.',
    },
  ],
  celular: {
    texto: 'No celular, o botão de agendar pelo WhatsApp fica fixo embaixo, sempre à mão.',
    fundo: '#EAD9CB',
    telas: [
      { img: celularAbertura, legenda: 'Uma foto, uma frase' },
      { img: celularServicos, legenda: 'Serviços' },
      { img: celularContato, legenda: 'Contato' },
    ],
  },
  entregas: [
    'Página única com abertura, serviços, noivas, forma de atender e contato',
    'Cinco serviços de sobrancelhas e cílios, cada um com foto e explicação',
    'Maquiagem profissional e área para noivas',
    'Botão de agendar pelo WhatsApp sempre visível no celular',
    'Endereço, Instagram e link para o mapa',
    'Versão para computador e para celular',
  ],
};
