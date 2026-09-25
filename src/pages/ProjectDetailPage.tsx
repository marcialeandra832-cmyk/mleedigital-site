import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  MessageCircle,
  LayoutTemplate,
  Calendar,
  Layers
} from 'lucide-react';
import { SEOHead } from '../components/layout/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { CTASection } from '../components/common/CTASection';
import { projectsData } from '../data/projects';
import { getWhatsAppLink } from '../data/constants';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/portfolio/" replace />;
  }

  const breadcrumbItems = [
    { label: "Portfólio & Modelos", path: "/portfolio/" },
    { label: project.client }
  ];

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": `${project.client} | MLee Digital`,
    "headline": project.tagline,
    "image": project.img,
    "provider": {
      "@type": "ProfessionalService",
      "name": "MLee Digital"
    },
    "description": project.objective
  };

  return (
    <div className="w-full">
      <SEOHead
        title={`${project.client} | ${project.category}`}
        description={`${project.tagline} Conheça a estrutura, objetivo e detalhes do projeto desenvolvido pela MLee Digital.`}
        canonicalPath={`/portfolio/${project.slug}/`}
        ogImage={project.img}
        schemaJson={projectSchema}
      />

      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Case */}
      <section className="pt-8 pb-16 bg-gradient-to-b from-[#FBF8F3] to-white border-b border-[#DCD2C6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border ${
            project.projectType === 'real'
              ? 'bg-[#F4EFE8] border-[#0F3B40]/40 text-[#A8675B]'
              : 'bg-[#E9E2D8] border-[#DCD2C6] text-[#3F5557]'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-[#A8675B]" />
            <span>{project.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F3B40] font-normal leading-tight mb-4">
            {project.client}
          </h1>

          <p className="text-base sm:text-lg text-[#6B7C7D] font-light leading-relaxed max-w-2xl mx-auto mb-8">
            {project.tagline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#F4EFE8] text-[#A8675B] text-xs sm:text-sm font-semibold hover:bg-[#0F3B40] hover:text-[#F4EFE8] transition-all shadow-md border border-[#0F3B40]/30"
            >
              <span>Ver projeto</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={getWhatsAppLink(`Olá Márcia! Gostei muito do projeto ${project.client} e gostaria de um site semelhante.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-white border border-[#DCD2C6] text-[#0F3B40] text-xs sm:text-sm font-semibold hover:border-[#0F3B40] hover:text-[#A8675B] transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Quero um Projeto Semelhante</span>
            </a>
          </div>

        </div>
      </section>

      {/* Main Image Showcase */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#DCD2C6] bg-[#F4EFE8]">
            <img 
              src={project.img} 
              alt={`Tela do projeto ${project.client}`} 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Case Details Breakdown */}
      <section className="py-16 bg-[#FBF8F3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Objective & Challenge */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DCD2C6] space-y-3">
              <h2 className="text-xl font-serif text-[#0F3B40]">Objetivo do Projeto</h2>
              <p className="text-xs sm:text-sm text-[#6B7C7D] leading-relaxed">
                {project.objective}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DCD2C6] space-y-3">
              <h2 className="text-xl font-serif text-[#0F3B40]">Desafio & Estratégia</h2>
              <p className="text-xs sm:text-sm text-[#6B7C7D] leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </div>

          {/* Solution & Structure */}
          <div className="bg-white p-8 rounded-2xl border border-[#DCD2C6] space-y-6">
            <div>
              <h2 className="text-2xl font-serif text-[#0F3B40] mb-2">A Solução Implementada</h2>
              <p className="text-sm text-[#6B7C7D] leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div className="pt-4 border-t border-[#DCD2C6]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#A8675B] mb-4">
                Estrutura & Seções Entregues:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.structure.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#6B7C7D]">
                    <CheckCircle2 className="w-4 h-4 text-[#A8675B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#DCD2C6] flex flex-wrap items-center justify-between gap-4 text-xs text-[#3F5557]">
              <div>
                <strong>Estilo & Design:</strong> {project.style}
              </div>
              <div className="flex items-center gap-1.5">
                <strong>Tecnologias:</strong>
                {project.technologies.map((t, i) => (
                  <span key={i} className="bg-[#FBF8F3] px-2 py-0.5 rounded text-[#6B7C7D]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="bg-[#FBF8F3] p-8 rounded-2xl border border-[#DCD2C6] text-center space-y-3">
            <span className="text-xs font-bold text-[#A8675B] uppercase tracking-wider">
              Estrutura & Entrega
            </span>
            <p className="text-sm sm:text-base text-[#0F3B40] font-serif leading-relaxed max-w-xl mx-auto">
              “{project.results}”
            </p>
          </div>

        </div>
      </section>

      <CTASection 
        title={`Gostaria de um site com o mesmo padrão de ${project.client}?`}
        subtitle="Entre em contato com nossa fundadora Márcia MLee e receba um atendimento transparente e acolhedor."
        whatsappMessage={`Olá Márcia! Estive olhando o projeto ${project.client} e gostaria de um site semelhante.`}
      />
    </div>
  );
}
