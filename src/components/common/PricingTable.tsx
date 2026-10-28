import { Check } from 'lucide-react';
import { getWhatsAppLink } from '../../data/constants';
import { planos } from '../../data/planos';
import { Reveal } from '../home/Reveal';
import { Ponto } from '../home/Detalhes';

// Mesmo texto e mesmo visual do bloco de preços da página inicial.
export function PricingTable() {
  return (
    <section id="planos" className="py-24 sm:py-32 bg-[#F4EFE8] text-[#111819] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#A8675B] mb-5">Investimento</p>
          <h2 className="font-serif text-[44px] sm:text-[72px] leading-[0.95] tracking-[-0.02em]">Preço fechado, sem surpresa.</h2>
          <p className="mt-5 text-[17px] text-[#4A5153] leading-relaxed">
            Você paga a criação uma única vez. Depois, uma mensalidade mantém o site no ar, seguro e atualizado.
          </p>
        </Reveal>

        <div className="mt-16 border-t border-[#111819]">
          {planos.map((p, i) => (
            <Reveal key={p.nome} atraso={i * 120} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-12 border-b border-[#DCD2C6]">
              <div className="lg:col-span-4">
                {p.destaque && <span className="inline-block mb-3 whitespace-nowrap text-[12px] uppercase tracking-[0.2em] text-[#A8675B]">Mais escolhido</span>}
                <h3 className="font-serif text-4xl">{p.nome}</h3>
                <p className="mt-3 text-[16px] text-[#4A5153] leading-relaxed max-w-xs">{p.resumo}</p>
              </div>
              <div className="lg:col-span-3">
                <p className="font-serif text-[56px] leading-none"><span className="text-[22px] align-top mr-1">R$</span>{p.preco}</p>
                <p className="mt-3 text-[15px] text-[#4A5153]">pagamento único</p>
                <p className="mt-1 text-[15px] text-[#4A5153]">+ R$ {p.manut}/mês de manutenção e hospedagem</p>
                <p className="mt-4 text-[14px] text-[#111819] border-l-2 border-[#CC8A80] pl-3">{p.prazo}</p>
                <div className="mt-6 rounded-xl bg-[#FBF8F3] border border-[#DCD2C6] p-4">
                  <p className="text-[13px] uppercase tracking-[0.15em] text-[#A8675B]">A mensalidade inclui</p>
                  <ul className="mt-3 space-y-1.5">
                    {p.manutItens.map((m) => (
                      <li key={m} className="text-[14px] text-[#111819] leading-snug">{m}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-5">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {p.itens.map((it) => (
                    <li key={it} className="flex gap-2.5 text-[15px] leading-snug text-[#111819]">
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#CC8A80]" />
                      {it}
                    </li>
                  ))}
                </ul>
                <a
                  href={getWhatsAppLink(`Olá Márcia! Tenho interesse no ${p.nome}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group mt-8 inline-flex items-center gap-4 rounded-full pl-7 pr-6 py-3.5 text-[15px] transition-colors ${p.destaque ? 'bg-[#111819] text-[#F4EFE8] hover:bg-[#0A0F10]' : 'border border-[#111819]/30 hover:border-[#111819]'}`}
                >
                  Quero o {p.nome} <Ponto className="text-[#CC8A80]" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-[13px] text-[#4A5153] max-w-2xl">
          Prazos contados a partir do recebimento de todas as fotos, textos e informações. O registro anual do domínio (.com.br) é feito por você, no seu CPF ou CNPJ, e eu faço toda a configuração sem custo.
        </p>
      </div>
    </section>
  );
}
