import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { clientesDestaque } from '../../data/clientesDestaque';

gsap.registerPlugin(ScrollTrigger);

// Projetos: no computador a página "trava" e os sites passam na horizontal. No celular, lista vertical.
export function ProjetosHorizontal() {
  const secao = useRef<HTMLElement>(null);
  const trilho = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia('(max-width: 900px), (prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      const el = trilho.current!;
      const distancia = () => el.scrollWidth - window.innerWidth;
      gsap.to(el, {
        x: () => -distancia(), ease: 'none',
        scrollTrigger: { trigger: secao.current, start: 'top top', end: () => '+=' + distancia(), scrub: 1, pin: true, invalidateOnRefresh: true },
      });
    }, secao);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={secao} id="projetos" className="relative overflow-hidden py-24 min-[901px]:py-0 min-[901px]:h-[100svh] min-[901px]:flex min-[901px]:flex-col min-[901px]:justify-center scroll-mt-20">
      <div className="px-5 sm:px-8 lg:px-14 flex items-baseline justify-between mb-10 min-[901px]:mb-12">
        <h2 className="font-serif text-[52px] sm:text-[88px] lg:text-[120px] leading-[0.92] tracking-[-0.03em] text-[#0F3B40]">Projetos</h2>
        <span className="font-serif text-2xl text-[#3F5557] tabular-nums">({String(clientesDestaque.length).padStart(2, '0')})</span>
      </div>
      <div ref={trilho} className="flex flex-col min-[901px]:flex-row gap-14 min-[901px]:gap-12 px-5 sm:px-8 lg:px-14 min-[901px]:w-max">
        {clientesDestaque.map((p, i) => (
          <article key={p.cliente} className="w-full min-[901px]:w-[min(56vw,960px)] shrink-0">
            <a
              href={p.link || undefined}
              target={p.link ? '_blank' : undefined}
              rel="noopener noreferrer"
              data-cursor={p.link ? 'Abrir' : undefined}
              className="group block overflow-hidden rounded-2xl aspect-[16/9] bg-[#E9E2D8]"
            >
              <img src={p.img} alt={`Site de ${p.cliente}`} loading="lazy" className="w-full h-full object-cover scale-[1.06] transition-transform duration-[1.2s] ease-out group-hover:scale-100" />
            </a>
            <div className="mt-5 flex flex-wrap items-baseline justify-between gap-3">
              <div className="flex items-baseline gap-5">
                <span className="text-[14px] text-[#CC8A80] tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-serif text-[28px] sm:text-[36px] leading-tight text-[#0F3B40]">{p.cliente}</h3>
                  <p className="mt-1 text-[15px] text-[#3F5557]">{p.area}</p>
                </div>
              </div>
              <div className="flex gap-5 text-[14px]">
                {p.slug && <Link to={`/portfolio/${p.slug}/`} className="text-[#3F5557] hover:text-[#0F3B40]">Como foi feito</Link>}
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#0F3B40] underline decoration-[#CC8A80] underline-offset-4">
                    Abrir o site <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
