import { ArrowUpRight, Lock, MessageCircle } from 'lucide-react';
import { Reveal } from '../home/Reveal';
import { getWhatsAppLink } from '../../data/constants';
import type { DestaqueArea as Destaque } from '../../data/destaquesArea';

function dominio(link: string) {
  try {
    return new URL(link).host.replace(/^www\./, '');
  } catch {
    return link;
  }
}

// Mostra o projeto de referência da área: print num navegador ou o site ao vivo dentro de um celular.
export function DestaqueArea({ destaque, nomeArea }: { destaque: Destaque; nomeArea: string }) {
  const real = destaque.tipo === 'real';
  const msg = real
    ? `Olá Márcia! Vi o site ${destaque.nome} na página de ${nomeArea} e quero um assim para o meu negócio.`
    : `Olá Márcia! Gostei do modelo ${destaque.nome} (${nomeArea}) e quero um site assim com as minhas informações.`;

  return (
    <section className="py-20 sm:py-28 bg-[#FBF8F3] border-b border-[#DCD2C6]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Prévia */}
          <div className="lg:col-span-7">
            {destaque.formato === 'celular' ? (
              <div className="relative flex justify-center py-6">
                <div aria-hidden className="absolute inset-x-6 inset-y-16 rounded-[2.5rem] bg-[#0F3B40]/[0.06]" />
                <div className="relative w-[280px] sm:w-[300px] rounded-[2.6rem] bg-[#0F3B40] p-2.5 shadow-[0_40px_80px_-30px_rgba(15,59,64,0.55)]">
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-[#0F3B40] z-10" />
                  <div className="rounded-[2.1rem] overflow-hidden bg-[#1A120B] h-[560px] sm:h-[600px]">
                    <iframe
                      src={destaque.link}
                      title={`Site ${destaque.nome} ao vivo`}
                      loading="lazy"
                      className="w-full h-full border-0 pointer-events-none md:pointer-events-auto"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <a
                href={destaque.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir o site ${destaque.nome}`}
                className="group block rounded-xl overflow-hidden border border-[#DCD2C6] bg-white shadow-[0_40px_80px_-35px_rgba(15,59,64,0.5)]"
              >
                <div className="flex items-center gap-3 px-4 py-2.5 bg-[#EDEAE4] border-b border-black/5">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#DCD2C6]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#DCD2C6]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#DCD2C6]" />
                  </div>
                  <div className="flex-1 max-w-xs mx-auto flex items-center justify-center gap-1.5 rounded-md bg-white px-3 py-1 text-[12px] text-[#3F5557]">
                    <Lock className="w-3 h-3" />
                    <span className="truncate">{dominio(destaque.link)}</span>
                  </div>
                  <span className="w-12" />
                </div>
                <div className="aspect-[16/10] overflow-hidden bg-[#0F3B40]">
                  {destaque.img ? (
                    <img
                      src={destaque.img}
                      alt={`Página inicial do site ${destaque.nome}`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#F4EFE8]">
                      <span className="font-serif text-3xl text-[#0F3B40]">{destaque.nome}</span>
                    </div>
                  )}
                </div>
              </a>
            )}
          </div>

          {/* Texto */}
          <div className="lg:col-span-5">
            <span
              className={`inline-block px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.18em] ${
                real ? 'bg-[#0F3B40] text-[#F4EFE8]' : 'border border-[#CC8A80] text-[#A8675B]'
              }`}
            >
              {real ? 'Cliente real' : 'Modelo demonstrativo'}
            </span>

            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[#A8675B]">{destaque.area}</p>
            <h2 className="mt-2 font-serif text-[36px] sm:text-[44px] leading-[1.05] text-[#0F3B40]">{destaque.nome}</h2>
            <p className="mt-5 text-[17px] text-[#3F5557] leading-relaxed">{destaque.descricao}</p>
            {!real && (
              <p className="mt-3 text-[14px] text-[#6B7C7D] leading-relaxed">
                Um ponto de partida. O seu é feito com o seu nome, suas fotos, seus textos e as cores da sua marca.
              </p>
            )}

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={destaque.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0F3B40] text-[#F4EFE8] text-[15px] hover:bg-[#0A2C30] transition-colors"
              >
                Ver site ao vivo
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppLink(msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#0F3B40]/30 text-[#0F3B40] text-[15px] hover:border-[#0F3B40] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Quero um assim
              </a>
            </div>
          </div>

        </Reveal>
      </div>
    </section>
  );
}
