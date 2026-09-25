import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { modelos } from '../../data/modelos';
import { getWhatsAppLink } from '../../data/constants';

// Modelos de demonstração: a pessoa vê um ponto de partida para a área dela.
export function ModelosArea() {
  return (
    <section id="modelos" className="pb-24 sm:pb-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end border-t border-[#0F3B40] pt-14">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[#A8675B] mb-5">Modelos por área</p>
            <h2 className="font-serif text-[40px] sm:text-5xl leading-[1.02] text-[#0F3B40]">Este modelo pode ser o seu.</h2>
          </div>
          <p className="lg:col-span-5 text-[17px] text-[#3F5557] leading-relaxed">
            Escolha um ponto de partida. Eu adapto com o seu nome, suas fotos, seus textos e as cores da sua marca.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
          {modelos.map((m, i) => (
            <Reveal key={m.nome} atraso={i * 100}>
              <article className="group">
                <div className="overflow-hidden rounded-2xl aspect-[16/10] bg-[#0F3B40]">
                  {m.img ? (
                    <img src={m.img} alt={`Modelo ${m.nome}`} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]" />
                  ) : (
                    <div className="w-full h-full flex items-end p-6">
                      <span className="font-serif text-3xl text-[#F4EFE8] leading-tight">{m.nome}</span>
                    </div>
                  )}
                </div>
                <p className="mt-5 text-[13px] uppercase tracking-[0.2em] text-[#A8675B]">{m.area}</p>
                <h3 className="mt-1 font-serif text-2xl text-[#0F3B40]">{m.nome}</h3>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[15px]">
                  <a
                    href={getWhatsAppLink(`Olá Márcia! Gostei do modelo ${m.nome} (${m.area}) e quero um site assim com as minhas informações.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0F3B40] underline decoration-[#CC8A80] underline-offset-4 hover:decoration-2"
                  >
                    Quero esse com o meu nome
                  </a>
                  {m.link && (
                    <a href={m.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#3F5557] hover:text-[#0F3B40]">
                      Ver modelo <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-[13px] text-[#3F5557]">Modelos criados para demonstração. O seu site é feito a partir das suas informações.</p>
      </div>
    </section>
  );
}
