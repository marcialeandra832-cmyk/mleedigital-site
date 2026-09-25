import { Check, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { getWhatsAppLink } from '../../data/constants';

export function PricingTable() {
  return (
    <section id="planos" className="py-24 bg-[#F4EFE8] text-[#0F3B40] relative border-y border-[#0F3B40]/10 overflow-hidden">
      {/* Ambient background glow */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#A8675B] font-semibold text-xs tracking-widest uppercase mb-3 block">
            INVESTIMENTO TRANSPARENTE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F3B40] font-normal tracking-tight">
            Planos claros, sem surpresas
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3F5557] font-light max-w-2xl mx-auto">
            O desenvolvimento do site é um investimento único. Após a publicação, o plano mensal mantém a infraestrutura, hospedagem, manutenção e suporte contínuo do projeto.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Plano Essencial */}
          <div className="bg-[#FBF8F3] rounded-2xl p-8 sm:p-10 border border-[#0F3B40]/10 flex flex-col justify-between hover:border-[#0F3B40]/10 transition-all duration-300 relative group">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-[#0F3B40]/[0.04] text-[#0F3B40] text-xs font-semibold uppercase tracking-wider rounded-full mb-3 border border-[#0F3B40]/10">
                    Plano Essencial
                  </span>
                  <h3 className="text-2xl font-serif text-[#0F3B40]">Site Essencial</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#0F3B40]/[0.04] border border-[#0F3B40]/10 flex items-center justify-center text-[#A8675B]">
                  <Zap className="w-5 h-5" />
                </div>
              </div>

              <p className="text-sm text-[#3F5557] mb-6 leading-relaxed">
                Ideal para profissionais autônomos e pequenos negócios que precisam de presença digital rápida, elegante e de alta conversão no WhatsApp.
              </p>

              {/* Price Block */}
              <div className="mb-6 pb-6 border-b border-[#0F3B40]/10 space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-[#3F5557] font-medium">R$</span>
                  <span className="text-4xl sm:text-5xl font-serif text-[#0F3B40] font-medium">997</span>
                  <span className="text-xs text-[#3F5557] font-medium">desenvolvimento (pagamento único)</span>
                </div>
                <div className="text-xs text-[#4ADE80] font-medium flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Entrega expressa em até 4 dias úteis*
                </div>
              </div>

              {/* Maintenance & Hosting Plan Box */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#0F3B40]/[0.04] border border-[#0F3B40]/10 mb-6 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#A8675B] uppercase tracking-wide">
                    Plano de Manutenção & Hospedagem
                  </span>
                  <span className="text-sm font-bold text-[#0F3B40] bg-[#0F3B40]/[0.04] px-2.5 py-1 rounded-md border border-[#0F3B40]/10">
                    R$ 127/mês
                  </span>
                </div>
                <p className="text-xs text-[#3F5557] leading-relaxed">
                  Contempla a continuidade da infraestrutura e suporte do site após a publicação: hospedagem em nuvem veloz, backups automáticos, segurança/SSL, infraestrutura contínua, suporte dedicado e pequenas alterações de texto e fotos.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#0F3B40]">O que está incluso no projeto:</p>
                {[
                  "Estrutura One-Page fluida e intuitiva",
                  "Design exclusivo e responsivo (computador e celular)",
                  "Redação persuasiva focada no seu público",
                  "Botão direto para atendimento no WhatsApp",
                  "Formulário de contato seguro",
                  "SEO inicial para indexação no Google",
                  "Integração com Google Maps e Redes Sociais",
                  "Configuração técnica de domínio próprio (domínio por conta do cliente) e SSL"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#0F3B40]/20 text-[#A8675B] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span className="text-sm text-[#0F3B40] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={getWhatsAppLink("Olá! Gostaria de contratar o Plano Essencial (R$ 997 + R$ 127/mês) para o meu site.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#0F3B40]/[0.04] text-[#0F3B40] font-medium text-sm hover:bg-[#0F3B40] hover:text-[#F4EFE8] border border-[#0F3B40]/10 transition-all duration-300"
            >
              <span>Escolher Plano Essencial</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Plano Profissional */}
          <div className="bg-[#FBF8F3] text-[#0F3B40] rounded-2xl p-8 sm:p-10 border border-[#0F3B40]/50 flex flex-col justify-between shadow-2xl shadow-[#0F3B40]/10 relative group">
            {/* Tag Mais Escolhido */}
            <div className="absolute -top-3.5 right-8 bg-gradient-to-r from-[#0F3B40] to-[#0F3B40] text-[#F4EFE8] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-lg">
              Mais Escolhido
            </div>

            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-[#0F3B40]/20 text-[#A8675B] text-xs font-semibold uppercase tracking-wider rounded-full mb-3 border border-[#0F3B40]/30">
                    Plano Profissional
                  </span>
                  <h3 className="text-2xl font-serif text-[#0F3B40]">Site Profissional</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#0F3B40]/20 flex items-center justify-center text-[#A8675B]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              <p className="text-sm text-[#3F5557] mb-6 leading-relaxed">
                Para clínicas, consultórios e empresas que exigem máxima autoridade, catálogo rico de serviços, páginas individuais e SEO ampliado.
              </p>

              {/* Price Block */}
              <div className="mb-6 pb-6 border-b border-[#0F3B40]/10 space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-[#3F5557] font-medium">R$</span>
                  <span className="text-4xl sm:text-5xl font-serif text-[#A8675B] font-medium">1.397</span>
                  <span className="text-xs text-[#3F5557] font-medium">desenvolvimento (pagamento único)</span>
                </div>
                <div className="text-xs text-[#4ADE80] font-medium flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Entrega em até 7 dias úteis*
                </div>
              </div>

              {/* Maintenance & Hosting Plan Box */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#0F3B40]/[0.04] border border-[#0F3B40]/30 mb-6 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#A8675B] uppercase tracking-wide">
                    Plano de Manutenção & Hospedagem
                  </span>
                  <span className="text-sm font-bold text-[#0F3B40] bg-[#0F3B40]/[0.04] px-2.5 py-1 rounded-md border border-[#0F3B40]/10">
                    R$ 197/mês
                  </span>
                </div>
                <p className="text-xs text-[#3F5557] leading-relaxed">
                  Contempla a continuidade da infraestrutura Cloud de alta performance, monitoramento 24/7, backups automáticos, segurança/SSL contínua, alterações periódicas de conteúdo e suporte prioritário.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#A8675B]">Tudo do plano Essencial mais:</p>
                {[
                  "Estrutura Completa Multipágina (até 5 páginas individuais)",
                  "Páginas dedicadas por serviço/procedimento para SEO",
                  "Design de Alto Padrão com animações refinadas",
                  "Módulo de FAQ e Depoimentos Estratégicos",
                  "SEO Avançado com Schema.org e Breadcrumbs",
                  "Integração de Pixel da Meta e Google Analytics",
                  "Otimização de alta velocidade de carregamento (PageSpeed)",
                  "Suporte prioritário na fase de publicação"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#0F3B40]/30 text-[#A8675B] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span className="text-sm text-[#0F3B40] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={getWhatsAppLink("Olá! Gostaria de contratar o Plano Profissional (R$ 1.397 + R$ 197/mês) para o meu site.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#0F3B40] to-[#0F3B40] text-[#F4EFE8] font-bold text-sm hover:brightness-110 transition-all duration-300 shadow-lg shadow-[#0F3B40]/20"
            >
              <span>Escolher Plano Profissional</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Small note */}
        <p className="text-center text-xs text-[#3F5557] mt-8 max-w-2xl mx-auto leading-relaxed">
          *Prazos válidos a partir do recebimento completo das informações, fotos e conteúdos pelo cliente. O registro anual do domínio próprio (.com.br) é por conta do cliente (indicamos a Hostinger ou Registro.br) para garantir que a titularidade e propriedade do endereço fiquem 100% no seu CPF/CNPJ.
        </p>

      </div>
    </section>
  );
}
