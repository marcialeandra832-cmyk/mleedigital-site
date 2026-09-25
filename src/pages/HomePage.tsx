import { useEffect, useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Check } from 'lucide-react';
import { SEOHead } from '../components/layout/SEOHead';
import { Reveal } from '../components/home/Reveal';
import { PreviaSite } from '../components/home/PreviaSite';
import { ProjetosHorizontal } from '../components/home/ProjetosHorizontal';
import { Showreel } from '../components/home/Showreel';
import { ModelosArea } from '../components/home/ModelosArea';
import { ImagemFlutuante } from '../components/motion/ImagemFlutuante';
import { clientesDestaque } from '../data/clientesDestaque';
import monogramaClaro from '../assets/brand/monograma-claro.svg';
import { appsData } from '../data/apps';
import { blogPostsData } from '../data/blog';
import { getWhatsAppLink, AUTHOR_IMG, AUTHOR_NAME, AUTHOR_ROLE } from '../data/constants';
import luzPetroleo from '../assets/brand/luz-janela-petroleo.webp';
import luzClaro from '../assets/brand/luz-janela-claro.webp';
import logoRelevo from '../assets/brand/logo-relevo-petroleo.webp';

import fotoMarcia from '../assets/brand/marcia-notebook.webp';

const etapas = [
  { n: '01', titulo: 'Conversa', texto: 'Você me chama no WhatsApp e me conta sobre o seu trabalho e o que precisa.' },
  { n: '02', titulo: 'Material', texto: 'Você me envia fotos, textos e informações. Se faltar algo, eu te ajudo a organizar.' },
  { n: '03', titulo: 'Criação', texto: 'Eu crio o site e ajustamos juntas até ficar com a sua cara.' },
  { n: '04', titulo: 'No ar', texto: 'Seu site publicado, com domínio próprio, em até 7 dias úteis.' },
];

const motivos = [
  { n: '01', titulo: 'O alcance não é seu', texto: 'Só uma parte dos seus seguidores vê o que você posta, e o alcance muda sem aviso. O site é um endereço que é seu e não depende de algoritmo.' },
  { n: '02', titulo: 'Quem procura no Google não te acha', texto: 'Quem pesquisa pelo seu serviço no Google já está pronto para contratar. Sem site, quem aparece é outra pessoa.' },
  { n: '03', titulo: 'Confiança antes da primeira mensagem', texto: 'Um site com o seu nome e domínio próprio (.com.br) mostra que você é uma profissional estabelecida antes mesmo do primeiro contato.' },
];

const perguntas = [
  { q: 'Qual a diferença entre o Essencial e o Profissional?', a: 'O Essencial é uma página única e completa, com todas as informações em sequência: apresentação, serviços, sobre, localização e contato. É ideal para quem quer presença profissional rápida e contato direto pelo WhatsApp. O Profissional tem até 5 páginas, uma para cada serviço importante, o que ajuda a aparecer no Google para cada procedimento ou área de atuação.' },
  { q: 'O Essencial substitui uma landing page?', a: 'Sim. Ele tem o foco em levar a pessoa até o contato, como uma landing page, com a credibilidade de um site oficial com domínio próprio.' },
  { q: 'O que é modelo e o que é plano?', a: 'Plano é o que você contrata: Essencial ou Profissional. Modelo é uma referência visual para a sua área. Qualquer modelo pode ser feito dentro do plano que atende a sua necessidade, sempre adaptado com as suas informações.' },
  { q: 'Em quanto tempo o site fica pronto?', a: 'Até 4 dias úteis no Essencial e até 7 dias úteis no Profissional, contados a partir do envio completo das fotos, textos e informações.' },
  { q: 'Como funciona a manutenção mensal?', a: 'A criação é paga uma única vez. Depois que o site vai ao ar, a mensalidade (R$ 127 no Essencial ou R$ 197 no Profissional) cobre a hospedagem, a segurança com cadeado (SSL), as cópias de segurança automáticas, o monitoramento e pequenas alterações de textos e fotos, com suporte direto comigo.' },
  { q: 'O domínio (.com.br) está incluso?', a: 'O registro anual do domínio é feito por você, no seu CPF ou CNPJ, pela Hostinger ou pelo Registro.br. Assim o endereço é legalmente seu. Eu te ajudo no passo a passo e faço toda a configuração técnica sem custo.' },
  { q: 'O site funciona bem no celular?', a: 'Sim. Todo site é pensado primeiro para o celular, que é de onde vem a maioria das visitas: leitura confortável, botões fáceis de tocar e carregamento rápido.' },
];

