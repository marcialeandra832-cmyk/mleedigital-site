import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export function FAQAccordion({ 
  items, 
  title = "Dúvidas Frequentes", 
  subtitle = "Respostas diretas para as principais perguntas sobre nossos serviços." 
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {title && (
        <div className="text-center mb-12">
          <span className="text-[#A8675B] font-semibold text-xs tracking-widest uppercase mb-3 block">
            TRANSPARÊNCIA TOTAL
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#0F3B40] font-normal">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base text-[#3F5557] mt-3 font-light max-w-xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="space-y-3.5">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen 
                  ? 'bg-[#FBF8F3] border-[#0F3B40]/50 shadow-xl shadow-[#0F3B40]/10' 
                  : 'bg-[#FBF8F3] border-[#0F3B40]/10 hover:border-[#0F3B40]/10'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 font-medium text-sm sm:text-base text-[#0F3B40] focus:outline-none"
              >
                <span>{item.q}</span>
                <ChevronDown className={`w-4 h-4 text-[#A8675B] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              {isOpen && (
                <div className="px-6 sm:px-7 pb-6 pt-1 text-sm text-[#3F5557] leading-relaxed border-t border-[#0F3B40]/10">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
