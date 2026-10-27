// Fonte única dos planos. A página inicial e o bloco de preços das outras
// páginas (cidades, áreas, serviços) leem daqui, para nunca ficarem diferentes.

export interface Plano {
  nome: string;
  resumo: string;
  preco: string;
  manut: string;
  manutItens: string[];
  prazo: string;
  destaque?: boolean;
  itens: string[];
}

export const planos: Plano[] = [
  {
    nome: 'Site Essencial',
    resumo: 'Uma página completa, para quem precisa de presença profissional rápida.',
    preco: '997',
    manut: '127',
    manutItens: ['Hospedagem rápida em nuvem', 'Cadeado de segurança (SSL) sempre ativo', 'Cópias de segurança automáticas', 'Pequenas alterações de textos e fotos', 'Suporte direto comigo'],
    prazo: 'Pronto em até 4 dias úteis',
    itens: [
      'Página única, fluida e fácil de navegar',
      'Design exclusivo, pensado para computador e celular',
      'Textos escritos para o seu público',
      'Botão direto para o seu WhatsApp',
      'Formulário de contato',
      'Configuração inicial para aparecer no Google',
      'Mapa e redes sociais integrados',
      'Domínio próprio e cadeado de segurança configurados',
    ],
  },
  {
    nome: 'Site Profissional',
    resumo: 'Para quem tem vários serviços e quer uma página para cada um.',
    preco: '1.397',
    manut: '197',
    manutItens: ['Hospedagem em nuvem de alta performance', 'Monitoramento 24 horas', 'Cópias de segurança automáticas', 'Cadeado de segurança (SSL) sempre ativo', 'Atualizações periódicas de conteúdo', 'Suporte prioritário'],
    prazo: 'Pronto em até 7 dias úteis',
    destaque: true,
    itens: [
      'Tudo do Essencial',
      'Até 5 páginas, uma para cada serviço importante',
      'Perguntas frequentes e depoimentos',
      'Configuração avançada para o Google',
      'Métricas de visitas instaladas (Google e Meta)',
      'Carregamento otimizado',
      'Suporte prioritário na publicação',
    ],
  },
];
