import { useState } from 'react';
import { TopoInterno, botaoClaro } from '../components/common/TopoInterno';
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
    "url": "https://www.mleedigital.com.br/blog/"
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

      {/* Topo */}
      <TopoInterno
        rotulo="Conhecimento prático"
        titulo="Blog e artigos"
        texto="Dicas práticas, análises de mercado e guias descomplicados para fazer o seu negócio crescer na internet."
      >
        <div className="flex items-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-[13px] border transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#F4EFE8] text-[#111819] border-[#F4EFE8]'
                  : 'border-[#F4EFE8]/25 text-[#F4EFE8]/80 hover:border-[#CC8A80] hover:text-[#F4EFE8]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </TopoInterno>

      {/* Artigos */}
      <section className="py-24 sm:py-32 bg-[#F4EFE8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {filteredPosts.length === 0 ? (
            <p className="py-16 text-[16px] text-[#4A5153]">Nenhum artigo nesta categoria no momento.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {filteredPosts.map((post, i) => (
                <article key={post.id}>
                  <Link to={`/blog/${post.slug}/`} className="group block">
                    <div className="overflow-hidden rounded-2xl aspect-[16/10] bg-[#E9E2D8] shadow-[0_0_0_1px_rgba(190,196,198,.7),0_30px_50px_-30px_rgba(17,24,25,.55)]">
                      <img src={post.coverImage} alt={post.title} loading="lazy" referrerPolicy="no-referrer" className="w-full h-full object-cover scale-[1.04] group-hover:scale-100 transition-transform duration-[1.2s] ease-out" />
                    </div>
                    <p className="mt-6 flex items-baseline gap-3 text-[12px] uppercase tracking-[0.2em] text-[#A8675B]">
                      <span className="tabular-nums tracking-normal">{String(i + 1).padStart(2, '0')}</span>{post.category}
                    </p>
                    <h2 className="mt-2 font-serif text-[26px] leading-snug text-[#111819] group-hover:underline decoration-[#CC8A80] decoration-1 underline-offset-[6px]">{post.title}</h2>
                    <p className="mt-3 text-[15px] text-[#4A5153] leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <p className="mt-4 text-[13px] text-[#4A5153]">{post.publishedAt} · {post.readTime}</p>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection 
        title="Quer isso funcionando no seu negócio?"
        subtitle="Conversamos sobre as oportunidades digitais para o seu consultório, estúdio ou empresa."
        whatsappMessage="Olá Márcia! Li seus artigos no blog e gostaria de uma orientação para o meu site."
      />
    </div>
  );
}