const planos = [
  {
    nome: 'Site Essencial',
    resumo: 'Uma página completa, para quem precisa de presença profissional rápida.',
    preco: '997',
    manut: '127',
    manutItens: ['Hospedagem rápida em nuvem', 'Cadeado de segurança (SSL) sempre ativo', 'Cópias de segurança automáticas', 'Pequenas alterações de textos e fotos', 'Suporte direto comigo'],
    prazo: 'Pronto em até 4 dias úteis',
    itens: [
      'Página única, fluida e fácil de navegar',
      'Design exclusivo, pensado para computador e celular',
      'Textos escritos para o seu público',
      'Botão direto para o seu WhatsApp',
      'Formulário de contato',
      'Configuração inicial para aparecer no Google',
      'Mapa e redes sociais integrados',
      'Domínio próprio e cadeado de segurança configurados',
    ],
  },
  {
    nome: 'Site Profissional',
    resumo: 'Para quem tem vários serviços e quer uma página para cada um.',
    preco: '1.397',
    manut: '197',
    manutItens: ['Hospedagem em nuvem de alta performance', 'Monitoramento 24 horas', 'Cópias de segurança automáticas', 'Cadeado de segurança (SSL) sempre ativo', 'Atualizações periódicas de conteúdo', 'Suporte prioritário'],
    prazo: 'Pronto em até 7 dias úteis',
    destaque: true,
    itens: [
      'Tudo do Essencial',
      'Até 5 páginas, uma para cada serviço importante',
      'Perguntas frequentes e depoimentos',
      'Configuração avançada para o Google',
      'Métricas de visitas instaladas (Google e Meta)',
      'Carregamento otimizado',
      'Suporte prioritário na publicação',
    ],
  },
];

gsap.registerPlugin(ScrollTrigger);

