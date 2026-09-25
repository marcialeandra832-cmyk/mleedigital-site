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
    list?: string[];
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
