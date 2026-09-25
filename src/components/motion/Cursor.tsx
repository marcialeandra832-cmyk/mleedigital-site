import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

// Cursor próprio (só no computador). Elementos com data-cursor="Texto" mostram um círculo com o texto.
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    const toque = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    const reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (toque || reduz) return;
    setAtivo(true);
  }, []);

  useEffect(() => {
    if (!ativo || !ref.current) return;
    const el = ref.current;
    const rotulo = el.querySelector('span') as HTMLSpanElement;
    const xTo = gsap.quickTo(el, 'x', { duration: 0.35, ease: 'power3' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.35, ease: 'power3' });
    const mover = (e: MouseEvent) => {
      el.style.opacity = '1';
      xTo(e.clientX); yTo(e.clientY);
      const alvo = (e.target as HTMLElement).closest('[data-cursor]') as HTMLElement | null;
      if (alvo) { rotulo.textContent = alvo.dataset.cursor || ''; el.dataset.grande = '1'; }
      else { delete el.dataset.grande; }
    };
    const sair = () => { el.style.opacity = '0'; };
    window.addEventListener('mousemove', mover);
    document.addEventListener('mouseleave', sair);
    return () => { window.removeEventListener('mousemove', mover); document.removeEventListener('mouseleave', sair); };
  }, [ativo]);

  if (!ativo) return null;
  return (
    <div ref={ref} className="cursor-mlee" aria-hidden="true">
      <span />
    </div>
  );
}
