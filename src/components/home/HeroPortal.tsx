import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import monogramaClaro from '../../assets/brand/monograma-claro.svg';
import { Ponto } from './Detalhes';

gsap.registerPlugin(ScrollTrigger);

// Topo da página inicial:
// computador = portal 3D ao vivo (reage ao mouse e à rolagem)
// celular = vídeo do mesmo portal em loop (leve e sem travar)
type Cena = {
  redimensionar: (w: number, h: number) => void;
  definirMouse: (x: number, y: number) => void;
  definirRolagem: (v: number) => void;
  iniciar: () => void;
  parar: () => void;
  descartar: () => void;
  pronto: Promise<void>;
};

const areas = ['Clínicas', 'Estética', 'Advocacia', 'Arquitetura'];

export function HeroPortal() {
  const secaoRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cenaRef = useRef<Cena | null>(null);
  const pausadoRef = useRef(false);
  const [cena3dAtiva, setCena3dAtiva] = useState(false);
  const [pausado, setPausado] = useState(false);
  const [semMovimento, setSemMovimento] = useState(false);

  // Entrada do texto
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.from('.hero-titulo .linha-mascara > span', { yPercent: 110, duration: 1.3, ease: 'expo.out', stagger: 0.12, delay: 0.15 });
      gsap.from('.hero-entra', { opacity: 0, y: 16, duration: 1, ease: 'power3.out', stagger: 0.08, delay: 0.7 });
      gsap.to('.hero-texto', { yPercent: -14, opacity: 0.15, ease: 'none', scrollTrigger: { trigger: secaoRef.current, start: 'top top', end: 'bottom top', scrub: true } });
    }, secaoRef);
    return () => ctx.revert();
  }, []);

  // Palavra que troca no título: cliente / paciente
  useEffect(() => {
    const palavra = secaoRef.current?.querySelector('.troca-palavra') as HTMLElement | null;
    if (!palavra) return;
    const reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const palavras = ['cliente', 'paciente'];
    let ip = 0;
    const trocar = () => {
      ip = (ip + 1) % palavras.length;
      if (reduz) {
        palavra.style.transition = 'opacity .4s';
        palavra.style.opacity = '0';
        window.setTimeout(() => { palavra.textContent = palavras[ip]; palavra.style.opacity = '1'; }, 400);
        return;
      }
      gsap.timeline()
        .to(palavra, { yPercent: -105, duration: 0.55, ease: 'power3.in' })
        .call(() => { palavra.textContent = palavras[ip]; })
        .set(palavra, { yPercent: 105 })
        .to(palavra, { yPercent: 0, duration: 0.8, ease: 'expo.out' });
    };
    let intervalo: number | undefined;
    const inicio = window.setTimeout(() => { intervalo = window.setInterval(trocar, 3000); }, 1800);
    return () => { window.clearTimeout(inicio); if (intervalo) window.clearInterval(intervalo); };
  }, []);

  // Portal 3D (só no computador, com movimento liberado e placa de vídeo disponível)
  useEffect(() => {
    const reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setSemMovimento(reduz);
    const computador = window.matchMedia('(min-width: 768px) and (hover: hover) and (pointer: fine)').matches;
    const canvas = canvasRef.current, secao = secaoRef.current;
    if (reduz || !computador || !canvas || !secao) return;
    const teste = document.createElement('canvas');
    if (!(teste.getContext('webgl2') || teste.getContext('webgl'))) return;

    let cancelado = false;
    let limpar = () => {};
    import('./portal/cena').then(({ criarCena }) => {
      if (cancelado) return;
      const c = criarCena({ canvas, monogramaUrl: monogramaClaro, periodo: 26 }) as Cena;
      cenaRef.current = c;
      const ajustar = () => c.redimensionar(secao.clientWidth, secao.clientHeight);
      ajustar();
      const ro = new ResizeObserver(ajustar);
      ro.observe(secao);
      const mover = (e: MouseEvent) => c.definirMouse((e.clientX / window.innerWidth) * 2 - 1, (e.clientY / window.innerHeight) * 2 - 1);
      const rolar = () => c.definirRolagem(window.scrollY / Math.max(1, secao.offsetHeight));
      window.addEventListener('mousemove', mover, { passive: true });
      window.addEventListener('scroll', rolar, { passive: true });
      // Só anima quando o topo está visível (economiza bateria e processamento)
      let visivel = true;
      const io = new IntersectionObserver(([en]) => {
        visivel = en.isIntersecting;
        if (visivel && !pausadoRef.current) c.iniciar(); else c.parar();
      });
      io.observe(secao);
      const aba = () => { if (document.hidden) c.parar(); else if (visivel && !pausadoRef.current) c.iniciar(); };
      document.addEventListener('visibilitychange', aba);
      c.pronto.then(() => { if (!cancelado) { c.iniciar(); setCena3dAtiva(true); } });
      limpar = () => {
        ro.disconnect(); io.disconnect();
        window.removeEventListener('mousemove', mover);
        window.removeEventListener('scroll', rolar);
        document.removeEventListener('visibilitychange', aba);
        c.descartar();
        cenaRef.current = null;
      };
    }).catch(() => { /* sem 3D: fica a imagem estática */ });
    return () => { cancelado = true; limpar(); };
  }, []);

  const alternarMovimento = () => {
    const novo = !pausado;
    pausadoRef.current = novo;
    setPausado(novo);
    const c = cenaRef.current;
    if (c) { if (novo) c.parar(); else c.iniciar(); }
    const v = videoRef.current;
    if (v) { if (novo) v.pause(); else v.play().catch(() => {}); }
  };

  return (
    <section
      ref={secaoRef}
      className="relative -mt-[76px] min-h-[100svh] flex flex-col overflow-hidden bg-[#191C1D] text-[#F4EFE8]"
      aria-label="Apresentação"
    >
      {/* Fundo: imagem estática (aparece primeiro e fica para quem desativa animações) */}
      <picture className="absolute inset-x-0 top-0 h-[80%] md:h-full" aria-hidden="true">
        <source media="(max-width: 767px)" srcSet="/hero/portal-celular.jpg" />
        <img src="/hero/portal-computador.jpg" alt="" className="w-full h-full object-cover" fetchPriority="high" decoding="async" />
      </picture>

      {/* Celular: vídeo em loop */}
      {!semMovimento && (
        <video
          ref={videoRef}
          className="md:hidden absolute inset-x-0 top-0 w-full h-[80%] object-cover"
          src="/hero/portal-celular.mp4"
          poster="/hero/portal-celular.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      )}

      {/* Computador: 3D ao vivo */}
      <canvas
        ref={canvasRef}
        className={`hidden md:block absolute inset-0 w-full h-full transition-opacity duration-[1400ms] ${cena3dAtiva ? 'opacity-100' : 'opacity-0'}`}
        aria-hidden="true"
      />

      {/* Sombras para o texto ficar legível */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(14,20,21,.72)_0%,rgba(14,20,21,.35)_38%,transparent_62%)] max-md:bg-[linear-gradient(0deg,rgba(14,20,21,.92)_0%,rgba(14,20,21,.6)_38%,transparent_62%)]" aria-hidden="true" />

      <div className="hero-texto relative z-[1] flex-1 flex flex-col px-5 sm:px-8 lg:px-14 pt-[104px] pb-8">
        <div className="hero-entra flex justify-between text-[11px] sm:text-[12px] uppercase tracking-[0.28em] text-[#F4EFE8]/55">
          <span>Estúdio independente</span>
          <span className="hidden sm:inline">Design e desenvolvimento</span>
        </div>

        <div className="mt-auto max-w-[900px]">
          <h1 className="hero-titulo font-serif text-[clamp(46px,7.2vw,132px)] leading-[0.92] tracking-[-0.03em]" style={{ fontVariationSettings: '"opsz" 96' }}>
            <span className="linha-mascara"><span>Sites que</span></span>
            <span className="linha-mascara"><span>fazem o <span className="inline-block overflow-hidden align-bottom pb-[0.06em] -mb-[0.06em]"><span className="troca-palavra inline-block">cliente</span></span></span></span>
            <span className="linha-mascara"><span>escolher você<span className="text-[#CC8A80]">.</span></span></span>
          </h1>
          <p className="hero-entra mt-7 max-w-[520px] text-[16px] sm:text-[18px] leading-relaxed text-[#F4EFE8]/72">
            Sites sob medida para médicas, dentistas, esteticistas, advogadas e arquitetas. Feitos por mim, do começo ao fim, e no ar em até 7 dias úteis.
          </p>
          <a href="#previa" className="hero-entra group link-ponto mt-9 text-[15px]">
            Ver como o meu site ficaria <Ponto />
          </a>
        </div>

        <div className="hero-entra mt-12 sm:mt-16 flex items-center justify-between gap-6 pr-16 md:pr-20 text-[13px] text-[#F4EFE8]/70">
          <span className="inline-flex items-center gap-3">
            Role para ver mais
            <span className="relative block w-px h-5 overflow-hidden bg-[#F4EFE8]/20" aria-hidden="true">
              <span className="absolute inset-x-0 top-0 h-2 bg-[#F4EFE8] motion-safe:animate-[desce_1.8s_ease-in-out_infinite]" />
            </span>
          </span>
          <ul className="hidden lg:flex items-center gap-8">
            {areas.map((a, i) => (
              <li key={a} className="flex items-baseline gap-2">
                <span className="text-[10px] text-[#CC8A80]">0{i + 1}</span>{a}
              </li>
            ))}
          </ul>
          {!semMovimento && (
            <button type="button" onClick={alternarMovimento} className="inline-flex items-center gap-3 hover:text-[#F4EFE8] transition-colors" aria-pressed={pausado}>
              <span>{pausado ? 'Retomar' : 'Pausar'}<span className="hidden sm:inline"> movimento</span></span>
              <span className="text-[11px] tracking-[0.15em]" aria-hidden="true">{pausado ? '▶' : 'II'}</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
