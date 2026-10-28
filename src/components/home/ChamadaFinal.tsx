import { useEffect, useRef, useState } from 'react';
import { Reveal } from './Reveal';
import { Ponto } from './Detalhes';
import { getWhatsAppLink } from '../../data/constants';

// Chamada do fim da página: o portal do topo volta para fechar a história.
// O vídeo só carrega e toca quando a seção aparece na tela.
export function ChamadaFinal() {
  const secao = useRef<HTMLElement>(null);
  const [ativo, setAtivo] = useState(false);
  const [celular, setCelular] = useState(false);

  useEffect(() => {
    setCelular(window.matchMedia('(max-width: 767px)').matches);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = secao.current;
    if (!el) return;
    const io = new IntersectionObserver(([en]) => {
      const v = el.querySelector('video');
      if (en.isIntersecting) { setAtivo(true); v?.play().catch(() => {}); } else { v?.pause(); }
    }, { rootMargin: '200px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const poster = celular ? '/hero/portal-celular.jpg' : '/hero/portal-final.jpg';

  return (
    <section ref={secao} className="relative overflow-hidden bg-[#121617] text-[#F4EFE8] min-h-[92svh] flex flex-col">
      <picture className="absolute inset-x-0 top-0 h-[78%] md:h-full" aria-hidden="true">
        <source media="(max-width: 767px)" srcSet="/hero/portal-celular.jpg" />
        <img src="/hero/portal-final.jpg" alt="" loading="lazy" decoding="async" className="w-full h-full object-cover" />
      </picture>
      {ativo && (
        <video
          className="absolute inset-x-0 top-0 w-full h-[78%] md:h-full object-cover"
          src={celular ? '/hero/portal-celular.mp4' : '/hero/portal-final.mp4'}
          poster={poster}
          muted
          loop
          playsInline
          autoPlay
          aria-hidden="true"
        />
      )}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(14,20,21,.78)_0%,rgba(14,20,21,.4)_40%,transparent_65%)] max-md:bg-[linear-gradient(0deg,rgba(14,20,21,.95)_0%,rgba(14,20,21,.65)_42%,transparent_68%)]" aria-hidden="true" />

      <div className="relative z-[1] flex-1 flex flex-col px-5 sm:px-8 lg:px-14 pt-16 sm:pt-20 pb-12">
        <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.28em] text-[#F4EFE8]/55">Próximo passo</p>
        <div className="mt-auto max-w-[760px]">
          <Reveal>
            <h2 className="font-serif text-[clamp(56px,9vw,168px)] leading-[0.9] tracking-[-0.035em]">Vamos criar<br />o seu<span className="text-[#CC8A80]">?</span></h2>
          </Reveal>
          <Reveal atraso={120}>
            <p className="mt-7 text-[17px] text-[#F4EFE8]/72 max-w-sm leading-relaxed">Me conta sobre o seu trabalho. Quem responde sou eu.</p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="Oi!"
              className="group mt-9 inline-flex items-center gap-5 rounded-full bg-[#F4EFE8] text-[#111819] pl-8 pr-7 py-4 text-[16px] hover:bg-white transition-colors"
            >
              Falar no WhatsApp <Ponto className="text-[#A8675B]" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
