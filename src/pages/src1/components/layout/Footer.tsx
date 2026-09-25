import { Link } from 'react-router-dom';
import { Logo } from '../brand/Logo';
import { getWhatsAppLink, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../../data/constants';

const colunas = [
  { titulo: 'Site', links: [
    { label: 'Projetos', to: '/portfolio/' },
    { label: 'Preços', to: '/sites-profissionais/' },
    { label: 'Sobre', to: '/sobre/' },
    { label: 'Blog', to: '/blog/' },
    { label: 'Contato', to: '/contato/' },
  ] },
  { titulo: 'Também faço', links: [
    { label: 'Apps', to: '/apps/' },
    { label: 'Sistemas web', to: '/sistemas-web/' },
    { label: 'Recomendados', to: '/recomendados/' },
  ] },
  { titulo: 'Por área', links: [
    { label: 'Clínicas médicas', to: '/sites-para-clinicas/' },
    { label: 'Dentistas', to: '/sites-para-dentistas/' },
    { label: 'Estética e beleza', to: '/sites-para-esteticistas/' },
    { label: 'Nail designers', to: '/sites-para-nail-designers/' },
  ] },
];

export function Footer() {
  return (
    <footer className="bg-[#0A2C30] text-[#F4EFE8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Logo claro tamanho={44} />
            <p className="mt-6 text-[15px] leading-relaxed text-[#F4EFE8]/70 max-w-sm">
              Sites para médicas, dentistas, esteticistas, advogadas e arquitetas. Feitos por mim, do começo ao fim, em Videira, SC.
            </p>
            <div className="mt-6 flex flex-col gap-1.5 text-[15px]">
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="hover:text-[#CC8A80] transition-colors">WhatsApp (49) 99961-9123</a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#CC8A80] transition-colors">Instagram {INSTAGRAM_HANDLE}</a>
            </div>
          </div>
          {colunas.map((c) => (
            <div key={c.titulo} className="lg:col-span-2">
              <p className="text-xs uppercase tracking-[0.25em] text-[#CC8A80] mb-4">{c.titulo}</p>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.to}><Link to={l.to} className="text-[15px] text-[#F4EFE8]/80 hover:text-[#F4EFE8] transition-colors">{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-6 border-t border-[#F4EFE8]/10 flex flex-col sm:flex-row gap-3 justify-between text-[13px] text-[#F4EFE8]/55">
          <span>© {new Date().getFullYear()} MLee Digital. Todos os direitos reservados.</span>
          <span className="flex gap-5">
            <Link to="/politica-de-privacidade/" className="hover:text-[#F4EFE8]">Privacidade</Link>
            <Link to="/termos-de-uso/" className="hover:text-[#F4EFE8]">Termos de uso</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
