import { MessageCircle, ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { getWhatsAppLink } from '../../data/constants';

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

export function CTASection({
  title = "Pronto para ter um site que valoriza o seu trabalho e atrai clientes reais?",
  subtitle = "Converse diretamente com a Márcia MLee no WhatsApp. Sem formulários longos, sem complicação e com atendimento humanizado.",
  buttonText = "Iniciar Conversa no WhatsApp",
  buttonUrl,
  secondaryButtonText,
  secondaryButtonUrl,
  whatsappMessage,
  highlights = [
    "Orçamento transparente sem compromisso",
    "Entrega ágil em 4 a 7 dias úteis",
    "Suporte direto e humanizado"
  ]
}: CTASectionProps) {
  const targetUrl = buttonUrl || getWhatsAppLink(whatsappMessage);
  const isCustomExternal = Boolean(buttonUrl);

  return (
    <section className="py-20 bg-[#F4EFE8] text-[#0F3B40] relative overflow-hidden">
      {/* Decorative subtle aura */}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="text-[#A8675B] font-semibold text-xs tracking-widest uppercase mb-4 inline-block">
          DÊ O PRÓXIMO PASSO
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#0F3B40] leading-tight mb-6">
          {title}
        </h2>

        <p className="text-base sm:text-lg text-[#3F5557] font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          {subtitle}
        </p>

        {/* Highlights */}
        {highlights.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10 text-xs sm:text-sm text-[#0F3B40]">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A8675B]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 py-4 px-8 rounded-xl bg-gradient-to-r from-[#0F3B40] to-[#0F3B40] text-[#F4EFE8] font-semibold text-sm sm:text-base hover:brightness-110 transition-all duration-300 shadow-xl"
          >
            {isCustomExternal ? (
              <ExternalLink className="w-5 h-5" />
            ) : (
              <MessageCircle className="w-5 h-5 fill-current" />
            )}
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {secondaryButtonText && secondaryButtonUrl && (
            <a
              href={secondaryButtonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#0F3B40]/[0.04] border border-[#0F3B40]/10 text-[#0F3B40] font-semibold text-sm sm:text-base hover:bg-[#0F3B40]/[0.04] hover:border-[#0F3B40] transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>{secondaryButtonText}</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
