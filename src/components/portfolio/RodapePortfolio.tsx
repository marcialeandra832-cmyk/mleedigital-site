import { Link } from 'react-router-dom';
import { Logo } from '../brand/Logo';
import { getWhatsAppLink, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../../data/constants';

// Rodapé enxuto das páginas de portfólio.
export function RodapePortfolio() {
  return (
    <footer className="bg-[#0A2C30] text-[#F4EFE8]">
      <div className="px-5 sm:px-8 lg:px-14 py-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <Logo claro tamanho={38} />
          <p className="mt-5 text-[15px] leading-relaxed text-[#F4EFE8]/70 max-w-sm">
            Sites feitos por mim, Márcia, do começo ao fim. Videira, SC.
          </p>
        </div>
        <div className="flex flex-col gap-1.5 text-[15px]">
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="hover:text-[#CC8A80] transition-colors">WhatsApp (49) 99961-9123</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#CC8A80] transition-colors">Instagram {INSTAGRAM_HANDLE}</a>
          <Link to="/" className="hover:text-[#CC8A80] transition-colors">Conhecer o site completo</Link>
        </div>
      </div>
      <div className="px-5 sm:px-8 lg:px-14 pb-8 text-[13px] text-[#F4EFE8]/55">
        © {new Date().getFullYear()} MLee Digital. Todos os direitos reservados.
      </div>
    </footer>
  );
}
