// Fonte única dos planos. A página inicial e o bloco de preços das outras
// páginas (cidades, áreas, serviços) leem daqui, para nunca ficarem diferentes.

export interface Plano {
  nome: string;
  resumo: string;
  preco: string;
  manut: string;
  manutItens: string[];
  prazo: string;
  resultado: string;
  garantia: string;
  destaque?: boolean;
  itens: string[];
}

export const planos: Plano[] = [
  {
    nome: 'Site Essencial',
    resultado: 'Ser encontrada no Google',
    resumo: 'Quem procura seu nome ou sua especialidade na sua cidade encontra você no Google e no Maps e chama direto no seu WhatsApp.',
    garantia: 'Em até 30 dias, quem pesquisar seu nome no Google te encontra. Se não encontrar, eu continuo ajustando sem custo até encontrar.',
    preco: '997',
    manut: '127',
    manutItens: ['Relatório mensal de visitas e cliques no WhatsApp', 'Hospedagem rápida em nuvem', 'Cadeado de segurança (SSL) sempre ativo', 'Cópias de segurança automáticas', 'Pequenas alterações de textos e fotos', 'Suporte direto comigo'],
    prazo: 'Pronto em até 5 dias úteis',
    itens: [
      'Página única, fluida e fácil de navegar',
      'Design exclusivo, pensado para computador e celular',
      'Textos escritos para o seu público',
      'Botão direto para o seu WhatsApp',
      'Formulário de contato',
      'Perfil no Google Meu Negócio criado e configurado',
      'Configuração para aparecer no Google',
      'Contagem de visitas e cliques no WhatsApp',
      'Mapa e redes sociais integrados',
      'Domínio próprio e cadeado de segurança configurados',
    ],
  },
  {
    nome: 'Site Profissional',
    resultado: 'Ser encontrada no Google e no ChatGPT',
    resumo: 'Tudo do Essencial, com a sua presença preparada para ser entendida pelas inteligências artificiais, que cada vez mais gente usa para pedir indicação.',
    garantia: 'Em até 60 dias, quando perguntarem ao ChatGPT sobre você pelo nome e pela cidade, ele te encontra e mostra seu contato. Se não encontrar, eu continuo ajustando sem custo até encontrar.',
    preco: '1.397',
    manut: '197',
    manutItens: ['Relatório mensal de visitas e cliques no WhatsApp', 'Hospedagem em nuvem de alta performance', 'Monitoramento 24 horas', 'Cópias de segurança automáticas', 'Cadeado de segurança (SSL) sempre ativo', 'Atualizações periódicas de conteúdo', 'Suporte prioritário'],
    prazo: 'Pronto em até 7 dias úteis',
    destaque: true,
    itens: [
      'Tudo do Essencial',
      'Até 5 páginas, uma para cada serviço importante',
      'Site preparado para leitura do ChatGPT e de outras IAs',
      'Cadastro no Bing (o buscador que o ChatGPT consulta) e no Bing Places',
      'Seu nome, endereço e telefone iguais em todos os lugares, para a IA não te confundir com outra pessoa',
      'Perguntas frequentes e depoimentos',
      'Configuração avançada para o Google',
      'Métricas de visitas instaladas (Google e Meta)',
      'Carregamento otimizado',
      'Suporte prioritário na publicação',
    ],
  },
];
