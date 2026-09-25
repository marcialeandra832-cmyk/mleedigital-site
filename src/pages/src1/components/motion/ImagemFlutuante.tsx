import { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';

// Envolve uma lista: ao passar o mouse num item com data-img="...", a imagem aparece seguindo o cursor.
export function ImagemFlutuante({ children }: { children: ReactNode }) {
  const area = useRef<HTMLDivElement>(null);
  const caixa = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(hover: none), (pointer: coarse), (prefers-reduced-motion: reduce)').matches) return;
    const a = area.current!, c = caixa.current!, img = c.querySelector('img')!;
    const xTo = gsap.quickTo(c, 'left', { duration: 0.6, ease: 'power3' });
    const yTo = gsap.quickTo(c, 'top', { duration: 0.6, ease: 'power3' });
    const mover = (e: MouseEvent) => {
      const item = (e.target as HTMLElement).closest('[data-img]') as HTMLElement | null;
      if (item) {
        if (img.getAttribute('src') !== item.dataset.img) img.setAttribute('src', item.dataset.img!);
        c.dataset.on = '1';
        xTo(e.clientX + 180); yTo(e.clientY);
      } else delete c.dataset.on;
    };
    const sair = () => delete c.dataset.on;
    a.addEventListener('mousemove', mover);
    a.addEventListener('mouseleave', sair);
    return () => { a.removeEventListener('mousemove', mover); a.removeEventListener('mouseleave', sair); };
  }, []);

  return (
    <div ref={area} className="relative">
      {children}
      <div ref={caixa} className="img-flutuante" aria-hidden="true"><img alt="" /></div>
    </div>
  );
}
