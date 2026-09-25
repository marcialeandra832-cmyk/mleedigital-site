import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppLink } from '../../data/constants';

// Botão fixo do WhatsApp. O balão aparece só no computador, depois de 25 segundos na página.
export function WhatsAppFloat() {
  const [balao, setBalao] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1024) return;
    const t = setTimeout(() => setBalao(true), 25000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {balao && (
        <div className="mb-3 w-72 bg-[#FBF8F3] text-[#0F3B40] p-5 rounded-2xl border border-[#DCD2C6] shadow-[0_24px_50px_-20px_rgba(15,59,64,0.35)] relative">
          <button onClick={() => setBalao(false)} className="absolute top-3 right-3 text-[#3F5557] hover:text-[#0F3B40]" aria-label="Fechar">
            <X className="w-4 h-4" />
          </button>
          <p className="font-serif text-xl leading-snug pr-4">Ficou com alguma dúvida?</p>
          <p className="mt-2 text-[14px] text-[#3F5557] leading-relaxed">Me chama no WhatsApp. Quem responde sou eu, a Márcia.</p>
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex rounded-full bg-[#0F3B40] text-[#F4EFE8] px-5 py-2.5 text-[14px] hover:bg-[#0A2C30] transition-colors">
            Conversar agora
          </a>
        </div>
      )}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
        className="w-14 h-14 rounded-full bg-[#0F3B40] text-[#F4EFE8] flex items-center justify-center shadow-[0_14px_30px_-10px_rgba(15,59,64,0.6)] hover:bg-[#0A2C30] transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
