import { BlogPost } from '../types';
import { AUTHOR_NAME, AUTHOR_ROLE, AUTHOR_IMG } from './constants';
import blogMetaTrial from '../assets/images/courtroom_trial_scene_1787690923250.jpg';
import blogCustoSite from '../assets/images/blog-custo-site.webp';
import blogSiteInsta from '../assets/images/blog-site-instagram.webp';
import blogGoogleSeo from '../assets/images/blog-aparecer-google.webp';
import blogOnepageCompleto from '../assets/images/blog-onepage-completo.webp';
import blogPsicologoSite from '../assets/images/blog-psicologo.webp';
import blogEsteticaSite from '../assets/images/blog-clinica-estetica.webp';
import blogIaIndicacao from '../assets/images/blog-ia-indicacao.webp';
import blogAvaliacoesGoogle from '../assets/images/blog-avaliacoes-google.webp';

export const blogPostsData: BlogPost[] = [
  {
    id: "seu-paciente-ja-pergunta-para-a-ia",
    slug: "seu-paciente-ja-pergunta-para-a-ia",
    title: "Seu paciente já pergunta para a IA: como aparecer quando alguém pede uma indicação",
    excerpt: "O Google agora responde em formato de conversa e muita gente já pede indicação de profissional para a IA. Veja o que faz o seu nome aparecer nessas respostas.",
    coverImage: blogIaIndicacao,
    category: "Sites e Google",
    author: {
      name: AUTHOR_NAME,
      role: AUTHOR_ROLE,
      avatar: AUTHOR_IMG
    },
    publishedAt: "30 de Setembro de 2026",
    readTime: "5 min de leitura",
    content: ["Até pouco tempo atrás, quem procurava uma dentista digitava algo curto no Google, como \"dentista Videira\". Aparecia uma lista de links e a pessoa ia abrindo um por um.", "Hoje a busca é outra. A pessoa escreve uma frase inteira: \"quero uma dentista em Videira que faça lentes de contato dental e atenda no sábado\". E recebe uma resposta pronta, com poucos nomes indicados.", "A diferença parece pequena, mas muda tudo. Antes você disputava um lugar na lista. Agora disputa um lugar na resposta, e nela cabem só dois ou três nomes."],
    sections: [
      {
        heading: "O que é o Modo IA do Google",
        body: "O Modo IA é a busca do Google em formato de conversa. Você faz uma pergunta completa, o Google divide essa pergunta em partes, pesquisa cada uma e monta uma resposta única com alguns links.",
        extra: ["Ele chegou ao Brasil em português em setembro de 2025 e foi sendo liberado aos poucos. Hoje aparece como uma aba nos resultados, no computador e no aplicativo do Google.", "E o paciente já usa. Uma pesquisa da Simples Dental com 500 pacientes de todo o país mostrou que 3 em cada 10 já usaram inteligência artificial para buscar dentistas perto de casa. E 8 em cada 10 passam pelo Google antes de escolher um profissional ou clínica.", "Ou seja: o Google continua sendo a porta de entrada. Só que a porta agora conversa."]
      },
      {
        heading: "Como a IA decide quem indicar",
        body: "O próprio Google afirma que não existe código secreto nem arquivo especial para entrar nessas respostas. A IA simplesmente lê o que já existe sobre você na internet e junta as peças.",
        extra: ["Por isso ela precisa encontrar informação clara, completa e que bata em todos os lugares. Na prática, olha para três coisas:"],
        list: ["O que você faz, explicado por escrito. Uma foto bonita no Instagram não diz para a IA que você faz harmonização, em qual cidade atende e para quem. Um texto organizado diz.", "Onde você atende. Endereço, cidade, horário e forma de contato iguais no site, no perfil do Google e nas redes.", "O que dizem de você. Avaliações reais de pacientes, com detalhes sobre o atendimento."],
        depois: ["O ponto de atenção é que as redes sociais mostram pouco do que você faz de forma organizada. Um perfil pode ter anos de posts e, mesmo assim, não deixar claro para a busca quais tratamentos você oferece e onde. Já um site com uma página para cada serviço é exatamente o tipo de fonte que a IA consegue ler e citar."]
      },
      {
        heading: "O que fazer na prática",
        body: "Seis atitudes que ajudam o seu nome a aparecer quando alguém pede uma indicação:",
        list: ["Tenha uma página para cada tratamento. Quem faz botox, preenchimento e bioestimulador precisa de uma página explicando cada um: para quem é, como funciona e o que esperar. É isso que responde a pergunta longa do paciente.", "Escreva a cidade de forma natural. \"Atendimento em Videira e região\" no texto ajuda a IA a entender onde você está, sem precisar repetir a palavra dez vezes.", "Mantenha o Perfil da Empresa no Google completo. Categoria certa, fotos reais do espaço, horário atualizado e o link do seu site. Um cuidado: o nome do perfil deve ser o seu nome real. Colocar cidade ou serviço no nome pode levar à suspensão.", "Deixe as informações iguais em todo lugar. Se o telefone do site é um e o do Google é outro, a IA fica em dúvida e prefere indicar quem está com tudo em ordem.", "Peça avaliações depois de um bom atendimento. Uma mensagem simples com o link já resolve. As avaliações que contam como foi o atendimento valem mais do que as que só dão as estrelas.", "Responda perguntas reais no seu site. As dúvidas que você mais ouve no consultório viram conteúdo: quanto tempo dura, se dói, quantas sessões. Um texto que só você poderia escrever, com a sua experiência, tem muito mais chance de ser citado."],
        depois: ["E lembre que isso é rotina, não tarefa de uma vez só. A busca se atualiza, as avaliações envelhecem e os concorrentes também publicam."]
      },
      {
        heading: "Para fechar",
        body: "A indicação continua sendo a forma mais forte de conquistar um paciente. O que mudou é quem indica: agora, além da amiga e da vizinha, o próprio Google e o ChatGPT recomendam nomes.",
        extra: ["E eles só recomendam quem conseguem entender. Um perfil nas redes ajuda a pessoa a te conhecer. Mas é o seu site, com o seu conteúdo e no seu endereço, que dá à busca o material para dizer o seu nome."]
      }
    ],
    tags: ["Modo IA do Google", "Inteligência artificial", "Como aparecer no Google", "Indicação de pacientes"],
    relatedSlugs: ["avaliacoes-no-google-o-novo-boca-a-boca", "como-aparecer-no-google-com-pequena-empresa"],
    ctaType: "whatsapp",
    ctaTitle: "Quer que a IA consiga dizer o seu nome?",
    ctaText: "Eu crio o seu site com uma página para cada tratamento, pronto para o Google entender o que você faz e onde atende.",
    ctaButtonText: "Falar com a Márcia no WhatsApp"
  },
  {
    id: "avaliacoes-no-google-o-novo-boca-a-boca",
    slug: "avaliacoes-no-google-o-novo-boca-a-boca",
    title: "Avaliações no Google: o novo boca a boca que decide a escolha do paciente",
    excerpt: "A opinião de outros pacientes pesa mais do que a localização na hora de escolher um profissional. Veja como conquistar avaliações e o que fazer com elas.",
    coverImage: blogAvaliacoesGoogle,
    category: "Marketing Digital",
    author: {
      name: AUTHOR_NAME,
      role: AUTHOR_ROLE,
      avatar: AUTHOR_IMG
    },
    publishedAt: "30 de Setembro de 2026",
    readTime: "5 min de leitura",
    content: ["Pergunte a qualquer profissional de saúde de onde vêm os melhores pacientes e a resposta costuma ser a mesma: indicação.", "Isso continua verdade. O que mudou é onde a indicação acontece. Antes era uma conversa entre amigas. Hoje, mesmo quem recebeu a indicação costuma abrir o Google para conferir o nome antes de marcar.", "E o que ela encontra ali são as avaliações. Algumas estrelas e poucas frases de outros pacientes podem confirmar a indicação ou desfazer tudo em segundos."],
    sections: [
      {
        heading: "O que os números mostram",
        body: "O estudo Perfil do Paciente Digital, da Doctoralia, analisou mais de 255 milhões de visitas à plataforma. A conclusão chama atenção: a opinião de outros pacientes é o fator que mais pesa na escolha do profissional, acima da localização e do plano de saúde aceito.",
        extra: ["Outro levantamento da mesma empresa, com milhões de opiniões de pacientes, mostrou o que os brasileiros mais valorizam nesses comentários. O atendimento humanizado apareceu em 63% dos casos, quase quatro vezes mais do que o diagnóstico em si.", "Isso diz muito. O paciente parte do princípio de que você é tecnicamente capaz. O que ele procura nas avaliações é outra coisa: se vai ser bem recebido, ouvido e tratado com cuidado."]
      },
      {
        heading: "Como conquistar mais avaliações",
        body: "A maioria dos pacientes satisfeitos não avalia porque ninguém pediu. Não é falta de vontade, é esquecimento. Algumas atitudes simples resolvem:",
        list: ["Peça no momento certo. Logo depois de um retorno positivo ou quando o paciente elogia o resultado. É quando a experiência está mais viva.", "Facilite ao máximo. Envie pelo WhatsApp o link direto para a avaliação no seu perfil do Google. Quanto menos cliques, mais respostas.", "Oriente sem roteirizar. Você pode sugerir que a pessoa conte como foi o atendimento. Mas nunca escreva a avaliação por ela nem ofereça desconto em troca, o que vai contra as regras do Google.", "Responda todas. Um agradecimento curto e pessoal nas positivas mostra que existe alguém atento do outro lado.", "Nas negativas, responda com calma. Agradeça, mostre que ouviu e convide para conversar em particular. Quem lê a resposta depois julga mais a sua postura do que a reclamação."],
        depois: ["Um cuidado importante: profissionais de saúde seguem as regras de publicidade do seu conselho. Na resposta, evite comentar detalhes do tratamento ou confirmar informações do paciente."]
      },
      {
        heading: "Onde o site entra",
        body: "A avaliação convence o paciente a clicar. Mas depois do clique ele quer saber mais: quem é você, como é o espaço, quais tratamentos faz, como agendar.",
        extra: ["Se o link do perfil leva só para as redes sociais, essa resposta fica espalhada entre posts e stories. Se leva para um site, a pessoa encontra tudo em um só lugar, organizado para ela decidir.", "O site também é o espaço onde o atendimento humanizado aparece antes da primeira consulta. Uma foto real sua, um texto sobre como você trabalha e respostas para as dúvidas mais comuns fazem o paciente chegar já confiando em você.", "As redes mudam as regras a qualquer momento e o perfil do Google pertence ao Google. O site é o único desses lugares que é seu de verdade."]
      },
      {
        heading: "Para fechar",
        body: "Cada avaliação é uma indicação que continua trabalhando por você depois que o paciente vai embora. E ela fica disponível para todo mundo que pesquisar o seu nome.",
        extra: ["Peça, responda e cuide dessas avaliações como parte do atendimento. E garanta que, depois de ler o que dizem de você, o paciente encontre um lugar à altura para te conhecer melhor."]
      }
    ],
    tags: ["Avaliações no Google", "Perfil da Empresa no Google", "Atendimento humanizado", "Indicação de pacientes"],
    relatedSlugs: ["seu-paciente-ja-pergunta-para-a-ia", "site-ou-instagram-qual-sua-empresa-precisa"],
    ctaType: "whatsapp",
    ctaTitle: "Depois da avaliação, para onde vai o paciente?",
    ctaText: "Eu crio o site que recebe o paciente depois do clique: com a sua foto, os seus tratamentos e o contato a um toque.",
    ctaButtonText: "Falar com a Márcia no WhatsApp"
  },
  {
    id: "quem-manda-no-instagram-julgamento-meta",
    slug: "quem-manda-no-instagram-julgamento-meta",
    title: "Quem manda no Instagram? Dentro do julgamento de US$ 1,4 trilhão que pode reescrever as regras da Meta",
    excerpt: "Entenda o julgamento bilionário que a Meta enfrenta nos EUA desde 18/08 e o que está em jogo para quem depende do Instagram para o negócio.",
    coverImage: blogMetaTrial,
    category: "Tecnologia",
    author: {
      name: AUTHOR_NAME,
      role: AUTHOR_ROLE,
      avatar: AUTHOR_IMG
    },
    publishedAt: "25 de Agosto de 2026",
    readTime: "5 min de leitura",
    content: [
      "Desde o dia 18 de agosto, a Meta está sentada no banco dos réus de um dos julgamentos mais pesados de sua história. Não é exagero: o processo, que corre em um tribunal federal em Oakland, na Califórnia, reúne uma coalizão de 29 estados americanos acusando a dona de Facebook e Instagram de ter projetado suas plataformas de propósito para viciar crianças e adolescentes — e de ter escondido isso do público enquanto sabia, internamente, dos danos causados.",
      "Uma semana depois do início, o caso já deixou claro que não vai ser um julgamento qualquer. Documentos internos, um ex-executivo da própria Meta depondo contra a empresa e a possibilidade real de Mark Zuckerberg ser chamado à cadeira de testemunha tornaram essa a história mais comentada do mundo da tecnologia nos últimos dias. Reunimos aqui o que aconteceu até agora e o que esperar dali para frente."
    ],
    sections: [
      {
        heading: "Do que se trata o processo",
        body: "O julgamento é conduzido pela juíza federal Yvonne Gonzalez Rogers e, por enquanto, tem quatro estados na linha de frente — Califórnia, Colorado, Kentucky e Nova Jersey — funcionando como uma espécie de 'teste' para as ações dos outros 25 estados que virão depois. A base da acusação é dupla: de um lado, que a Meta desenhou deliberadamente recursos viciantes (rolagem infinita, notificações, curtidas, filtros) para maximizar o tempo de tela de menores de idade; de outro, que a empresa violou a lei americana de proteção à privacidade infantil (COPPA) ao coletar dados de usuários com menos de 13 anos sem autorização dos pais.",
        list: [
          "Valor em disputa: os procuradores estaduais pedem algo em torno de US$ 200 bilhões em multas, mas, segundo a própria tese jurídica movida pelos estados, a exposição máxima da Meta pode chegar a US$ 1,4 trilhão — um número que, se confirmado, entraria para a história como uma das maiores condenações corporativas já vistas.",
          "Litígio multidistrital (MDL-3047): mais de 2.800 ações individuais, movidas por famílias, distritos escolares e até comunidades indígenas, estão consolidadas na Justiça americana com coordenação paralela na Califórnia (JCCP 5255).",
          "Origem do caso: remonta a 2021, quando a ex-funcionária do Facebook Frances Haugen vazou documentos internos ao Senado americano mostrando que a empresa sabia dos efeitos nocivos do Instagram sobre a saúde mental de adolescentes e escolheu não agir."
        ]
      },
      {
        heading: "O que já aconteceu nesta primeira semana",
        body: "Logo na abertura, em 18 de agosto, a promotoria mostrou as cartas: a procuradora-geral adjunta da Califórnia, Megan O'Neill, resumiu a tese central do caso em uma frase que já virou manchete — a Meta 'disse que priorizava a segurança acima do lucro, mas escondeu que, na hora de decidir, o lucro sempre venceu'. Como prova, o time jurídico apresentou um e-mail interno de 2016 no qual uma meta explícita do Instagram era aumentar o 'tempo gasto por adolescentes' na plataforma, além de um estudo interno intitulado 'Retenção de longo prazo: os mais jovens são os melhores'.",
        list: [
          "Depoimento de Arturo Béjar: ex-diretor de engenharia da Meta afirmou que Mark Zuckerberg cultivava uma cultura interna que colocava crescimento acima da segurança infantil, resumindo: 'quando o Mark torna algo prioridade, montanhas se movem em meses'. Segundo ele, a Meta adotava a postura de 'não perguntar, não contar' para contas de menores de 13 anos.",
          "Depoimento gravado de Elena Davis: o júri também ouviu o depoimento da pesquisadora da Meta tratando especificamente dos recursos de design e arquitetura psicológica ligados ao vício de uso.",
          "Expectativa sobre Mark Zuckerberg: a imprensa internacional e os analistas tratam o possível depoimento pessoal do CEO da Meta como o momento mais aguardado do processo."
        ]
      },
      {
        heading: "Por que este caso é diferente dos anteriores",
        body: "2026 já vinha sendo um ano difícil para a Meta nos tribunais americanos: em março, uma condenação de US$ 6 milhões em Los Angeles por danos a uma jovem com transtorno alimentar; em junho, um acordo de US$ 942 milhões no Novo México (US$ 375 milhões em multas e US$ 567 milhões para fundo de reparação); e em maio, um acordo de US$ 27 milhões com um distrito escolar do Kentucky. A diferença crucial é que todos esses casos correram na Justiça estadual. O processo de 18 de agosto é o primeiro do litígio multidistrital federal a chegar de fato a julgamento com júri — concentrando 29 estados e risco bilionário histórico."
      },
      {
        heading: "O que vem a seguir",
        body: "O julgamento tem duração prevista de seis semanas, estendendo-se até o final de setembro. Nas próximas semanas, são esperados depoimentos de mais ex-funcionários, pesquisadores e a possível presença de Zuckerberg. O desfecho com os quatro primeiros estados funcionará como termômetro decisivo para os 25 estados seguintes, pressionando a Meta a acordos e revisões profundas de suas diretrizes de produto."
      },
      {
        heading: "O que fica de lição, além do valor da multa",
        body: "Um detalhe passa despercebido em meio aos números astronômicos: nada do que sai desse julgamento está sob controle de quem usa a plataforma para trabalhar, vender ou se comunicar com seu público. As regras de alcance, os recursos que ficam ou saem do ar, e agora até o próprio funcionamento do Instagram podem mudar por força de uma decisão judicial tomada a milhares de quilômetros de distância — sem que nenhum criador, marca ou negócio que depende da rede tenha qualquer palavra a dizer sobre isso. É o preço de construir uma presença inteira em terreno que pertence a outra empresa."
      }
    ],
    sources: [
      { label: "Al Jazeera — Landmark trial on Meta's impact on children's mental health begins in US", url: "https://www.aljazeera.com/economy/2026/8/18/landmark-trial-on-metas-impact-on-childrens-mental-health-begins-in-us" },
      { label: "NPR — 'Profits won.' The child safety trial against Meta kicks off in federal court", url: "https://www.npr.org/2026/08/18/nx-s1-5935458/meta-child-safety-social-media-addiction-trial-opening" },
      { label: "Hawaii Tribune-Herald / AP — Mark Zuckerberg encouraged growth over child safety, ex-Meta executive testifies at trial", url: "https://www.hawaiitribune-herald.com/2026/08/20/nation-world-news/mark-zuckerberg-encouraged-growth-over-child-safety-ex-meta-executive-testifies-at-trial/" },
      { label: "MDL Update — Social Media Addiction Lawsuit Update, August 2026: 29 States Take Meta to Trial (MDL-3047)", url: "https://mdlupdate.com/mdl/3047-social-media-adolescent-addiction/" },
      { label: "MDL Update — 29 States Take Meta to Trial: First Federal Social-Media MDL Case Reaches a Jury (2026)", url: "https://mdlupdate.com/news/meta-states-addiction-trial-begins-2026/" },
      { label: "Estado de Minas — Processos contra Meta já renderam condenações milionárias em 2026: entenda o caso", url: "https://www.em.com.br/tecnologia/2026/08/7474969-processos-contra-meta-ja-renderam-condenacoes-milionarias-em-2026-entenda-o-caso.html" },
      { label: "Wikipedia — K.G.M. v. Meta et al.", url: "https://en.wikipedia.org/wiki/K.G.M._v._Meta_et_al." }
    ],
    tags: ["Instagram", "Meta", "Julgamento Meta", "Redes Sociais", "Segurança Digital", "Negócios Digitais"],
    relatedSlugs: ["site-ou-instagram-qual-sua-empresa-precisa", "quanto-custa-criar-um-site-profissional"],
    ctaType: "service",
    ctaTitle: "Não dependa exclusivamente de terrenos alugados nas redes sociais",
    ctaText: "Garanta a estabilidade, autoridade e contato direto dos seus clientes com um site oficial no seu próprio domínio (.com.br).",
    ctaButtonText: "Conhecer Criação de Sites Profissionais",
    ctaUrl: "/sites-profissionais/"
  },
  {
    id: "quanto-custa-criar-um-site-profissional",
    slug: "quanto-custa-criar-um-site-profissional",
    title: "Quanto Custa Criar um Site Profissional para Pequenas Empresas em 2026?",
    excerpt: "Entenda detalhadamente quais fatores definem o preço de um site de qualidade, custos de domínio, hospedagem e manutenção, e fuja de armadilhas caras.",
    coverImage: blogCustoSite,
    category: "Sites e Google",
    author: {
      name: AUTHOR_NAME,
      role: AUTHOR_ROLE,
      avatar: AUTHOR_IMG
    },
    publishedAt: "10 de Agosto de 2026",
    readTime: "6 min de leitura",
    content: [
      "Uma das dúvidas mais frequentes de quem decide profissionalizar o próprio negócio é: afinal, quanto custa desenvolver um site profissional de verdade?",
      "No mercado digital brasileiro, os preços podem variar de criadores automáticos 'gratuitos' (que se tornam caros e limitados com o tempo) até agências que cobram de R$ 5.000 a R$ 20.000 por projetos complexos. No entanto, para pequenas empresas, consultórios e prestadores de serviços, o investimento justo fica em uma faixa muito mais acessível quando o foco é eficiência e retorno real."
    ],
    sections: [
      {
        heading: "1. Os 3 pilares de custo de um site",
        body: "Para ter um site oficial no ar, todo projeto envolve basicamente três elementos essenciais:",
        list: [
          "Domínio próprio (ex: suanome.com.br): registro pago diretamente pelo cliente na Hostinger ou Registro.br (custa cerca de R$ 40 a R$ 60 por ano) para garantir titularidade 100% no seu CPF/CNPJ.",
          "Hospedagem e Certificado SSL: garante que o site fique no ar com o cadeado de segurança verde, variando de R$ 20 a R$ 60/mês dependendo do servidor.",
          "Desenvolvimento e Design: o valor pago pelo design exclusivo, programação, copywriting estratégico e otimização para celular e Google."
        ]
      },
      {
        heading: "2. Site One Page vs. Site Completo: O impacto no preço",
        body: "Um modelo One Page (todas as informações organizadas em uma única página fluida com seções de apresentação, serviços, mapa e WhatsApp) costuma variar entre R$ 790 e R$ 1.200 no mercado de alto padrão. Já um Site Institucional Completo com múltiplas páginas individuais (Início, Sobre, Serviços, Galeria, FAQ, Contato) varia entre R$ 1.300 e R$ 3.000.",
        list: [
          "Site Essencial (One Page): Ideal para quem quer começar rápido com investimento enxuto e máxima conversão direta no WhatsApp.",
          "Site Profissional (Multipágina): Ideal para clínicas, consultórios e escritórios que precisam posicionar múltiplos serviços no Google com profundidade."
        ]
      },
      {
        heading: "3. Por que sites excessivamente baratos costumam sair caros?",
        body: "Muitos serviços oferecem 'sites prontos por R$ 150'. Na prática, esses sites usam templates genéricos pesados, carregam lentamente no 4G do celular, não possuem otimização de SEO para buscas locais e não oferecem suporte quando algo quebra. O resultado é um site que ninguém encontra e que não gera clientes.",
        list: [
          "Tempo de carregamento ruim afasta mais de 50% dos visitantes nos primeiros 3 segundos.",
          "Falta de copywriting persuasivo faz o visitante sair sem clicar no botão de contato.",
          "Ausência de SEO técnico impede o Google de indexar seu negócio nas pesquisas da sua cidade."
        ]
      },
      {
        heading: "4. Como funciona a proposta da MLee Digital?",
        body: "Na MLee Digital, trabalhamos com investimento transparente de desenvolvimento (R$ 997 no plano Essencial e R$ 1.397 no plano Profissional) aliado a um plano mensal de manutenção e hospedagem (R$ 127 ou R$ 197/mês) que garante suporte contínuo, infraestrutura em nuvem e tranquilidade técnica para o seu negócio."
      }
    ],
    tags: ["Preço de Site", "Criação de Sites", "SEO para Pequenas Empresas", "Investimento Digital"],
    relatedSlugs: ["site-ou-instagram-qual-sua-empresa-precisa", "site-one-page-ou-site-completo-qual-escolher"],
    ctaType: "whatsapp",
    ctaTitle: "Quer saber o plano ideal para a sua empresa?",
    ctaText: "Converse diretamente com nossa equipe no WhatsApp para tirar dúvidas e receber uma orientação personalizada para o seu negócio.",
    ctaButtonText: "Falar sobre meu Projeto no WhatsApp"
  },
  {
    id: "site-ou-instagram-qual-sua-empresa-precisa",
    slug: "site-ou-instagram-qual-sua-empresa-precisa",
    title: "Site ou Instagram: Qual Deles o Seu Negócio Realmente Precisa?",
    excerpt: "Descubra por que redes sociais e sites próprios cumprem papéis complementares e por que depender apenas de um perfil no Instagram é arriscado para sua empresa.",
    coverImage: blogSiteInsta,
    category: "Marketing Digital",
    author: {
      name: AUTHOR_NAME,
      role: AUTHOR_ROLE,
      avatar: AUTHOR_IMG
    },
    publishedAt: "05 de Agosto de 2026",
    readTime: "5 min de leitura",
    content: [
      "Uma das maiores armadilhas que empreendedores e profissionais autônomos enfrentam hoje é acreditar que ter apenas um perfil no Instagram é suficiente para sustentar o crescimento de um negócio.",
      "As redes sociais são ferramentas fantásticas para descoberta e relacionamento visual, mas possuem limitações graves quando o assunto é decisão de compra, autoridade médica ou jurídica e posicionamento nas buscas ativas do Google."
    ],
    sections: [
      {
        heading: "1. A diferença entre quem navega no Instagram e quem busca no Google",
        body: "A postura mental do usuário nessas duas plataformas é completamente diferente:",
        list: [
          "No Instagram (Atenção Passiva): A pessoa está se distraindo, vendo fotos de amigos ou vídeos rápidos. Ela não entrou na rede necessariamente para contratar um advogado ou marcar uma consulta.",
          "No Google (Intenção Ativa): A pessoa digita 'psicólogo em Chapecó' ou 'clínica de estética perto de mim' porque tem uma dor urgente e dinheiro pronto para contratar."
        ]
      },
      {
        heading: "2. O terreno alugado vs. A sua casa própria na internet",
        body: "O Instagram é um terreno que não pertence a você. Mudanças repentinas no algoritmo podem reduzir seu alcance de 10.000 visualizações para 200 do dia para a noite. Além disso, perfis podem sofrer instabilidades, denúncias injustas ou bloqueios.",
        list: [
          "Seu site é um ativo de propriedade exclusiva da sua empresa com seu domínio próprio.",
          "Todas as informações importantes (endereço, telefone, serviços, preços, credenciais) ficam organizadas sem sumir no feed."
        ]
      },
      {
        heading: "3. O combo ideal de alta conversão",
        body: "A estratégia dos profissionais mais bem-sucedidos é simples: use o Instagram para gerar conexão e coloque o link do seu site oficial na biografia. Quando a pessoa clica, ela encontra um ambiente profissional, sem distrações, pronto para agendar no WhatsApp."
      }
    ],
    tags: ["Instagram para Negócios", "Marketing Digital", "Site Profissional", "Conversão de Vendas"],
    relatedSlugs: ["quanto-custa-criar-um-site-profissional", "como-aparecer-no-google-com-pequena-empresa"],
    ctaType: "whatsapp",
    ctaTitle: "Transforme os visitantes do seu Instagram em clientes reais",
    ctaText: "Criamos páginas e sites modernos projetados especialmente para converter seguidores em mensagens de WhatsApp.",
    ctaButtonText: "Quero meu Site Profissional"
  },
  {
    id: "como-aparecer-no-google-com-pequena-empresa",
    slug: "como-aparecer-no-google-com-pequena-empresa",
    title: "Como Fazer sua Pequena Empresa Aparecer nas Buscas do Google",
    excerpt: "Guia prático e descomplicado sobre SEO local, Google Meu Negócio e a estrutura de site que atrai clientes da sua cidade todos os dias.",
    coverImage: blogGoogleSeo,
    category: "Sites e Google",
    author: {
      name: AUTHOR_NAME,
      role: AUTHOR_ROLE,
      avatar: AUTHOR_IMG
    },
    publishedAt: "28 de Julho de 2026",
    readTime: "7 min de leitura",
    content: [
      "Todos os dias, milhares de pessoas pesquisam por serviços perto de onde moram: 'dentista no centro', 'conserto de ar condicionado', 'advogado trabalhista', 'manicure perto de mim'.",
      "Se a sua empresa não aparece nos primeiros resultados dessas buscas, você está literalmente entregando clientes pagantes para a concorrência. Veja a seguir o passo a passo para mudar esse cenário."
    ],
    sections: [
      {
        heading: "1. O que é SEO Local e por que ele importa?",
        body: "SEO (Search Engine Optimization) é o conjunto de técnicas que faz seu site ser reconhecido pelos robôs do Google como a melhor resposta para a pesquisa de um usuário. Quando adicionamos o fator geográfico (sua cidade, bairro ou região de atendimento), temos o SEO Local.",
        list: [
          "Mais de 46% de todas as buscas feitas no Google têm intenção local.",
          "78% das buscas locais em smartphones resultam em uma compra ou contratação em até 24 horas."
        ]
      },
      {
        heading: "2. Os 3 passos fundamentais para ser encontrado",
        body: "Para construir uma presença orgânica sólida no Google, você precisa alinhar três pilares:",
        list: [
          "Passo 1: Ter um site rápido, seguro (HTTPS) e responsivo para celulares com textos contendo suas principais palavras-chave.",
          "Passo 2: Configurar e verificar seu perfil gratuito no Google Meu Negócio (Google Business Profile) com fotos, horários e endereço precisos.",
          "Passo 3: Conectar o link do seu site oficial ao seu perfil do Google, gerando autoridade mútua."
        ]
      },
      {
        heading: "3. O que a MLee Digital inclui em todos os sites?",
        body: "Todos os sites desenvolvidos pela MLee Digital já são entregues com a infraestrutura de SEO configurada: títulos semânticos, tags meta, sitemap XML, breadcrumbs, tags Open Graph e integração de dados estruturados para que o Google entenda perfeitamente o seu negócio."
      }
    ],
    tags: ["SEO Local", "Google Meu Negócio", "Como aparecer no Google", "Tráfego Orgânico"],
    relatedSlugs: ["quanto-custa-criar-um-site-profissional", "site-para-psicologo-o-que-precisa-ter"],
    ctaType: "service",
    ctaTitle: "Quer colocar sua empresa no mapa do Google?",
    ctaText: "Desenvolvemos sites com código limpo e arquitetura técnica preparada para indexação nos mecanismos de busca.",
    ctaButtonText: "Ver Planos de Criação de Sites",
    ctaUrl: "/sites-profissionais"
  },
  {
    id: "site-one-page-ou-site-completo-qual-escolher",
    slug: "site-one-page-ou-site-completo-qual-escolher",
    title: "Site One Page ou Site Completo com Múltiplas Páginas: Qual Escolher?",
    excerpt: "Compare as vantagens, objetivos e momentos ideais de negócio para optar por um modelo One Page direto ou uma estrutura institucional expandida.",
    coverImage: blogOnepageCompleto,
    category: "Negócios",
    author: {
      name: AUTHOR_NAME,
      role: AUTHOR_ROLE,
      avatar: AUTHOR_IMG
    },
    publishedAt: "20 de Julho de 2026",
    readTime: "5 min de leitura",
    content: [
      "Na hora de encomendar um site, uma das decisões estruturais mais importantes é definir o formato: vale mais a pena concentrar tudo em uma única página (One Page) ou construir um portal com várias páginas separadas (Multipágina)?",
      "Não existe formato melhor ou pior em termos absolutos — existe o formato mais inteligente para o momento e a estratégia do seu negócio."
    ],
    sections: [
      {
        heading: "1. O que é um Site One Page (Plano Essencial)?",
        body: "No formato One Page, todo o conteúdo é organizado em uma única página contínua. O menu superior utiliza links de rolagem suave (scroll) que levam o visitante diretamente para as seções de Sobre, Serviços, Diferenciais, Localização e Contato.",
        list: [
          "Vantagens: Leitura rápida e dinâmica, altíssima taxa de conversão no celular, entrega mais rápida (até 4 dias úteis) e menor custo de investimento.",
          "Para quem é indicado: Profissionais autônomos, consultórios individuais, prestadores de serviços com foco em um carro-chefe ou empresas que desejam uma presença rápida e elegante."
        ]
      },
      {
        heading: "2. O que é um Site Multipágina (Plano Profissional)?",
        body: "No formato multipágina, cada tema ganha uma URL individual com conteúdo aprofundado (ex: /servicos/, /sobre/, /faq/, /contato/).",
        list: [
          "Vantagens: Permite criar páginas dedicadas para cada procedimento ou especialidade, maximizando as chances de ranqueamento individual no Google para dezenas de termos diferentes.",
          "Para quem é indicado: Clínicas com múltiplos médicos/tratamentos, escritórios de advocacia com vários ramos de atuação, empresas consolidadas e marcas que buscam autoridade máxima."
        ]
      }
    ],
    tags: ["Site One Page", "Site Multipágina", "Arquitetura Web", "UX Design"],
    relatedSlugs: ["quanto-custa-criar-um-site-profissional", "site-ou-instagram-qual-sua-empresa-precisa"],
    ctaType: "whatsapp",
    ctaTitle: "Dúvida sobre qual formato combina com você?",
    ctaText: "Nossa equipe avalia seus serviços e indica a melhor estrutura sem compromisso.",
    ctaButtonText: "Conversar com a Especialista"
  },
  {
    id: "site-para-psicologo-o-que-precisa-ter",
    slug: "site-para-psicologo-o-que-precisa-ter",
    title: "Site para Psicólogos: A Estrutura Ideal para Transmitir Confiança e Acolhimento",
    excerpt: "Veja os elementos fundamentais para um consultório de psicologia atrair pacientes particulares para terapia presencial e online de forma ética.",
    coverImage: blogPsicologoSite,
    category: "Sites e Google",
    author: {
      name: AUTHOR_NAME,
      role: AUTHOR_ROLE,
      avatar: AUTHOR_IMG
    },
    publishedAt: "15 de Julho de 2026",
    readTime: "6 min de leitura",
    content: [
      "A busca por terapia envolve vulnerabilidade. Quando alguém procura um psicólogo, essa pessoa precisa sentir segurança, empatia e clareza sobre como funciona o processo terapêutico antes de dar o passo de mandar uma mensagem.",
      "Por isso, o site de um psicólogo não deve se parecer com uma página comercial agressiva. Ele deve ser um ambiente acolhedor, calmo e informativo."
    ],
    sections: [
      {
        heading: "1. Os elementos essenciais no site de psicologia",
        body: "Para criar uma experiência respeitosa e eficiente, recomendamos a seguinte estrutura:",
        list: [
          "Apresentação pessoal humanizada e número de registro no CRP.",
          "Explicação simples sobre a abordagem terapêutica (como ela ajuda na prática com ansiedade, estresse, luto ou relacionamentos).",
          "Explicação detalhada sobre a modalidade de Terapia Online e Terapia Presencial.",
          "FAQ abordando sigilo, duração da sessão e formas de agendamento.",
          "Canal discreto de contato direto no WhatsApp para tirar dúvidas."
        ]
      },
      {
        heading: "2. A importância da paleta de cores e tipografia",
        body: "Evite cores berrantes, contrastes agressivos ou animações excessivas. Tons terrosos suaves, beges, verdes acinzentados ou azuis suaves combinados com tipografias com serifa transmitem equilíbrio e serenidade."
      }
    ],
    tags: ["Psicologia", "Site para Psicólogos", "Terapia Online", "Ética Profissional"],
    relatedSlugs: ["site-para-clinica-de-estetica-estrutura-ideal", "como-aparecer-no-google-com-pequena-empresa"],
    ctaType: "service",
    ctaTitle: "Precisa de um site acolhedor para o seu consultório de psicologia?",
    ctaText: "Conheça nossa solução especializada para psicólogos e terapeutas.",
    ctaButtonText: "Ver Solução para Psicólogos",
    ctaUrl: "/sites-para-psicologos"
  },
  {
    id: "site-para-clinica-de-estetica-estrutura-ideal",
    slug: "site-para-clinica-de-estetica-estrutura-ideal",
    title: "Site para Clínica de Estética: Como Elevar o Ticket Médio dos seus Procedimentos",
    excerpt: "Como uma presença digital de luxo transforma a percepção de valor dos seus tratamentos faciais e corporais e multiplica o fechamento de planos.",
    coverImage: blogEsteticaSite,
    category: "Negócios",
    author: {
      name: AUTHOR_NAME,
      role: AUTHOR_ROLE,
      avatar: AUTHOR_IMG
    },
    publishedAt: "08 de Julho de 2026",
    readTime: "5 min de leitura",
    content: [
      "No mercado de estética avançada e harmonização, a concorrência por preço no Instagram costuma corroer a margem das melhores profissionais.",
      "As clínicas que mais faturam no Brasil não disputam leilão de valores nos comentários: elas constroem uma vitrine digital sofisticada que justifica cada centavo investido nos seus protocolos exclusivos."
    ],
    sections: [
      {
        heading: "1. Como o site afasta clientes 'caça-promoção' e atrai clientes premium",
        body: "Quando a cliente acessa um site limpo, com fotografia de bom gosto, detalhes dourados e explicação detalhada da biossegurança e tecnologias da clínica, a percepção de valor sobe instantaneamente.",
        list: [
          "Catálogo categorizado por queixas: rejuvenescimento, manchas, contorno corporal, flacidez.",
          "Apresentação da formação e cursos internacionais da equipe.",
          "Destaque para equipamentos modernos e certificados pela ANVISA."
        ]
      },
      {
        heading: "2. O case da Clínica Estética Aura",
        body: "Desenvolvemos para a Clínica Aura um modelo de referência que exemplifica o plano Profissional: interface refinada, catálogo completo e botão direto para a concierge da recepção."
      }
    ],
    tags: ["Estética Avançada", "Clínica de Estética", "Ticket Médio", "Site de Luxo"],
    relatedSlugs: ["site-para-psicologo-o-que-precisa-ter", "quanto-custa-criar-um-site-profissional"],
    ctaType: "service",
    ctaTitle: "Quer um site premium para a sua clínica de estética?",
    ctaText: "Conheça nosso projeto de referência e receba um orçamento personalizado.",
    ctaButtonText: "Ver Solução para Estética",
    ctaUrl: "/sites-para-esteticistas"
  }
];
