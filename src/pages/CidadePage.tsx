import { Link, Navigate } from 'react-router-dom';
import { Ponto } from '../components/home/Detalhes';
import { TopoInterno, botaoClaro } from '../components/common/TopoInterno';
import { MessageCircle, MapPin, Search, Video } from 'lucide-react';
import { SEOHead } from '../components/layout/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { PricingTable } from '../components/common/PricingTable';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { CTASection } from '../components/common/CTASection';
import { cidadesData } from '../data/cidades';
import { getWhatsAppLink, SITE_URL } from '../data/constants';

const areas = [
  { label: 'Clínicas médicas e odontológicas', to: '/sites-para-clinicas/' },
  { label: 'Estética e beleza', to: '/sites-para-esteticistas/' },
  { label: 'Advocacia', to: '/sites-para-advogados/' },
  { label: 'Arquitetura', to: '/sites-para-arquitetos/' },
];

interface CidadePageProps {
  slug: string;
}

export function CidadePage({ slug }: CidadePageProps) {
  const cidade = cidadesData[slug];

  if (!cidade) {
    return <Navigate to="/" replace />;
  }

  const outrasCidades = Object.values(cidadesData).filter((c) => c.slug !== slug);
  const url = `${SITE_URL}/${cidade.slug}/`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": cidade.title,
      "serviceType": "Criação de sites",
      "description": cidade.metaDescription,
      "url": url,
      "provider": { "@id": `${SITE_URL}/#empresa`, "@type": "ProfessionalService", "name": "MLee Digital" },
      "areaServed": { "@type": "City", "name": cidade.nome, "containedInPlace": { "@type": "State", "name": cidade.uf } },
      "availableChannel": { "@type": "ServiceChannel", "serviceUrl": url, "name": "Atendimento online por WhatsApp e videochamada" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": cidade.faq.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Início", "item": `${SITE_URL}/` },
        { "@type": "ListItem", "position": 2, "name": `Sites em ${cidade.nome}`, "item": url },
      ],
    },
  ];

  const mensagem = `Olá Márcia! Sou de ${cidade.nome} e quero conversar sobre o meu site.`;

  return (
    <div className="w-full">
      <SEOHead
        title={`${cidade.title} | MLee Digital`}
        description={cidade.metaDescription}
        canonicalPath={`/${cidade.slug}/`}
        schemaJson={schema}
      />

      <Breadcrumbs items={[{ label: `Sites em ${cidade.nome}` }]} />

      {/* Topo */}
      <TopoInterno
        rotulo={`${cidade.nome} · ${cidade.uf}`}
        titulo={cidade.h1}
        texto={cidade.heroDesc}
        acoes={
          <a href={getWhatsAppLink(mensagem)} target="_blank" rel="noopener noreferrer" className={botaoClaro}>
            Pedir orçamento no WhatsApp <Ponto className="text-[#A8675B]" />
          </a>
        }
      />

      <section className="py-24 sm:py-32 bg-[#F4EFE8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.3em] text-[#A8675B] mb-5">O mercado em {cidade.nome}</p>
              <h2 className="font-serif text-[40px] sm:text-[60px] leading-[0.98] tracking-[-0.02em]">{cidade.mercado.titulo}</h2>
            </div>
            <p className="lg:col-span-5 text-[17px] text-[#4A5153] leading-relaxed">{cidade.mercado.texto}</p>
          </div>
          <ul className="mt-14 grid grid-cols-1 md:grid-cols-2 border-t border-[#111819]">
            {cidade.mercado.pontos.map((pt, i) => (
              <li key={pt} className={`flex gap-5 py-6 border-b border-[#DCD2C6] text-[16px] leading-relaxed ${i % 2 === 1 ? 'md:pl-10 md:border-l' : 'md:pr-10'}`}>
                <span className="font-serif text-[28px] leading-none text-[#CC8A80]/70 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="fundo-mar text-[#F4EFE8] py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.3em] text-[#CC8A80] mb-5">Como procuram</p>
              <h2 className="font-serif text-[40px] sm:text-[60px] leading-[0.98] tracking-[-0.02em]">{cidade.busca.titulo}</h2>
            </div>
            <p className="lg:col-span-5 text-[17px] text-[#F4EFE8]/72 leading-relaxed">{cidade.busca.texto}</p>
          </div>
          <ul className="mt-14 grid grid-cols-1 md:grid-cols-3 border-t border-[#F4EFE8]/25">
            {cidade.busca.exemplos.map((ex, i) => (
              <li key={ex} className={`pt-8 pb-4 md:pr-8 ${i > 0 ? 'md:pl-8 md:border-l border-[#F4EFE8]/15' : ''}`}>
                <p className="text-[11px] text-[#CC8A80] tabular-nums">{String(i + 1).padStart(2, '0')}</p>
                <p className="mt-3 font-serif text-[26px] leading-snug">"{ex}"</p>
              </li>
            ))}
          </ul>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 border-t border-[#F4EFE8]/25">
            <div className="pt-8 md:pr-10">
              <h3 className="font-serif text-[30px]">Tudo online, do começo ao fim</h3>
              <p className="mt-3 text-[16px] text-[#F4EFE8]/72 leading-relaxed">Conversa pelo WhatsApp, reuniões por videochamada e aprovação pelo celular. Você fala direto comigo em todas as etapas, e o site fica no ar em até 7 dias úteis.</p>
            </div>
            <div className="pt-8 md:pl-10 md:border-l border-[#F4EFE8]/15">
              <h3 className="font-serif text-[30px]">Atendo profissionais de toda {cidade.nome}</h3>
              <p className="mt-3 text-[16px] text-[#F4EFE8]/72 leading-relaxed">Incluindo {cidade.bairros.slice(0, -1).join(', ')} e {cidade.bairros[cidade.bairros.length - 1]}.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-[#F4EFE8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#A8675B] mb-5">Veja por área</p>
          <ul className="border-t border-[#111819]">
            {[...areas, { label: 'Projetos entregues', to: '/portfolio/' }].map((a, i) => (
              <li key={a.to} className="border-b border-[#DCD2C6]">
                <Link to={a.to} className="group flex items-baseline justify-between gap-6 py-6">
                  <span className="flex items-baseline gap-5">
                    <span className="text-[12px] text-[#CC8A80] tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-serif text-[26px] sm:text-[32px] leading-tight group-hover:text-[#A8675B] transition-colors">{a.label}</span>
                  </span>
                  <Ponto />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PricingTable />

      <section className="py-24 sm:py-32 bg-[#F4EFE8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <FAQAccordion items={cidade.faq} title="Perguntas frequentes" />
          <p className="mt-14 text-[15px] text-[#4A5153]">
            Também atendo em{' '}
            {outrasCidades.map((c, i) => (
              <span key={c.slug}>
                <Link to={`/${c.slug}/`} className="underline decoration-[#CC8A80] underline-offset-4 hover:text-[#111819]">{c.nome}</Link>
                {i < outrasCidades.length - 1 ? ', ' : ' '}
              </span>
            ))}
            e em todo o Brasil.
          </p>
        </div>
      </section>

      <CTASection
        title="Vamos criar o seu?"
        subtitle="Me chama no WhatsApp e me conta sobre o seu trabalho. Quem responde sou eu."
        whatsappMessage={mensagem}
      />
    </div>
  );
}
