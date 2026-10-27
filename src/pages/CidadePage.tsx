import { Link, Navigate } from 'react-router-dom';
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
      <section className="pt-10 pb-16 sm:pt-14 sm:pb-20 bg-gradient-to-b from-[#FBF8F3] to-white border-b border-[#DCD2C6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111819]/15 border border-[#111819]/30 text-[#A8675B] text-xs font-semibold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>{cidade.nome} · {cidade.uf}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#111819] font-normal leading-tight mb-6">
            {cidade.h1}
          </h1>

          <p className="text-base sm:text-lg text-[#6B7C7D] font-light leading-relaxed max-w-2xl mx-auto mb-8">
            {cidade.heroDesc}
          </p>

          <a
            href={getWhatsAppLink(mensagem)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-7 rounded-full bg-[#111819] text-[#F4EFE8] text-sm font-semibold hover:bg-[#0A0F10] transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Pedir orçamento no WhatsApp</span>
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Mercado da cidade */}
          <div className="bg-[#FBF8F3] rounded-2xl p-8 sm:p-10 border border-[#DCD2C6] mb-12">
            <h2 className="text-2xl font-serif text-[#111819] mb-4">{cidade.mercado.titulo}</h2>
            <p className="text-sm sm:text-base text-[#6B7C7D] leading-relaxed mb-6">{cidade.mercado.texto}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cidade.mercado.pontos.map((pt) => (
                <div key={pt} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3F5557]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#111819] mt-2 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Como as pessoas buscam */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-serif text-[#111819]">{cidade.busca.titulo}</h2>
              <p className="text-sm text-[#3F5557] mt-2 max-w-2xl mx-auto">{cidade.busca.texto}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {cidade.busca.exemplos.map((ex) => (
                <div key={ex} className="p-5 rounded-xl bg-white border border-[#DCD2C6] flex items-start gap-3">
                  <Search className="w-4 h-4 text-[#A8675B] mt-0.5 shrink-0" />
                  <span className="text-sm text-[#111819]">"{ex}"</span>
                </div>
              ))}
            </div>
          </div>

          {/* Atendimento online + bairros */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="p-7 rounded-2xl border border-[#DCD2C6] bg-white">
              <Video className="w-5 h-5 text-[#A8675B] mb-3" />
              <h2 className="text-xl font-serif text-[#111819] mb-2">Tudo online, do começo ao fim</h2>
              <p className="text-sm text-[#3F5557] leading-relaxed">
                Conversa pelo WhatsApp, reuniões por videochamada e aprovação pelo celular. Você fala direto comigo em todas as etapas, e o site fica no ar em até 7 dias úteis.
              </p>
            </div>
            <div className="p-7 rounded-2xl border border-[#DCD2C6] bg-white">
              <MapPin className="w-5 h-5 text-[#A8675B] mb-3" />
              <h2 className="text-xl font-serif text-[#111819] mb-2">Atendo profissionais de toda {cidade.nome}</h2>
              <p className="text-sm text-[#3F5557] leading-relaxed">
                Incluindo {cidade.bairros.slice(0, -1).join(', ')} e {cidade.bairros[cidade.bairros.length - 1]}.
              </p>
            </div>
          </div>

          {/* Links para as áreas */}
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-[#A8675B] mb-4">Veja por área</p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {areas.map((a) => (
                <Link key={a.to} to={a.to} className="px-4 py-2 rounded-full border border-[#DCD2C6] text-sm text-[#111819] hover:bg-[#FBF8F3] transition-colors">
                  {a.label}
                </Link>
              ))}
              <Link to="/portfolio/" className="px-4 py-2 rounded-full border border-[#DCD2C6] text-sm text-[#111819] hover:bg-[#FBF8F3] transition-colors">
                Projetos entregues
              </Link>
            </div>
          </div>

        </div>
      </section>

      <PricingTable />

      <section className="py-16 bg-[#FBF8F3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={cidade.faq} title="Perguntas frequentes" />
          <p className="mt-10 text-center text-sm text-[#3F5557]">
            Também atendo em{' '}
            {outrasCidades.map((c, i) => (
              <span key={c.slug}>
                <Link to={`/${c.slug}/`} className="underline underline-offset-4 hover:text-[#A8675B]">{c.nome}</Link>
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
