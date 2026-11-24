// Estudo de caso do Resenha e Brasa (página /portfolio/resenha-e-brasa/).
// O vídeo do sistema foi cortado antes da tela de configurações para não mostrar a chave Pix da cliente.
import { Caso } from '../../types';
import telaCardapio from '../../assets/casos/resenha/tela-cardapio.webp';
import telaComo from '../../assets/casos/resenha/tela-como.webp';
import telaFotos from '../../assets/casos/resenha/tela-fotos.webp';
import telaSobre from '../../assets/casos/resenha/tela-sobre.webp';
import celularCapa from '../../assets/casos/resenha/celular-topo.webp';
import celularComo from '../../assets/casos/resenha/celular-como.webp';
import celularCardapio from '../../assets/casos/resenha/celular-cardapio.webp';
import celularLocal from '../../assets/casos/resenha/celular-local.webp';
import sistemaPedidos from '../../assets/casos/resenha/sistema-pedidos.webp';
import sistemaFechamento from '../../assets/casos/resenha/sistema-fechamento.webp';

export const casoResenha: Caso = {
  resumo: 'Cardápio digital e sistema de pedidos para um delivery de fim de semana em Videira, SC. O cliente monta o pedido, o estoque baixa sozinho e a equipe confirma pelo WhatsApp.',
  ficha: [
    { rotulo: 'Área', valor: 'Comida caseira e churrasco' },
    { rotulo: 'Local', valor: 'Videira, SC' },
    { rotulo: 'Entrega', valor: 'Cardápio digital + sistema de pedidos' },
    { rotulo: 'No ar desde', valor: 'Novembro de 2026' },
  ],
  palco: { fundo: '#24150E', moldura: '#4A2C1C' },
  video: { src: '/showreel/resenha-desktop.mp4', poster: '/showreel/resenha-desktop.jpg' },
  capaCelular: celularCapa,
  contexto: [
    'O Resenha e Brasa abre só no fim de semana: comida caseira no sábado e churrasco no domingo, para retirar no Centro de Videira ou receber em casa. Todo pedido chegava pelo WhatsApp e era anotado, separado e cobrado à mão.',
    'Primeiro veio o cardápio digital, com os dois dias separados e o pedido indo pronto para o WhatsApp. Com o movimento crescendo, faltava controlar o que já tinha acabado. Daí nasceu o sistema de pedidos e estoque, usado hoje em todo fim de semana.',
  ],
  cores: {
    texto: 'Madeira escura e laranja de brasa nos botões, com papel creme nas partes de leitura.',
    paleta: [
      { nome: 'Madeira', hex: '#24150E', escura: true },
      { nome: 'Tora', hex: '#4A2C1C', escura: true },
      { nome: 'Brasa', hex: '#E2581A', escura: true },
      { nome: 'Fogo', hex: '#F59A2E' },
      { nome: 'Papel', hex: '#F3E6CF' },
    ],
  },
  fonte: {
    nome: 'Rye',
    uso: 'Nos títulos, uma letra de placa antiga, com cara de churrasco de domingo. Nos botões e rótulos, Barlow Condensed.',
    amostra: 'Sábado de comida caseira, domingo de churrasco.',
    css: '"Rye", serif',
    link: 'https://fonts.googleapis.com/css2?family=Rye&display=swap',
    peso: 400,
  },
  telas: [
    {
      img: telaCardapio,
      titulo: 'Cardápio por dia',
      texto: 'Sábado e domingo em abas separadas, com os horários e o prazo das encomendas logo no topo. Cada prato tem foto, preço e botão para pôr no pedido.',
    },
    {
      img: telaComo,
      titulo: 'Como pedir',
      texto: 'Três passos: escolher, enviar e retirar ou receber. Quem nunca pediu entende na hora.',
    },
    {
      img: telaFotos,
      titulo: 'Fotos da comida',
      texto: 'Fotos reais dos pratos e das carnes saindo da brasa.',
    },
    {
      img: telaSobre,
      titulo: 'Quem prova, volta',
      texto: 'A história da casa ao lado de mensagens reais de clientes recebidas pelo WhatsApp.',
    },
  ],
  celular: {
    texto: 'A maioria dos pedidos vem do celular. O botão de montar o pedido fica sempre à mão, e a mensagem chega pronta no WhatsApp com os itens e o total.',
    fundo: '#E2581A',
    telas: [
      { img: celularComo, legenda: 'Como pedir' },
      { img: celularCardapio, legenda: 'Cardápio' },
      { img: celularLocal, legenda: 'Retirada e entrega' },
    ],
  },
  sistema: {
    titulo: 'O sistema por trás do cardápio',
    texto: [
      'Um painel só para a equipe, com login. Todo pedido, do cardápio online ou anotado do WhatsApp, entra no mesmo lugar e baixa do estoque na hora.',
      'O cliente só recebe a confirmação depois que a equipe aprova, com o Pix copia e cola já na mensagem. No fim do dia, o fechamento mostra quanto entrou em cada forma de pagamento e o que sobrou.',
    ],
    endereco: 'Painel da equipe · Resenha e Brasa',
    video: { src: '/showreel/resenha-sistema.mp4', poster: '/showreel/resenha-sistema.jpg' },
    destaques: [
      'Pedidos separados em aguardando, confirmado e entregue',
      'Pedido do WhatsApp lançado em poucos toques',
      'Estoque aberto a cada dia com o que foi produzido',
      'Vendas de balcão no mesmo controle',
      'Mensagem de confirmação pronta, com Pix copia e cola',
      'Taxa de entrega por bairro',
      'Fechamento por forma de pagamento e por canal',
      'Acesso separado para a dona e para a ajudante',
    ],
    telas: [
      {
        img: sistemaPedidos,
        titulo: 'Pedidos do dia',
        texto: 'Sábado e domingo em abas, com os pedidos divididos pelo andamento e o cardápio online aberto ou fechado com um toque.',
      },
      {
        img: sistemaFechamento,
        titulo: 'Fechamento',
        texto: 'Total vendido por Pix, dinheiro e cartão, por canal, o que ainda não foi pago e a hora em que cada item esgotou.',
      },
    ],
  },
  entregas: [
    'Cardápio digital com sábado e domingo separados',
    'Pedido online que chega pronto no WhatsApp, com itens e total',
    'Sistema de pedidos com estoque que baixa sozinho',
    'Confirmação com Pix copia e cola e taxa de entrega por bairro',
    'Fechamento do dia por forma de pagamento',
    'Perfil do Google organizado',
    'Versão para computador e para celular',
  ],
};
