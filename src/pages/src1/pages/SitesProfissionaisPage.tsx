import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Layers, 
  ExternalLink,
  MessageCircle,
  Eye,
  Check,
  ChevronRight,
  HelpCircle,
  LayoutTemplate,
  Compass,
  Building2,
  Stethoscope,
  Scale,
  Sparkle
} from 'lucide-react';
import { SEOHead } from '../components/layout/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { PricingTable } from '../components/common/PricingTable';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { CTASection } from '../components/common/CTASection';
import { projectsData } from '../data/projects';
import { segmentsData } from '../data/segments';
import { getWhatsAppLink } from '../data/constants';

export function SitesProfissionaisPage() {
  const [filterPlan, setFilterPlan] = useState<'ALL' | 'SITE ESSENCIAL' | 'SITE PROFISSIONAL'>('ALL');

  const breadcrumbItems = [
    { label: "Serviços", path: "/sites-profissionais/" },
    { label: "Sites Profissionais" }
  ];

  const filteredProjects = filterPlan === 'ALL' 
    ? projectsData 
    : projectsData.filter(p => p.planType === filterPlan);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Criação de Sites Profissionais | MLee Digital",
    "provider": {
      "@type": "ProfessionalService",
      "name": "MLee Digital",
      "founder": "Márcia MLee"
    },
    "description": "Desenvolvimento de sites profissionais elegantes, rápidos e de alta autoridade para empresas, clínicas e especialistas. Planos Site Essencial (R$ 997) e Site Profissional (R$ 1.397).",
    "offers": [
      {
        "@type": "Offer",
        "name": "Site Essencial (One Page)",
        "price": "997.00",
        "priceCurrency": "BRL"
      },
      {
        "@type": "Offer",
        "name": "Site Profissional (Multipágina)",
        "price": "1397.00",
        "priceCurrency": "BRL"
      }
    ]
  };

  const faqItems = [
    {
      q: "Qual a diferença entre o Site Essencial e o Site Profissional?",
      a: "O Site Essencial (R$ 997 desenvolvimento + R$ 127/mês de manutenção e hospedagem) é uma estrutura One Page profissional completa onde todas as seções principais (hero, serviços, sobre, localização, diferenciais e contato) ficam em uma única página contínua e fluida, ideal para quem precisa de agilidade e conversão direta no WhatsApp. O Site Profissional (R$ 1.397 desenvolvimento + R$ 197/mês de manutenção e hospedagem) é uma estrutura multipágina de até 5 páginas individuais, ideal para negócios com muitos procedimentos que precisam de páginas dedicadas para ranqueamento avançado no Google e catálogo aprofundado."
    },
    {
      q: "O Site Essencial substitui uma Landing Page?",
      a: "Com certeza! O Site Essencial foi desenhado justamente para unir o melhor dos dois mundos: possui todo o poder de conversão direta e foco em ação de uma Landing Page, com a credibilidade, autoridade e elegância de um site oficial com domínio próprio (.com.br)."
    },
    {
      q: "O que é 'Modelo' e o que é 'Plano'?",
      a: "Plano é o produto comercial e investimento contratado (Site Essencial R$ 997 ou Site Profissional R$ 1.397). Modelo é a referência visual e estrutural de design adaptada para cada nicho (odontologia, medicina, arquitetura, direito, estética). Qualquer modelo de referência pode ser contratado dentro do plano correspondente à sua necessidade."
    },
    {
      q: "Quanto tempo leva para o site ficar pronto?",
      a: "O prazo para o Site Essencial é de até 4 dias úteis e para o Site Profissional de até 7 dias úteis, contados a partir do envio completo das informações, fotos e textos pelo cliente."
    },
    {
      q: "Como funciona a manutenção e hospedagem mensal?",
      a: "O desenvolvimento do site é um investimento único. Após a publicação, o plano mensal (R$ 127/mês no Essencial ou R$ 197/mês no Profissional) garante a continuidade da infraestrutura, hospedagem em nuvem de alta velocidade, backups automáticos, segurança com certificado SSL, monitoramento e pequenas alterações de textos e fotos com suporte dedicado."
    },
    {
      q: "O registro do domínio (.com.br) está incluso no valor do plano?",
      a: "O registro anual do domínio próprio (ex: suanome.com.br) é por conta do cliente e feito diretamente em seu próprio CPF ou CNPJ — nós indicamos e auxiliamos no registro pela Hostinger (ou Registro.br). Isso é fundamental para garantir que você seja o único dono legal do endereço do seu negócio. Nós auxiliamos no passo a passo do registro e realizamos toda a configuração técnica de DNS e conexão com o site gratuitamente."
    },
    {
      q: "O site vai funcionar perfeitamente no celular?",
      a: "Sim! Desenvolvemos 100% dos sites com metodologia Mobile-First, garantindo leitura agradável, botões acessíveis e velocidade máxima em conexões móveis (4G/5G)."
    }
  ];

  return (
    <div className="w-full">
      <SEOHead
        title="Criação de Sites Profissionais | Site Essencial e Multipágina"
        description="Desenvolvimento de sites profissionais elegantes, rápidos e com foco em conversão no WhatsApp. Site Essencial (R$ 997) e Site Profissional (R$ 1.397)."
        canonicalPath="/sites-profissionais/"
        schemaJson={serviceSchema}
      />

      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="pt-10 pb-16 sm:pt-16 sm:pb-24 bg-gradient-to-b from-[#FBF8F3] via-[#FBF8F3] to-white border-b border-[#DCD2C6] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F3B40]/15 border border-[#0F3B40]/30 text-[#A8675B] text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#A8675B]" />
            <span>ESTRUTURA DIGITAL DE ALTA AUTORIDADE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#0F3B40] font-normal leading-[1.15] mb-6">
            Criação de sites profissionais
          </h1>

          <p className="text-base sm:text-xl text-[#6B7C7D] font-light leading-relaxed max-w-3xl mx-auto mb-10">
            Transforme visitantes em clientes com um site elegante, rápido e preparado para o Google. Escolha a estrutura ideal para o momento do seu negócio: da One Page expressa à plataforma multipágina.
          </p>

          {/* Core Offers Summary Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10 text-left">
            <div className="p-5 rounded-2xl bg-white border border-[#DCD2C6] shadow-sm hover:border-[#0F3B40]/40 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#A8675B]">Site Essencial</span>
                <span className="text-xs font-semibold text-[#16A34A] bg-[#DCFCE7] px-2 py-0.5 rounded">R$ 997</span>
              </div>
              <p className="text-xs text-[#6B7C7D] leading-relaxed">
                <strong>One Page profissional completa</strong> com foco em conversão direta para o WhatsApp, velocidade máxima e presença oficial.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FBF8F3] text-[#0F3B40] border border-[#0F3B40]/30 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#A8675B]">Site Profissional</span>
                <span className="text-xs font-semibold text-[#F4EFE8] bg-[#0F3B40] px-2 py-0.5 rounded">R$ 1.397</span>
              </div>
              <p className="text-xs text-[#3F5557] leading-relaxed">
                <strong>Estrutura multipágina de até 5 páginas</strong> com páginas individuais por serviço, SEO avançado e autoridade máxima.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppLink("Olá Márcia! Gostaria de um orçamento para criar o site profissional do meu negócio.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-xl bg-[#F4EFE8] text-[#0F3B40] text-sm font-semibold hover:bg-[#0F3B40] hover:text-[#F4EFE8] transition-all shadow-xl"
            >
              <MessageCircle className="w-4 h-4 fill-current text-[#A8675B]" />
              <span>Solicitar Orçamento no WhatsApp</span>
            </a>

            <a
              href="#modelos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-7 rounded-xl bg-white border border-[#DCD2C6] text-[#0F3B40] text-sm font-medium hover:border-[#0F3B40] hover:text-[#A8675B] transition-colors shadow-sm"
            >
              <span>Explorar Modelos Visuais</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* CLARITY BOX: POR QUE O SITE ESSENCIAL SUPERA UMA LANDING PAGE BÁSICA */}
      <section className="py-14 bg-white border-b border-[#DCD2C6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-[#FBF8F3] border border-[#DCD2C6] flex flex-col md:flex-row items-center gap-8">
            <div className="w-14 h-14 rounded-2xl bg-[#0F3B40]/20 text-[#A8675B] flex items-center justify-center shrink-0">
              <Zap className="w-7 h-7" />
            </div>
            <div className="space-y-3 flex-1">
              <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#A8675B]">
                Oferta Direta & Sem Complicação
              </div>
              <h2 className="text-xl sm:text-2xl font-serif text-[#0F3B40]">
                O Site Essencial já é uma One Page profissional completa
              </h2>
              <p className="text-xs sm:text-sm text-[#6B7C7D] leading-relaxed">
                Você não precisa contratar uma "landing page" separada. Nosso <strong>Site Essencial</strong> entrega toda a persuasão e velocidade de uma página de alta conversão, somadas à autoridade, institucionalidade, localização e mapa de um site oficial no seu próprio domínio (.com.br).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING & PLANS SECTION */}
      <PricingTable />

      {/* MODELOS & ESTRUTURAS VISUAIS DE REFERÊNCIA */}
      <section id="modelos" className="py-20 bg-white border-y border-[#DCD2C6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#A8675B] font-semibold text-xs tracking-widest uppercase mb-2 block">
              ESTRUTURAS & DESIGN
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#0F3B40]">
              Modelos Visuais de Referência
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#6B7C7D] leading-relaxed">
              Explore estruturas visuais desenhadas para diferentes nichos de mercado. 
              <br className="hidden sm:inline" />
              <strong className="text-[#0F3B40]">Importante:</strong> <span className="text-[#A8675B]">Modelo</span> é a referência visual do seu nicho; <span className="text-[#A8675B]">Plano</span> é o produto comercial (Essencial R$ 997 ou Profissional R$ 1.397).
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              <button
                type="button"
                onClick={() => setFilterPlan('ALL')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filterPlan === 'ALL'
                    ? 'bg-[#F4EFE8] text-[#0F3B40] shadow-md'
                    : 'bg-[#FBF8F3] text-[#6B7C7D] hover:bg-[#FBF8F3]'
                }`}
              >
                Todos os Modelos ({projectsData.length})
              </button>

              <button
                type="button"
                onClick={() => setFilterPlan('SITE ESSENCIAL')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filterPlan === 'SITE ESSENCIAL'
                    ? 'bg-[#F4EFE8] text-[#0F3B40] shadow-md'
                    : 'bg-[#FBF8F3] text-[#6B7C7D] hover:bg-[#FBF8F3]'
                }`}
              >
                Modelos Site Essencial (R$ 997)
              </button>

              <button
                type="button"
                onClick={() => setFilterPlan('SITE PROFISSIONAL')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filterPlan === 'SITE PROFISSIONAL'
                    ? 'bg-[#F4EFE8] text-[#0F3B40] shadow-md'
                    : 'bg-[#FBF8F3] text-[#6B7C7D] hover:bg-[#FBF8F3]'
                }`}
              >
                Modelos Site Profissional (R$ 1.397)
              </button>
            </div>
          </div>

          {/* Models Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-[#FBF8F3] rounded-2xl border border-[#DCD2C6] overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  {/* Image Preview */}
                  <div className="relative aspect-video overflow-hidden bg-[#FBF8F3]">
                    <img 
                      src={project.img} 
                      alt={project.client} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    
                    {/* Plan Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm ${
                        project.planType === 'SITE PROFISSIONAL'
                          ? 'bg-[#F4EFE8] text-[#A8675B] border border-[#0F3B40]/50'
                          : 'bg-white text-[#0F3B40] border border-[#DCD2C6]'
                      }`}>
                        {project.planType === 'SITE PROFISSIONAL' ? 'Plano Profissional • R$ 1.397' : 'Plano Essencial • R$ 997'}
                      </span>
                    </div>

                    {/* Category Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 text-[#0F3B40]">
                      <span className="text-[11px] font-medium text-[#A8675B] uppercase tracking-wider block">
                        {project.category}
                      </span>
                      <h3 className="text-base font-serif font-medium line-clamp-1">
                        {project.client}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs text-[#6B7C7D] leading-relaxed line-clamp-2">
                      {project.tagline}
                    </p>

                    <div className="pt-2 border-t border-[#DCD2C6] space-y-2">
                      <div className="text-[11px] font-semibold text-[#0F3B40] uppercase tracking-wide">
                        Destaques da Estrutura:
                      </div>
                      <ul className="space-y-1 text-xs text-[#3F5557]">
                        {project.structure.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-[#A8675B] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-white border border-[#DCD2C6] text-xs font-semibold text-[#0F3B40] hover:border-[#0F3B40] hover:text-[#A8675B] transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Ver Demo</span>
                      </a>
                    )}
                    
                    <Link
                      to={`/portfolio/${project.slug}/`}
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#FBF8F3] text-xs font-semibold text-[#6B7C7D] hover:bg-[#FBF8F3] transition-colors"
                    >
                      <span>Ver Estudo</span>
                    </Link>
                  </div>

                  <a
                    href={getWhatsAppLink(`Olá Márcia! Gostei muito do modelo de referência "${project.client}" e gostaria de criar o meu site baseado nessa estrutura.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-[#F4EFE8] text-[#0F3B40] text-xs font-semibold hover:bg-[#0F3B40] hover:text-[#F4EFE8] transition-colors"
                  >
                    <span>Quero um site com essa estrutura</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY A DEDICATED WEBSITE IS ESSENTIAL */}
      <section className="py-16 bg-[#FBF8F3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#0F3B40]">
              Por que depender apenas do Instagram limita suas vendas?
            </h2>
            <p className="text-xs sm:text-sm text-[#3F5557] mt-2">
              Redes sociais atraem atenção, mas é no site oficial que o cliente toma a decisão de compra.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#DCD2C6] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EF4444]/10 text-[#EF4444] flex items-center justify-center font-bold">
                ✕
              </div>
              <h3 className="font-serif text-base text-[#0F3B40]">Sem Site Próprio</h3>
              <ul className="space-y-2 text-xs text-[#3F5557]">
                <li>• Você não aparece quando alguém pesquisa no Google por sua especialidade na cidade.</li>
                <li>• O cliente se perde entre dezenas de postagens sem saber onde clicar ou agendar.</li>
                <li>• Percepção de negócio informal ou autônomo iniciante.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#F4EFE8] text-[#0F3B40] border border-[#0F3B40]/40 space-y-3 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-[#0F3B40]/20 text-[#A8675B] flex items-center justify-center font-bold">
                ✓
              </div>
              <h3 className="font-serif text-base text-[#A8675B]">Com Site MLee Digital</h3>
              <ul className="space-y-2 text-xs text-[#0F3B40]">
                <li>• Domínio próprio (.com.br) que transmite autoridade imediata.</li>
                <li>• Estrutura clara com catálogo de serviços e botão direto no WhatsApp.</li>
                <li>• Indexado no Google para captar clientes que estão com intenção de compra agora.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* SEGMENTS LINKING */}
      <section className="py-16 bg-white border-y border-[#DCD2C6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#A8675B] font-semibold text-xs tracking-widest uppercase mb-2 block">
              ESPECIALIDADES
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#0F3B40]">
              Veja a estrutura recomendada para o seu segmento
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { name: "Clínicas & Consultórios", slug: "sites-para-clinicas" },
              { name: "Dentistas & Odontologia", slug: "sites-para-dentistas" },
              { name: "Estética & Beleza", slug: "sites-para-esteticistas" },
              { name: "Advogados & Escritórios", slug: "sites-para-advogados" },
              { name: "Arquitetos & Corretores", slug: "sites-para-arquitetos-e-corretores" },
              { name: "Prestadores de Serviços", slug: "sites-para-prestadores-de-servicos" }
            ].map((seg, idx) => (
              <Link
                key={idx}
                to={`/${seg.slug}/`}
                className="p-4 rounded-xl bg-[#FBF8F3] border border-[#DCD2C6] hover:border-[#0F3B40] hover:bg-[#FBF8F3] transition-all group flex flex-col justify-between"
              >
                <span className="text-xs font-semibold text-[#0F3B40] group-hover:text-[#A8675B]">
                  {seg.name}
                </span>
                <span className="text-[11px] text-[#3F5557] mt-2 inline-flex items-center gap-1">
                  <span>Ver nicho</span>
                  <ChevronRight className="w-3 h-3 text-[#A8675B]" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#FBF8F3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={faqItems} title="Perguntas Frequentes sobre Nossos Sites" />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Pronto para ter seu site profissional no ar?"
        subtitle="Escolha entre o Site Essencial (R$ 997) ou Site Profissional (R$ 1.397) e receba seu projeto pronto com entrega ágil."
        whatsappMessage="Olá Márcia! Gostaria de contratar a criação de um site profissional para o meu negócio."
      />
    </div>
  );
}
