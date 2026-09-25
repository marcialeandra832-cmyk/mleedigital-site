import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Logo } from '../brand/Logo';
import { getWhatsAppLink } from '../../data/constants';

const principais = [
  { label: 'Projetos', to: '/portfolio/' },
  { label: 'Como funciona', to: '/#como-funciona' },
  { label: 'Preços', to: '/sites-profissionais/' },
  { label: 'Sobre', to: '/sobre/' },
  { label: 'Blog', to: '/blog/' },
];

const mais = [
  { label: 'Apps', desc: 'Nail Finance Pro e Elastic Fit', to: '/apps/' },
  { label: 'Sistemas web', desc: 'Painéis e sistemas sob medida', to: '/sistemas-web/' },
  { label: 'Recomendados', desc: 'Ferramentas que eu uso', to: '/recomendados/' },
  { label: 'Contato', desc: 'Fale comigo', to: '/contato/' },
];

const segmentos = [
  { label: 'Clínicas médicas', to: '/sites-para-clinicas/' },
  { label: 'Dentistas', to: '/sites-para-dentistas/' },
  { label: 'Estética e beleza', to: '/sites-para-esteticistas/' },
  { label: 'Nail designers', to: '/sites-para-nail-designers/' },
  { label: 'Advogados', to: '/sites-para-advogados/' },
  { label: 'Arquitetos e corretores', to: '/sites-para-arquitetos-e-corretores/' },
  { label: 'Prestadores de serviços', to: '/sites-para-prestadores-de-servicos/' },
];

export function Navbar() {
  const [aberto, setAberto] = useState(false);
  const [maisAberto, setMaisAberto] = useState(false);
  const [rolou, setRolou] = useState(false);
  const maisRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => { setAberto(false); setMaisAberto(false); }, [pathname]);
  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    const fora = (e: MouseEvent) => { if (maisRef.current && !maisRef.current.contains(e.target as Node)) setMaisAberto(false); };
    document.addEventListener('mousedown', fora);
    return () => document.removeEventListener('mousedown', fora);
  }, []);
  useEffect(() => { document.body.style.overflow = aberto ? 'hidden' : ''; }, [aberto]);

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `relative py-1 transition-colors hover:text-[#0F3B40] ${isActive ? 'text-[#0F3B40] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-[#CC8A80]' : 'text-[#3F5557]'}`;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${rolou ? 'bg-[#F4EFE8]/92 backdrop-blur-md border-b border-[#DCD2C6]' : 'bg-[#F4EFE8] border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-[76px] flex items-center justify-between gap-6">
        <Link to="/" aria-label="MLee Digital, página inicial" className="shrink-0">
          <Logo tamanho={34} />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-[15px]" aria-label="Principal">
          {principais.map((l) =>
            l.to.startsWith('/#') ? (
              <a key={l.label} href={l.to} className="py-1 text-[#3F5557] hover:text-[#0F3B40] transition-colors">{l.label}</a>
            ) : (
              <NavLink key={l.label} to={l.to} className={linkCls}>{l.label}</NavLink>
            )
          )}
          <div className="relative" ref={maisRef}>
            <button
              type="button"
              onClick={() => setMaisAberto((v) => !v)}
              aria-expanded={maisAberto}
              className="inline-flex items-center gap-1 py-1 text-[#3F5557] hover:text-[#0F3B40] transition-colors"
            >
              Mais <ChevronDown className={`w-4 h-4 transition-transform ${maisAberto ? 'rotate-180' : ''}`} />
            </button>
            {maisAberto && (
              <div className="absolute right-0 top-full mt-4 w-[520px] rounded-2xl bg-[#FBF8F3] border border-[#DCD2C6] shadow-[0_24px_60px_-20px_rgba(15,59,64,0.25)] p-6 grid grid-cols-2 gap-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#A8675B] mb-3">Mais</p>
                  <ul className="space-y-3">
                    {mais.map((m) => (
                      <li key={m.label}>
                        <Link to={m.to} className="group block">
                          <span className="block text-[15px] text-[#0F3B40] group-hover:underline decoration-[#CC8A80] underline-offset-4">{m.label}</span>
                          <span className="block text-[13px] text-[#3F5557]">{m.desc}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#A8675B] mb-3">Por área</p>
                  <ul className="space-y-2">
                    {segmentos.map((s) => (
                      <li key={s.to}>
                        <Link to={s.to} className="text-[14px] text-[#3F5557] hover:text-[#0F3B40] transition-colors">{s.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center rounded-full bg-[#0F3B40] text-[#F4EFE8] text-[14px] px-5 py-2.5 hover:bg-[#0A2C30] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F3B40]"
          >
            Falar no WhatsApp
          </a>
          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-[#0F3B40]"
            onClick={() => setAberto((v) => !v)}
            aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={aberto}
          >
            {aberto ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {aberto && (
        <div className="lg:hidden fixed inset-x-0 top-[76px] bottom-0 bg-[#F4EFE8] overflow-y-auto px-6 pt-6 pb-10">
          <ul className="border-t border-[#DCD2C6]">
            {principais.map((l) => (
              <li key={l.label} className="border-b border-[#DCD2C6]">
                {l.to.startsWith('/#') ? (
                  <a href={l.to} onClick={() => setAberto(false)} className="block py-4 font-serif text-3xl text-[#0F3B40]">{l.label}</a>
                ) : (
                  <Link to={l.to} className="block py-4 font-serif text-3xl text-[#0F3B40]">{l.label}</Link>
                )}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 mt-8 text-[15px]">
            {mais.map((m) => (
              <Link key={m.to} to={m.to} className="text-[#3F5557]">{m.label}</Link>
            ))}
          </div>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 flex justify-center rounded-full bg-[#0F3B40] text-[#F4EFE8] py-4 text-[16px]"
          >
            Falar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
