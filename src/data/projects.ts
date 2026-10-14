import sorayAbbudCapa from '../assets/clientes/soray-abbud.webp';
import { Project } from '../types';
import { casoViviane } from './casos/viviane';
import { casoSoray } from './casos/soray';
import { casoMaria } from './casos/maria';
import { casoDanielle } from './casos/danielle';
import { casoNicole } from './casos/nicole';
import { casoMatriz } from './casos/matriz';
import vanguardaMockup from '../assets/modelos/figueiredo-advocacia.webp';
import draMariaJunqueiraMockup from '../assets/clientes/maria-junqueira.webp';
import draDanielleCarvaoMockup from '../assets/clientes/danielle-carvao.webp';
import vivianeMengattoMockup from '../assets/clientes/viviane-mengatto.webp';
import nicoleBordignonCapa from '../assets/clientes/nicole-bordignon.webp';
import matrizGrillMockup from '../assets/clientes/matriz-grill.webp';
import carlaFigmamMockup from '../assets/images/carla_figmam_preview_1786812678656.jpg';

export const projectsData: Project[] = [
  // PROJETOS REALIZADOS — CLIENTES REAIS
  {
    id: "dra-soraya-abbud",
    slug: "dra-soraya-abbud",
    client: "Dra. Soray Abbud",
    category: "Odontologia Estética & Estética Avançada",
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
    featured: true,
    caso: casoSoray
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
    featured: true,
    caso: casoMaria
  },
  {
    id: "dra-danielle-carvao",
    slug: "dra-danielle-carvao",
    client: "Dra. Danielle Carvão",
    category: "Odontologia & Rejuvenescimento Facial",
    planType: "SITE ESSENCIAL",
    projectType: "real",
    badge: "PROJETO REALIZADO • CLIENTE REAL",
    tagline: "Rejuvenescimento facial com naturalidade 40+ e o Método DC Renova 360, no Rio de Janeiro.",
    objective: "Desenvolvimento de site one page para a Dra. Danielle Carvão, dentista com 31 anos de experiência no Rio de Janeiro, apresentando o rejuvenescimento facial com naturalidade para mulheres 40+ e o método autoral DC Renova 360.",
    challenge: "Reunir em uma única página o que antes estava espalhado em um link na bio: quem é a Dra. Dani, como funciona o método, os tratamentos e o caminho para agendar, com uma identidade fiel à marca que ela já usava.",
    solution: "Página única com paleta extraída do material da própria cliente (dourado envelhecido, marfim e marrom profundo), seção dedicada ao Método DC Renova 360, tratamentos, antes e depois, depoimentos, perguntas frequentes e botão direto para o WhatsApp do consultório.",
    structure: [
      "Abertura com a proposta 'Rejuvenescimento facial com naturalidade 40+' e foto profissional",
      "Sobre a Dra. Dani: 31 anos de odontologia e a forma de trabalhar",
      "Método DC Renova 360: cuidar do agora, pensando no depois",
      "Tratamentos de rejuvenescimento, harmonização natural e alinhadores",
      "Antes e depois, depoimentos de pacientes e perguntas frequentes",
      "Instagram, localização no Largo do Machado e agendamento pelo WhatsApp"
    ],
    style: "Visual elegante em dourado envelhecido, marfim e marrom profundo, com tipografia serifada clássica e fotos profissionais da própria doutora.",
    results: "Site publicado no domínio próprio da cliente, substituindo o link na bio por uma apresentação completa com canal direto de agendamento.",
    img: draDanielleCarvaoMockup,
    demo: "https://dradanicarvao.com.br/",
    technologies: ["React", "Tailwind CSS", "Método DC Renova 360", "One Page", "WhatsApp Direct"],
    featured: true,
    caso: casoDanielle
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
    demo: "https://www.dravivianemengatto.com.br/",
    technologies: ["React", "Tailwind CSS", "Design Dark Luxury", "SEO Estética", "WhatsApp Direct"],
    featured: true,
    caso: casoViviane
  },
  {
    id: "nicole-bordignon",
    slug: "nicole-bordignon",
    client: "Nicole Bordignon",
    category: "Sobrancelhas e maquiagem",
    planType: "SITE ESSENCIAL",
    projectType: "real",
    badge: "PROJETO REALIZADO • CLIENTE REAL",
    tagline: "Sobrancelhas e maquiagem em Videira, com agendamento direto pelo WhatsApp.",
    objective: "Site de página única para a Nicole Bordignon, designer de sobrancelhas e maquiadora em Videira, SC, apresentando os serviços e levando a cliente direto para o agendamento.",
    challenge: "Mostrar o trabalho de quem até então não tinha site, com a foto dela em destaque e textos curtos, sem depender de fotos de antes e depois.",
    solution: "Abertura em tela cheia com a foto e o nome dela em letras grandes, lista dos serviços com uma explicação simples de cada um, área para noivas e botão de agendamento pelo WhatsApp em toda a página.",
    structure: [
      "Abertura em tela cheia com foto e nome",
      "Serviços: design e reconstrução de sobrancelhas, brow lamination, lash lifting, henna ou tintura",
      "Maquiagem profissional para festas, formaturas, eventos e ensaios",
      "Área dedicada a noivas",
      "Como ela atende: avaliação antes de qualquer procedimento, sempre com horário marcado",
      "Endereço em Videira e agendamento pelo WhatsApp"
    ],
    style: "Tons de marrom, nude e vinho, com tipografia grande e fotos ocupando a tela inteira.",
    results: "Site publicado, com os serviços organizados e o agendamento a um toque pelo WhatsApp.",
    img: nicoleBordignonCapa,
    demo: "https://nicolebordignon.mleedigital.com.br/",
    technologies: ["Página única", "Design responsivo", "WhatsApp direto"],
    featured: true,
    caso: casoNicole
  },
  {
    id: "matriz-grill",
    slug: "matriz-grill",
    client: "Matriz Grill",
    category: "Gastronomia, Restaurante & Bar",
    planType: "SITE ESSENCIAL",
    projectType: "real",
    badge: "PROJETO REALIZADO • CLIENTE REAL",
    tagline: "Música ao vivo toda sexta, tábuas na chapa e chopp gelado. 30 anos na mesma esquina, em Videira.",
    objective: "Site do Matriz Grill, o antigo Bar do Seco, em Videira, SC: apresentar a casa, a agenda de shows, o cardápio e o delivery, e levar a pessoa direto para a reserva de mesa.",
    challenge: "Falar com quem frequenta a casa há 30 anos e com quem está procurando onde sair, mantendo agenda e cardápio fáceis de atualizar toda semana.",
    solution: "Abertura com vídeos reais da casa cheia e os nomes Matriz Grill e Bar do Seco lado a lado, agenda com os cantores do mês, cardápio por categoria, área de delivery pelo AiPede e reserva pelo WhatsApp em todas as páginas.",
    structure: [
      "Abertura com vídeos da casa e os dois nomes em destaque",
      "Agenda com os shows de sexta do mês e horários da casa",
      "Cardápio: tábuas, hambúrgueres, porções, petiscos, sobremesas e bar",
      "Delivery pelo aplicativo AiPede",
      "Fotos e vídeos separados por ao vivo, cozinha e casa",
      "A casa: história desde 1996 e foto de antes e depois da esquina",
      "Endereço com mapa, contato e reserva pelo WhatsApp"
    ],
    style: "Carvão e madeira escura com detalhes cor de mel, títulos altos e condensados como letreiro de bar e fotos reais da casa.",
    results: "Site publicado no domínio próprio, com agenda e cardápio atualizados e reserva de mesa a um toque pelo WhatsApp.",
    img: matrizGrillMockup,
    demo: "https://www.matrizgrillvideira.com.br/",
    technologies: ["Agenda de shows", "Cardápio por categoria", "Delivery AiPede", "WhatsApp direto", "Domínio próprio"],
    featured: true,
    caso: casoMatriz
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
