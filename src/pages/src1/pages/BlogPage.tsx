import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Tag, Sparkles, BookOpen } from 'lucide-react';
import { SEOHead } from '../components/layout/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { CTASection } from '../components/common/CTASection';
import { blogPostsData } from '../data/blog';

const categories = [
  'Todos',
  'Sites e Google',
  'Marketing Digital',
  'Negócios',
  'Tecnologia',
  'Ferramentas',
  'Recomendações'
];

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredPosts = selectedCategory === 'Todos'
    ? blogPostsData
    : blogPostsData.filter(p => p.category === selectedCategory);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog MLee Digital | Estratégia Digital, Sites e Negócios",
    "description": "Artigos práticos sobre criação de sites, presença no Google, marketing para consultórios e ferramentas de produtividade.",
    "url": "https://mleedigital.com.br/blog/"
  };

  return (
    <div className="w-full">
      <SEOHead
        title="Blog de Estratégia Digital, Sites & Negócios"
        description="Artigos descomplicados sobre criação de sites profissionais, SEO local para pequenas empresas, conversão no WhatsApp e ferramentas digitais."
        canonicalPath="/blog/"
        schemaJson={blogSchema}
      />

      <Breadcrumbs items={[{ label: "Blog" }]} />

      {/* Header */}
      <section className="pt-10 pb-16 bg-gradient-to-b from-[#FBF8F3] to-white border-b border-[#DCD2C6] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#A8675B] font-semibold text-xs tracking-widest uppercase mb-3 inline-block">
            CONHECIMENTO PRÁTICO & ESTRATÉGIA
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F3B40] font-normal leading-tight mb-4">
            Blog & Artigos Estratégicos
          </h1>
          <p className="text-base text-[#6B7C7D] font-light max-w-2xl mx-auto">
            Dicas práticas, análises de mercado e guias descomplicados para fazer o seu negócio crescer na internet.
          </p>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#F4EFE8] text-[#0F3B40] shadow-sm'
                    : 'bg-[#FBF8F3] text-[#6B7C7D] hover:bg-[#FBF8F3]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 text-sm text-[#3F5557]">
              Nenhum artigo encontrado para esta categoria no momento.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article 
                  key={post.id}
                  className="bg-[#FBF8F3] rounded-2xl overflow-hidden border border-[#DCD2C6] flex flex-col justify-between hover:border-[#0F3B40]/50 hover:shadow-lg transition-all group"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#FBF8F3]">
                      <img 
                        src={post.coverImage} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-[#F4EFE8]/90 text-[#A8675B] text-[10px] font-bold px-2.5 py-1 rounded-md border border-[#0F3B40]/30 shadow-xs backdrop-blur-xs">
                        {post.category}
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-2 text-[11px] text-[#3F5557]">
                        <span>{post.publishedAt}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="text-xl font-serif text-[#0F3B40] font-medium leading-snug group-hover:text-[#A8675B] transition-colors">
                        <Link to={`/blog/${post.slug}/`}>
                          {post.title}
                        </Link>
                      </h2>

                      <p className="text-xs sm:text-sm text-[#6B7C7D] leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      to={`/blog/${post.slug}/`}
                      className="text-xs font-semibold text-[#A8675B] hover:text-[#0F3B40] inline-flex items-center gap-1 pt-3 border-t border-[#DCD2C6] w-full"
                    >
                      <span>Ler artigo completo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </section>

      <CTASection 
        title="Quer aplicar essas estratégias no seu negócio hoje?"
        subtitle="Conversamos sobre as oportunidades digitais para o seu consultório, estúdio ou empresa."
        whatsappMessage="Olá Márcia! Li seus artigos no blog e gostaria de uma orientação para o meu site."
      />
    </div>
  );
}
