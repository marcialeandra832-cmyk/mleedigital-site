import { useState, FormEvent } from 'react';
import { Ponto } from '../components/home/Detalhes';
import { TopoInterno, botaoClaro } from '../components/common/TopoInterno';
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
    "url": "https://www.mleedigital.com.br/contato/"
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

      {/* Topo */}
      <TopoInterno
        rotulo="Atendimento direto comigo"
        titulo="Vamos conversar sobre o seu projeto?"
        texto="Sem formulários chatos ou robôs de atendimento. Você conversa diretamente comigo pelo canal que preferir."
      />

      {/* Canais e formulário */}
      <section className="py-24 sm:py-32 bg-[#F4EFE8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <img src={AUTHOR_IMG} alt={AUTHOR_NAME} className="w-14 h-14 rounded-full object-cover shadow-[0_0_0_1px_rgba(190,196,198,.8)]" />
              <div>
                <p className="font-serif text-[22px] leading-tight">{AUTHOR_NAME}</p>
                <p className="text-[13px] text-[#A8675B]">Fundadora e desenvolvedora</p>
              </div>
            </div>
            <ul className="mt-10 border-t border-[#111819]">
              <li className="border-b border-[#DCD2C6]">
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="group flex items-baseline justify-between gap-6 py-6">
                  <span><span className="block text-[12px] uppercase tracking-[0.2em] text-[#A8675B]">WhatsApp</span><span className="font-serif text-[28px]">(49) 99961-9123</span></span>
                  <Ponto />
                </a>
              </li>
              <li className="border-b border-[#DCD2C6]">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="group flex items-baseline justify-between gap-6 py-6">
                  <span><span className="block text-[12px] uppercase tracking-[0.2em] text-[#A8675B]">Instagram</span><span className="font-serif text-[28px]">{INSTAGRAM_HANDLE}</span></span>
                  <Ponto />
                </a>
              </li>
            </ul>
            <p className="mt-6 text-[15px] text-[#4A5153]">Atendimento de segunda a sexta, das 9h às 18h.</p>
          </div>

          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[#A8675B] mb-5">Prefere mandar um resumo?</p>
            <h2 className="font-serif text-[40px] sm:text-[52px] leading-[0.98] tracking-[-0.02em]">Conte sobre o seu projeto</h2>
            <p className="mt-4 text-[16px] text-[#4A5153] leading-relaxed max-w-lg">Preencha os campos e a mensagem abre pronta no seu WhatsApp.</p>
            <form onSubmit={handleSubmit} className="mt-10 space-y-8">
              <div>
                <label className="block text-[12px] uppercase tracking-[0.2em] text-[#A8675B] mb-1">Seu nome ou nome da empresa</label>
                <input type="text" required placeholder="Ex: Dra. Mariana / Clínica Bem Estar" value={name} onChange={(e) => setName(e.target.value)} className="w-full py-3 bg-transparent border-0 border-b border-[#111819]/25 text-[17px] text-[#111819] placeholder:text-[#4A5153]/60 focus:outline-none focus:border-[#CC8A80] transition-colors" />
              </div>
              <div>
                <label className="block text-[12px] uppercase tracking-[0.2em] text-[#A8675B] mb-1">Sua área de atuação</label>
                <input type="text" required placeholder="Ex: Odontologia, Advocacia, Estética..." value={segment} onChange={(e) => setSegment(e.target.value)} className="w-full py-3 bg-transparent border-0 border-b border-[#111819]/25 text-[17px] text-[#111819] placeholder:text-[#4A5153]/60 focus:outline-none focus:border-[#CC8A80] transition-colors" />
              </div>
              <div>
                <label className="block text-[12px] uppercase tracking-[0.2em] text-[#A8675B] mb-1">Plano de interesse</label>
                <select value={plan} onChange={(e) => setPlan(e.target.value)} className="w-full py-3 bg-transparent border-0 border-b border-[#111819]/25 text-[17px] text-[#111819] placeholder:text-[#4A5153]/60 focus:outline-none focus:border-[#CC8A80] transition-colors">
                  <option value="Plano Essencial (R$ 997)">Site Essencial, página única (R$ 997)</option>
                  <option value="Plano Profissional (R$ 1.397)">Site Profissional, até 5 páginas (R$ 1.397)</option>
                  <option value="Ainda não sei, quero orientação">Ainda não sei, quero orientação</option>
                </select>
              </div>
              <div>
                <label className="block text-[12px] uppercase tracking-[0.2em] text-[#A8675B] mb-1">Detalhes (opcional)</label>
                <textarea rows={3} placeholder="Ex: Já tenho logo e fotos, preciso do site no ar em 1 semana..." value={message} onChange={(e) => setMessage(e.target.value)} className="w-full py-3 bg-transparent border-0 border-b border-[#111819]/25 text-[17px] text-[#111819] placeholder:text-[#4A5153]/60 focus:outline-none focus:border-[#CC8A80] transition-colors resize-none" />
              </div>
              <button type="submit" className="group inline-flex items-center gap-4 rounded-full bg-[#111819] text-[#F4EFE8] pl-8 pr-7 py-4 text-[16px] hover:bg-[#0A0F10] transition-colors">
                Enviar e abrir no WhatsApp <Ponto className="text-[#CC8A80]" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
