import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Sparkles, CheckCircle, Layout } from 'lucide-react';
import { SEOHead } from '../components/layout/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { CTASection } from '../components/common/CTASection';
import { projectsData } from '../data/projects';
import { Project } from '../types';

export function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<'TODOS' | 'REAL' | 'MODEL'>('TODOS');

  const realProjects = projectsData.filter(p => p.projectType === 'real');
  const modelProjects = projectsData.filter(p => p.projectType === 'model');

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Portfólio & Modelos de Referência | MLee Digital",
    "description": "Conheça projetos realizados para clientes e modelos demonstrativos criados pela MLee Digital.",
    "url": "https://mleedigital.com.br/portfolio/"
  };

  const renderProjectCard = (project: Project) => (
    <div 
      key={project.id}
      className="bg-[#FBF8F3] rounded-2xl overflow-hidden border border-[#DCD2C6] flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
    >
      <div>
        <div className="relative aspect-[16/10] overflow-hidden bg-[#111]">
          <img 
            src={project.img} 
            alt={project.client} 
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md border shadow-sm ${
              project.projectType === 'real'
                ? 'bg-[#F4EFE8]/90 backdrop-blur-md text-[#A8675B] border-[#0F3B40]/40'
                : 'bg-[#E9E2D8]/90 backdrop-blur-md text-[#3F5557] border-[#DCD2C6]'
            }`}>
              {project.badge}
            </span>
          </div>
          <div className="absolute top-3 right-3 bg-[#0F3B40]/[0.04] text-[#0F3B40] text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
            {project.planType}
          </div>
        </div>

        <div className="p-6 space-y-3">
          <div className="text-xs text-[#A8675B] font-medium">{project.category}</div>
          <h3 className="text-2xl font-serif text-[#0F3B40]">{project.client}</h3>
          <p className="text-xs sm:text-sm text-[#6B7C7D] leading-relaxed">
            {project.objective}
          </p>

          <div className="pt-2 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span key={i} className="text-[10px] bg-[#FBF8F3] text-[#3F5557] px-2 py-0.5 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 pt-0 flex items-center justify-between border-t border-[#DCD2C6] mt-4">
        <Link
          to={`/portfolio/${project.slug}/`}
          className="text-xs font-semibold text-[#0F3B40] hover:text-[#A8675B] inline-flex items-center gap-1 transition-colors"
        >
          <span>Ver Detalhes</span>
          <ArrowRight className="w-3 h-3" />
        </Link>

        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-[#A8675B] hover:text-[#F4EFE8] inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0F3B40]/10 hover:bg-[#0F3B40]/20 border border-[#0F3B40]/30 transition-all"
        >
          <span>Ver projeto</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      <SEOHead
        title="Portfólio & Modelos de Referência"
        description="Conheça projetos realizados para clientes e modelos demonstrativos criados pela MLee Digital."
        canonicalPath="/portfolio/"
        schemaJson={portfolioSchema}
      />

      <Breadcrumbs items={[{ label: "Portfólio & Modelos" }]} />

      {/* Header */}
      <section className="pt-10 pb-16 bg-gradient-to-b from-[#FBF8F3] to-white border-b border-[#DCD2C6] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#A8675B] font-semibold text-xs tracking-widest uppercase mb-3 inline-block">
            EXCELÊNCIA EM CADA DETALHE
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F3B40] font-normal leading-tight mb-4">
            Portfólio & Modelos de Referência
          </h1>
          <p className="text-base text-[#6B7C7D] font-light max-w-2xl mx-auto">
            Conheça projetos realizados para clientes e modelos demonstrativos criados pela MLee Digital.
          </p>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            <button
              type="button"
              onClick={() => setActiveFilter('TODOS')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeFilter === 'TODOS'
                  ? 'bg-[#F4EFE8] text-[#0F3B40] shadow-sm'
                  : 'bg-[#FBF8F3] text-[#6B7C7D] hover:bg-[#FBF8F3]'
              }`}
            >
              Todos os Projetos ({projectsData.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('REAL')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeFilter === 'REAL'
                  ? 'bg-[#F4EFE8] text-[#A8675B] shadow-sm'
                  : 'bg-[#FBF8F3] text-[#6B7C7D] hover:bg-[#FBF8F3]'
              }`}
            >
              <CheckCircle className="w-3.5 h-3.5 text-[#A8675B]" />
              <span>Projetos Realizados ({realProjects.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('MODEL')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeFilter === 'MODEL'
                  ? 'bg-[#F4EFE8] text-[#0F3B40] shadow-sm'
                  : 'bg-[#FBF8F3] text-[#6B7C7D] hover:bg-[#FBF8F3]'
              }`}
            >
              <Layout className="w-3.5 h-3.5 text-[#A8675B]" />
              <span>Modelos de Referência ({modelProjects.length})</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 bg-white space-y-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* CATEGORIA 1: PROJETOS REALIZADOS (CLIENTES REAIS) */}
          {(activeFilter === 'TODOS' || activeFilter === 'REAL') && (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#DCD2C6] pb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A8675B] uppercase tracking-wider mb-1">
                    <CheckCircle className="w-4 h-4 text-[#A8675B]" />
                    <span>Clientes Reais</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#0F3B40]">
                    Projetos Realizados
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#3F5557] mt-2 sm:mt-0 max-w-md">
                  Sites desenvolvidos e publicados para clientes da MLee Digital.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                {realProjects.map(renderProjectCard)}
              </div>
            </div>
          )}

          {/* CATEGORIA 2: MODELOS DE REFERÊNCIA (DEMONSTRATIVOS) */}
          {(activeFilter === 'TODOS' || activeFilter === 'MODEL') && (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#DCD2C6] pb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6B7C7D] uppercase tracking-wider mb-1">
                    <Layout className="w-4 h-4 text-[#A8675B]" />
                    <span>Estruturas Demonstrativas</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#0F3B40]">
                    Modelos de Referência
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#3F5557] mt-2 sm:mt-0 max-w-md">
                  Modelos visuais demonstrativos desenvolvidos como referência para novos projetos.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                {modelProjects.map(renderProjectCard)}
              </div>
            </div>
          )}

        </div>
      </section>

      <CTASection 
        title="Gostou dos projetos? Vamos criar o seu agora."
        subtitle="Conversamos sobre o seu negócio e apresentamos uma proposta transparente."
        whatsappMessage="Olá Márcia! Vi os projetos no portfólio e gostaria de um site semelhante para o meu negócio."
      />
    </div>
  );
}

