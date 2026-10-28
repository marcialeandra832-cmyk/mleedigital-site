import { useParams, Navigate } from 'react-router-dom';
import { Ponto, LinhasPortal } from '../components/home/Detalhes';
import { TopoInterno, botaoClaro } from '../components/common/TopoInterno';
import { SEOHead } from '../components/layout/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { PricingTable } from '../components/common/PricingTable';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { CTASection } from '../components/common/CTASection';
import { segmentsData } from '../data/segments';
import { destaquesArea } from '../data/destaquesArea';
import { DestaqueArea } from '../components/common/DestaqueArea';
import { getWhatsAppLink } from '../data/constants';

interface SegmentDetailPageProps {
  customSlug?: string;
}

export function SegmentDetailPage({ customSlug }: SegmentDetailPageProps) {
  const params = useParams<{ slug?: string }>();
  const slug = customSlug || params.slug || "sites-para-clinicas";

  const segment = segmentsData[slug];

  if (!segment) {
    return <Navigate to="/" replace />;
  }

  const destaque = destaquesArea[segment.slug];

  const breadcrumbItems = [
    { label: "Segmentos", path: "/" },
    { label: segment.segmentName }
  ];

  const segmentSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": segment.title,
    "provider": {
      "@type": "ProfessionalService",
      "name": "MLee Digital"
    },
    "description": segment.metaDescription,
    "areaServed": "Brasil"
  };

  return (
    <div className="w-full">
      <SEOHead
        title={segment.title}
        description={segment.metaDescription}
        canonicalPath={`/${segment.slug}/`}
        schemaJson={segmentSchema}
      />

      <Breadcrumbs items={breadcrumbItems} />

      {/* Topo */}
      <TopoInterno
        rotulo={segment.segmentName}
        titulo={segment.title}
        texto={segment.heroDesc}
        acoes={
          <a href={getWhatsAppLink(`Olá Márcia! Vi a página de ${segment.segmentName} e quero um orçamento.`)} target="_blank" rel="noopener noreferrer" className={botaoClaro}>
            Pedir orçamento no WhatsApp <Ponto className="text-[#A8675B]" />
          </a>
        }
      />

      {/* Projeto em destaque da área */}
      {destaque && <DestaqueArea destaque={destaque} nomeArea={segment.segmentName} />}

      {/* Why Need Site for this Segment */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.3em] text-[#A8675B] mb-5">Por que ter um site</p>
              <h2 className="font-serif text-[40px] sm:text-[60px] leading-[0.98] tracking-[-0.02em]">{segment.whyNeedSite.title}</h2>
            </div>
            <p className="lg:col-span-5 text-[17px] text-[#4A5153] leading-relaxed">{segment.whyNeedSite.text}</p>
          </div>
          <ul className="mt-14 grid grid-cols-1 md:grid-cols-2 border-t border-[#111819]">
            {segment.whyNeedSite.points.map((pt, idx) => (
              <li key={pt} className={`flex gap-5 py-6 border-b border-[#DCD2C6] text-[16px] leading-relaxed text-[#111819] ${idx % 2 === 1 ? 'md:pl-10 md:border-l' : 'md:pr-10'}`}>
                <span className="font-serif text-[28px] leading-none text-[#CC8A80]/70 tabular-nums">{String(idx + 1).padStart(2, '0')}</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>

          <LinhasPortal className="my-24 sm:my-32" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.3em] text-[#A8675B] mb-5">Estrutura do site</p>
              <h2 className="font-serif text-[40px] sm:text-[60px] leading-[0.98] tracking-[-0.02em]">{segment.recommendedStructure.title}</h2>
            </div>
            <p className="lg:col-span-5 text-[17px] text-[#4A5153] leading-relaxed">{segment.recommendedStructure.description}</p>
          </div>
          <ol className="mt-14 grid grid-cols-1 md:grid-cols-3 border-t border-[#111819]">
            {segment.recommendedStructure.sections.map((sec, idx) => (
              <li key={sec.name} className="pt-8 pb-10 md:pr-10 border-b border-[#DCD2C6]">
                <p className="font-serif text-[48px] leading-none text-[#CC8A80]/60 tabular-nums">{String(idx + 1).padStart(2, '0')}</p>
                <h3 className="mt-4 font-serif text-[26px] leading-tight">{sec.name}</h3>
                <p className="mt-2 text-[15px] text-[#4A5153] leading-relaxed">{sec.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pricing Table */}
      <PricingTable />

      {/* Segment FAQ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <FAQAccordion items={segment.faq} title="Perguntas frequentes" />
        </div>
      </section>

      <CTASection 
        title="Vamos criar o seu?"
        subtitle="Me chama no WhatsApp e me conta sobre o seu trabalho. Quem responde sou eu."
        whatsappMessage={`Olá Márcia! Vi a página de ${segment.segmentName} e quero conversar sobre o meu site.`}
      />
    </div>
  );
}
