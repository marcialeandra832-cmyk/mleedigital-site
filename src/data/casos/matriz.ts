// Estudo de caso do Matriz Grill (página /portfolio/matriz-grill/).
import { Caso } from '../../types';
import telaAgenda from '../../assets/casos/matriz/tela-agenda.webp';
import telaCardapio from '../../assets/casos/matriz/tela-cardapio.webp';
import telaCasa from '../../assets/casos/matriz/tela-casa.webp';
import telaDelivery from '../../assets/casos/matriz/tela-delivery.webp';
import celularCapa from '../../assets/casos/matriz/celular-capa.webp';
import celularAgenda from '../../assets/casos/matriz/celular-agenda.webp';
import celularCardapio from '../../assets/casos/matriz/celular-cardapio.webp';
import celularDelivery from '../../assets/casos/matriz/celular-delivery.webp';

export const casoMatriz: Caso = {
  resumo: 'Site para bar e restaurante em Videira, SC. Agenda de shows, cardápio completo, delivery e reserva de mesa pelo WhatsApp.',
  ficha: [
    { rotulo: 'Área', valor: 'Restaurante e bar' },
    { rotulo: 'Local', valor: 'Videira, SC' },
    { rotulo: 'Plano', valor: 'Site Essencial' },
    { rotulo: 'No ar desde', valor: 'Outubro de 2026' },
  ],
  palco: { fundo: '#1A1512', moldura: '#4A2F1C' },
  capaCelular: celularCapa,
  contexto: [
    'O Matriz Grill começou em 1996 como Bar do Seco, numa casa de madeira na mesma esquina da Rua Padre Anchieta. Em 2026 completa 30 anos, com música ao vivo toda sexta, tábuas na chapa e chopp gelado.',
    'O site precisava funcionar para dois públicos: quem frequenta há anos e ainda chama a casa de Bar do Seco, e quem procura onde sair em Videira. Por isso os dois nomes aparecem lado a lado logo na abertura, com vídeos reais da casa cheia.',
  ],
  cores: {
    texto: 'Carvão e madeira escura, com mel nos botões e vinho na área de delivery.',
    paleta: [
      { nome: 'Carvão', hex: '#1A1512', escura: true },
      { nome: 'Nogueira', hex: '#4A2F1C', escura: true },
      { nome: 'Vinho', hex: '#650113', escura: true },
      { nome: 'Mel', hex: '#C8893F' },
      { nome: 'Creme', hex: '#EFE6D8' },
    ],
  },
  fonte: {
    nome: 'Big Shoulders Display',
    uso: 'Nos títulos, uma letra alta e condensada, com cara de letreiro de bar. Nos textos, Instrument Sans.',
    amostra: 'A esquina mais badalada da cidade.',
    css: '"Big Shoulders Display", sans-serif',
    link: 'https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@800&display=swap',
    peso: 800,
    maiusculas: true,
  },
  telas: [
    {
      img: telaAgenda,
      titulo: 'Agenda do mês',
      texto: 'Os próximos shows de sexta e os horários da casa. O próximo show fica em destaque, com o botão de reservar mesa.',
    },
    {
      img: telaCardapio,
      titulo: 'Cardápio por categoria',
      texto: 'Tábuas, hambúrgueres, porções, petiscos, sobremesas e bar, cada um com ingredientes e preço. O cardápio digital completo fica a um toque.',
    },
    {
      img: telaCasa,
      titulo: 'A mesma esquina',
      texto: 'Uma foto de antes e depois que a pessoa arrasta para comparar o Bar do Seco de antigamente com o Matriz Grill de hoje.',
    },
    {
      img: telaDelivery,
      titulo: 'Delivery',
      texto: 'Uma área só para o pedido em casa, levando direto para o aplicativo AiPede na App Store e no Google Play.',
    },
  ],
  celular: {
    texto: 'No celular, a barra de baixo deixa reservar, ver o cardápio e pedir delivery sempre à mão.',
    fundo: '#C8893F',
    telas: [
      { img: celularAgenda, legenda: 'Agenda' },
      { img: celularCardapio, legenda: 'Cardápio' },
      { img: celularDelivery, legenda: 'Delivery' },
    ],
  },
  entregas: [
    'Site com abertura em vídeo, agenda, cardápio, delivery, fotos e vídeos e história da casa',
    'Agenda com os cantores do mês inteiro e horários de funcionamento',
    'Cardápio com seis categorias, ingredientes e preços',
    'Galeria de fotos e vídeos separada por ao vivo, cozinha e casa',
    'Reserva de mesa pelo WhatsApp e link para o delivery no AiPede',
    'Endereço com mapa, Instagram e grupo do WhatsApp',
    'Domínio próprio: matrizgrillvideira.com.br',
    'Versão para computador e para celular',
  ],
};
