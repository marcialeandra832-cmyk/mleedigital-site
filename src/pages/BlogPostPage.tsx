import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Clock, 
  Tag, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  MessageCircle, 
  CheckCircle2,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { SEOHead } from '../components/layout/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { CTASection } from '../components/common/CTASection';
import { blogPostsData } from '../data/blog';
import { getWhatsAppLink } from '../data/constants';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPostsData.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog/" replace />;
  }

  const relatedPosts = blogPostsData.filter(p => 
    post.relatedSlugs?.includes(p.slug) || (p.category === post.category && p.slug !== post.slug)
  ).slice(0, 2);

  const breadcrumbItems = [
    { label: "Blog", path: "/blog/" },
    { label: post.title }
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": post.coverImage,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role
    },
    "publisher": {
      "@type": "Organization",
      "name": "MLee Digital",
      "logo": {
        "@type": "ImageObject",
        "url": "https://i.ibb.co/RkWvc5JV/Chat-GPT-Image-15-12-2025-11-43-25.png"
      }
    },
    "datePublished": "2026-08-01",
    "description": post.excerpt
  };

  return (
    <div className="w-full">
      <SEOHead
        title={post.title}
        description={post.excerpt}
        canonicalPath={`/blog/${post.slug}/`}
        ogType="article"
        ogImage={post.coverImage}
        publishedTime="2026-08-01"
        author={post.author.name}
        schemaJson={articleSchema}
      />

      <Breadcrumbs items={breadcrumbItems} />

      {/* Article Header */}
      <header className="pt-6 pb-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold text-[#A8675B] bg-[#0F3B40]/15 px-2.5 py-1 rounded-md">
              {post.category}
            </span>
            <span className="text-xs text-[#3F5557]">•</span>
            <span className="text-xs text-[#3F5557] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F3B40] font-normal leading-[1.2] mb-6">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-[#6B7C7D] font-light leading-relaxed mb-6">
            {post.excerpt}
          </p>

          {/* Author Meta */}
          <div className="flex items-center gap-3 py-4 border-y border-[#DCD2C6]">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="w-10 h-10 rounded-full object-cover border border-[#0F3B40]/30"
            />
            <div>
              <div className="text-xs font-semibold text-[#0F3B40]">{post.author.name}</div>
              <div className="text-[11px] text-[#3F5557]">{post.author.role} • {post.publishedAt}</div>
            </div>
          </div>

        </div>
      </header>

      {/* Cover Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="rounded-2xl overflow-hidden shadow-xl aspect-[16/9] bg-[#FBF8F3]">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Main Content Body */}
      <article className="pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-[#0F3B40] leading-relaxed">
          
          {post.content.map((par, idx) => (
            <p key={idx} className="text-base sm:text-lg font-light text-[#404040] leading-relaxed">
              {par}
            </p>
          ))}

          {/* Sections */}
          {post.sections.map((sec, idx) => (
            <div key={idx} className="pt-6 space-y-4">
              <h2 className="text-2xl font-serif text-[#0F3B40] font-normal">
                {sec.heading}
              </h2>
              <p className="text-base text-[#6B7C7D] leading-relaxed">
                {sec.body}
              </p>
              {sec.list && (
                <ul className="space-y-2 pl-2">
                  {sec.list.map((li, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-[#6B7C7D]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0F3B40] mt-2.5 shrink-0" />
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Sources and References */}
          {post.sources && post.sources.length > 0 && (
            <div className="pt-8 border-t border-[#DCD2C6] space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F3B40]">
                Fontes & Referências da Cobertura:
              </h3>
              <ul className="space-y-2">
                {post.sources.map((src, i) => (
                  <li key={i} className="text-xs sm:text-sm text-[#3F5557] flex items-start gap-2">
                    <span className="text-[#A8675B]">•</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A8675B] hover:text-[#0F3B40] hover:underline inline-flex items-center gap-1 transition-colors"
                    >
                      <span>{src.label}</span>
                      <ExternalLink className="w-3 h-3 shrink-0 opacity-70" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          <div className="pt-8 border-t border-[#DCD2C6] flex flex-wrap gap-2">
            {post.tags.map((tag, i) => (
              <span key={i} className="text-xs bg-[#FBF8F3] text-[#6B7C7D] px-3 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>

          {/* Contextual CTA Box */}
          <div className="p-8 rounded-2xl bg-[#FBF8F3] border border-[#DCD2C6] space-y-4 my-8">
            <span className="text-xs font-bold text-[#A8675B] uppercase tracking-wider">
              {post.ctaTitle || "Transforme seu negócio com a MLee Digital"}
            </span>
            <p className="text-sm text-[#6B7C7D] leading-relaxed">
              {post.ctaText || "Desenvolvemos sites elegantes, rápidos e focados em gerar contatos reais no WhatsApp."}
            </p>

            {post.ctaUrl ? (
              <Link
                to={post.ctaUrl}
                className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-[#F4EFE8] text-[#0F3B40] text-xs font-semibold hover:bg-[#0F3B40] hover:text-[#F4EFE8] transition-colors"
              >
                <span>{post.ctaButtonText || "Conhecer Solução"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <a
                href={getWhatsAppLink(`Olá Márcia! Li o artigo "${post.title}" e gostaria de orientações para o meu projeto.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-[#F4EFE8] text-[#0F3B40] text-xs font-semibold hover:bg-[#0F3B40] hover:text-[#F4EFE8] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>{post.ctaButtonText || "Conversar no WhatsApp"}</span>
              </a>
            )}
          </div>

        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-[#FBF8F3] border-t border-[#DCD2C6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif text-[#0F3B40] mb-8 text-center">
              Artigos Relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((rel) => (
                <div 
                  key={rel.id}
                  className="bg-white p-6 rounded-2xl border border-[#DCD2C6] space-y-3 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[11px] text-[#A8675B] font-medium mb-1">{rel.category}</div>
                    <h3 className="text-lg font-serif text-[#0F3B40] leading-snug">
                      <Link to={`/blog/${rel.slug}/`} className="hover:text-[#A8675B] transition-colors">
                        {rel.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-[#6B7C7D] mt-2 line-clamp-2">{rel.excerpt}</p>
                  </div>

                  <Link
                    to={`/blog/${rel.slug}/`}
                    className="text-xs font-semibold text-[#A8675B] hover:underline inline-flex items-center gap-1 pt-2"
                  >
                    <span>Ler este artigo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </div>
  );
}
