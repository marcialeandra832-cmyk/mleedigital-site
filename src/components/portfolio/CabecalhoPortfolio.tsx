import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../brand/Logo';
import { getWhatsAppLink } from '../../data/constants';

// Cabeçalho enxuto das páginas de portfólio. Quem recebe só o link do portfólio
// vê a marca, os projetos e o WhatsApp, sem o menu completo do site.
export function CabecalhoPortfolio() {
  const { pathname } = useLocation();
  const dentroDeProjeto = pathname.replace(/\/+$/, '') !== '/portfolio';

  return (
    <header className="sticky top-0 z-50 bg-[#F4EFE8]/92 backdrop-blur-md border-b border-[#DCD2C6]">
      <div className="px-5 sm:px-8 lg:px-14 h-[68px] flex items-center justify-between gap-4">
        <Link to="/portfolio/" aria-label="MLee Digital, portfólio" className="shrink-0">
          <Logo tamanho={32} />
        </Link>
        <nav className="flex items-center gap-5 sm:gap-7 text-[14px] sm:text-[15px]" aria-label="Portfólio">
          {dentroDeProjeto && (
            <Link to="/portfolio/" className="text-[#3F5557] hover:text-[#0F3B40] transition-colors">Todos os projetos</Link>
          )}
          <Link to="/" className="hidden sm:inline text-[#3F5557] hover:text-[#0F3B40] transition-colors">Site completo</Link>
          <a
            href={getWhatsAppLink('Olá Márcia! Vi o seu portfólio e quero conversar sobre o meu site.')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-[420px]:inline-flex items-center rounded-full bg-[#0F3B40] text-[#F4EFE8] px-4 sm:px-5 py-2.5 hover:bg-[#0A2C30] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F3B40]"
          >
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
