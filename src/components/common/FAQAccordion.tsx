import { useState } from 'react';

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

// Perguntas frequentes no padrão da página inicial: numeradas em rosé, com linhas finas
export function FAQAccordion({
  items,
  title = 'Perguntas frequentes',
  subtitle,
}: FAQAccordionProps) {
  const [aberta, setAberta] = useState<number | null>(0);

  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 text-left">
      {title && (
        <div className="lg:col-span-4">
          <p className="text-xs uppercase tracking-[0.3em] text-[#A8675B] mb-5">Dúvidas</p>
          <h2 className="font-serif text-[40px] sm:text-[52px] leading-[0.98] tracking-[-0.02em] text-[#111819]">{title}</h2>
          {subtitle && <p className="mt-5 text-[16px] text-[#4A5153] leading-relaxed max-w-xs">{subtitle}</p>}
        </div>
      )}
      <div className={`${title ? 'lg:col-span-8' : 'lg:col-span-12'} border-t border-[#111819]`}>
        {items.map((item, i) => {
          const aberto = aberta === i;
          return (
            <div key={item.q} className="border-b border-[#DCD2C6]">
              <button
                type="button"
                onClick={() => setAberta(aberto ? null : i)}
                aria-expanded={aberto}
                className="w-full flex items-center justify-between gap-6 py-6 text-left font-serif text-[21px] sm:text-[24px] leading-snug text-[#111819]"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-sans text-[11px] text-[#CC8A80] tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                  {item.q}
                </span>
                <span aria-hidden="true" className={`shrink-0 text-[#CC8A80] text-3xl leading-none transition-transform ${aberto ? 'rotate-45' : ''}`}>+</span>
              </button>
              {aberto && <p className="pb-7 pl-8 pr-10 text-[16px] text-[#4A5153] leading-relaxed max-w-2xl">{item.a}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
