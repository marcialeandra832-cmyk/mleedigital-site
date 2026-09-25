import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, MessageCircle } from 'lucide-react';
import { SEOHead } from '../components/layout/SEOHead';
import { getWhatsAppLink } from '../data/constants';

export function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#FBF8F3] px-4 py-20 text-center">
      <SEOHead
        title="Página Não Encontrada (404)"
        description="A página que você tentou acessar não existe ou foi movida."
        canonicalPath="/404"
      />

      <div className="max-w-md mx-auto space-y-6">
        <span className="text-6xl font-serif text-[#A8675B] font-bold">404</span>

        <h1 className="text-3xl font-serif text-[#0F3B40]">
          Página não encontrada
        </h1>

        <p className="text-sm text-[#6B7C7D] leading-relaxed">
          O link que você seguiu pode ter mudado ou a página foi reorganizada na nova estrutura do site.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#F4EFE8] text-[#0F3B40] text-xs font-semibold hover:bg-[#0F3B40] hover:text-[#F4EFE8] transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Voltar ao Início</span>
          </Link>

          <a
            href={getWhatsAppLink("Olá! Tive uma dúvida ao navegar pelo site da MLee Digital.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-white border border-[#DCD2C6] text-[#0F3B40] text-xs font-semibold hover:border-[#0F3B40] hover:text-[#A8675B] transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Suporte no WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
