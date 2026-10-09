// Estudo de caso completo (página no estilo Behance). Opcional: projeto sem "caso" usa a página simples.
export interface Caso {
  resumo: string;                               // frase logo abaixo do nome
  ficha: { rotulo: string; valor: string }[];   // área, local, plano...
  palco: { fundo: string; moldura?: string };   // cor da cliente usada na capa e cor da moldura do celular
  video?: { src: string; poster: string };      // gravação do site no computador (se não houver, a capa usa a imagem do projeto)
  capaCelular: string;                          // tela do celular que aparece na capa
  contexto: string[];                           // parágrafos de "O ponto de partida"
  cores: { texto: string; paleta: { nome: string; hex: string; escura?: boolean }[] };
  fonte: { nome: string; uso: string; amostra: string; css: string; link: string; peso?: number; maiusculas?: boolean };
  telas: { img: string; titulo: string; texto: string }[];
  celular: { texto: string; fundo: string; proporcao?: string; telas: { img: string; legenda: string }[] };
  entregas: string[];
}

export interface Project {
  id: string;
  slug: string;
  client: string;
  category: string;
  planType: 'SITE ESSENCIAL' | 'SITE PROFISSIONAL' | 'SISTEMA WEB';
  badge: string;
  projectType: 'real' | 'model';
  tagline: string;
  objective: string;
  challenge: string;
  solution: string;
  structure: string[];
  style: string;
  results: string;
  img: string;
  screens?: string[];
  demo: string;
  technologies: string[];
  featured: boolean;
  caso?: Caso;
}

export interface AppProduct {
  id: string;
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  desc: string;
  forWho: string[];
  problem: string;
  solution: string;
  features: string[];
  highlights: string[];
  benefits: string[];
  howItWorks: { step: string; title: string; text: string }[];
  faq: { q: string; a: string }[];
  devicesImg: string;
  screenImg: string;
  urlLabel: string;
  demoUrl: string;
  ctaText: string;
  priceInfo?: string;
  featured: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: 'Sites e Google' | 'Marketing Digital' | 'Negócios' | 'Tecnologia' | 'Ferramentas' | 'Recomendações';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  content: string[]; // Parágrafos e seções estruturadas
  sections: {
    heading: string;
    body: string;
    extra?: string[];   // parágrafos seguintes, antes da lista
    list?: string[];
    depois?: string[];  // parágrafos depois da lista
  }[];
  tags: string[];
  relatedSlugs: string[];
  sources?: { label: string; url: string }[];
  ctaType: 'whatsapp' | 'service' | 'apps' | 'affiliate';
  ctaTitle?: string;
  ctaText?: string;
  ctaButtonText?: string;
  ctaUrl?: string;
}

export interface AffiliateProduct {
  id: string;
  name: string;
  category: 'ferramentas-digitais' | 'home-office' | 'criadores';
  categoryLabel: string;
  shortDesc: string;
  forWho: string;
  indication: string;
  image: string;
  imageFit?: 'cover' | 'contain';
  affiliateUrl: string;
  buttonText: string;
  badge?: string;
  priceRange?: string;
}

export interface SegmentInfo {
  slug: string;
  title: string;
  segmentName: string;
  subtitle: string;
  heroDesc: string;
  whyNeedSite: {
    title: string;
    text: string;
    points: string[];
  };
  recommendedStructure: {
    title: string;
    description: string;
    sections: { name: string; detail: string }[];
  };
  howWeHelp: {
    title: string;
    description: string;
    benefits: string[];
  };
  processSteps: { step: string; title: string; desc: string }[];
  faq: { q: string; a: string }[];
  relatedProjectSlug?: string;
  metaDescription: string;
  keywords: string[];
}

export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  problem: {
    title: string;
    description: string;
    points: string[];
  };
  forWho: string[];
  benefits: { title: string; desc: string }[];
  structure: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  faq: { q: string; a: string }[];
  metaDescription: string;
  relatedSegments: string[];
}
