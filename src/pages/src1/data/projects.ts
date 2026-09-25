import sorayAbbudCapa from '../assets/clientes/soray-abbud.webp';
import { Project } from '../types';
import vanguardaMockup from '../assets/images/figueiredo_advocacia_hero_1785179779839.jpg';
import clarenzaMockup from '../assets/images/clarenza_odontologia_hero_1786750937767.jpg';
import draMariaJunqueiraMockup from '../assets/clientes/maria-junqueira.webp';
import vivianeMengattoMockup from '../assets/clientes/viviane-mengatto.webp';
import matrizGrillMockup from '../assets/clientes/matriz-grill.webp';
import carlaFigmamMockup from '../assets/images/carla_figmam_preview_1786812678656.jpg';
import auraEsteticaMockup from '../assets/images/aura_estetica_preview_1786812029262.jpg';

export const projectsData: Project[] = [
  // PROJETOS REALIZADOS — CLIENTES REAIS
  {
    id: "dra-soraya-abbud",
    slug: "dra-soraya-abbud",
    client: "Dra. Soray Abbud",
    category: "Médica Especialista / Saúde & Estética",
    planType: "SITE ESSENCIAL",
    projectType: "real",
    badge: "PROJETO REALIZADO • CLIENTE REAL",
    tagline: "Presença digital elegante e canal direto para contato médico via WhatsApp.",
    objective: "Desenvolvimento de site institucional para médica especialista, com foco em apresentação da clínica, tratamentos e canal de contato via WhatsApp.",
    challenge: "Apresentar a formação médica com clareza e credibilidade, garantindo navegação fluida e objetiva para o paciente.",
    solution: "Criação de uma página fluida em tons neutros acolhedores, seções claras de tratamentos, botão de WhatsApp, integração com Instagram e mapa da clínica.",
    structure: [
      "Cabeçalho com apresentação médica e foto profissional",
      "Seção sobre a médica com diferenciais técnicos e humanizados",
      "Tratamentos e procedimentos detalhados",
      "Localização com Google Maps integrado",
      "Botão de contato rápido no WhatsApp",
      "Integração do feed do Instagram"
    ],
    style: "Design minimalista e acolhedor, tipografia refinada, estruturado para transmitir segurança científica e sofisticação.",
    results: "Site publicado com apresentação institucional completa, canal direto de contato e integração de localização.",
    img: sorayAbbudCapa,
    demo: "https://www.drasorayabbud.com.br/",
    technologies: ["React", "Tailwind CSS", "SEO Local", "Google Maps API", "WhatsApp Integration"],
    featured: true
  },
  {
    id: "dra-maria-junqueira",
    slug: "dra-maria-junqueira",
    client: "Dra. Maria Junqueira",
    category: "Biomedicina Estética & Emagrecimento Avançado",
    planType: "SITE ESSENCIAL",
    projectType: "real",
    badge: "PROJETO REALIZADO • CLIENTE REAL",
    tagline: "Estética corporal e facial de alto padrão com método autoral CRIO 4D e atendimento humanizado.",
    objective: "Desenvolvimento de site institucional de alto padrão para a Dra. Maria Junqueira, Biomédica Esteta formada pela Universidade Federal do Triângulo Mineiro (UFTM), destacando o método autoral CRIO 4D para emagrecimento, redução de gordura localizada e harmonização facial.",
    challenge: "Apresentar a formação científica de excelência e os protocolos exclusivos com sofisticação e acolhimento humanizado, facilitando o agendamento de avaliações personalizadas via WhatsApp.",
    solution: "Design editorial e sofisticado em tons quentes e dourado champagne, destacando a formação acadêmica (UFTM), o método CRIO 4D 360°, os diferenciais de escuta ativa e o canal direto de agendamento via WhatsApp.",
    structure: [
      "Hero de alto padrão com proposta de valor e destaque para o método CRIO 4D",
      "Apresentação da trajetória profissional e formação acadêmica na UFTM",
      "Diferenciais: atendimento humanizado, escuta ativa, empatia e protocolos sem dor cirúrgica",
      "Catálogo de tratamentos para emagrecimento, gordura localizada e harmonização facial",
      "Depoimentos de pacientes e resultados naturais que valorizam a beleza única",
      "Canal direto no WhatsApp para avaliação personalizada e agendamento de consultas"
    ],
    style: "Design sofisticado em tons neutros quentes, bege refinado e dourado champagne, tipografia elegante e sensação de cuidado exclusivo e personalizado.",
    results: "Site publicado com apresentação impecável da autoridade biomédica, destaque para o método autoral CRIO 4D e conversão de avaliações via WhatsApp.",
    img: draMariaJunqueiraMockup,
    demo: "https://dramariajunqueira.vercel.app/",
    technologies: ["React", "Tailwind CSS", "Método CRIO 4D", "SEO para Estética", "WhatsApp Integration"],
    featured: true
  },
  {
    id: "dra-viviane-mengatto",
    slug: "dra-viviane-mengatto",
    client: "Dra. Viviane Mengatto",
    category: "Biomedicina Estética & Harmonização Facial",
    planType: "SITE ESSENCIAL",
    projectType: "real",
    badge: "PROJETO REALIZADO • CLIENTE REAL",
    tagline: "A arte de realçar sua beleza natural unindo ciência, segurança avançada e saúde integrativa.",
    objective: "Desenvolvimento de site dark luxury para a Dra. Viviane Mengatto, destacando mais de 10 anos de experiência em beleza, graduação em Biomedicina, especialização em Furo Humanizado, Body Piercing e Harmonização Orofacial.",
    challenge: "Consolidar a autoridade como profissional de saúde e especialista em estética avançada (CRBM Ativo), unindo a delicadeza do cuidado do olhar com a precisão da harmonização facial personalizada.",
    solution: "Layout de luxo em grafite profundo com iluminação dourada, seções de procedimentos faciais, furo humanizado sem dor, diferenciais VIP, planos exclusivos e canal direto via WhatsApp.",
    structure: [
      "Hero dark luxury com conceito 'A arte de realçar sua beleza natural' e foto profissional",
      "Apresentação da trajetória de mais de 10 anos e formação biomédica (CRBM Ativo)",
      "Especialidades: Harmonização Facial, Furo Humanizado e cuidados do olhar",
      "Diferenciais de atendimento VIP, planos exclusivos e saúde integrativa",
      "Seção de antes & depois, produtos indicados e quiz estético",
      "Botão direto de agendamento e consultoria via WhatsApp"
    ],
    style: "Design dark luxury em tons de grafite profundo, detalhes em dourado champagne e tipografia moderna e elegante.",
    results: "Presença digital marcante com estética de luxo, autoridade biomédica reforçada e direcionamento ágil para agendamentos.",
    img: vivianeMengattoMockup,
    demo: "https://dra-viviane-mengatto.vercel.app/",
    technologies: ["React", "Tailwind CSS", "Design Dark Luxury", "SEO Estética", "WhatsApp Direct"],
    featured: true
  },
  {
    id: "matriz-grill",
    slug: "matriz-grill",
    client: "Matriz Grill",
    category: "Gastronomia, Restaurante & Bar",
    planType: "SITE ESSENCIAL",
    projectType: "real",
    badge: "PROJETO REALIZADO • CLIENTE REAL",
    tagline: "Música ao vivo de alta qualidade, hambúrgueres artesanais, porções na chapa e o chopp mais gelado da região.",
    objective: "Desenvolvimento de site institucional e cardápio digital para a Matriz Grill, localizada na esquina mais badalada da cidade, com destaque para música ao vivo, combos de hambúrgueres artesanais, porções na chapa, vinhos de inverno, sopas e cremes reconfortantes e chopp gelado.",
    challenge: "Transmitir a atmosfera vibrante da casa, organizar as opções do cardápio gastronômico e facilitar reservas de mesas e localização para os clientes.",
    solution: "Layout contemporâneo com fotografias apetitosas em destaque, atmosfera acolhedora noturna, programação musical atualizada, cardápio digital e integração direta para reservas no WhatsApp.",
    structure: [
      "Hero visual com gastronomia, chopp artesanal e atmosfera noturna",
      "Apresentação da casa na esquina mais badalada e acolhedora da cidade",
      "Cardápio com combos artesanais, porções na chapa, sopas, cremes e vinhos selecionados",
      "Programação de música ao vivo de alta qualidade e eventos",
      "Horários de funcionamento, localização com mapa interativo e reservas",
      "Botão direto no WhatsApp para reservas de mesas e atendimento"
    ],
    style: "Identidade gastronômica calorosa em tons escuros e âmbar, tipografia marcante e fotografias apetitosas em alta definição.",
    results: "Site publicado com cardápio completo, agenda de shows, localização e canal direto de reservas via WhatsApp.",
    img: matrizGrillMockup,
    demo: "https://matrizgrillvideira.vercel.app/",
    technologies: ["React", "Tailwind CSS", "Cardápio Digital", "SEO Local", "WhatsApp Direct"],
    featured: true
  },

  // MODELOS DE REFERÊNCIA — DEMONSTRATIVOS
  {
    id: "carla-figmam-consorcios",
    slug: "carla-figmam-consorcios",
    client: "Carla Figmam — Consultoria Patrimonial & Consórcios",
    category: "Consórcios, Imóveis & Planejamento Patrimonial",
    planType: "SITE ESSENCIAL",
    projectType: "model",
    badge: "MODELO DE REFERÊNCIA • DEMONSTRATIVO",
    tagline: "Planejamento patrimonial com estratégia premium e investimentos sem juros em Videira - SC e Região.",
    objective: "Desenvolvimento de site institucional e canal de simulação para Carla Figmam, especialista em consórcios e planejamento patrimonial (Ademicon) em Videira - SC e região.",
    challenge: "Transmitir autoridade, sofisticação executiva e facilitar a solicitação de simulações personalizadas de cotas de R$ 40 mil a R$ 5 milhões via WhatsApp.",
    solution: "Layout dark moderno com elementos em vermelho e dourado, destaque para aquisição de imóveis e frotas, segurança da Ademicon, ausência de juros abusivos e simulador integrado.",
    structure: [
      "Hero de alto padrão com proposta de valor e destaque de especialista",
      "Diferenciais: sem juros abusivos, cotas flexíveis e regulação pelo Banco Central",
      "Soluções patrimoniais: consórcios imobiliários, automotivos, pesados e investimentos",
      "Apresentação da consultora Carla Figmam e autoridade Ademicon",
      "Passo a passo do funcionamento e processo de contemplação",
      "Botão direto para solicitação de simulação personalizada via WhatsApp"
    ],
    style: "Design moderno dark tech com detalhes em vermelho vivo e tipografia marcante, transmitindo autoridade e solidez financeira.",
    results: "Site publicado com visual de alto padrão, canal direto para simulação de cotas e captação de clientes qualificados via WhatsApp.",
    img: carlaFigmamMockup,
    demo: "https://carlafigmam.vercel.app/",
    technologies: ["React", "Tailwind CSS", "Simulador de Consórcios", "SEO Local", "WhatsApp Direct"],
    featured: true
  },
  {
    id: "clarenza-odontologia",
    slug: "clarenza-odontologia",
    client: "Clarenza Odontologia e Sorrisos",
    category: "Odontologia & Estética Dental",
    planType: "SITE ESSENCIAL",
    projectType: "model",
    badge: "MODELO DE REFERÊNCIA • DEMONSTRATIVO",
    tagline: "Estrutura visual moderna com catálogo de tratamentos, alinhadores e canal direto para contato.",
    objective: "Modelo demonstrativo desenvolvido para consultórios e clínicas odontológicas que buscam apresentar tratamentos como implantes, próteses, ortodontia estética e clareamento.",
    challenge: "Apresentar procedimentos clínicos e biossegurança com clareza visual e canais ágeis de contato.",
    solution: "Página fluida com catálogo de tratamentos, tecnologia do consultório, localização com mapa interativo e botão direto para o WhatsApp.",
    structure: [
      "Hero marcante com apresentação do consultório e chamada para contato",
      "Catálogo completo de tratamentos e especialidades odontológicas",
      "Diferenciais de conforto, biossegurança e atendimento humanizado",
      "Apresentação do cirurgião-dentista e registro no CRO",
      "Localização física com mapa interativo e facilidade de acesso",
      "Canal direto no WhatsApp para tirar dúvidas e agendar consultas"
    ],
    style: "Design clean, luminoso, tipografia moderna e paleta refinada para saúde e estética bucal.",
    results: "Estrutura visual completa e organizada para clínicas odontológicas apresentarem suas especialidades e canais de contato.",
    img: clarenzaMockup,
    demo: "https://clarenzaodontologiaesorrisos.vercel.app/",
    technologies: ["React", "Tailwind CSS", "SEO Odontológico", "Google Maps", "WhatsApp Direct"],
    featured: true
  },
  {
    id: "aura-estetica",
    slug: "aura-estetica",
    client: "Aura Estética & Bem-Estar",
    category: "Estética Avançada, Beleza & Bem-Estar",
    planType: "SITE ESSENCIAL",
    projectType: "model",
    badge: "MODELO DE REFERÊNCIA • DEMONSTRATIVO",
    tagline: "Estrutura visual editorial e contemporânea para clínicas de estética, micropigmentação e cuidados exclusivos.",
    objective: "Estrutura demonstrativa criada para profissionais de beleza e estética que buscam um site sofisticado para exibir portfólio de procedimentos e agendamentos.",
    challenge: "Equilibrar elegância estética, portfólio visual refinado e caminho direto e intuitivo para o WhatsApp do studio.",
    solution: "Layout editorial com paleta suave e contemporânea, seções de procedimentos, galeria de trabalhos, ambiente do studio e botão de agendamento.",
    structure: [
      "Hero editorial com conceito de beleza personalizada e acolhimento",
      "Menu de procedimentos e serviços especializados",
      "Galeria visual com técnicas e diferenciais de atendimento",
      "Apresentação da especialista e certificações",
      "Localização com mapa integrado e horários de atendimento",
      "Botão direto para WhatsApp para consultas e agendamentos"
    ],
    style: "Estética refinada em tons neutros quentes e nude rosado, tipografia elegante e sensação de exclusividade.",
    results: "Modelo demonstrativo com excelente apelo visual e navegação otimizada para o público feminino e de estética.",
    img: auraEsteticaMockup,
    demo: "https://aura-demo-five.vercel.app/",
    technologies: ["React", "Tailwind CSS", "Galeria Editorial", "SEO Local", "WhatsApp Integration"],
    featured: true
  },
  {
    id: "figueiredo-advocacia",
    slug: "figueiredo-advocacia",
    client: "Figueiredo Advocacia",
    category: "Advocacia & Consultoria Jurídica",
    planType: "SITE ESSENCIAL",
    projectType: "model",
    badge: "MODELO DE REFERÊNCIA • DEMONSTRATIVO",
    tagline: "Estrutura visual institucional para advocacia consultiva e contenciosa.",
    objective: "Modelo demonstrativo para serviços jurídicos e consultorias com foco em clareza institucional, áreas de atuação e canal direto para consulta.",
    challenge: "Transmitir seriedade, discrição e sofisticação respeitando os limites éticos da publicidade institucional.",
    solution: "Layout limpo em azul marinho profundo e dourado, destacando as áreas de atuação jurídica e contato direto.",
    structure: [
      "Apresentação do escritório e proposta de valor",
      "Áreas de atuação e direito empresarial/cível",
      "Perfil dos advogados associados",
      "Formulário para consulta preliminar",
      "Canal direto e seguro para WhatsApp"
    ],
    style: "Identidade visual em tom azul marinho profundo e detalhes em dourado, tipografia clássica e jornada institucional.",
    results: "Estrutura limpa e institucional para escritórios de advocacia apresentarem sua equipe e áreas de atuação.",
    img: vanguardaMockup,
    demo: "https://figueiredoadvocacia.vercel.app/",
    technologies: ["React", "Tailwind CSS", "SEO Local", "Formulário Seguro", "Design Responsivo"],
    featured: true
  }
];
