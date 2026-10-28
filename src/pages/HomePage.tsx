import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';
import { SEOHead } from '../components/layout/SEOHead';
import { Reveal } from '../components/home/Reveal';
import { PreviaSite } from '../components/home/PreviaSite';
import { ProjetosHorizontal } from '../components/home/ProjetosHorizontal';
import { Showreel } from '../components/home/Showreel';
import { HeroPortal } from '../components/home/HeroPortal';
import { ChamadaFinal } from '../components/home/ChamadaFinal';
import { LinhasPortal, Ponto } from '../components/home/Detalhes';
import { ModelosArea } from '../components/home/ModelosArea';
import { ImagemFlutuante } from '../components/motion/ImagemFlutuante';
import { clientesDestaque } from '../data/clientesDestaque';
import { blogPostsData } from '../data/blog';
import { planos } from '../data/planos';
import { getWhatsAppLink, AUTHOR_IMG, AUTHOR_NAME, AUTHOR_ROLE, AREA_ATENDIDA, INSTAGRAM_URL, SITE_URL } from '../data/constants';
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

gsap.registerPlugin(ScrollTrigger);

export function HomePage() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#empresa`,
    "name": "MLee Digital",
    "image": AUTHOR_IMG,
    "url": `${SITE_URL}/`,
    "telephone": "+5549999619123",
    "priceRange": "R$ 997 - R$ 1397",
    "founder": {
      "@type": "Person",
      "name": AUTHOR_NAME,
      "jobTitle": AUTHOR_ROLE
    },
    "areaServed": AREA_ATENDIDA,
    "availableLanguage": "pt-BR",
    "sameAs": [INSTAGRAM_URL],
    "description": "Criação de sites sob medida para médicas, dentistas, esteticistas, advogadas e arquitetas. Atendimento 100% online para todo o Brasil."
  };

  const artigos = [...blogPostsData]
    .filter((p) => p.slug !== 'quem-manda-no-instagram-julgamento-meta')
    .slice(0, 3);

  return (
    <div className="w-full bg-[#F4EFE8] text-[#111819]">
      <SEOHead
        title="Criação de sites para médicas, dentistas e advogadas | MLee Digital"
        description="Sites sob medida para médicas, dentistas, esteticistas, advogadas e arquitetas de todo o Brasil. Atendimento 100% online e site no ar em até 7 dias úteis."
        canonicalPath="/"
        schemaJson={homeSchema}
      />

      {/* TOPO */}
      <HeroPortal />
      <div className="passagem-topo" aria-hidden="true" />

      {/* SHOWREEL */}
      <Showreel />

      {/* POR QUE TER UM SITE */}
      <section className="px-5 sm:px-8 lg:px-14 py-24 sm:py-32">
        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[#A8675B] mb-5">Por que ter um site</p>
            <h2 className="font-serif text-[44px] sm:text-[72px] leading-[0.95] tracking-[-0.02em]">O Instagram mostra. O site convence.</h2>
          </div>
          <p className="lg:col-span-5 text-[17px] text-[#4A5153] leading-relaxed">
            As redes sociais são ótimas para chamar atenção. Mas é o site que passa segurança para o cliente decidir e contratar.
          </p>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border-t border-[#111819]">
          {motivos.map((m, i) => (
            <Reveal key={m.n} atraso={i * 110} className={`pt-8 pb-4 md:pr-10 ${i > 0 ? 'md:pl-10 md:border-l border-[#DCD2C6]' : ''} ${i < motivos.length - 1 ? 'border-b md:border-b-0 border-[#DCD2C6] pb-10 md:pb-4' : ''}`}>
              <p className="font-serif text-[64px] leading-none text-[#CC8A80]/60">{m.n}</p>
              <h3 className="mt-5 font-serif text-[28px] leading-tight">{m.titulo}</h3>
              <p className="mt-3 text-[16px] text-[#4A5153] leading-relaxed">{m.texto}</p>
            </Reveal>
          ))}
        </div>
        <LinhasPortal className="mt-24 sm:mt-32" />
      </section>

      {/* PRÉVIA PERSONALIZADA */}
      <PreviaSite />

      {/* PROJETOS */}
      <ProjetosHorizontal />

      {/* MODELOS POR ÁREA */}
      <ModelosArea />

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="fundo-mar text-[#F4EFE8] py-24 sm:py-32 scroll-mt-20">
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
                  <span className="w-3 h-3 rounded-full border border-[#CC8A80] bg-[#CC8A80]/25 relative z-10" />
                  {i < etapas.length - 1 && <span className="hidden md:block flex-1 h-px bg-[#F4EFE8]/20" />}
                </div>
                <p className="mt-6 font-serif text-[64px] leading-none text-[#CC8A80]/55">{e.n}</p>
                <h3 className="mt-3 font-serif text-3xl">{e.titulo}</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-[#F4EFE8]/70 max-w-[16rem]">{e.texto}</p>
              </Reveal>
            ))}
          </ol>
          <LinhasPortal escuro className="mt-20" />
        </div>
      </section>

      {/* PREÇOS */}
      <section id="precos" className="py-24 sm:py-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#A8675B] mb-5">Investimento</p>
            <h2 className="font-serif text-[48px] sm:text-[80px] leading-[0.95] tracking-[-0.02em]">Preço fechado, sem surpresa.</h2>
            <p className="mt-5 text-[17px] text-[#4A5153] leading-relaxed">
              Você paga a criação uma única vez. Depois, uma mensalidade mantém o site no ar, seguro e atualizado.
            </p>
          </Reveal>

          <ImagemFlutuante>
          <div className="mt-16 border-t border-[#111819]">
            {planos.map((p, i) => (
              <div key={p.nome} data-img={clientesDestaque[i]?.img}>
              <Reveal atraso={i * 120} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-12 border-b border-[#DCD2C6]">
                <div className="lg:col-span-4">
                  {p.destaque && <span className="inline-block mb-3 whitespace-nowrap text-[12px] uppercase tracking-[0.2em] text-[#A8675B]">Mais escolhido</span>}
                  <h3 className="font-serif text-4xl">{p.nome}</h3>
                  <p className="mt-3 text-[16px] text-[#4A5153] leading-relaxed max-w-xs">{p.resumo}</p>
                </div>
                <div className="lg:col-span-3">
                  <p className="font-serif text-[56px] leading-none"><span className="text-[22px] align-top mr-1">R$</span>{p.preco}</p>
                  <p className="mt-3 text-[15px] text-[#4A5153]">pagamento único</p>
                  <p className="mt-1 text-[15px] text-[#4A5153]">+ R$ {p.manut}/mês de manutenção e hospedagem</p>
                  <p className="mt-4 text-[14px] text-[#111819] border-l-2 border-[#CC8A80] pl-3">{p.prazo}</p>
                  <div className="mt-6 rounded-xl bg-[#FBF8F3] border border-[#DCD2C6] p-4">
                    <p className="text-[13px] uppercase tracking-[0.15em] text-[#A8675B]">A mensalidade inclui</p>
                    <ul className="mt-3 space-y-1.5">
                      {p.manutItens.map((m) => (
                        <li key={m} className="text-[14px] text-[#111819] leading-snug">{m}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {p.itens.map((it) => (
                      <li key={it} className="flex gap-2.5 text-[15px] leading-snug text-[#111819]">
                        <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#CC8A80]" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={getWhatsAppLink(`Olá Márcia! Tenho interesse no ${p.nome}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group mt-8 inline-flex items-center gap-4 rounded-full pl-7 pr-6 py-3.5 text-[15px] transition-colors ${p.destaque ? 'bg-[#111819] text-[#F4EFE8] hover:bg-[#0A0F10]' : 'border border-[#111819]/30 hover:border-[#111819]'}`}
                  >
                    Quero o {p.nome} <Ponto className="text-[#CC8A80]" />
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
              <p className="mt-4 text-[16px] text-[#4A5153] leading-relaxed">
                Um site não é um arquivo parado. Ele precisa ficar hospedado num servidor, com segurança atualizada e cópias de segurança feitas o tempo todo. A mensalidade cobre tudo isso, e você não precisa se preocupar com nada técnico. Se precisar trocar um texto, uma foto ou um horário, é só me mandar.
              </p>
            </Reveal>
            <Reveal atraso={100}>
              <h3 className="font-serif text-3xl">E o domínio (.com.br)?</h3>
              <p className="mt-4 text-[16px] text-[#4A5153] leading-relaxed">
                O registro anual é feito por você, no seu CPF ou CNPJ, pela Hostinger ou pelo Registro.br. Assim o endereço é legalmente seu, para sempre. Eu te ajudo no passo a passo e faço toda a configuração sem custo.
              </p>
            </Reveal>
          </div>
          <p className="mt-10 text-[13px] text-[#4A5153] max-w-2xl">Prazos contados a partir do recebimento de todas as fotos, textos e informações.</p>
        </div>
      </section>

      {/* PERGUNTAS FREQUENTES */}
      <section className="px-5 sm:px-8 lg:px-14 pb-24 sm:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[#A8675B] mb-5">Dúvidas</p>
            <h2 className="font-serif text-[44px] sm:text-[64px] leading-[0.95] tracking-[-0.02em]">Perguntas frequentes</h2>
          </Reveal>
          <div className="lg:col-span-8 border-t border-[#111819]">
            {perguntas.map((f, i) => (
              <details key={f.q} className="group border-b border-[#DCD2C6]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-serif text-[22px] sm:text-[26px] leading-snug [&::-webkit-details-marker]:hidden">
                  <span className="flex items-baseline gap-4"><span className="font-sans text-[11px] text-[#CC8A80] tabular-nums">{String(i + 1).padStart(2, '0')}</span>{f.q}</span>
                  <span aria-hidden="true" className="shrink-0 text-[#CC8A80] text-3xl leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="pb-7 pr-10 text-[16px] text-[#4A5153] leading-relaxed max-w-2xl">{f.a}</p>
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
            <p className="mt-6 text-[18px] text-[#4A5153] leading-relaxed max-w-xl">
              Você fala direto comigo, do primeiro contato até o site no ar. Eu cuido do design, dos textos, da tecnologia e da publicação, enquanto você cuida do seu trabalho.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg border-t border-[#DCD2C6] pt-6">
              <div><p className="font-serif text-3xl">1</p><p className="text-[14px] text-[#4A5153] mt-1">pessoa do início ao fim</p></div>
              <div><p className="font-serif text-3xl">7</p><p className="text-[14px] text-[#4A5153] mt-1">dias úteis, no máximo</p></div>
              <div><p className="font-serif text-3xl">100%</p><p className="text-[14px] text-[#4A5153] mt-1">do domínio no seu nome</p></div>
            </div>
            <Link to="/sobre/" className="group link-ponto mt-10 text-[15px]">
              Conhecer minha história <Ponto />
            </Link>
          </Reveal>
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
            <Link to="/blog/" className="group link-ponto self-start sm:self-auto text-[15px]">Ver todos os artigos <Ponto /></Link>
          </Reveal>
          <ul className="mt-10 border-t border-[#111819]">
            {artigos.map((a, i) => (
              <Reveal as="li" key={a.slug} atraso={i * 90} className="border-b border-[#DCD2C6]">
                <Link to={`/blog/${a.slug}/`} className="group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-7 items-baseline">
                  <span className="md:col-span-2 text-[14px] text-[#4A5153]">{a.category}</span>
                  <span className="md:col-span-8 font-serif text-2xl sm:text-[28px] leading-snug group-hover:text-[#0A0F10] group-hover:underline decoration-[#CC8A80] underline-offset-[6px] decoration-1">{a.title}</span>
                  <span className="md:col-span-2 text-[14px] text-[#4A5153] md:text-right">{a.readTime}</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <ChamadaFinal />
    </div>
  );
}
