import { AffiliateProduct } from '../types';
import cadeiraImage from '../assets/images/cadeira_ergonomica_pro_1786753892460.jpg';

export const affiliateCategories = [
  { id: 'todos', label: 'Todos os Recursos', path: '/recomendados/' },
  { id: 'ferramentas-digitais', label: 'Ferramentas Digitais', path: '/recomendados/ferramentas-digitais/' },
  { id: 'home-office', label: 'Home Office & Ergonomia', path: '/recomendados/home-office/' },
  { id: 'criadores', label: 'Equipamentos para Criadores', path: '/recomendados/criadores/' }
];

export const affiliateProductsData: AffiliateProduct[] = [
  {
    id: "hostinger-cloud",
    name: "Hostinger Hospedagem Web & Cloud",
    category: "ferramentas-digitais",
    categoryLabel: "Ferramentas Digitais",
    shortDesc: "A infraestrutura com melhor custo-benefício, certificado SSL grátis, e-mails profissionais e servidores ultrarrápidos no Brasil.",
    forWho: "Pequenas empresas, profissionais liberais e desenvolvedores que buscam alta performance com preço acessível.",
    indication: "Recomendamos para hospedar sites WordPress, páginas institucionais e e-mails corporativos com facilidade de configuração.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    imageFit: "cover",
    affiliateUrl: "https://www.hostinger.com/br?REFERRALCODE=KUZMARCIAMLE",
    buttonText: "Ver Planos com Desconto",
    badge: "MELHOR CUSTO-BENEFÍCIO",
    priceRange: "A partir de R$ 12,99/mês"
  },
  {
    id: "notion-workspace",
    name: "Notion Workspace para Organização",
    category: "ferramentas-digitais",
    categoryLabel: "Ferramentas Digitais",
    shortDesc: "O aplicativo tudo-em-um para gestão de tarefas, processos da empresa, controle de clientes e anotações estratégicas.",
    forWho: "Empreendedores individuais, donos de estúdios e equipes que precisam centralizar dados e rotinas diárias.",
    indication: "Usamos internamente na MLee Digital para gerenciar cronogramas de entrega de sites e documentações de projetos.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=600&q=80",
    imageFit: "cover",
    affiliateUrl: "https://app.notion.com",
    buttonText: "Criar Conta Gratuita",
    badge: "ESSENCIAL PARA PRODUTIVIDADE",
    priceRange: "Plano Grátis disponível"
  },
  {
    id: "cadeira-ergonomica",
    name: "Cadeira Ergonômica de Alto Padrão",
    category: "home-office",
    categoryLabel: "Home Office & Ergonomia",
    shortDesc: "Cadeira com suporte lombar ajustável, encosto em tela mesh respirável e apoio de braços 3D para longas jornadas de trabalho.",
    forWho: "Quem trabalha mais de 6 horas diárias sentado no computador e quer evitar dores na coluna e fadiga.",
    indication: "Investimento essencial para garantir saúde postural e produtividade sustentável no trabalho diário.",
    image: cadeiraImage,
    imageFit: "cover",
    affiliateUrl: "https://link.amazon/B082ima9L",
    buttonText: "Ver na Loja Oficial",
    badge: "CONFORTO & SAÚDE",
    priceRange: "R$ 800 - R$ 1.500"
  },
  {
    id: "suporte-monitor-articulado",
    name: "Braço Articulado com Pistão a Gás para Monitor",
    category: "home-office",
    categoryLabel: "Home Office & Ergonomia",
    shortDesc: "Libera espaço precioso na mesa de trabalho e permite ajuste milimétrico da altura e ângulo da tela.",
    forWho: "Profissionais que utilizam monitores externos e precisam manter o olhar alinhado à altura correta dos olhos.",
    indication: "Reduz a tensão no pescoço e trapézio, deixando a bancada de trabalho muito mais limpa e moderna.",
    image: "/images/afiliados/braco-articulado.png",
    imageFit: "contain",
    affiliateUrl: "https://link.amazon/B08nkkLfK",
    buttonText: "Ver Opções Disponíveis",
    priceRange: "R$ 180 - R$ 350"
  },
  {
    id: "ring-light-mesa-tripé",
    name: "Kit de Iluminação Soft Light para Vídeos",
    category: "criadores",
    categoryLabel: "Equipamentos para Criadores",
    shortDesc: "Luz difusa com ajuste de temperatura de cor (quente e fria) e suporte firme para celular e câmera.",
    forWho: "Profissionais da saúde, estética, advogados e criadores que gravam stories, reels e reuniões online.",
    indication: "Garante visual nítido e profissional em chamadas de vídeo e produções de conteúdo para o Instagram.",
    image: "/images/afiliados/soft-light.png",
    imageFit: "contain",
    affiliateUrl: "https://link.amazon/B09wTNx3k",
    buttonText: "Conferir Melhores Modelos",
    badge: "ILUMINAÇÃO PROFISSIONAL",
    priceRange: "R$ 120 - R$ 280"
  },
  {
    id: "microfone-lapela-sem-fio",
    name: "Microfone de Lapela Sem Fio Plug & Play",
    category: "criadores",
    categoryLabel: "Equipamentos para Criadores",
    shortDesc: "Captação de áudio cristalina com cancelamento de ruído ambiente, compatível com iPhone e Android.",
    forWho: "Quem grava vídeos para redes sociais e quer som com clareza sem chiados ou eco da sala.",
    indication: "O áudio representa 70% da qualidade percebida de um vídeo. Esse microfone eleva o padrão dos seus vídeos no primeiro uso.",
    image: "/images/afiliados/microfone-lapela.png",
    imageFit: "contain",
    affiliateUrl: "https://link.amazon/B0crzXNru",
    buttonText: "Ver Preço e Avaliações",
    badge: "ÁUDIO DE ALTA QUALIDADE",
    priceRange: "R$ 90 - R$ 220"
  }
];
