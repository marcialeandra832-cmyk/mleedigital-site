import { useState, FormEvent } from 'react';
import { 
  MessageCircle, 
  Instagram, 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  Sparkles,
  Clock
} from 'lucide-react';
import { SEOHead } from '../components/layout/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { 
  WA_NUMBER, 
  WA_BASE_URL, 
  INSTAGRAM_URL, 
  INSTAGRAM_HANDLE, 
  AUTHOR_NAME, 
  AUTHOR_IMG,
  getWhatsAppLink 
} from '../data/constants';

export function ContactPage() {
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState('');
  const [segment, setSegment] = useState('');
  const [plan, setPlan] = useState('Plano Essencial (R$ 997)');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá Márcia! Meu nome é ${name}. Trabalho no ramo de ${segment}. Tenho interesse no ${plan}. Mensagem: ${message}`;
    window.open(getWhatsAppLink(text), '_blank');
    setFormSent(true);
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contato | MLee Digital",
    "description": "Entre em contato com a MLee Digital para tirar dúvidas ou solicitar orçamento de criação de sites.",
    "url": "https://mleedigital.com.br/contato/"
  };

  return (
    <div className="w-full">
      <SEOHead
        title="Fale Conosco | Orçamento Direto no WhatsApp"
        description="Fale diretamente com Márcia MLee para criar seu site profissional ou aplicativo web. Atendimento humanizado e sem complicação."
        canonicalPath="/contato/"
        schemaJson={contactSchema}
      />

      <Breadcrumbs items={[{ label: "Contato" }]} />

      {/* Header */}
      <section className="pt-10 pb-16 bg-gradient-to-b from-[#FBF8F3] to-white border-b border-[#DCD2C6] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#A8675B] font-semibold text-xs tracking-widest uppercase mb-3 inline-block">
            ATENDIMENTO RÁPIDO & HUMANIZADO
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F3B40] font-normal leading-tight mb-4">
            Vamos conversar sobre o seu projeto?
          </h1>
          <p className="text-base text-[#6B7C7D] font-light max-w-2xl mx-auto">
            Sem formulários chatos ou robôs de atendimento. Você conversa diretamente comigo pelo canal que preferir.
          </p>
        </div>
      </section>

      {/* Contact Channels Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Direct Channels Card */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-[#FBF8F3] p-8 rounded-2xl border border-[#DCD2C6] space-y-6">
                <div className="flex items-center gap-3.5 pb-6 border-b border-[#DCD2C6]">
                  <img 
                    src={AUTHOR_IMG} 
                    alt={AUTHOR_NAME} 
                    className="w-12 h-12 rounded-full object-cover border border-[#0F3B40]/30"
                  />
                  <div>
                    <div className="font-serif text-lg text-[#0F3B40]">{AUTHOR_NAME}</div>
                    <div className="text-xs text-[#A8675B] font-medium">Fundadora & Desenvolvedora</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-4 rounded-xl bg-white border border-[#DCD2C6] hover:border-[#25D366] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <div className="text-xs text-[#3F5557]">WhatsApp Direto</div>
                      <div className="text-sm font-semibold text-[#0F3B40] group-hover:text-[#25D366] transition-colors">
                        (49) 99961-9123
                      </div>
                    </div>
                  </a>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-4 rounded-xl bg-white border border-[#DCD2C6] hover:border-[#E1306C] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#E1306C]/10 text-[#E1306C] flex items-center justify-center shrink-0">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#3F5557]">Instagram Oficial</div>
                      <div className="text-sm font-semibold text-[#0F3B40] group-hover:text-[#E1306C] transition-colors">
                        {INSTAGRAM_HANDLE}
                      </div>
                    </div>
                  </a>
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs text-[#3F5557]">
                  <Clock className="w-4 h-4 text-[#A8675B] shrink-0" />
                  <span>Atendimento ágil de segunda a sexta, das 09h às 18h.</span>
                </div>
              </div>

            </div>

            {/* Right: Quick Inquiry Form -> WhatsApp Generator */}
            <div className="lg:col-span-7">
              <div className="bg-[#FBF8F3] p-8 sm:p-10 rounded-3xl border border-[#DCD2C6] shadow-sm">
                
                <div className="mb-6">
                  <span className="text-xs font-bold text-[#A8675B] uppercase tracking-wider block mb-1">
                    PREFERE ENVIAR UM RESUMO DO SEU PROJETO?
                  </span>
                  <h2 className="text-2xl font-serif text-[#0F3B40]">
                    Simulador Rápido de Orçamento
                  </h2>
                  <p className="text-xs sm:text-sm text-[#6B7C7D] mt-1">
                    Preencha os campos abaixo e nosso sistema abrirá a mensagem formatada para envio no seu WhatsApp.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0F3B40] mb-1.5">
                      Seu Nome ou Nome da Empresa
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Dra. Mariana / Clínica Bem Estar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full py-2.5 px-4 rounded-xl bg-white border border-[#DCD2C6] text-sm text-[#0F3B40] focus:outline-none focus:border-[#0F3B40]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0F3B40] mb-1.5">
                      Seu Ramo de Atuação / Especialidade
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Psicologia, Odontologia, Advocacia, Estética..."
                      value={segment}
                      onChange={(e) => setSegment(e.target.value)}
                      className="w-full py-2.5 px-4 rounded-xl bg-white border border-[#DCD2C6] text-sm text-[#0F3B40] focus:outline-none focus:border-[#0F3B40]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0F3B40] mb-1.5">
                      Plano de Interesse
                    </label>
                    <select
                      value={plan}
                      onChange={(e) => setPlan(e.target.value)}
                      className="w-full py-2.5 px-4 rounded-xl bg-white border border-[#DCD2C6] text-sm text-[#0F3B40] focus:outline-none focus:border-[#0F3B40]"
                    >
                      <option value="Plano Essencial (R$ 997)">Site Essencial - One Page Profissional (R$ 997)</option>
                      <option value="Plano Profissional (R$ 1.397)">Site Profissional - Multipágina até 5 páginas (R$ 1.397)</option>
                      <option value="Sistemas Web & Apps">Sistemas Web Sob Medida & Apps</option>
                      <option value="Nail Finance Pro">App Nail Finance Pro</option>
                      <option value="Elastic Fit">App Elastic Fit</option>
                      <option value="Ainda não sei, quero orientação">Ainda não sei, quero orientação</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0F3B40] mb-1.5">
                      Detalhes adicionais (opcional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ex: Já tenho logo e fotos, preciso do site no ar em 1 semana..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full py-2.5 px-4 rounded-xl bg-white border border-[#DCD2C6] text-sm text-[#0F3B40] focus:outline-none focus:border-[#0F3B40]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#F4EFE8] text-[#0F3B40] font-medium text-sm hover:bg-[#0F3B40] hover:text-[#F4EFE8] transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar e Abrir no WhatsApp</span>
                  </button>
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
