import type { FAQItem } from '../components/common/FAQAccordion';

export interface Cidade {
  slug: string;
  nome: string;
  uf: string;
  title: string;
  metaDescription: string;
  h1: string;
  heroDesc: string;
  bairros: string[];
  mercado: { titulo: string; texto: string; pontos: string[] };
  busca: { titulo: string; texto: string; exemplos: string[] };
  faq: FAQItem[];
}

// Perguntas comuns a todas as cidades: atendimento remoto é a primeira dúvida de quem é de fora
const faqOnline = (cidade: string): FAQItem[] => [
  {
    q: `Você atende em ${cidade} mesmo morando em outro estado?`,
    a: `Sim. Todo o processo é online: a conversa inicial é pelo WhatsApp, as reuniões são por videochamada e você aprova cada etapa pelo celular. Você não precisa sair do consultório ou do escritório em nenhum momento.`,
  },
  {
    q: 'Como você conhece o meu mercado se não está na cidade?',
    a: `Antes de começar, eu estudo quem são as profissionais que aparecem primeiro no Google e no Instagram na sua especialidade em ${cidade}, como elas se apresentam e o que o paciente ou cliente procura. O site nasce desse estudo, e não de um modelo pronto.`,
  },
  {
    q: 'Em quanto tempo o site fica pronto?',
    a: 'Em até 7 dias úteis depois que você me envia fotos, textos e informações. Se faltar algum material, eu te ajudo a organizar.',
  },
  {
    q: 'O site aparece no Google da minha cidade?',
    a: `O site já sai com a estrutura que o Google precisa para entender quem você é, o que faz e onde atende em ${cidade}. Junto com o Perfil da Empresa no Google bem preenchido e avaliações reais, é isso que coloca você nas buscas da sua região.`,
  },
];

