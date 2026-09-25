import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Sparkles, CheckCircle2, Cpu, Smartphone } from 'lucide-react';
import { SEOHead } from '../components/layout/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { CTASection } from '../components/common/CTASection';
import { appsData } from '../data/apps';
import { getWhatsAppLink } from '../data/constants';

export function AppsPage() {
  const appsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Aplicativos Web Prontos e Sistemas com IA | MLee Digital",
    "description": "Sistemas prontos para uso imediato: Nail Finance Pro (gestão para estúdios de beleza) e Elastic Fit (treinos de baixo impacto 40+).",
    "url": "https://mleedigital.com.br/apps/"
  };

  return (
    <div className="w-full">
      <SEOHead
        title="Aplicativos Próprios & Sistemas Web com IA"
        description="Sistemas prontos para usar e nomear: conheça o Nail Finance Pro com IA e o Elastic Fit. Soluções web modernas sem complicações de instalação."
        canonicalPath="/apps/"
        schemaJson={appsSchema}
      />

      <Breadcrumbs items={[{ label: "Apps Prontos" }]} />

      {/* Header */}
      <section className="pt-10 pb-16 bg-gradient-to-b from-[#FBF8F3] to-white border-b border-[#DCD2C6] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#A8675B] font-semibold text-xs tracking-widest uppercase mb-3 inline-block">
            SISTEMAS PRONTOS • É SÓ NOMEAR E USAR
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F3B40] font-normal leading-tight mb-4">
            Aplicações Web Próprias com IA
          </h1>
          <p className="text-base text-[#6B7C7D] font-light max-w-2xl mx-auto">
            Sistemas desenvolvidos pela MLee Digital disponíveis para uso imediato ou licenciamento white-label para profissionais e empresas.
          </p>
        </div>
      </section>

      {/* Apps List */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {appsData.map((app, index) => (
            <div 
              key={app.id}
              className={`flex flex-col lg:flex-row items-center gap-10 p-8 sm:p-12 rounded-3xl border border-[#DCD2C6] bg-[#FBF8F3] hover:border-[#0F3B40]/50 transition-all ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image mockup */}
              <div className="w-full lg:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#DCD2C6] bg-[#F4EFE8]">
                  <img 
                    src={app.devicesImg} 
                    alt={`Mockup de dispositivos do ${app.name}`} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Text & Features */}
              <div className="w-full lg:w-1/2 space-y-5">
                <span className="text-xs font-semibold text-[#A8675B] bg-[#0F3B40]/15 px-3 py-1 rounded-full inline-block">
                  {app.badge}
                </span>

                <h2 className="text-3xl font-serif text-[#0F3B40]">{app.name}</h2>

                <p className="text-sm sm:text-base text-[#6B7C7D] leading-relaxed">
                  {app.desc}
                </p>

                <div className="space-y-2.5 pt-2">
                  {app.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#3F5557]">
                      <CheckCircle2 className="w-4 h-4 text-[#A8675B] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
                  <Link
                    to={`/apps/${app.slug}/`}
                    className="w-full sm:w-auto text-center py-3 px-6 rounded-xl bg-[#F4EFE8] text-[#0F3B40] text-xs font-semibold hover:bg-[#0F3B40] hover:text-[#F4EFE8] transition-all"
                  >
                    Ver Apresentação Completa
                  </Link>

                  <a
                    href={app.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-3 px-6 rounded-xl bg-white border border-[#DCD2C6] text-[#0F3B40] text-xs font-semibold hover:border-[#0F3B40] hover:text-[#A8675B] transition-all"
                  >
                    <span>Testar Demonstração</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection 
        title="Deseja licenciar um dos nossos apps ou criar um sistema exclusivo?"
        subtitle="Conversamos sobre integração, marca própria ou desenvolvimento de novas funcionalidades."
        whatsappMessage="Olá Márcia! Gostaria de conversar sobre os sistemas prontos (Nail Finance / Elastic Fit) ou desenvolvimento sob medida."
      />
    </div>
  );
}
