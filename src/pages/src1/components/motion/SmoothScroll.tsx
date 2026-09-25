import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;

// Rolagem suave no computador. No celular e para quem desativa animações, fica a rolagem normal.
export function SmoothScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    const toque = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    const reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (toque || reduz) return;

    lenis = new Lenis({ lerp: 0.09 });
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (t: number) => lenis?.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Links internos (#previa, #projetos...) com rolagem suave
    const clique = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a');
      const href = a?.getAttribute('href') || '';
      const hash = href.startsWith('#') ? href : href.startsWith('/#') && window.location.pathname === '/' ? href.slice(1) : '';
      if (!hash) return;
      const alvo = document.querySelector(hash);
      if (alvo) { e.preventDefault(); lenis?.scrollTo(alvo as HTMLElement, { offset: -80 }); }
    };
    document.addEventListener('click', clique);

    return () => {
      document.removeEventListener('click', clique);
      gsap.ticker.remove(tick);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
    const t = setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => clearTimeout(t);
  }, [pathname]);

  return null;
}