export const cidadesData: Record<string, Cidade> = {
  'criacao-de-sites-em-sao-paulo': {
    slug: 'criacao-de-sites-em-sao-paulo',
    nome: 'São Paulo',
    uf: 'SP',
    title: 'Criação de sites para médicas, dentistas e advogadas em São Paulo',
    metaDescription: 'Sites sob medida para profissionais da saúde, estética e advocacia em São Paulo. Atendimento 100% online, design premium e site no ar em até 7 dias úteis.',
    h1: 'Sites para profissionais de São Paulo que querem ser escolhidas, e não só encontradas',
    heroDesc: 'Em São Paulo, o paciente compara cinco perfis antes de marcar uma consulta. Eu crio sites que fazem você ser a escolha, com atendimento 100% online.',
    bairros: ['Jardins', 'Moema', 'Itaim Bibi', 'Vila Nova Conceição', 'Pinheiros', 'Vila Mariana', 'Higienópolis', 'Alphaville'],
    mercado: {
      titulo: 'Em São Paulo, a concorrência está a um clique',
      texto: 'Quem procura uma dermatologista em Moema ou uma advogada de família nos Jardins encontra dezenas de opções no mesmo raio de poucos quilômetros. O Instagram chama atenção, mas na hora de decidir, a pessoa abre o site para conferir se você passa segurança.',
      pontos: [
        'Apresentação à altura de um consultório premium',
        'Página para cada especialidade ou tratamento',
        'Agendamento direto pelo WhatsApp, sem formulário longo',
        'Carregamento rápido no celular, mesmo no 4G do trânsito',
      ],
    },
    busca: {
      titulo: 'Como o paciente paulistano procura você',
      texto: 'As buscas ficaram longas e específicas. É por isso que o seu site precisa responder perguntas, e não só mostrar fotos.',
      exemplos: [
        'dermatologista em Moema que faz bioestimulador',
        'dentista de lentes de contato no Itaim Bibi',
        'advogada trabalhista nos Jardins com atendimento online',
      ],
    },
    faq: faqOnline('São Paulo'),
  },
  'criacao-de-sites-no-rio-de-janeiro': {
    slug: 'criacao-de-sites-no-rio-de-janeiro',
    nome: 'Rio de Janeiro',
    uf: 'RJ',
    title: 'Criação de sites para médicas, dentistas e advogadas no Rio de Janeiro',
    metaDescription: 'Sites sob medida para profissionais da saúde, estética e advocacia no Rio de Janeiro. Atendimento 100% online, design elegante e site no ar em até 7 dias úteis.',
    h1: 'Sites para profissionais do Rio que já são referência no boca a boca',
    heroDesc: 'No Rio, a indicação ainda pesa muito. Mas quem recebe o seu nome vai pesquisar antes de marcar. Eu crio o site que confirma essa indicação, com atendimento 100% online.',
    bairros: ['Barra da Tijuca', 'Leblon', 'Ipanema', 'Copacabana', 'Botafogo', 'Recreio', 'Tijuca', 'Niterói'],
    mercado: {
      titulo: 'A indicação chega. O site fecha.',
      texto: 'Uma amiga indica a sua clínica na Barra ou o seu escritório em Botafogo. A primeira coisa que a pessoa faz é procurar o seu nome no Google. Se ela encontra só um Instagram, fica a dúvida. Se encontra um site claro e bonito, ela marca.',
      pontos: [
        'Seu nome em primeiro lugar quando alguém pesquisa por você',
        'Fotos reais do espaço e da equipe, sem banco de imagem',
        'Informações de localização e estacionamento à vista',
        'Botão de WhatsApp em todas as páginas',
      ],
    },
    busca: {
      titulo: 'Como o carioca procura você',
      texto: 'O paciente ou cliente quer saber se você é perto, se atende o caso dele e como agendar. O site precisa responder isso em segundos.',
      exemplos: [
        'harmonização facial na Barra da Tijuca',
        'ortodontista no Leblon que atende adulto',
        'advogada de família em Botafogo',
      ],
    },
    faq: faqOnline('Rio de Janeiro'),
  },
  'criacao-de-sites-em-goiania': {
    slug: 'criacao-de-sites-em-goiania',
    nome: 'Goiânia',
    uf: 'GO',
    title: 'Criação de sites para médicas, dentistas e advogadas em Goiânia',
    metaDescription: 'Sites sob medida para profissionais da saúde, estética e advocacia em Goiânia. Atendimento 100% online, visual sofisticado e site no ar em até 7 dias úteis.',
    h1: 'Sites para profissionais de Goiânia que investem em uma imagem premium',
    heroDesc: 'Goiânia tem um mercado de saúde e estética de alto padrão cada vez mais disputado. Eu crio sites que acompanham esse nível, com atendimento 100% online.',
    bairros: ['Setor Bueno', 'Setor Marista', 'Setor Oeste', 'Jardim Goiás', 'Setor Sul', 'Alphaville Flamboyant', 'Aparecida de Goiânia'],
    mercado: {
      titulo: 'Clínica nova abrindo toda semana no Setor Bueno e no Marista',
      texto: 'O mercado de estética, odontologia e medicina de Goiânia está aquecido, e isso aumenta a disputa por atenção. Quem tem um site bem feito sai na frente de quem depende só do Instagram e do tráfego pago.',
      pontos: [
        'Visual sofisticado que combina com o seu espaço',
        'Página para cada procedimento, pensada para o Google',
        'Site que aproveita melhor o investimento em anúncios',
        'Integração com WhatsApp e Perfil da Empresa no Google',
      ],
    },
    busca: {
      titulo: 'Como o goiano procura você',
      texto: 'Quem pesquisa já sabe o que quer. O site precisa mostrar que você faz exatamente aquilo, e onde.',
      exemplos: [
        'clínica de estética no Setor Bueno',
        'dentista de implante no Setor Marista',
        'advogada previdenciária em Goiânia',
      ],
    },
    faq: faqOnline('Goiânia'),
  },
  'criacao-de-sites-em-belo-horizonte': {
    slug: 'criacao-de-sites-em-belo-horizonte',
    nome: 'Belo Horizonte',
    uf: 'MG',
    title: 'Criação de sites para médicas, dentistas e advogadas em Belo Horizonte',
    metaDescription: 'Sites sob medida para profissionais da saúde, estética e advocacia em Belo Horizonte. Atendimento 100% online, design cuidadoso e site no ar em até 7 dias úteis.',
    h1: 'Sites para profissionais de BH que cuidam de cada detalhe',
    heroDesc: 'O mineiro pesquisa, compara e só depois decide. Eu crio sites que passam confiança logo na primeira visita, com atendimento 100% online.',
    bairros: ['Savassi', 'Lourdes', 'Funcionários', 'Belvedere', 'Santo Agostinho', 'Buritis', 'Pampulha', 'Nova Lima'],
    mercado: {
      titulo: 'Em BH, confiança se constrói antes da primeira consulta',
      texto: 'O paciente que procura uma especialista na Savassi ou em Lourdes quer entender quem você é, como trabalha e o que esperar. Um site completo responde essas dúvidas e faz a pessoa chegar decidida.',
      pontos: [
        'Página "sobre" que conta a sua trajetória com elegância',
        'Explicação clara de cada tratamento ou área de atuação',
        'Perguntas frequentes que poupam tempo da sua secretária',
        'Contato fácil pelo WhatsApp em todas as páginas',
      ],
    },
    busca: {
      titulo: 'Como o mineiro procura você',
      texto: 'Muita gente já pergunta direto para a inteligência artificial. Quem tem um site bem estruturado tem mais chance de ser indicado na resposta.',
      exemplos: [
        'dermatologista na Savassi que trata melasma',
        'dentista no Belvedere com atendimento infantil',
        'advogada de inventário em Lourdes',
      ],
    },
    faq: faqOnline('Belo Horizonte'),
  },
};
