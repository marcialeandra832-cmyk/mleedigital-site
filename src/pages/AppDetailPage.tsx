import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  MessageCircle, 
  Cpu, 
  Layers,
  HelpCircle
} from 'lucide-react';
import { SEOHead } from '../components/layout/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { CTASection } from '../components/common/CTASection';
import { appsData } from '../data/apps';
import { getWhatsAppLink } from '../data/constants';

export function AppDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const app = appsData.find(a => a.slug === slug);

  if (!app) {
    return <Navigate to="/apps/" replace />;
  }

  const breadcrumbItems = [
    { label: "Apps Prontos", path: "/apps/" },
    { label: app.name }
  ];

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": app.name,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android, Desktop",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "BRL"
    },
    "description": app.desc
  };

  return (
    <div className="w-full">
      <SEOHead
        title={`${app.name} | Sistema Web Pronto para Uso`}
        description={`${app.tagline} Conheça os recursos, benefícios e veja a demonstração ao vivo da plataforma.`}
        canonicalPath={`/apps/${app.slug}/`}
        schemaJson={appSchema}
      />

      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero App */}
      <section className="pt-8 pb-16 bg-gradient-to-b from-[#FBF8F3] to-white border-b border-[#DCD2C6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F3B40]/15 border border-[#0F3B40]/30 text-[#A8675B] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{app.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F3B40] font-normal leading-tight mb-4">
            {app.name}
          </h1>

          <p className="text-base sm:text-lg text-[#6B7C7D] font-light leading-relaxed max-w-2xl mx-auto mb-8">
            {app.tagline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={app.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-7 rounded-xl bg-[#F4EFE8] text-[#0F3B40] text-xs sm:text-sm font-semibold hover:bg-[#0F3B40] hover:text-[#F4EFE8] transition-all shadow-lg"
            >
              <span>{app.ctaText}</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={getWhatsAppLink(`Olá Márcia! Gostaria de conversar sobre o aplicativo ${app.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white border border-[#DCD2C6] text-[#0F3B40] text-xs sm:text-sm font-semibold hover:border-[#0F3B40] hover:text-[#A8675B] transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Falar com a Desenvolvedora</span>
            </a>
          </div>

        </div>
      </section>

      {/* Screen Showcase */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#DCD2C6] bg-[#F4EFE8]">
              <img 
                src={app.devicesImg} 
                alt={`${app.name} em múltiplos dispositivos`} 
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#DCD2C6] bg-[#F4EFE8]">
              <img 
                src={app.screenImg} 
                alt={`Tela principal do ${app.name}`} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Breakdown */}
      <section className="py-16 bg-[#FBF8F3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DCD2C6] space-y-3">
              <h2 className="text-xl font-serif text-[#0F3B40]">O Problema que Resolve</h2>
              <p className="text-xs sm:text-sm text-[#6B7C7D] leading-relaxed">
                {app.problem}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DCD2C6] space-y-3">
              <h2 className="text-xl font-serif text-[#0F3B40]">A Solução Inteligente</h2>
              <p className="text-xs sm:text-sm text-[#6B7C7D] leading-relaxed">
                {app.solution}
              </p>
            </div>
          </div>

          {/* Para Quem É */}
          <div className="bg-white p-8 rounded-2xl border border-[#DCD2C6]">
            <h2 className="text-xl font-serif text-[#0F3B40] mb-4">Para quem foi desenvolvido:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {app.forWho.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#6B7C7D]">
                  <CheckCircle2 className="w-4 h-4 text-[#A8675B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works Steps */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif text-[#0F3B40] text-center">Como Funciona na Prática</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {app.howItWorks.map((step, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-white border border-[#DCD2C6] space-y-2">
                  <span className="text-xs font-bold text-[#A8675B] bg-[#0F3B40]/15 px-2 py-0.5 rounded">
                    {step.step}
                  </span>
                  <div className="font-serif text-base text-[#0F3B40] font-medium">{step.title}</div>
                  <p className="text-xs text-[#3F5557] leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* App FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={app.faq} title={`Dúvidas Frequentes sobre o ${app.name}`} />
        </div>
      </section>

      <CTASection 
        title={`Pronto para transformar sua rotina com o ${app.name}?`}
        subtitle="Acesse a página de vendas oficial para conhecer todos os recursos e garantir seu acesso, ou converse conosco no WhatsApp."
        buttonText={`Acessar ${app.name} Agora`}
        buttonUrl={app.demoUrl}
        secondaryButtonText="Conversar no WhatsApp"
        secondaryButtonUrl={getWhatsAppLink(`Olá Márcia! Gostaria de mais informações sobre o ${app.name}.`)}
        highlights={[
          "Acesso imediato sem burocracia",
          "Interface rápida e intuitiva",
          "Suporte direto e humanizado"
        ]}
      />
    </div>
  );
}
