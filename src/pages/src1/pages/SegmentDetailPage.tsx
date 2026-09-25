import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Sparkles, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { SEOHead } from '../components/layout/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { PricingTable } from '../components/common/PricingTable';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { CTASection } from '../components/common/CTASection';
import { segmentsData } from '../data/segments';
import { projectsData } from '../data/projects';
import { appsData } from '../data/apps';
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

  const relatedProject = segment.relatedProjectSlug 
    ? projectsData.find(p => p.slug === segment.relatedProjectSlug)
    : null;

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

      {/* Hero Segment */}
      <section className="pt-10 pb-16 sm:pt-14 sm:pb-20 bg-gradient-to-b from-[#FBF8F3] to-white border-b border-[#DCD2C6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F3B40]/15 border border-[#0F3B40]/30 text-[#A8675B] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Solução Especializada para {segment.segmentName}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F3B40] font-normal leading-tight mb-6">
            {segment.title}
          </h1>

          <p className="text-base sm:text-lg text-[#6B7C7D] font-light leading-relaxed max-w-2xl mx-auto mb-8">
            {segment.heroDesc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={getWhatsAppLink(`Olá Márcia! Gostaria de um orçamento para o site da minha área de ${segment.segmentName}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-7 rounded-xl bg-[#F4EFE8] text-[#0F3B40] text-sm font-semibold hover:bg-[#0F3B40] hover:text-[#F4EFE8] transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Solicitar Orçamento Especializado</span>
            </a>
          </div>

        </div>
      </section>

      {/* Why Need Site for this Segment */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#FBF8F3] rounded-2xl p-8 sm:p-10 border border-[#DCD2C6] mb-12">
            <h2 className="text-2xl font-serif text-[#0F3B40] mb-4">
              {segment.whyNeedSite.title}
            </h2>
            <p className="text-sm sm:text-base text-[#6B7C7D] leading-relaxed mb-6">
              {segment.whyNeedSite.text}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {segment.whyNeedSite.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3F5557]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0F3B40] mt-2 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Structure */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-serif text-[#0F3B40]">
                {segment.recommendedStructure.title}
              </h2>
              <p className="text-sm text-[#3F5557] mt-2">
                {segment.recommendedStructure.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {segment.recommendedStructure.sections.map((sec, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-white border border-[#DCD2C6] space-y-1.5">
                  <div className="font-semibold text-sm text-[#0F3B40] flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#0F3B40]/20 text-[#A8675B] text-xs flex items-center justify-center font-mono">
                      {idx + 1}
                    </span>
                    <span>{sec.name}</span>
                  </div>
                  <p className="text-xs text-[#3F5557] pl-7">{sec.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Real Project / Case Study */}
          {relatedProject && (
            <div className="mb-16 bg-[#FBF8F3] text-[#0F3B40] rounded-2xl p-8 border border-[#0F3B40]/30 flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2 rounded-xl overflow-hidden aspect-[16/10] bg-[#000]">
                <img 
                  src={relatedProject.img} 
                  alt={relatedProject.client}
                  className="w-full h-full object-cover" 
                />
              </div>

              <div className="w-full md:w-1/2 space-y-4">
                <span className="text-xs font-semibold text-[#A8675B] uppercase tracking-wider">
                  Projeto de Referência
                </span>
                <h3 className="text-2xl font-serif text-[#0F3B40]">{relatedProject.client}</h3>
                <p className="text-xs sm:text-sm text-[#3F5557] leading-relaxed">
                  {relatedProject.tagline}
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <Link
                    to={`/portfolio/${relatedProject.slug}/`}
                    className="py-2.5 px-4 rounded-xl bg-[#0F3B40] text-[#F4EFE8] text-xs font-bold hover:brightness-110 transition-all"
                  >
                    Ver Detalhes do Projeto
                  </Link>

                  <a
                    href={relatedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-xl bg-[#0F3B40]/[0.04] text-[#0F3B40] text-xs font-medium hover:bg-[#0F3B40]/[0.04] transition-all inline-flex items-center gap-1"
                  >
                    <span>Ver site no ar</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Pricing Table */}
      <PricingTable />

      {/* Segment FAQ */}
      <section className="py-16 bg-[#FBF8F3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={segment.faq} title={`Perguntas Frequentes sobre Sites para ${segment.segmentName}`} />
        </div>
      </section>

      <CTASection 
        title={`Vamos criar o site perfeito para seu negócio de ${segment.segmentName}?`}
        subtitle="Entre em contato direto no WhatsApp para tirar dúvidas e receber uma proposta personalizada."
        whatsappMessage={`Olá Márcia! Gostaria de conversar sobre a criação do site para o meu negócio de ${segment.segmentName}.`}
      />
    </div>
  );
}