export function HomePage() {
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.from('.hero-titulo .linha-mascara > span', { yPercent: 110, duration: 1.3, ease: 'expo.out', stagger: 0.12, delay: 0.1 });
      gsap.from('.hero-rodape > *', { opacity: 0, y: 16, duration: 1, ease: 'power3.out', stagger: 0.08, delay: 0.6 });
      gsap.to('.hero-titulo', { yPercent: -16, opacity: 0.3, ease: 'none', scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true } });
    }, heroRef);

    // Luz acompanha levemente o mouse (computador)
    const camada = heroRef.current?.querySelector('.luz-mouse') as HTMLElement | null;
    const toque = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    const mover = (e: MouseEvent) => {
      if (!camada) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30, y = (e.clientY / window.innerHeight - 0.5) * 20;
      camada.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    if (!toque) window.addEventListener('mousemove', mover);

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', mover);
    };
  }, []);

  // Palavra que troca no título: cliente / paciente.
  // Roda sempre; para quem desativa animações no computador, troca com um esmaecer simples.
  useEffect(() => {
    const palavra = heroRef.current?.querySelector('.troca-palavra') as HTMLElement | null;
    if (!palavra) return;
    const reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const palavras = ['cliente', 'paciente'];
    let ip = 0;
    const trocar = () => {
      ip = (ip + 1) % palavras.length;
      if (reduz) {
        palavra.style.transition = 'opacity .4s';
        palavra.style.opacity = '0';
        window.setTimeout(() => { palavra.textContent = palavras[ip]; palavra.style.opacity = '1'; }, 400);
        return;
      }
      gsap.timeline()
        .to(palavra, { yPercent: -105, duration: 0.55, ease: 'power3.in' })
        .call(() => { palavra.textContent = palavras[ip]; })
        .set(palavra, { yPercent: 105 })
        .to(palavra, { yPercent: 0, duration: 0.8, ease: 'expo.out' });
    };
    let intervalo: number | undefined;
    const inicio = window.setTimeout(() => { intervalo = window.setInterval(trocar, 3000); }, 1800);
    return () => { window.clearTimeout(inicio); if (intervalo) window.clearInterval(intervalo); };
  }, []);

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "MLee Digital",
    "image": AUTHOR_IMG,
    "url": "https://mleedigital.com.br",
    "telephone": "+5549999619123",
    "priceRange": "R$ 997 - R$ 1397",
    "founder": {
      "@type": "Person",
      "name": AUTHOR_NAME,
      "jobTitle": AUTHOR_ROLE
    },
    "description": "Criação de sites profissionais de alta conversão e sistemas digitais sob medida para clínicas, especialistas e empresas."
  };

  const artigos = [...blogPostsData]
    .filter((p) => p.slug !== 'quem-manda-no-instagram-julgamento-meta')
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, 3);

  return (
    <div className="w-full bg-[#F4EFE8] text-[#0F3B40]">
      <SEOHead
        title="MLee Digital | Sites que fazem o cliente escolher você"
        description="Sites sob medida para médicas, dentistas, esteticistas, advogadas e arquitetas, criados pela Márcia do começo ao fim. Prontos em até 7 dias úteis."
        canonicalPath="/"
        schemaJson={homeSchema}
      />

      {/* TOPO */}
      <section ref={heroRef} className="grao relative min-h-[calc(100svh-76px)] flex flex-col justify-end px-5 sm:px-8 lg:px-14 pt-16 pb-10 overflow-hidden">
        <div className="luz-mouse absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="luz-janela" style={{ backgroundImage: `url(${luzClaro})` }} />
        </div>
        <h1 className="hero-titulo relative z-[1] font-serif text-[#0F3B40] text-[clamp(52px,10.4vw,196px)] leading-[0.9] tracking-[-0.035em]" style={{ fontVariationSettings: '"opsz" 96' }}>
          <span className="linha-mascara"><span>Sites que</span></span>
          <span className="linha-mascara pl-[clamp(0px,12vw,230px)]"><span>fazem o <span className="inline-block overflow-hidden align-bottom pb-[0.06em] -mb-[0.06em]"><span className="troca-palavra inline-block">cliente</span></span></span></span>
          <span className="linha-mascara"><span>escolher você<span className="text-[#CC8A80]">.</span></span></span>
        </h1>
        <div className="hero-rodape relative z-[1] mt-10 sm:mt-14 pt-5 border-t border-[#DCD2C6] grid grid-cols-1 md:grid-cols-[1.3fr_1fr_auto] gap-5 md:gap-8 items-end text-[15px] text-[#3F5557]">
          <p><strong className="font-medium text-[#0F3B40]">MLee Digital.</strong> Sites para médicas, dentistas, esteticistas, advogadas e arquitetas. Feitos por mim, do começo ao fim.</p>
          <p>Videira, SC. Do primeiro contato ao site no ar em até 7 dias úteis.</p>
          <div className="flex gap-3 md:mr-16">
            <a href="#previa" className="inline-flex items-center rounded-full bg-[#0F3B40] text-[#F4EFE8] px-6 py-3 text-[15px] whitespace-nowrap hover:bg-[#0A2C30] transition-colors">Ver como o meu site ficaria</a>
          </div>
        </div>
      </section>

      {/* SHOWREEL */}
      <Showreel />

      {/* POR QUE TER UM SITE */}
      <section className="px-5 sm:px-8 lg:px-14 py-24 sm:py-32">
        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[#A8675B] mb-5">Por que ter um site</p>
            <h2 className="font-serif text-[44px] sm:text-[72px] leading-[0.95] tracking-[-0.02em]">O Instagram mostra. O site convence.</h2>
          </div>
          <p className="lg:col-span-5 text-[17px] text-[#3F5557] leading-relaxed">
            As redes sociais são ótimas para chamar atenção. Mas é o site que passa segurança para o cliente decidir e contratar.
          </p>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border-t border-[#0F3B40]">
          {motivos.map((m, i) => (
            <Reveal key={m.n} atraso={i * 110} className={`pt-8 pb-4 md:pr-10 ${i > 0 ? 'md:pl-10 md:border-l border-[#DCD2C6]' : ''} ${i < motivos.length - 1 ? 'border-b md:border-b-0 border-[#DCD2C6] pb-10 md:pb-4' : ''}`}>
              <p className="font-serif text-[64px] leading-none text-[#CC8A80]/60">{m.n}</p>
              <h3 className="mt-5 font-serif text-[28px] leading-tight">{m.titulo}</h3>
              <p className="mt-3 text-[16px] text-[#3F5557] leading-relaxed">{m.texto}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRÉVIA PERSONALIZADA */}
      <PreviaSite />

      {/* PROJETOS */}
      <ProjetosHorizontal />

      {/* MODELOS POR ÁREA */}
      <ModelosArea />

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="bg-[#0F3B40] text-[#F4EFE8] py-24 sm:py-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.3em] text-[#CC8A80] mb-5">Como funciona</p>
              <h2 className="font-serif text-[40px] sm:text-5xl leading-[1.02]">Da primeira mensagem ao site no ar.</h2>
            </div>
            <p className="lg:col-span-5 text-[17px] text-[#F4EFE8]/70 leading-relaxed">
              Você fala direto comigo em todas as etapas. Sem intermediários e sem termos complicados.
            </p>
          </Reveal>

          <ol className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-0">
            {etapas.map((e, i) => (
              <Reveal as="li" key={e.n} atraso={i * 110} className="relative md:pr-8">
                <div className="flex items-center gap-4">
                  <span className="w-3 h-3 rounded-full border border-[#CC8A80] bg-[#0F3B40] relative z-10" />
                  {i < etapas.length - 1 && <span className="hidden md:block flex-1 h-px bg-[#F4EFE8]/20" />}
                </div>
                <p className="mt-6 font-serif text-[64px] leading-none text-[#F4EFE8]/15">{e.n}</p>
                <h3 className="mt-3 font-serif text-3xl">{e.titulo}</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-[#F4EFE8]/70 max-w-[16rem]">{e.texto}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* PREÇOS */}
      <section id="precos" className="py-24 sm:py-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#A8675B] mb-5">Investimento</p>
            <h2 className="font-serif text-[48px] sm:text-[80px] leading-[0.95] tracking-[-0.02em]">Preço fechado, sem surpresa.</h2>
            <p className="mt-5 text-[17px] text-[#3F5557] leading-relaxed">
              Você paga a criação uma única vez. Depois, uma mensalidade mantém o site no ar, seguro e atualizado.
            </p>
          </Reveal>

          <ImagemFlutuante>
          <div className="mt-16 border-t border-[#0F3B40]">
            {planos.map((p, i) => (
              <div key={p.nome} data-img={clientesDestaque[i]?.img}>
              <Reveal atraso={i * 120} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-12 border-b border-[#DCD2C6]">
                <div className="lg:col-span-4">
                  {p.destaque && <span className="inline-block mb-3 whitespace-nowrap text-[12px] uppercase tracking-[0.2em] text-[#A8675B]">Mais escolhido</span>}
                  <h3 className="font-serif text-4xl">{p.nome}</h3>
                  <p className="mt-3 text-[16px] text-[#3F5557] leading-relaxed max-w-xs">{p.resumo}</p>
                </div>
                <div className="lg:col-span-3">
                  <p className="font-serif text-[56px] leading-none"><span className="text-[22px] align-top mr-1">R$</span>{p.preco}</p>
                  <p className="mt-3 text-[15px] text-[#3F5557]">pagamento único</p>
                  <p className="mt-1 text-[15px] text-[#3F5557]">+ R$ {p.manut}/mês de manutenção e hospedagem</p>
                  <p className="mt-4 text-[14px] text-[#0F3B40] border-l-2 border-[#CC8A80] pl-3">{p.prazo}</p>
                  <div className="mt-6 rounded-xl bg-[#FBF8F3] border border-[#DCD2C6] p-4">
                    <p className="text-[13px] uppercase tracking-[0.15em] text-[#A8675B]">A mensalidade inclui</p>
                    <ul className="mt-3 space-y-1.5">
                      {p.manutItens.map((m) => (
                        <li key={m} className="text-[14px] text-[#0F3B40] leading-snug">{m}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {p.itens.map((it) => (
                      <li key={it} className="flex gap-2.5 text-[15px] leading-snug text-[#0F3B40]">
                        <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#CC8A80]" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={getWhatsAppLink(`Olá Márcia! Tenho interesse no ${p.nome}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 inline-flex items-center rounded-full px-7 py-3.5 text-[15px] transition-colors ${p.destaque ? 'bg-[#0F3B40] text-[#F4EFE8] hover:bg-[#0A2C30]' : 'border border-[#0F3B40]/30 hover:border-[#0F3B40]'}`}
                  >
                    Quero o {p.nome}
                  </a>
                </div>
              </Reveal>
              </div>
            ))}
          </div>
          </ImagemFlutuante>
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Reveal>
              <h3 className="font-serif text-3xl">Por que existe a mensalidade?</h3>
              <p className="mt-4 text-[16px] text-[#3F5557] leading-relaxed">
                Um site não é um arquivo parado. Ele precisa ficar hospedado num servidor, com segurança atualizada e cópias de segurança feitas o tempo todo. A mensalidade cobre tudo isso, e você não precisa se preocupar com nada técnico. Se precisar trocar um texto, uma foto ou um horário, é só me mandar.
              </p>
            </Reveal>
            <Reveal atraso={100}>
              <h3 className="font-serif text-3xl">E o domínio (.com.br)?</h3>
              <p className="mt-4 text-[16px] text-[#3F5557] leading-relaxed">
                O registro anual é feito por você, no seu CPF ou CNPJ, pela Hostinger ou pelo Registro.br. Assim o endereço é legalmente seu, para sempre. Eu te ajudo no passo a passo e faço toda a configuração sem custo.
              </p>
            </Reveal>
          </div>
          <p className="mt-10 text-[13px] text-[#3F5557] max-w-2xl">Prazos contados a partir do recebimento de todas as fotos, textos e informações.</p>
        </div>
      </section>

      {/* PERGUNTAS FREQUENTES */}
      <section className="px-5 sm:px-8 lg:px-14 pb-24 sm:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[#A8675B] mb-5">Dúvidas</p>
            <h2 className="font-serif text-[44px] sm:text-[64px] leading-[0.95] tracking-[-0.02em]">Perguntas frequentes</h2>
          </Reveal>
          <div className="lg:col-span-8 border-t border-[#0F3B40]">
            {perguntas.map((f) => (
              <details key={f.q} className="group border-b border-[#DCD2C6]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-serif text-[22px] sm:text-[26px] leading-snug [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden="true" className="shrink-0 text-[#CC8A80] text-3xl leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="pb-7 pr-10 text-[16px] text-[#3F5557] leading-relaxed max-w-2xl">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="grao bg-[#FBF8F3] border-y border-[#DCD2C6] py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden bg-[#E9E2D8]">
              {fotoMarcia ? (
                <img src={fotoMarcia} alt="Márcia, criadora da MLee Digital" className="w-full h-full object-cover object-top" style={{ filter: 'saturate(0.92) sepia(0.05)' }} />
              ) : (
                <img src={logoRelevo} alt="" className="w-full h-full object-cover" />
              )}
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7" atraso={120}>
            <p className="text-xs uppercase tracking-[0.3em] text-[#A8675B] mb-5">Quem faz</p>
            <h2 className="font-serif text-[40px] sm:text-5xl leading-[1.05]">Sou a Márcia. Cada site passa pelas minhas mãos.</h2>
            <p className="mt-6 text-[18px] text-[#3F5557] leading-relaxed max-w-xl">
              Você fala direto comigo, do primeiro contato até o site no ar. Eu cuido do design, dos textos, da tecnologia e da publicação, enquanto você cuida do seu trabalho.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg border-t border-[#DCD2C6] pt-6">
              <div><p className="font-serif text-3xl">1</p><p className="text-[14px] text-[#3F5557] mt-1">pessoa do início ao fim</p></div>
              <div><p className="font-serif text-3xl">7</p><p className="text-[14px] text-[#3F5557] mt-1">dias úteis, no máximo</p></div>
              <div><p className="font-serif text-3xl">100%</p><p className="text-[14px] text-[#3F5557] mt-1">do domínio no seu nome</p></div>
            </div>
            <Link to="/sobre/" className="mt-10 inline-flex items-center gap-1 text-[15px] underline decoration-[#CC8A80] underline-offset-4 hover:decoration-2">
              Conhecer minha história <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* APPS */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#A8675B] mb-4">Também crio</p>
              <h2 className="font-serif text-4xl">Aplicativos próprios</h2>
            </div>
            <Link to="/apps/" className="text-[15px] underline decoration-[#CC8A80] underline-offset-4">Ver apps</Link>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 border-t border-[#DCD2C6]">
            {appsData.map((a, i) => (
              <Reveal key={a.slug} atraso={i * 100} className={`py-8 border-b border-[#DCD2C6] ${i % 2 === 0 ? 'md:pr-10 md:border-r' : 'md:pl-10'}`}>
                <Link to={`/apps/${a.slug}/`} className="group block">
                  <h3 className="font-serif text-3xl group-hover:underline decoration-[#CC8A80] underline-offset-[6px] decoration-1">{a.name}</h3>
                  <p className="mt-3 text-[16px] text-[#3F5557] leading-relaxed max-w-md">{a.tagline}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#A8675B] mb-4">Blog</p>
              <h2 className="font-serif text-4xl">Para ler com calma</h2>
            </div>
            <Link to="/blog/" className="text-[15px] underline decoration-[#CC8A80] underline-offset-4">Ver todos os artigos</Link>
          </Reveal>
          <ul className="mt-10 border-t border-[#0F3B40]">
            {artigos.map((a, i) => (
              <Reveal as="li" key={a.slug} atraso={i * 90} className="border-b border-[#DCD2C6]">
                <Link to={`/blog/${a.slug}/`} className="group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-7 items-baseline">
                  <span className="md:col-span-2 text-[14px] text-[#3F5557]">{a.category}</span>
                  <span className="md:col-span-8 font-serif text-2xl sm:text-[28px] leading-snug group-hover:text-[#0A2C30] group-hover:underline decoration-[#CC8A80] underline-offset-[6px] decoration-1">{a.title}</span>
                  <span className="md:col-span-2 text-[14px] text-[#3F5557] md:text-right">{a.readTime}</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section className="relative overflow-hidden text-[#F4EFE8] px-5 sm:px-8 lg:px-14 pt-28 sm:pt-40 pb-14" style={{ backgroundImage: `url(${luzPetroleo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <img src={monogramaClaro} alt="" className="hidden md:block absolute right-8 lg:right-14 top-16 w-[clamp(80px,9vw,140px)] opacity-90" />
        <Reveal>
          <h2 className="font-serif text-[clamp(60px,12vw,230px)] leading-[0.88] tracking-[-0.04em]">Vamos criar<br />o seu?</h2>
        </Reveal>
        <Reveal atraso={120}>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" data-cursor="Oi!" className="group inline-flex items-center gap-3 self-start rounded-full bg-[#F4EFE8] text-[#0F3B40] px-9 py-5 text-[17px] hover:bg-white transition-colors">
              Falar no WhatsApp <span aria-hidden="true" className="transition-transform group-hover:translate-x-1.5">→</span>
            </a>
            <p className="text-[16px] text-[#F4EFE8]/75 max-w-sm leading-relaxed">Me conta sobre o seu trabalho. Quem responde sou eu.</p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
