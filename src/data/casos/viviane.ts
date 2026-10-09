// Estudo de caso da Dra. Viviane Mengatto (página /portfolio/dra-viviane-mengatto/).
// Para criar o caso de outra cliente: copie este arquivo, troque as imagens da pasta
// src/assets/casos/<cliente>/ e os textos, e ligue o caso ao projeto em src/data/projects.ts.
import { Caso } from '../../types';
import telaSobre from '../../assets/casos/viviane/tela-sobre.webp';
import telaProcedimentos from '../../assets/casos/viviane/tela-procedimentos.webp';
import telaSimulador from '../../assets/casos/viviane/tela-simulador.webp';
import telaContato from '../../assets/casos/viviane/tela-contato.webp';
import celularSobre from '../../assets/casos/viviane/celular-sobre.webp';
import celularTopo from '../../assets/casos/viviane/celular-topo.webp';
import celularProcedimentos from '../../assets/casos/viviane/celular-procedimentos.webp';
import celularSimulador from '../../assets/casos/viviane/celular-simulador.webp';

export const casoViviane: Caso = {
  resumo: 'Site para biomédica esteta em Videira, SC. Procedimentos, cursos e agendamento em um só endereço.',
  ficha: [
    { rotulo: 'Área', valor: 'Biomedicina estética' },
    { rotulo: 'Local', valor: 'Videira, SC' },
    { rotulo: 'Plano', valor: 'Site Essencial' },
    { rotulo: 'No ar desde', valor: 'Setembro de 2026' },
  ],
  palco: { fundo: '#1A1A1A', destaque: '#D6B67B' },
  video: { src: '/showreel/viviane-desktop.mp4', poster: '/showreel/viviane-desktop.jpg' },
  capaCelular: celularTopo,
  contexto: [
    'A Dra. Viviane atende em Videira com harmonização facial, fios de PDO, limpeza de pele, body piercing, cílios e sobrancelhas. Também dá cursos presenciais para outras profissionais.',
    'O site reúne tudo isso em uma página só, com o botão de agendar sempre à vista e um caminho curto até o WhatsApp do consultório.',
  ],
  cores: {
    texto: 'Grafite e dourado na abertura. No restante da página, tons claros para a leitura ficar leve.',
    paleta: [
      { nome: 'Grafite', hex: '#1A1A1A', escura: true },
      { nome: 'Dourado', hex: '#B5872C', escura: true },
      { nome: 'Dourado claro', hex: '#D6B67B' },
      { nome: 'Bege', hex: '#E9D6B9' },
      { nome: 'Nude', hex: '#F4E9E2' },
    ],
  },
  fonte: {
    nome: 'Raleway',
    uso: 'Uma única família de letras em todo o site: fina nos títulos, regular nos textos.',
    amostra: 'Realce sua beleza com naturalidade',
    css: '"Raleway", sans-serif',
    link: 'https://fonts.googleapis.com/css2?family=Raleway:wght@300;500&display=swap',
  },
  telas: [
    {
      img: telaSobre,
      titulo: 'Quem atende',
      texto: 'Fotos dela, o registro profissional e a formação em linha do tempo. A paciente sabe quem vai atender antes de marcar.',
    },
    {
      img: telaProcedimentos,
      titulo: 'Procedimentos por categoria',
      texto: 'Oito procedimentos em cartões, com filtro por tipo e os detalhes de cada um a um toque.',
    },
    {
      img: telaSimulador,
      titulo: 'Simulador de protocolo',
      texto: 'Quatro perguntas indicam por onde começar. No fim, a pessoa vai para o WhatsApp com o resultado já escrito na mensagem.',
    },
    {
      img: telaContato,
      titulo: 'Agendamento',
      texto: 'Endereço, horários e um formulário que abre o WhatsApp do consultório com o pedido pronto.',
    },
  ],
  celular: {
    texto: 'A maioria das visitas chega pelo celular. Por isso cada tela foi pensada primeiro para ele: leitura confortável e botões fáceis de tocar.',
    fundo: '#F4E9E2',
    telas: [
      { img: celularSobre, legenda: 'Quem atende' },
      { img: celularProcedimentos, legenda: 'Procedimentos' },
      { img: celularSimulador, legenda: 'Simulador' },
    ],
  },
  entregas: [
    'Página única com apresentação, procedimentos, antes e depois, depoimentos, perguntas frequentes e contato',
    'Oito procedimentos com filtro por categoria e detalhes de cada um',
    'Área de cursos presenciais e mentorias',
    'Simulador de protocolo com resultado enviado pelo WhatsApp',
    'Formulário de agendamento que abre o WhatsApp com a mensagem pronta',
    'Mapa, endereço e horários do consultório',
    'Domínio próprio configurado: dravivianemengatto.com.br',
    'Versão para computador e para celular',
  ],
};
