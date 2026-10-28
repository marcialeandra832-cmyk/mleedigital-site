import type { ReactNode } from 'react';
import { LinhasPortal } from '../home/Detalhes';

// Topo das páginas internas na identidade do portal:
// céu e mar ao fundo, título grande em Bodoni e o portal ML à direita.
type Props = {
  rotulo?: string;
  titulo: ReactNode;
  texto?: ReactNode;
  acoes?: ReactNode;
  children?: ReactNode; // conteúdo extra abaixo das ações
  semPortal?: boolean;
};

export function TopoInterno({ rotulo, titulo, texto, acoes, children, semPortal = false }: Props) {
  return (
    <section className="fundo-mar text-[#F4EFE8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20 pb-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className={semPortal ? 'lg:col-span-12 max-w-4xl' : 'lg:col-span-8'}>
          {rotulo && <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.28em] text-[#CC8A80] mb-6">{rotulo}</p>}
          <h1 className="font-serif text-[clamp(40px,6.2vw,96px)] leading-[0.95] tracking-[-0.03em] text-balance" style={{ fontVariationSettings: '"opsz" 96' }}>
            {titulo}
          </h1>
          {texto && <p className="mt-7 max-w-2xl text-[16px] sm:text-[18px] leading-relaxed text-[#F4EFE8]/72">{texto}</p>}
          {acoes && <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">{acoes}</div>}
          {children && <div className="mt-10">{children}</div>}
        </div>
        {!semPortal && (
          <div className="hidden lg:flex lg:col-span-4 justify-end" aria-hidden="true">
            <img src="/hero/portal-ml.webp" alt="" width={534} height={523} className="w-full max-w-[380px] h-auto drop-shadow-[0_40px_60px_rgba(0,0,0,0.45)] motion-safe:animate-[flutua_7s_ease-in-out_infinite]" />
          </div>
        )}
      </div>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pb-10">
        <LinhasPortal escuro />
      </div>
    </section>
  );
}

// Botões padrão sobre fundo escuro
export const botaoClaro = 'group inline-flex items-center gap-4 rounded-full bg-[#F4EFE8] text-[#111819] pl-7 pr-6 py-3.5 text-[15px] hover:bg-white transition-colors';
export const linkClaro = 'group link-ponto text-[15px] text-[#F4EFE8]';
