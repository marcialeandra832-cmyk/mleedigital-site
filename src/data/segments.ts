import { SegmentInfo } from '../types';

// Páginas por área. Cada chave é o endereço da página (ex.: /sites-para-clinicas/).
export const segmentsData: Record<string, SegmentInfo> = {
  "sites-para-clinicas": {
    slug: "sites-para-clinicas",
    title: "Sites para clínicas médicas e odontológicas",
    segmentName: "Clínicas médicas e odontológicas",
    subtitle: "Um site que explica o que você faz e leva o paciente direto para o agendamento.",
    heroDesc: "Para médicas, dentistas e clínicas que querem ser encontradas no Google, passar segurança antes da primeira consulta e receber pedidos de agendamento pelo WhatsApp.",
    whyNeedSite: {
      title: "Por que o seu consultório precisa de um site próprio",
      text: "O paciente pesquisa antes de marcar. Ele quer saber quem você é, quais tratamentos faz, onde atende e como agendar. Quando essas respostas estão espalhadas entre posts e stories, ele desiste ou escolhe quem explicou melhor.",
      points: [
        "Aparecer no Google quando alguém procura o seu tratamento na sua cidade.",
        "Mostrar formação, registro profissional e forma de trabalho com clareza.",
        "Explicar cada tratamento numa página própria, com linguagem que o paciente entende.",
        "Levar o paciente direto para o WhatsApp da recepção ou para o agendamento."
      ]
    },
    recommendedStructure: {
      title: "O que o site da sua clínica deve ter",
      description: "A estrutura que funciona melhor para consultórios médicos e odontológicos.",
      sections: [
        { name: "Apresentação", detail: "Quem você é, sua formação, registro (CRM ou CRO) e como você atende." },
        { name: "Tratamentos e especialidades", detail: "Uma explicação clara de cada tratamento: para quem é, como funciona e o que esperar." },
        { name: "O espaço", detail: "Fotos reais do consultório, que passam confiança antes da primeira visita." },
        { name: "Convênios e formas de atendimento", detail: "Planos aceitos, atendimento particular ou reembolso, sem o paciente precisar perguntar." },
        { name: "Localização", detail: "Endereço, mapa e referências para chegar com facilidade." },
        { name: "Agendamento", detail: "Botão direto para o WhatsApp da recepção." }
      ]
    },
    howWeHelp: {
      title: "Como eu crio o site da sua clínica",
      description: "Você fala direto comigo do começo ao fim. Eu organizo as informações, escrevo os textos com você e cuido de toda a parte técnica.",
      benefits: [
        "Textos claros e dentro das regras de publicidade do seu conselho.",
        "Configuração para o Google entender o que você faz e onde atende.",
        "Site pensado primeiro para o celular, de onde vem a maioria dos pacientes.",
        "Pronto em até 7 dias úteis depois de receber o material."
      ]
    },
    processSteps: [
      { step: "01", title: "Conversa", desc: "Você me conta sobre os tratamentos, o público e como gosta de atender." },
      { step: "02", title: "Material", desc: "Você envia fotos e informações. Se faltar algo, eu te ajudo a organizar." },
      { step: "03", title: "Criação", desc: "Eu crio o site e ajustamos juntas até ficar com a sua cara." },
      { step: "04", title: "No ar", desc: "Site publicado, com domínio próprio e botão de agendamento funcionando." }
    ],
    faq: [
      { q: "Posso mostrar fotos de antes e depois?", a: "Depende das regras do seu conselho profissional, que mudam de uma área para outra. Eu te oriento a apresentar os resultados de um jeito ético e dentro das normas." },
      { q: "O site serve para clínica com mais de um profissional?", a: "Sim. Cada profissional pode ter a sua apresentação, com especialidade e registro, e cada tratamento ganha a sua página." },
      { q: "O paciente consegue agendar pelo site?", a: "Sim. O botão leva direto para o WhatsApp da recepção. Se você já usa um sistema de agendamento online, eu coloco o link dele no site." }
    ],
    relatedProjectSlug: "dra-soraya-abbud",
    metaDescription: "Sites para clínicas médicas e odontológicas: tratamentos bem explicados, presença no Google e agendamento pelo WhatsApp. Criados pela Márcia, da MLee Digital.",
    keywords: ["site para clínica médica", "site para dentista", "site para consultório odontológico", "criação de site para clínica"]
  },

  "sites-para-esteticistas": {
    slug: "sites-para-esteticistas",
    title: "Sites para estética e beleza",
    segmentName: "Estética e beleza",
    subtitle: "Seus procedimentos apresentados com a elegância que o seu trabalho tem.",
    heroDesc: "Para biomédicas estetas, esteticistas, clínicas de estética, designers de sobrancelhas, nail designers e estúdios de beleza que querem transformar seguidores em clientes.",
    whyNeedSite: {
      title: "Por que um site, se você já tem Instagram",
      text: "O Instagram mostra o seu trabalho, mas não organiza. A cliente que quer saber quanto tempo dura um procedimento, se dói ou quantas sessões precisa não encontra essa resposta num feed. No site, ela encontra tudo em um só lugar e chega pronta para agendar.",
      points: [
        "Uma página para cada procedimento, com as dúvidas mais comuns respondidas.",
        "Presença no Google para quem procura o seu serviço na cidade.",
        "Um endereço que é seu e não depende de algoritmo.",
        "Agendamento direto pelo WhatsApp."
      ]
    },
    recommendedStructure: {
      title: "O que o site de estética e beleza deve ter",
      description: "A estrutura que ajuda a cliente a decidir e agendar.",
      sections: [
        { name: "Apresentação", detail: "Quem você é, sua formação e o seu jeito de trabalhar." },
        { name: "Procedimentos", detail: "Faciais, corporais, capilares, sobrancelhas ou unhas, cada um explicado com clareza." },
        { name: "Resultados", detail: "Fotos do seu trabalho, apresentadas de forma ética e elegante." },
        { name: "Depoimentos", detail: "O que suas clientes dizem sobre o atendimento." },
        { name: "Dúvidas frequentes", detail: "As perguntas que você mais ouve, respondidas antes da primeira mensagem." },
        { name: "Agendamento", detail: "Botão direto para o seu WhatsApp." }
      ]
    },
    howWeHelp: {
      title: "Como eu crio o seu site",
      description: "Cada site é feito do zero, com as suas cores, suas fotos e a sua forma de falar. Nada de modelo igual ao da concorrente.",
      benefits: [
        "Visual autoral, construído a partir da sua identidade.",
        "Textos que explicam os procedimentos sem exageros.",
        "Configuração para aparecer no Google da sua região.",
        "Pronto em até 7 dias úteis depois de receber o material."
      ]
    },
    processSteps: [
      { step: "01", title: "Conversa", desc: "Você me conta sobre os procedimentos e o seu público." },
      { step: "02", title: "Material", desc: "Você envia fotos, logo e informações." },
      { step: "03", title: "Criação", desc: "Eu crio o site e ajustamos juntas até ficar com a sua cara." },
      { step: "04", title: "No ar", desc: "Site publicado e pronto para receber clientes." }
    ],
    faq: [
      { q: "Atendo em sala alugada ou dentro de outra clínica. Posso ter site?", a: "Pode, e é justamente o que te diferencia. O site é seu, com o seu nome, independente de onde você atende." },
      { q: "Posso mostrar antes e depois?", a: "Sim, respeitando as regras do seu conselho profissional quando houver. Eu te ajudo a apresentar os resultados de forma ética." },
      { q: "Dá para vender kits, pacotes ou produtos no site?", a: "Dá para mostrar pacotes e produtos com botão de pedido pelo WhatsApp. Se você precisa de um catálogo maior, veja também o Catálogo digital." }
    ],
    relatedProjectSlug: "dra-maria-junqueira",
    metaDescription: "Sites para estética e beleza: procedimentos bem apresentados, presença no Google e agendamento pelo WhatsApp. Criados pela Márcia, da MLee Digital.",
    keywords: ["site para esteticista", "site para clínica de estética", "site para biomédica esteta", "site para studio de beleza"]
  },

  "sites-para-arquitetos": {
    slug: "sites-para-arquitetos",
    title: "Sites para arquitetura e interiores",
    segmentName: "Arquitetura",
    subtitle: "Um portfólio à altura dos seus projetos.",
    heroDesc: "Para arquitetas, designers de interiores e escritórios que querem mostrar os projetos com o cuidado que eles merecem e receber contatos de clientes com o perfil certo.",
    whyNeedSite: {
      title: "Por que o seu portfólio precisa de um site",
      text: "Quem vai contratar uma arquiteta quer ver projetos completos: o antes, as escolhas, os detalhes. No Instagram, cada projeto vira alguns posts perdidos no feed. No site, cada um ganha a sua página, com fotos grandes e a história por trás.",
      points: [
        "Cada projeto apresentado como um estudo de caso, com fotos em alta qualidade.",
        "Um endereço profissional para enviar a clientes e parceiros.",
        "Presença no Google para quem procura arquitetura na sua região.",
        "Contato direto pelo WhatsApp ou formulário."
      ]
    },
    recommendedStructure: {
      title: "O que o site de arquitetura deve ter",
      description: "A estrutura que valoriza o portfólio e atrai o cliente certo.",
      sections: [
        { name: "Projetos", detail: "Galeria com fotos grandes e uma página para cada projeto." },
        { name: "Sobre", detail: "Sua formação, registro no CAU e a forma como você pensa os espaços." },
        { name: "Serviços", detail: "Projeto residencial, comercial, interiores, consultoria de reforma." },
        { name: "Como funciona", detail: "As etapas, do primeiro contato à entrega do projeto." },
        { name: "Contato", detail: "WhatsApp e formulário para pedidos de orçamento." }
      ]
    },
    howWeHelp: {
      title: "Como eu crio o seu site",
      description: "O visual é pensado para deixar os seus projetos em primeiro plano, com layout editorial e carregamento rápido mesmo com muitas fotos.",
      benefits: [
        "Layout editorial, com as fotos em destaque.",
        "Imagens otimizadas para abrir rápido no celular.",
        "Configuração para aparecer no Google da sua região.",
        "Pronto em até 7 dias úteis depois de receber o material."
      ]
    },
    processSteps: [
      { step: "01", title: "Conversa", desc: "Você me conta sobre o seu trabalho e os projetos que quer mostrar." },
      { step: "02", title: "Material", desc: "Você envia as fotos dos projetos e as informações." },
      { step: "03", title: "Criação", desc: "Eu monto o portfólio e ajustamos juntas." },
      { step: "04", title: "No ar", desc: "Site publicado, pronto para mandar a clientes e parceiros." }
    ],
    faq: [
      { q: "Posso colocar imagens 3D e renderizações?", a: "Sim. Projetos em andamento podem aparecer com imagens 3D, e os entregues com fotos reais." },
      { q: "Consigo adicionar projetos novos depois?", a: "Sim. Você me manda as fotos e as informações e eu incluo, dentro da manutenção mensal." }
    ],
    metaDescription: "Sites para arquitetas e designers de interiores: portfólio editorial, presença no Google e contato direto. Criados pela Márcia, da MLee Digital.",
    keywords: ["site para arquiteta", "site para arquitetura", "portfólio de arquitetura", "site para designer de interiores"]
  },

  "sites-para-advogados": {
    slug: "sites-para-advogados",
    title: "Sites para advocacia",
    segmentName: "Advocacia",
    subtitle: "Credibilidade e clareza para quem precisa de orientação jurídica.",
    heroDesc: "Para advogadas e escritórios que querem apresentar as áreas de atuação com clareza, dentro das regras da OAB, e receber contatos de quem precisa de ajuda.",
    whyNeedSite: {
      title: "Por que a advogada precisa de um site",
      text: "Quem procura uma advogada geralmente está preocupado e quer entender rápido se você pode ajudar. Um site com as áreas de atuação bem explicadas passa segurança e facilita o primeiro contato.",
      points: [
        "Áreas de atuação explicadas em linguagem simples, sem juridiquês.",
        "Presença no Google para quem procura ajuda na sua cidade.",
        "Um endereço profissional que reforça a sua credibilidade.",
        "Contato direto e discreto pelo WhatsApp."
      ]
    },
    recommendedStructure: {
      title: "O que o site de advocacia deve ter",
      description: "A estrutura que passa confiança e respeita as normas da OAB.",
      sections: [
        { name: "Apresentação", detail: "Quem você é, sua formação e o número de inscrição na OAB." },
        { name: "Áreas de atuação", detail: "Uma página para cada área, explicando em que situações você pode ajudar." },
        { name: "Conteúdo informativo", detail: "Artigos que respondem dúvidas comuns e mostram o seu conhecimento." },
        { name: "Contato", detail: "WhatsApp, formulário e endereço do escritório." }
      ]
    },
    howWeHelp: {
      title: "Como eu crio o seu site",
      description: "Os textos são informativos e sóbrios, sem promessas de resultado, seguindo o que a OAB permite na publicidade.",
      benefits: [
        "Textos dentro das regras de publicidade da OAB.",
        "Visual sóbrio e elegante, que passa credibilidade.",
        "Configuração para aparecer no Google da sua região.",
        "Pronto em até 7 dias úteis depois de receber o material."
      ]
    },
    processSteps: [
      { step: "01", title: "Conversa", desc: "Você me conta sobre as suas áreas de atuação." },
      { step: "02", title: "Material", desc: "Você envia foto, informações e textos de apoio." },
      { step: "03", title: "Criação", desc: "Eu crio o site e revisamos juntas cada texto." },
      { step: "04", title: "No ar", desc: "Site publicado, com domínio próprio." }
    ],
    faq: [
      { q: "O site segue as regras da OAB?", a: "Sim. O conteúdo é informativo, sem promessa de resultado nem oferta de serviços de forma mercantil, como pedem as normas de publicidade da OAB." },
      { q: "Posso ter um blog com artigos?", a: "Pode, e ajuda bastante. Artigos que respondem dúvidas comuns mostram o seu conhecimento e ajudam o site a aparecer no Google." }
    ],
    relatedProjectSlug: "figueiredo-advocacia",
    metaDescription: "Sites para advogadas e escritórios: áreas de atuação claras, dentro das regras da OAB e com presença no Google. Criados pela Márcia, da MLee Digital.",
    keywords: ["site para advogada", "site para escritório de advocacia", "site para advogado", "criação de site advocacia"]
  },

  "catalogo-digital": {
    slug: "catalogo-digital",
    title: "Catálogo digital",
    segmentName: "Catálogo digital",
    subtitle: "Seus produtos ou seu cardápio organizados, com pedido direto pelo WhatsApp.",
    heroDesc: "Para lojas, restaurantes, bares, confeitarias, moda, artesanato e quem vende produtos: um catálogo bonito, fácil de navegar no celular e com botão de pedido em cada item.",
    whyNeedSite: {
      title: "Por que um catálogo digital",
      text: "Mandar foto por foto no WhatsApp cansa você e o cliente. Com um catálogo, você envia um link só: a pessoa vê tudo organizado, escolhe e já chama com o pedido pronto.",
      points: [
        "Produtos ou pratos organizados por categoria, com foto e descrição.",
        "Botão de pedido pelo WhatsApp em cada item.",
        "Um link só para colocar na bio, no status e no Google.",
        "Funciona muito bem no celular."
      ]
    },
    recommendedStructure: {
      title: "O que o catálogo digital tem",
      description: "Tudo o que o cliente precisa para escolher e pedir.",
      sections: [
        { name: "Categorias", detail: "Seus produtos ou pratos separados do jeito que faz sentido para o seu negócio." },
        { name: "Fotos e descrições", detail: "Cada item com foto, descrição e, se você quiser, o preço." },
        { name: "Pedido pelo WhatsApp", detail: "O cliente toca no botão e a mensagem já chega com o nome do produto." },
        { name: "Informações do negócio", detail: "Horário, endereço, formas de pagamento e entrega." }
      ]
    },
    howWeHelp: {
      title: "Como eu crio o seu catálogo",
      description: "Eu organizo os seus produtos, monto o catálogo com a identidade da sua marca e deixo tudo pronto para compartilhar.",
      benefits: [
        "Visual com a identidade da sua marca.",
        "Fácil de navegar no celular.",
        "Atualização de produtos e preços dentro da manutenção mensal.",
        "Você recebe o link pronto para divulgar."
      ]
    },
    processSteps: [
      { step: "01", title: "Conversa", desc: "Você me conta o que vende e como recebe os pedidos." },
      { step: "02", title: "Material", desc: "Você envia fotos, nomes, descrições e preços." },
      { step: "03", title: "Criação", desc: "Eu monto o catálogo e ajustamos juntas." },
      { step: "04", title: "No ar", desc: "Link pronto para a bio, o status e o Google." }
    ],
    faq: [
      { q: "Preciso mostrar os preços?", a: "Não. Você escolhe se quer mostrar o preço ou deixar para combinar no WhatsApp." },
      { q: "Como faço para trocar produtos e preços?", a: "Você me manda as mudanças e eu atualizo. Isso já está incluso na manutenção mensal." },
      { q: "O cliente paga pelo catálogo?", a: "O pedido chega no seu WhatsApp e o pagamento é combinado com você, do jeito que você já trabalha." }
    ],
// GUARDADO — Matriz Grill: fora do ar por enquanto. Para voltar a exibir, basta tirar as barras (//) deste trecho.
//     relatedProjectSlug: "matriz-grill",
    metaDescription: "Catálogo digital para lojas, restaurantes e negócios que vendem produtos: itens organizados, fotos e pedido direto pelo WhatsApp. Criado pela Márcia, da MLee Digital.",
    keywords: ["catálogo digital", "catálogo online WhatsApp", "cardápio digital", "catálogo de produtos online"]
  }
};
