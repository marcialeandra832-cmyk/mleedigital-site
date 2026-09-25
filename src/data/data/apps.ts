import { AppProduct } from '../types';
import nailFinanceScreen from '../assets/apps/nail-finance.webp';
import elasticFitScreen from '../assets/apps/elastic-fit.webp';
const nailFinanceDevices = nailFinanceScreen;
const elasticFitDevices = elasticFitScreen;

export const appsData: AppProduct[] = [
  {
    id: "nail-finance-pro",
    slug: "nail-finance-pro",
    name: "Nail Finance Pro",
    badge: "SISTEMA PRONTO • É SÓ NOMEAR E USAR",
    tagline: "Painel completo de análise financeira, precificação por procedimento e diagnóstico automático por Inteligência Artificial.",
    desc: "Aplicação web desenvolvida especificamente para profissionais da beleza, manicures, estúdios e nail designers. O cliente não precisa esperar meses por desenvolvimento: o sistema já está 100% pronto, inclui consultoria virtual com IA, controle de caixa (Studio + Pessoal), relatórios de lucro real e ficha técnica de custos por procedimento.",
    forWho: [
      "Nail designers autônomas e donas de estúdio",
      "Manicures que desejam profissionalizar sua precificação",
      "Espaços de beleza com atendimentos múltiplos",
      "Profissionais que misturam contas pessoais com as da empresa"
    ],
    problem: "A maioria das nail designers cobra pelo procedimento sem calcular custos ocultos (lixas, brocas, géis, tempo) e acaba faturando muito mas lucrando pouco, sem saber para onde o dinheiro está indo.",
    solution: "Um painel intuitivo e direto no navegador com precificador automático, divisão clara de caixas e uma Inteligência Artificial integrada que orienta decisões de lucro diariamente.",
    features: [
      "Inteligência Artificial que gera recomendações de lucro diário",
      "Controle rigoroso de faturamento, margem e custos operacionais",
      "Catálogo de procedimentos com cálculo automatizado de margem",
      "Separação automática entre Caixa do Estúdio e Caixa Pessoal",
      "Ficha técnica detalhada de insumos por atendimento",
      "Relatórios de lucratividade mensal por tipo de serviço"
    ],
    highlights: [
      "Inteligência Artificial que gera recomendações de lucro diário",
      "Controle rigoroso de faturamento, margem e custos operacionais",
      "Catálogo de procedimentos com cálculo automatizado de margem",
      "Funciona em Notebooks, Tablets e Celulares sem precisar instalar nada"
    ],
    benefits: [
      "Descubra exatamente quanto você lucra em cada unha e serviço",
      "Nunca mais tome prejuízo por precificação no chute",
      "Separe o dinheiro do estúdio do seu salário pessoal",
      "Tenha um consultor financeiro com IA disponível 24h por dia"
    ],
    howItWorks: [
      { step: "01", title: "Acesso Imediato", text: "Você recebe seu login exclusivo na nuvem e acessa de qualquer celular ou computador sem instalar aplicativo pesado." },
      { step: "02", title: "Cadastre seus Insumos", text: "Insira os valores dos seus géis, brocas e despesas fixas para o sistema calcular o custo por minuto e por procedimento." },
      { step: "03", title: "Lance os Atendimentos", text: "Registre as clientes atendidas em poucos segundos e veja o lucro líquido ser calculado em tempo real." },
      { step: "04", title: "Consulte a IA", text: "Receba orientações estratégicas da IA para aumentar sua margem e bater suas metas financeiras." }
    ],
    faq: [
      { q: "Preciso baixar algum aplicativo na loja?", a: "Não. O Nail Finance Pro é uma aplicação web moderna que roda direto no navegador do celular, tablet ou computador. Você pode adicionar um ícone de atalho na tela inicial do seu celular com 1 clique." },
      { q: "Consigo usar mesmo sem entender de matemática financeira?", a: "Sim! O sistema foi desenvolvido para ser extremamente visual e simples. Todas as fórmulas complexas acontecem nos bastidores automaticamente." },
      { q: "Funciona se eu trabalhar sozinha ou tiver funcionárias?", a: "Funciona perfeitamente em ambos os casos. Você pode controlar seus atendimentos individuais ou o movimento geral de todo o estúdio." },
      { q: "O que a Inteligência Artificial faz exatamente?", a: "A IA analisa seu histórico de faturamento e custos para emitir diagnósticos sobre quais serviços são mais rentáveis e onde você pode reduzir desperdícios." }
    ],
    devicesImg: nailFinanceDevices,
    screenImg: nailFinanceScreen,
    urlLabel: "pagina-de-vendas-nailfinancepro.vercel.app",
    demoUrl: "https://pagina-de-vendas-nailfinancepro.vercel.app/",
    ctaText: "Ver Página de Vendas do Nail Finance Pro",
    featured: true
  },
  {
    id: "elastic-fit",
    slug: "elastic-fit",
    name: "Elastic Fit",
    badge: "SISTEMA PRONTO • É SÓ NOMEAR E USAR",
    tagline: "Plataforma web de treinos de baixo impacto com elásticos, focada no público 40+ e mobilidade.",
    desc: "Ambiente completo com treinos estruturados em vídeo, timer inteligente de execução e descanso, orientações posturais adaptadas e interface projetada para leitura fácil. Excelente para profissionais de educação física, fisioterapeutas ou personal trainers que desejam lançar sua própria consultoria online ou programa fitness com marca própria.",
    forWho: [
      "Personal trainers e fisioterapeutas que buscam produto digital pronto",
      "Pessoas acima de 40 anos que buscam treino seguro em casa",
      "Praticantes que precisam de exercícios articulares de baixo impacto",
      "Criadores de conteúdo fitness querendo monetizar sem desenvolver do zero"
    ],
    problem: "Criar um aplicativo fitness do zero exige meses de desenvolvimento e dezenas de milhares de reais. Além disso, muitos apps tradicionais ignoram o público 40+ com treinos lesivos e complexos.",
    solution: "Uma plataforma leve, sem barreiras de instalação, focada em elásticos extensores e reabilitação/fortalecimento muscular seguro, pronta para receber sua identidade ou ser utilizada diretamente.",
    features: [
      "Timer dinâmico integrado para contagem de repetições e pausas",
      "Catálogo completo de exercícios categorizados por articulação e músculo",
      "Interface com alto contraste e tipografia amigável para leitura",
      "Rotinas de mobilidade, postura e fortalecimento sem peso livre",
      "Acesso instantâneo em qualquer navegador web",
      "Estrutura white-label personalizável para profissionais de saúde"
    ],
    highlights: [
      "Timer dinâmico com alertas sonoros e instruções visuais",
      "Biblioteca de exercícios de fortalecimento articular seguro",
      "Interface com alto contraste e tipografia amigável para leitura",
      "Multiplataforma: abre direto no navegador de Smart TVs, Celulares e Tablets"
    ],
    benefits: [
      "Treine ou atenda clientes em qualquer lugar usando apenas elásticos",
      "Zero risco articular com progressões graduais e seguras",
      "Economia de tempo com rotinas prontas de 15 a 30 minutos",
      "Possibilidade de aplicar sua marca própria como personal trainer"
    ],
    howItWorks: [
      { step: "01", title: "Escolha o Nível", text: "Selecione o objetivo: mobilidade matinal, fortalecimento de ombros/joelhos ou queima calórica suave." },
      { step: "02", title: "Aperte Play", text: "O timer interativo conduz cada exercício, tempo de tensão do elástico e descanso necessário." },
      { step: "03", title: "Acompanhe a Evolução", text: "Monitore a frequência semanal de treinos concluídos de forma motivadora e consistente." }
    ],
    faq: [
      { q: "Qualquer tipo de elástico serve para treinar?", a: "Sim, os treinos são desenhados para funcionar tanto com mini bands circulares quanto com elásticos com alça ou super bands." },
      { q: "Posso personalizar com a minha marca?", a: "Sim! Oferecemos opções para personal trainers e clínicas colocarem suas próprias cores, logo e catálogo de aulas no sistema." },
      { q: "É seguro para quem tem dor nas costas ou joelhos?", a: "Sim, os exercícios focam em estabilidade, mobilidade e controle de movimento, sempre priorizando o conforto articular." }
    ],
    devicesImg: elasticFitDevices,
    screenImg: elasticFitScreen,
    urlLabel: "elasticfitapp.vercel.app",
    demoUrl: "https://elasticfitapp.vercel.app/",
    ctaText: "Ver Página de Vendas do Elastic Fit",
    featured: true
  }
];
