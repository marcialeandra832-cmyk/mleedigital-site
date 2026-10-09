import type { Key } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SEOHead } from '../components/layout/SEOHead';
import { projectsData } from '../data/projects';
import { clientesDestaque } from '../data/clientesDestaque';
import { modelosPortfolio } from '../data/modelos';
import { catalogos, apps } from '../data/tambemFaco';
import { Celular } from '../components/portfolio/Molduras';
import { getWhatsAppLink } from '../data/constants';
import { Project } from '../types';
import luzPetroleo from '../assets/brand/luz-janela-petroleo.webp';

// Portfólio: sites de clientes em capas grandes e, abaixo, os modelos de demonstração.
// Este link pode ser enviado sozinho a quem pede para ver os trabalhos.
const area = (p: Project) => clientesDestaque.find((c) => c.slug === p.slug)?.area || p.category;

function Capa({ p, grande = false }: { p: Project; grande?: boolean; key?: Key }) {
  return (
    <article>
      <Link to={`/portfolio/${p.slug}/`} data-cursor="Ver" className="group block overflow-hidden rounded-2xl aspect-[16/9] bg-[#E9E2D8]">
        <img
          src={p.img}
          alt={`Site de ${p.client}`}
          loading={grande ? 'eager' : 'lazy'}
          className="w-full h-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
        />
      </Link>
      <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <div>
          <h3 className={`font-serif leading-tight ${grande ? 'text-[32px] sm:text-[48px]' : 'text-[26px] sm:text-[30px]'}`}>
            <Link to={`/portfolio/${p.slug}/`} className="hover:underline decoration-[#CC8A80] decoration-1 underline-offset-[6px]">{p.client}</Link>
          </h3>
          <p className="mt-1 text-[15px] text-[#3F5557]">{area(p)}</p>
        </div>
        <div className="flex gap-5 text-[15px]">
          <Link to={`/portfolio/${p.slug}/`} className="underline decoration-[#CC8A80] underline-offset-4 hover:decoration-2">Ver o projeto</Link>
          <a href={p.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#3F5557] hover:text-[#0F3B40]">
            Abrir o site <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </article>
  );
}

export function PortfolioPage() {
  // O projeto da capa grande é escolhido aqui; os demais seguem a ordem da lista de projetos.
  const clientes = projectsData.filter((p) => p.projectType === 'real');
  // Modelos: a lista do portfólio e, depois, os que só existem na lista de projetos (sem repetir).
  const modelos = [
    ...modelosPortfolio,
    ...projectsData
      .filter((p) => p.projectType === 'model' && !modelosPortfolio.some((m) => m.nome === p.client))
      .map((p) => ({ nome: p.client, area: p.category, img: p.img, link: p.demo })),
  ];
  const destaque = clientes.find((p) => p.slug === 'dra-viviane-mengatto') ?? clientes[0];
  const demais = clientes.filter((p) => p !== destaque);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Portfólio | MLee Digital',
    description: 'Sites criados e publicados pela MLee Digital para clientes, com as telas e o que foi feito em cada projeto.',
    url: 'https://mleedigital.com.br/portfolio/',
  };

  return (
    <div className="w-full bg-[#F4EFE8] text-[#0F3B40]">
      <SEOHead
        title="Portfólio"
        description="Sites criados e publicados pela MLee Digital para clientes, com as telas e o que foi feito em cada projeto."
        canonicalPath="/portfolio/"
        schemaJson={schema}
      />

      <header className="px-5 sm:px-8 lg:px-14 pt-12 sm:pt-20 pb-10 sm:pb-14 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
        <h1 className="lg:col-span-7 font-serif text-[clamp(56px,11vw,176px)] leading-[0.9] tracking-[-0.035em]" style={{ fontVariationSettings: '"opsz" 96' }}>
          Portfólio
        </h1>
        <p className="lg:col-span-4 lg:col-start-9 text-[18px] sm:text-[19px] leading-relaxed text-[#3F5557] lg:pb-3">
          Sites que eu criei e publiquei para clientes. Abra cada projeto para ver as telas e o que foi feito.
        </p>
      </header>

      <section aria-label="Sites de clientes" className="px-5 sm:px-8 lg:px-14 pb-16 sm:pb-24">
        <div className="border-t border-[#0F3B40] pt-8 sm:pt-10">
          {destaque && <Capa p={destaque} grande />}
          <div className={`mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-2 ${demais.length % 3 === 0 ? 'lg:grid-cols-3' : ''} gap-x-8 lg:gap-x-10 gap-y-14`}>
            {demais.map((p) => <Capa key={p.slug} p={p} />)}
          </div>
        </div>
      </section>

      {/* TAMBÉM FAÇO: catálogos, cardápios e apps */}
      <section className="px-5 sm:px-8 lg:px-14 pb-20 sm:pb-28">
        <h2 className="border-t border-[#0F3B40] pt-8 sm:pt-10 font-serif text-[36px] sm:text-[52px] leading-[1.02] tracking-[-0.02em]">Também faço</h2>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <h3 className="font-serif text-[28px] sm:text-[32px] leading-tight">Catálogos e cardápios</h3>
            <p className="mt-3 text-[17px] leading-relaxed text-[#3F5557] max-w-[34ch]">Um link só com todos os produtos ou pratos, feito para abrir no celular.</p>
          </div>
          <ul className="lg:col-span-7 lg:col-start-6 flex flex-wrap gap-x-10 gap-y-12">
            {catalogos.map((c) => (
              <li key={c.nome} className="w-[200px]">
                <a href={c.link} target="_blank" rel="noopener noreferrer" data-cursor="Abrir" className="group block">
                  <Celular src={c.img} alt={`${c.tipo}: ${c.nome}`} proporcao="9 / 16" />
                  <span className="mt-5 flex items-start justify-between gap-2">
                    <span className="font-serif text-[22px] leading-snug group-hover:underline decoration-[#CC8A80] decoration-1 underline-offset-[5px]">{c.nome}</span>
                    <ArrowUpRight className="w-5 h-5 mt-1 shrink-0 text-[#3F5557]" aria-hidden="true" />
                  </span>
                  <span className="mt-1 block text-[15px] text-[#3F5557]">{c.tipo}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 sm:mt-24 pt-10 sm:pt-12 border-t border-[#DCD2C6] grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <h3 className="font-serif text-[28px] sm:text-[32px] leading-tight">Apps</h3>
            <p className="mt-3 text-[17px] leading-relaxed text-[#3F5557] max-w-[34ch]">Aplicativos que eu criei do zero, do desenho à publicação.</p>
          </div>
          <ul className="lg:col-span-7 lg:col-start-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {apps.map((a) => (
              <li key={a.slug}>
                <Link to={`/apps/${a.slug}/`} data-cursor="Ver" className="group block">
                  <span className="block overflow-hidden rounded-xl aspect-[16/9] bg-[#E9E2D8] border border-[#DCD2C6]">
                    <img src={a.img} alt={`Tela do app ${a.nome}`} loading="lazy" className="w-full h-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]" />
                  </span>
                  <span className="mt-4 block font-serif text-[22px] leading-snug group-hover:underline decoration-[#CC8A80] decoration-1 underline-offset-[5px]">{a.nome}</span>
                  <span className="mt-1 block text-[15px] text-[#3F5557]">{a.resumo}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#FBF8F3] border-y border-[#DCD2C6] px-5 sm:px-8 lg:px-14 py-20 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <h2 className="lg:col-span-6 font-serif text-[36px] sm:text-[52px] leading-[1.02] tracking-[-0.02em]">Modelos de demonstração</h2>
          <p className="lg:col-span-5 lg:col-start-8 text-[17px] leading-relaxed text-[#3F5557]">
            Sites de exemplo que eu criei para mostrar como ficaria em cada área. Não são de clientes. Toque para abrir.
          </p>
        </div>
        <ul className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {modelos.map((m) => (
            <li key={m.nome}>
              <a href={m.link} target="_blank" rel="noopener noreferrer" data-cursor="Abrir" className="group block">
                <span className="block overflow-hidden rounded-xl aspect-[16/9] bg-[#E9E2D8]">
                  <img src={m.img} alt={`Modelo ${m.nome}`} loading="lazy" className="w-full h-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]" />
                </span>
                <span className="mt-4 flex items-start justify-between gap-3">
                  <span className="font-serif text-[24px] leading-snug group-hover:underline decoration-[#CC8A80] decoration-1 underline-offset-[5px]">{m.nome}</span>
                  <ArrowUpRight className="w-5 h-5 mt-1.5 shrink-0 text-[#3F5557]" aria-hidden="true" />
                </span>
                <span className="mt-1 block text-[15px] text-[#3F5557]">{m.area}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="text-[#F4EFE8] px-5 sm:px-8 lg:px-14 pt-24 sm:pt-32 pb-16" style={{ backgroundColor: '#0F3B40', backgroundImage: `url(${luzPetroleo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h2 className="font-serif text-[clamp(48px,9vw,160px)] leading-[0.9] tracking-[-0.035em]">Vamos criar o seu?</h2>
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
          <a
            href={getWhatsAppLink('Olá Márcia! Vi o seu portfólio e quero conversar sobre o meu site.')}
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
    </div>
  );
}
