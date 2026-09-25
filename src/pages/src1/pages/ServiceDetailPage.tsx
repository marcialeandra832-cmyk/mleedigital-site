import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  HelpCircle, 
  MessageCircle,
  LayoutTemplate,
  Layers,
  Code2
} from 'lucide-react';
import { SEOHead } from '../components/layout/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { PricingTable } from '../components/common/PricingTable';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { CTASection } from '../components/common/CTASection';
import { servicesData } from '../data/services';
import { segmentsData } from '../data/segments';
import { getWhatsAppLink } from '../data/constants';

interface ServiceDetailPageProps {
  customSlug?: string;
}

export function ServiceDetailPage({ customSlug }: ServiceDetailPageProps) {
  const params = useParams<{ slug?: string }>();
  const slug = customSlug || params.slug || "sites-profissionais";

  const service = servicesData[slug];

  if (!service) {
    return <Navigate to="/sites-profissionais/" replace />;
  }

  const breadcrumbItems = [
    { label: "Serviços", path: "/sites-profissionais/" },
    { label: service.title }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "provider": {
      "@type": "ProfessionalService",
      "name": "MLee Digital"
    },
    "description": service.metaDescription,
    "offers": {
      "@type": "Offer",
      "price": "997.00",
      "priceCurrency": "BRL"
    }
  };

  return (
    <div className="w-full">
      <SEOHead
        title={service.title}
        description={service.metaDescription}
        canonicalPath={`/${service.slug}/`}
        schemaJson={serviceSchema}
      />

      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Service */}
      <section className="pt-10 pb-16 sm:pt-14 sm:pb-20 bg-gradient-to-b from-[#FBF8F3] to-white border-b border-[#DCD2C6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <span className="text-[#A8675B] font-semibold text-xs tracking-widest uppercase mb-3 inline-block">
            {service.subtitle}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F3B40] font-normal leading-tight mb-6">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-[#6B7C7D] font-light leading-relaxed max-w-2xl mx-auto mb-8">
            {service.tagline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={getWhatsAppLink(`Olá Márcia! Gostaria de um orçamento para o serviço de ${service.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-7 rounded-xl bg-[#F4EFE8] text-[#0F3B40] text-sm font-semibold hover:bg-[#0F3B40] hover:text-[#F4EFE8] transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Solicitar Orçamento no WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#FBF8F3] rounded-2xl p-8 sm:p-10 border border-[#DCD2C6] mb-12">
            <h2 className="text-2xl font-serif text-[#0F3B40] mb-4">
              {service.problem.title}
            </h2>
            <p className="text-sm sm:text-base text-[#6B7C7D] leading-relaxed mb-6">
              {service.problem.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.problem.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3F5557]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0F3B40] mt-2 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-serif text-[#0F3B40] mb-8 text-center">
              Diferenciais e Benefícios Exclusivos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.benefits.map((b, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-[#FBF8F3] border border-[#DCD2C6] space-y-2">
                  <div className="flex items-center gap-2 text-[#A8675B] font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A8675B]" />
                    <span>{b.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#6B7C7D] leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Structure Overview */}
          <div className="mb-16">
            <h2 className="text-2xl font-serif text-[#0F3B40] mb-8 text-center">
              O que entregamos na estrutura do projeto
            </h2>
            <div className="space-y-4">
              {service.structure.map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-white border border-[#DCD2C6] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="font-medium text-sm text-[#0F3B40]">{item.title}</div>
                  <div className="text-xs text-[#3F5557] sm:text-right">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Timeline */}
          <div className="mb-16">
            <h2 className="text-2xl font-serif text-[#0F3B40] mb-8 text-center">
              Como funciona o desenvolvimento
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.process.map((step, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-[#FBF8F3] border border-[#DCD2C6] space-y-2">
                  <span className="text-xs font-bold text-[#A8675B] bg-[#0F3B40]/15 px-2 py-0.5 rounded">
                    {step.step}
                  </span>
                  <div className="font-serif text-base text-[#0F3B40] font-medium">{step.title}</div>
                  <p className="text-xs text-[#3F5557] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Segments */}
          {service.relatedSegments && service.relatedSegments.length > 0 && (
            <div className="p-6 rounded-2xl bg-[#FBF8F3] border border-[#DCD2C6]">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0F3B40] mb-4">
                Veja como aplicamos essa solução em segmentos específicos:
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.relatedSegments.map((segSlug) => {
                  const seg = segmentsData[segSlug];
                  if (!seg) return null;
                  return (
                    <Link
                      key={segSlug}
                      to={`/${segSlug}/`}
                      className="px-3 py-1.5 bg-white border border-[#DCD2C6] rounded-lg text-xs text-[#6B7C7D] hover:text-[#A8675B] hover:border-[#0F3B40] transition-colors"
                    >
                      {seg.segmentName}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Proprietary Apps showcase if sistemas-web */}
      {slug === 'sistemas-web' ? (
        <section className="py-20 bg-[#FBF8F3] border-y border-[#DCD2C6]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[#A8675B] font-semibold text-xs tracking-widest uppercase mb-2 block">
                APLICAÇÕES EM PRODUÇÃO
              </span>
              <h2 className="text-3xl font-serif text-[#0F3B40]">
                Produtos Digitais & Apps Prontos
              </h2>
              <p className="text-sm text-[#6B7C7D] mt-3">
                Além de sistemas sob medida para a sua empresa, a MLee Digital desenvolve produtos SaaS completos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* App 1: Nail Finance Pro */}
              <div className="p-8 rounded-2xl bg-white border border-[#DCD2C6] flex flex-col justify-between hover:shadow-lg transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#A8675B] bg-[#0F3B40]/15 px-3 py-1 rounded-full uppercase tracking-wider">
                      Gestão & IA
                    </span>
                    <span className="text-xs font-semibold text-[#16A34A] bg-[#DCFCE7] px-2 py-0.5 rounded">
                      Disponível
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif text-[#0F3B40] mb-3">Nail Finance Pro</h3>
                  <p className="text-sm text-[#6B7C7D] leading-relaxed mb-6">
                    Sistema completo de gestão financeira, precificação inteligente por minuto e diagnóstico com Inteligência Artificial para manicures, nail designers e estúdios de beleza.
                  </p>
                  <ul className="space-y-2 text-xs text-[#3F5557] mb-6">
                    <li>• Precificação automática de procedimentos e insumos</li>
                    <li>• Diagnóstico inteligente com recomendações em tempo real</li>
                    <li>• Controle de fluxo de caixa diário e metas de faturamento</li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-[#DCD2C6]">
                  <a
                    href="https://nailfinancepro.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white border border-[#DCD2C6] text-xs font-semibold text-[#0F3B40] hover:border-[#0F3B40] hover:text-[#A8675B] transition-colors"
                  >
                    <span>Acessar App</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <Link
                    to="/apps/nail-finance-pro/"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#F4EFE8] text-[#0F3B40] text-xs font-semibold hover:bg-[#0F3B40] hover:text-[#F4EFE8] transition-colors"
                  >
                    <span>Ver Detalhes</span>
                  </Link>
                </div>
              </div>

              {/* App 2: Elastic Fit */}
              <div className="p-8 rounded-2xl bg-white border border-[#DCD2C6] flex flex-col justify-between hover:shadow-lg transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#A8675B] bg-[#0F3B40]/15 px-3 py-1 rounded-full uppercase tracking-wider">
                      Saúde & Bem-Estar 40+
                    </span>
                    <span className="text-xs font-semibold text-[#16A34A] bg-[#DCFCE7] px-2 py-0.5 rounded">
                      Disponível
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif text-[#0F3B40] mb-3">Elastic Fit</h3>
                  <p className="text-sm text-[#6B7C7D] leading-relaxed mb-6">
                    Plataforma moderna de treinos funcionais com elásticos extensores, desenhada especificamente para fortalecimento muscular, proteção articular e longevidade para pessoas com 40 anos ou mais.
                  </p>
                  <ul className="space-y-2 text-xs text-[#3F5557] mb-6">
                    <li>• Metodologia de treinos de baixo impacto articular</li>
                    <li>• Cronômetros e guias ilustrados passo a passo</li>
                    <li>• Acompanhamento de evolução e rotinas personalizadas</li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-[#DCD2C6]">
                  <a
                    href="https://elastic-fit-40.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white border border-[#DCD2C6] text-xs font-semibold text-[#0F3B40] hover:border-[#0F3B40] hover:text-[#A8675B] transition-colors"
                  >
                    <span>Acessar App</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <Link
                    to="/apps/elastic-fit/"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#F4EFE8] text-[#0F3B40] text-xs font-semibold hover:bg-[#0F3B40] hover:text-[#F4EFE8] transition-colors"
                  >
                    <span>Ver Detalhes</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* Pricing Section */
        <PricingTable />
      )}

      {/* Service FAQ */}
      <section className="py-16 bg-[#FBF8F3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={service.faq} title="Perguntas Frequentes sobre este Serviço" />
        </div>
      </section>

      <CTASection 
        title={`Pronto para criar seu ${service.title}?`}
        subtitle="Fale agora mesmo com nossa equipe e tire seu projeto do papel em tempo recorde."
        whatsappMessage={`Olá Márcia! Gostaria de contratar o serviço de ${service.title}.`}
      />
    </div>
  );
}
