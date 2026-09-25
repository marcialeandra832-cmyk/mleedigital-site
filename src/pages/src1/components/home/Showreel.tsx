import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Vídeos em public/showreel/. Para adicionar uma cliente: grave computador e celular (15 a 24 s),
// coloque os arquivos na pasta com o mesmo padrão de nome e acrescente um item aqui.
const clientes = [
  { id: 'soray', nome: 'Dra. Soray Abbud, estética avançada' },
  { id: 'maria', nome: 'Dra. Maria Junqueira, biomedicina estética' },
  { id: 'dani', nome: 'Dra. Danielle Carvão, odontologia' },
  { id: 'viviane', nome: 'Dra. Viviane Mengatto, estética avançada' },
];
const DURACAO = 12000;

export function Showreel() {
  const secao = useRef<HTMLElement>(null);
  const quadro = useRef<HTMLDivElement>(null);
  const celular = useRef<HTMLDivElement>(null);
  const [atual, setAtual] = useState(0);
  const [trocando, setTrocando] = useState(false);
  const [reduz, setReduz] = useState(false);

  useEffect(() => { setReduz(window.matchMedia('(prefers-reduced-motion: reduce)').matches); }, []);

  useEffect(() => {
    if (reduz) return;
    const t = setInterval(() => {
      setTrocando(true);
      setTimeout(() => { setAtual((a) => (a + 1) % clientes.length); setTrocando(false); }, 600);
    }, DURACAO);
    return () => clearInterval(t);
  }, [reduz]);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const celularTela = window.matchMedia('(max-width: 900px)').matches;
    const ctx = gsap.context(() => {
      if (!celularTela) {
        gsap.to(quadro.current, {
          width: '100vw', height: '100svh', borderRadius: 0, ease: 'none',
          scrollTrigger: { trigger: secao.current, start: 'top top', end: '+=100%', scrub: true, pin: true },
        });
      }
      gsap.fromTo(celular.current, { yPercent: 60, opacity: 0, rotate: 4 }, {
        yPercent: 0, opacity: 1, rotate: 0, ease: 'none',
        scrollTrigger: { trigger: secao.current, start: celularTela ? 'top 80%' : 'top top', end: celularTela ? 'top 20%' : '+=100%', scrub: true },
      });
    }, secao);
    return () => ctx.revert();
  }, []);

  const c = clientes[atual];
  const base = `/showreel/${c.id}`;

  return (
    <section ref={secao} className="relative h-[70vh] min-[901px]:h-[100svh] overflow-hidden" aria-label="Showreel com sites de clientes">
      <div
        ref={quadro}
        data-cursor="Showreel"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] min-[901px]:w-[44vw] aspect-[16/9] rounded-[18px] overflow-hidden bg-[#0A2C30]"
      >
        <video
          key={`d-${c.id}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${trocando ? 'opacity-0' : 'opacity-100'}`}
          src={`${base}-desktop.mp4`}
          poster={`${base}-desktop.jpg`}
          muted
          playsInline
          autoPlay={!reduz}
          loop
          preload="metadata"
        />
        <div className="absolute left-0 bottom-0 p-4 flex flex-wrap gap-2 text-[13px] text-[#F4EFE8] z-10">
          <span className="rounded-full bg-[#0A2C30]/80 backdrop-blur px-3.5 py-1.5 tabular-nums">
            {String(atual + 1).padStart(2, '0')} / {String(clientes.length).padStart(2, '0')}
          </span>
          <span className="rounded-full bg-[#0A2C30]/80 backdrop-blur px-3.5 py-1.5">{c.nome}</span>
        </div>
      </div>

      <div
        ref={celular}
        aria-hidden="true"
        className="absolute z-20 right-[5vw] bottom-[6vh] min-[901px]:right-[7vw] min-[901px]:bottom-[6vh] w-[30vw] min-[901px]:w-[15vw] max-w-[250px] aspect-[480/816] p-[8px] rounded-[30px] bg-[#0F3B40] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]"
      >
        <div className="w-full h-full rounded-[22px] overflow-hidden bg-white">
          <video
            key={`m-${c.id}`}
            className={`w-full h-full object-cover transition-opacity duration-500 ${trocando ? 'opacity-0' : 'opacity-100'}`}
            src={`${base}-celular.mp4`}
            poster={`${base}-celular.jpg`}
            muted
            playsInline
            autoPlay={!reduz}
            loop
            preload="metadata"
          />
        </div>
      </div>
    </section>
  );
}
