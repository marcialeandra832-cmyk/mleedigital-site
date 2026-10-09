import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SEOHead } from '../components/layout/SEOHead';
import { JanelaNavegador, Celular } from '../components/portfolio/Molduras';
import { projectsData } from '../data/projects';
import { getWhatsAppLink } from '../data/constants';
import { Caso, Project } from '../types';
import luzPetroleo from '../assets/brand/luz-janela-petroleo.webp';

// Página de estudo de caso: capa nas cores da cliente, ponto de partida, cores e letras,
// telas no computador e no celular, o que foi entregue e chamada para o WhatsApp.
export function CasoProjeto({ project, caso }: { project: Project; caso: Caso }) {
  const [reduz, setReduz] = useState(false);
  useEffect(() => { setReduz(window.matchMedia('(prefers-reduced-motion: reduce)').matches); }, []);

  // Carrega a letra usada no site da cliente só nesta página.
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = caso.fonte.link;
    document.head.appendChild(link);
    return () => { link.remove(); };
  }, [caso.fonte.link]);

  const endereco = project.demo.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
  const reais = projectsData.filter((p) => p.projectType === 'real');
  const proximo = reais[(reais.findIndex((p) => p.slug === project.slug) + 1) % reais.length];
  const h2 = 'font-serif text-[36px] sm:text-[52px] leading-[1.02] tracking-[-0.02em]';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: `${project.client} | MLee Digital`,
    headline: caso.resumo,
    image: project.img,
    provider: { '@type': 'ProfessionalService', name: 'MLee Digital' },
    description: caso.resumo,
  };

  return (
    <article className="w-full bg-[#F4EFE8] text-[#0F3B40]">
      <SEOHead
        title={`${project.client} | Portfólio`}
        description={caso.resumo}
        canonicalPath={`/portfolio/${project.slug}/`}
        ogImage={project.img}
        schemaJson={schema}
      />

      {/* ABERTURA */}
      <header className="px-5 sm:px-8 lg:px-14 pt-12 sm:pt-20 pb-10 sm:pb-14">
        <h1 className="font-serif text-[clamp(44px,9vw,152px)] leading-[0.92] tracking-[-0.03em] text-balance" style={{ fontVariationSettings: '"opsz" 96' }}>
          {project.client}
        </h1>
        <p className="mt-6 sm:mt-8 text-[18px] sm:text-[21px] leading-relaxed text-[#3F5557] max-w-2xl">{caso.resumo}</p>

        <dl className={`mt-10 sm:mt-14 pt-5 border-t border-[#0F3B40] grid grid-cols-2 ${caso.ficha.length >= 4 ? 'lg:grid-cols-5' : 'lg:grid-cols-4'} gap-x-6 gap-y-6`}>
          {caso.ficha.map((f) => (
            <div key={f.rotulo}>
              <dt className="text-[14px] text-[#3F5557]">{f.rotulo}</dt>
              <dd className="mt-1 text-[17px]">{f.valor}</dd>
            </div>
          ))}
          <div className={`${caso.ficha.length % 2 === 0 ? 'col-span-2' : ''} lg:col-span-1 lg:text-right`}>
            <dt className="text-[14px] text-[#3F5557]">Endereço</dt>
            <dd className="mt-1 text-[17px]">
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline decoration-[#CC8A80] underline-offset-4 hover:decoration-2 break-all">
                {endereco} <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>
            </dd>
          </div>
        </dl>
      </header>

      {/* CAPA NAS CORES DA CLIENTE */}
      <section aria-label={`Site de ${project.client} no computador e no celular`} className="px-5 sm:px-8 lg:px-14 pt-10 sm:pt-20 pb-16 sm:pb-24" style={{ background: caso.palco.fundo }}>
        <div className="relative max-w-6xl mx-auto pb-[14%] sm:pb-[6%] pr-0 sm:pr-[9%]">
          <JanelaNavegador endereco={endereco}>
            {caso.video ? (
              <video
                className="block w-full aspect-[1280/736] object-cover bg-black"
                src={caso.video.src}
                poster={caso.video.poster}
                muted
                playsInline
                loop
                autoPlay={!reduz}
                controls={reduz}
                preload="metadata"
              />
            ) : (
              <img src={project.img} alt={`Abertura do site de ${project.client}`} className="block w-full h-auto" />
            )}
          </JanelaNavegador>
          <Celular
            src={caso.capaCelular}
            alt={`Abertura do site de ${project.client} no celular`}
            cor={caso.palco.moldura || '#2E2E2E'}
            className="absolute right-[3%] sm:right-0 bottom-0 w-[30%] sm:w-[19%]"
          />
        </div>
      </section>

      {/* PONTO DE PARTIDA */}
      <section className="px-5 sm:px-8 lg:px-14 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <h2 className={`${h2} lg:col-span-4`}>O ponto de partida</h2>
        <div className="lg:col-span-7 lg:col-start-6 space-y-5 text-[19px] sm:text-[21px] leading-relaxed text-[#0F3B40]">
          {caso.contexto.map((p) => <p key={p}>{p}</p>)}
        </div>
      </section>

      {/* CORES E LETRAS */}
      <section className="pb-20 sm:pb-28">
        <div className="px-5 sm:px-8 lg:px-14 grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 sm:mb-14">
          <h2 className={`${h2} lg:col-span-4`}>Cores e letras</h2>
          <p className="lg:col-span-7 lg:col-start-6 text-[19px] sm:text-[21px] leading-relaxed">{caso.cores.texto}</p>
        </div>

        <ul className="flex flex-col sm:flex-row">
          {caso.cores.paleta.map((c, i) => (
            <li
              key={c.hex}
              className={`flex sm:flex-col justify-between sm:justify-end items-center sm:items-start gap-1 px-5 sm:px-6 py-5 sm:py-6 sm:h-[300px] ${i === 0 ? 'sm:flex-[2.2]' : 'sm:flex-1'}`}
              style={{ background: c.hex, color: c.escura ? '#F4EFE8' : '#1A1A1A' }}
            >
              <span className="text-[16px]">{c.nome}</span>
              <span className="text-[14px] opacity-75 tabular-nums">{c.hex}</span>
            </li>
          ))}
        </ul>

        <div className="px-5 sm:px-8 lg:px-14 mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
          <p aria-hidden="true" className="lg:col-span-4 text-[120px] sm:text-[200px] leading-[0.8] text-[#0F3B40]" style={{ fontFamily: caso.fonte.css, fontWeight: caso.fonte.peso ?? 400 }}>Aa</p>
          <div className="lg:col-span-7 lg:col-start-6 border-t border-[#DCD2C6] pt-6">
            <p className={`text-[26px] sm:text-[38px] leading-[1.15] ${caso.fonte.maiusculas ? 'uppercase' : ''}`} style={{ fontFamily: caso.fonte.css, fontWeight: caso.fonte.peso ?? 400, letterSpacing: '-0.01em' }}>{caso.fonte.amostra}</p>
            <p className="mt-5 text-[16px] text-[#3F5557] leading-relaxed">
              <span className="text-[#0F3B40]">{caso.fonte.nome}.</span> {caso.fonte.uso}
            </p>
          </div>
        </div>
      </section>

      {/* TELAS */}
      <section className="bg-[#FBF8F3] border-y border-[#DCD2C6] px-5 sm:px-8 lg:px-14 py-20 sm:py-28">
        <h2 className={h2}>As telas</h2>
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-14 sm:gap-y-20">
          {caso.telas.map((t, i) => {
            const larga = i % 3 === 0;
            return (
              <figure key={t.titulo} className={larga ? 'md:col-span-2' : ''}>
                <JanelaNavegador endereco={endereco} className="!shadow-[0_40px_80px_-45px_rgba(15,59,64,0.55)] border border-[#DCD2C6]">
                  <img src={t.img} alt={`${t.titulo} no site de ${project.client}`} loading="lazy" width={1600} height={1000} className="block w-full h-auto" />
                </JanelaNavegador>
                <figcaption className={`mt-6 ${larga ? 'grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8' : ''}`}>
                  <h3 className={`font-serif text-[26px] sm:text-[30px] leading-tight ${larga ? 'md:col-span-4' : ''}`}>{t.titulo}</h3>
                  <p className={`text-[17px] text-[#3F5557] leading-relaxed ${larga ? 'md:col-span-7 md:col-start-6' : 'mt-2 max-w-[46ch]'}`}>{t.texto}</p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      {/* NO CELULAR */}
      <section className="py-20 sm:py-28 overflow-hidden" style={{ background: caso.celular.fundo, color: '#1A1A1A' }}>
        <div className="px-5 sm:px-8 lg:px-14 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <h2 className={`${h2} lg:col-span-4`}>No celular</h2>
          <p className="lg:col-span-7 lg:col-start-6 text-[19px] sm:text-[21px] leading-relaxed">{caso.celular.texto}</p>
        </div>
        <ul className="mt-12 sm:mt-16 flex md:justify-center gap-6 md:gap-12 px-5 sm:px-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {caso.celular.telas.map((t, i) => (
            <li key={t.legenda} className={`shrink-0 snap-center w-[64vw] max-w-[280px] md:w-[250px] ${i % 2 === 1 ? 'md:mt-16' : ''}`}>
              <Celular src={t.img} alt={`${t.legenda} no celular`} cor={caso.palco.fundo} proporcao={caso.celular.proporcao} />
              <p className="mt-4 text-[15px] text-center">{t.legenda}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* O QUE FOI ENTREGUE */}
      <section className="px-5 sm:px-8 lg:px-14 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <h2 className={h2}>O que foi entregue</h2>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" data-cursor="Abrir" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0F3B40] text-[#F4EFE8] px-7 py-3.5 text-[16px] hover:bg-[#0A2C30] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F3B40]">
            Ver o site no ar <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        <ul className="lg:col-span-7 lg:col-start-6 border-t border-[#0F3B40]">
          {caso.entregas.map((e) => (
            <li key={e} className="py-4 border-b border-[#DCD2C6] text-[17px] sm:text-[18px] leading-snug">{e}</li>
          ))}
        </ul>
      </section>

      {/* PRÓXIMO PROJETO */}
      {proximo && proximo.slug !== project.slug && (
        <section className="px-5 sm:px-8 lg:px-14 pb-20 sm:pb-28">
          <Link to={`/portfolio/${proximo.slug}/`} data-cursor="Ver" className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center border-t border-[#0F3B40] pt-8">
            <div className="md:col-span-7">
              <p className="text-[15px] text-[#3F5557]">Próximo projeto</p>
              <p className="mt-2 font-serif text-[40px] sm:text-[72px] leading-[0.98] tracking-[-0.02em] group-hover:underline decoration-[#CC8A80] decoration-1 underline-offset-[10px]">{proximo.client}</p>
            </div>
            <div className="md:col-span-5 overflow-hidden rounded-2xl aspect-[16/9] bg-[#E9E2D8]">
              <img src={proximo.img} alt={`Site de ${proximo.client}`} loading="lazy" className="w-full h-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]" />
            </div>
          </Link>
        </section>
      )}

      {/* CHAMADA FINAL */}
      <section className="text-[#F4EFE8] px-5 sm:px-8 lg:px-14 pt-24 sm:pt-32 pb-16" style={{ backgroundColor: '#0F3B40', backgroundImage: `url(${luzPetroleo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h2 className="font-serif text-[clamp(48px,9vw,160px)] leading-[0.9] tracking-[-0.035em]">Quer um site assim?</h2>
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
          <a
            href={getWhatsAppLink(`Olá Márcia! Vi o projeto ${project.client} no seu portfólio e quero conversar sobre o meu site.`)}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="Oi!"
            className="inline-flex items-center self-start rounded-full bg-[#F4EFE8] text-[#0F3B40] px-9 py-5 text-[17px] hover:bg-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4EFE8]"
          >
            Falar no WhatsApp
          </a>
          <p className="text-[16px] text-[#F4EFE8]/75 max-w-sm leading-relaxed">Me conta sobre o seu trabalho. Quem responde sou eu, a Márcia.</p>
        </div>
      </section>
    </article>
  );
}
