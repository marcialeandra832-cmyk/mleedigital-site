import { useEffect, useRef, type ReactNode, type ElementType, type Key } from 'react';

// Faz o conteúdo aparecer suavemente quando entra na tela.
export function Reveal({ children, as: Tag = 'div', className = '', atraso = 0 }: { children: ReactNode; as?: ElementType; className?: string; atraso?: number; key?: Key }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('is-visible'); io.disconnect(); } },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${atraso}ms` }}>
      {children}
    </Tag>
  );
}
