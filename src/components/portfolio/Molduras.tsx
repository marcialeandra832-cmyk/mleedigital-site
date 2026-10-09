import type { ReactNode } from 'react';

// Molduras usadas no portfólio: janela de navegador (computador) e celular.

export function JanelaNavegador({ endereco, children, className = '' }: { endereco: string; children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-[10px] sm:rounded-[14px] overflow-hidden bg-[#ECE7DF] shadow-[0_50px_100px_-40px_rgba(0,0,0,0.55)] ${className}`}>
      <div className="flex items-center gap-3 px-3 sm:px-4 h-7 sm:h-9">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#0F3B40]/25" />
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#0F3B40]/25" />
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#0F3B40]/25" />
        </span>
        <span className="flex-1 max-w-[280px] mx-auto truncate rounded-full bg-white/80 px-3 py-0.5 text-center text-[10px] sm:text-[12px] text-[#3F5557]">{endereco}</span>
        <span className="w-10 sm:w-12" aria-hidden="true" />
      </div>
      {children}
    </div>
  );
}

export function Celular({ src, alt, className = '', cor = '#0F3B40' }: { src: string; alt: string; className?: string; cor?: string }) {
  // A moldura fica numa camada interna para a borda acompanhar a largura do próprio celular.
  return (
    <div className={className}>
      <div className="rounded-[13%/6.2%] p-[3.2%] shadow-[0_40px_80px_-35px_rgba(0,0,0,0.6)]" style={{ background: cor }}>
        <img src={src} alt={alt} loading="lazy" width={640} height={1385} className="block w-full h-auto rounded-[10.5%/4.9%]" />
      </div>
    </div>
  );
}
