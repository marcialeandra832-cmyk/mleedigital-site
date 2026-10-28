import { getWhatsAppLink } from '../../data/constants';
import { Ponto } from '../home/Detalhes';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
  whatsappMessage?: string;
  highlights?: string[];
}

// Chamada do fim das páginas internas, na identidade do portal
export function CTASection({
  title = 'Vamos criar o seu site?',
  subtitle = 'Me conta sobre o seu trabalho no WhatsApp. Quem responde sou eu, do primeiro contato até o site no ar.',
  buttonText = 'Falar no WhatsApp',
  buttonUrl,
  secondaryButtonText,
  secondaryButtonUrl,
  whatsappMessage,
  highlights = [
    'Preço fechado, sem surpresa',
    'Site no ar em até 7 dias úteis',
    'Atendimento direto comigo',
  ],
}: CTASectionProps) {
  const targetUrl = buttonUrl || getWhatsAppLink(whatsappMessage);

  return (
    <section className="fundo-mar text-[#F4EFE8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.28em] text-[#CC8A80] mb-6">Próximo passo</p>
          <h2 className="font-serif text-[clamp(40px,6vw,92px)] leading-[0.95] tracking-[-0.03em] text-balance">{title}</h2>
          <p className="mt-7 max-w-xl text-[16px] sm:text-[18px] leading-relaxed text-[#F4EFE8]/72">{subtitle}</p>

          {highlights.length > 0 && (
            <ul className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-[14px] text-[#F4EFE8]/80">
              {highlights.map((item, i) => (
                <li key={item} className="flex items-baseline gap-2">
                  <span className="text-[10px] text-[#CC8A80] tabular-nums">{String(i + 1).padStart(2, '0')}</span>{item}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <a href={targetUrl} target="_blank" rel="noopener noreferrer" data-cursor="Oi!" className="group inline-flex items-center gap-5 rounded-full bg-[#F4EFE8] text-[#111819] pl-8 pr-7 py-4 text-[16px] hover:bg-white transition-colors">
              {buttonText} <Ponto className="text-[#A8675B]" />
            </a>
            {secondaryButtonText && secondaryButtonUrl && (
              <a href={secondaryButtonUrl} target="_blank" rel="noopener noreferrer" className="group link-ponto text-[15px]">
                {secondaryButtonText} <Ponto />
              </a>
            )}
          </div>
        </div>
        <div className="hidden lg:flex lg:col-span-4 justify-end" aria-hidden="true">
          <img src="/hero/portal-ml.webp" alt="" width={534} height={523} loading="lazy" className="w-full max-w-[400px] h-auto drop-shadow-[0_40px_60px_rgba(0,0,0,0.45)] motion-safe:animate-[flutua_7s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
