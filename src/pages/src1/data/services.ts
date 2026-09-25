import { ServiceDetail } from '../types';

export const servicesData: Record<string, ServiceDetail> = {
  "sites-profissionais": {
    slug: "sites-profissionais",
    title: "Criação de Sites Profissionais",
    subtitle: "Estrutura institucional completa de alta autoridade para empresas e profissionais",
    tagline: "Transforme visitantes em clientes com um site elegante, rápido e preparado para o Google.",
    problem: {
      title: "O perigo de depender apenas do Instagram",
      description: "Muitos profissionais investem tempo e esforço criando conteúdo nas redes sociais, mas enfrentam sérias limitações quando o cliente quer tirar dúvidas sérias:",
      points: [
        "O algoritmo não entrega suas postagens para toda a sua base",
        "Você não aparece nas buscas de pessoas que estão pesquisando ativamente pelo seu serviço no Google",
        "Passa sensação de amadorismo quando uma empresa não tem domínio próprio e endereço oficial",
        "Seu perfil pode sofrer bloqueios repentinos ou perda de engajamento a qualquer momento"
      ]
    },
    forWho: [
      "Clínicas, consultórios e profissionais da saúde",
      "Escritórios de advocacia, arquitetura e consultoria",
      "Prestadores de serviços especializados e empresas locais",
      "Negócios que desejam aumentar o valor percebido e cobrar mais caro"
    ],
    benefits: [
      { title: "Autoridade Imediata", desc: "Transmita credibilidade ao primeiro clique com design refinado e apresentação impecável." },
      { title: "Indexação no Google (SEO)", desc: "Estrutura técnica construída para ser encontrada por quem busca sua especialidade na sua cidade." },
      { title: "Atendimento Direto no WhatsApp", desc: "Botões de ação estrategicamente distribuídos para canalizar contatos qualificados." },
      { title: "Experiência Mobile Impecável", desc: "Carregamento instantâneo e layout adaptado com perfeição para telas de celulares." }
    ],
    structure: [
      { title: "Apresentação & Proposta de Valor", desc: "Hero impactante explicando quem você é e qual transformação oferece ao cliente." },
      { title: "Páginas ou Seções de Serviços", desc: "Detalhamento claro dos procedimentos, métodos e diferenciais de atendimento." },
      { title: "Sobre a Empresa / Equipe", desc: "História, qualificações técnicas e visão de atendimento humanizado." },
      { title: "Localização & Integração de Mapas", desc: "Facilidade para o paciente ou cliente chegar até o seu estabelecimento físico." },
      { title: "FAQ de Dúvidas Frequentes", desc: "Elimine as principais objeções antes mesmo do primeiro contato." },
      { title: "Formulários e Botão WhatsApp", desc: "Canais de conversão seguros e rápidos." }
    ],
    process: [
      { step: "01", title: "Briefing & Estratégia", desc: "Alinhamos os objetivos do seu negócio, público-alvo, referências e serviços prioritários." },
      { step: "02", title: "Design & Copywriting", desc: "Criamos o layout exclusivo com textos persuasivos e hierarquia visual focada em conversão." },
      { step: "03", title: "Desenvolvimento & SEO", desc: "Programamos o site em código limpo, rápido, responsivo e com tags de indexação para o Google." },
      { step: "04", title: "Revisão, Publicação & Suporte", desc: "Ajustamos detalhes finais, conectamos seu domínio próprio e colocamos seu site no ar." }
    ],
    faq: [
      { q: "Quanto tempo leva para o site ficar pronto?", a: "Para o plano Essencial o prazo é de até 4 dias úteis e para o Profissional até 7 dias úteis, contados após o envio de todo o material necessário." },
      { q: "Eu preciso já ter domínio e hospedagem contratados?", a: "Não se preocupe! O registro do domínio próprio (.com.br) é por conta do cliente (indicamos a Hostinger ou Registro.br) para assegurar que a titularidade fique 100% no seu CPF ou CNPJ. Nós auxiliamos no passo a passo da escolha e cuidamos de toda a configuração técnica de hospedagem, DNS e certificado de segurança SSL." },
      { q: "O site vai funcionar bem no celular?", a: "Com certeza. Todo projeto é desenvolvido no modelo Mobile-First, garantindo fluidez e leitura perfeita em qualquer aparelho." },
      { q: "Como funciona a manutenção após a entrega?", a: "O desenvolvimento é um investimento único. Após a publicação, o plano de manutenção & hospedagem mensal (R$ 127/mês no Essencial ou R$ 197/mês no Profissional) garante a continuidade da infraestrutura em nuvem, backups, segurança SSL e suporte para atualizações de fotos e textos." }
    ],
    metaDescription: "Criação de sites profissionais para pequenas empresas e especialistas. Design exclusivo, SEO para o Google e foco em conversão no WhatsApp.",
    relatedSegments: ["sites-para-clinicas", "sites-para-advogados", "sites-para-dentistas"]
  },
  "sistemas-web": {
    slug: "sistemas-web",
    title: "Desenvolvimento de Sistemas Web & Apps",
    subtitle: "Aplicações digitais sob medida e plataformas prontas para automação de processos",
    tagline: "Leve seu negócio para o próximo nível com ferramentas digitais exclusivas e inteligentes.",
    problem: {
      title: "Planilhas confusas e sistemas genéricos complicados",
      description: "Muitos negócios perdem horas em retrabalho manual ou pagam assinaturas caras em softwares cheios de funções que nunca usam:",
      points: [
        "Planilhas que quebram facilmente ou não abrem bem no celular",
        "Falta de controle claro sobre margem de lucro e faturamento",
        "Sistemas engessados que não se adaptam à rotina real da sua equipe",
        "Dificuldade em oferecer uma experiência digital aos seus próprios clientes"
      ]
    },
    forWho: [
      "Negócios que desejam automatizar rotinas operacionais ou financeiras",
      "Profissionais que querem lançar seu próprio infoproduto ou plataforma digital",
      "Empresas que precisam de painéis internos, calculadoras ou portais de clientes",
      "Estúdios e consultores que buscam soluções white-label prontas (ex: Nail Finance Pro)"
    ],
    benefits: [
      { title: "Acesso Direto no Navegador", desc: "Sem barreiras de lojas de aplicativos; funciona em celulares, tablets e computadores." },
      { title: "Integração com Inteligência Artificial", desc: "Possibilidade de incluir diagnósticos e automações inteligentes." },
      { title: "Sob Medida para o Seu Processo", desc: "Desenvolvimento focado exatamente no que o seu negócio precisa." },
      { title: "Escalabilidade e Segurança", desc: "Arquitetura em nuvem com alta disponibilidade e proteção de dados." }
    ],
    structure: [
      { title: "Painel Administrativo (Dashboard)", desc: "Visão geral de métricas, faturamento e indicadores em tempo real." },
      { title: "Módulos de Gestão & Operação", desc: "Controle de serviços, clientes, insumos e relatórios." },
      { title: "Automações & Inteligência", desc: "Cálculos de margem, alertas e sugestões estratégicas." },
      { title: "Autenticação Segura", desc: "Controle de acessos individuais e proteção de senhas." }
    ],
    process: [
      { step: "01", title: "Levantamento de Requisitos", desc: "Compreendemos a dor operacional e desenhamos a lógica de fluxo do sistema." },
      { step: "02", title: "Prototipagem de Telas", desc: "Desenhamos a interface para validação da usabilidade e navegação." },
      { step: "03", title: "Programação Full-Stack", desc: "Desenvolvemos o banco de dados, APIs e interface interativa." },
      { step: "04", title: "Homologação & Treinamento", desc: "Testamos todos os fluxos e entregamos pronto para operação diária." }
    ],
    faq: [
      { q: "Vocês têm sistemas já prontos?", a: "Sim! Criamos produtos próprios como o Nail Finance Pro (gestão financeira com IA) e o Elastic Fit (treinos 40+), que estão disponíveis para uso imediato ou licenciamento." },
      { q: "Qual a tecnologia utilizada?", a: "Trabalhamos com ecossistema moderno em TypeScript, React, Tailwind CSS e banco de dados em nuvem com alta performance." },
      { q: "É possível criar um sistema personalizado do zero para a minha empresa?", a: "Sim, desenvolvemos aplicações web sob medida de acordo com as necessidades específicas do seu negócio." }
    ],
    metaDescription: "Desenvolvimento de sistemas web sob medida e aplicações inteligentes. Automação de processos, painéis de gestão e produtos digitais.",
    relatedSegments: ["sites-para-arquitetos-e-corretores", "sites-para-prestadores-de-servicos", "sites-para-clinicas"]
  }
};
