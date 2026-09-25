import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ExternalLink, Sparkles, CheckCircle2, ShieldCheck, ShoppingBag, Info } from 'lucide-react';
import { SEOHead } from '../components/layout/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { CTASection } from '../components/common/CTASection';
import { affiliateProductsData, affiliateCategories } from '../data/affiliates';

interface RecommendationsPageProps {
  customCategory?: string;
}

export function RecommendationsPage({ customCategory }: RecommendationsPageProps) {
  const params = useParams<{ category?: string }>();
  const activeCategory = customCategory || params.category || 'todos';

  const filteredProducts = activeCategory === 'todos'
    ? affiliateProductsData
    : affiliateProductsData.filter(p => p.category === activeCategory);

  const breadcrumbItems = [
    { label: "Recomendados", path: "/recomendados/" },
    ...(activeCategory !== 'todos' ? [{ label: affiliateCategories.find(c => c.id === activeCategory)?.label || activeCategory }] : [])
  ];

  const recommendationsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Ferramentas & Produtos Recomendados | MLee Digital",
    "description": "Seleção criteriosa de hospedagens, ferramentas de produtividade, ergonomia de home office e equipamentos para criadores.",
    "url": "https://mleedigital.com.br/recomendados/"
  };

  return (
    <div className="w-full">
      <SEOHead
        title="Ferramentas & Equipamentos Recomendados"
        description="Seleção criteriosa de hospedagens, softwares, cadeiras ergonômicas e equipamentos para criadores de conteúdo testados e aprovados."
        canonicalPath={activeCategory === 'todos' ? '/recomendados/' : `/recomendados/${activeCategory}/`}
        schemaJson={recommendationsSchema}
      />

      <Breadcrumbs items={breadcrumbItems} />

      {/* Header */}
      <section className="pt-10 pb-16 bg-gradient-to-b from-[#FBF8F3] to-white border-b border-[#DCD2C6] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#A8675B] font-semibold text-xs tracking-widest uppercase mb-3 inline-block">
            CURADORIA CRITERIOSA & TRANSPARENTE
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F3B40] font-normal leading-tight mb-4">
            Ferramentas & Recursos Recomendados
          </h1>
          <p className="text-base text-[#6B7C7D] font-light max-w-2xl mx-auto">
            Uma seleção prática dos softwares, ferramentas digitais, equipamentos de ergonomia e gravação que usamos e recomendamos.
          </p>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            {affiliateCategories.map((cat) => (
              <Link
                key={cat.id}
                to={cat.path}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#F4EFE8] text-[#0F3B40] shadow-sm'
                    : 'bg-[#FBF8F3] text-[#6B7C7D] hover:bg-[#FBF8F3]'
                }`}
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Note */}
      <section className="py-6 bg-[#FBF8F3] border-b border-[#DCD2C6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 text-xs text-[#3F5557] leading-relaxed">
            <Info className="w-4 h-4 text-[#A8675B] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#0F3B40]">Transparência em primeiro lugar:</strong> Esta página contém links afiliados de parceiros selecionados. Isso significa que ao comprar por esses links, nós podemos receber uma comissão sem que você pague nada a mais por isso. Indicamos apenas ferramentas de confiança comprovada.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod) => (
              <div 
                key={prod.id}
                className="bg-[#FBF8F3] rounded-2xl overflow-hidden border border-[#DCD2C6] flex flex-col justify-between hover:shadow-lg transition-all"
              >
                <div>
                  <div className={`relative h-56 w-full overflow-hidden border-b border-[#F0EBE1] ${
                    prod.imageFit === 'contain' 
                      ? 'bg-white flex items-center justify-center p-4' 
                      : 'bg-[#FBF8F3]'
                  }`}>
                    <img 
                      src={prod.image} 
                      alt={prod.name} 
                      className={`w-full h-full ${
                        prod.imageFit === 'contain' ? 'object-contain' : 'object-cover'
                      }`}
                      referrerPolicy="no-referrer"
                    />
                    {prod.badge && (
                      <div className="absolute top-3 left-3 bg-[#F4EFE8]/90 text-[#A8675B] text-[10px] font-bold px-2.5 py-1 rounded-md border border-[#0F3B40]/30 shadow-sm backdrop-blur-xs">
                        {prod.badge}
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="text-[11px] text-[#A8675B] font-medium">{prod.categoryLabel}</div>
                    <h2 className="text-lg font-serif text-[#0F3B40] font-medium leading-snug">{prod.name}</h2>
                    <p className="text-xs text-[#6B7C7D] leading-relaxed">
                      {prod.shortDesc}
                    </p>

                    <div className="p-3 bg-[#FBF8F3] rounded-xl text-[11px] text-[#3F5557] space-y-1">
                      <div><strong>Para quem é:</strong> {prod.forWho}</div>
                      <div><strong>Por que indicamos:</strong> {prod.indication}</div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#DCD2C6] mt-4 flex items-center justify-between">
                  {prod.priceRange && (
                    <span className="text-xs font-semibold text-[#0F3B40]">{prod.priceRange}</span>
                  )}
                  
                  <a
                    href={prod.affiliateUrl}
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    className="inline-flex items-center gap-1.5 py-2.5 px-4 rounded-xl bg-[#F4EFE8] text-[#0F3B40] text-xs font-semibold hover:bg-[#0F3B40] hover:text-[#F4EFE8] transition-all ml-auto"
                  >
                    <span>{prod.buttonText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Dúvidas sobre qual ferramenta ou estrutura escolher para a sua empresa?"
        subtitle="Conversamos com você e orientamos a melhor composição tecnológica para o seu momento."
      />
    </div>
  );
}
