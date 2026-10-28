import fotoMarciaSobre from '../assets/brand/marcia-em-pe.webp';
import { Ponto, LinhasPortal } from '../components/home/Detalhes';
import { TopoInterno, botaoClaro } from '../components/common/TopoInterno';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  HeartHandshake, 
  Code2, 
  Cpu,
  MessageCircle,
  Instagram
} from 'lucide-react';
import { SEOHead } from '../components/layout/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { CTASection } from '../components/common/CTASection';
import { 
  AUTHOR_NAME, 
  AUTHOR_ROLE, 
  AUTHOR_IMG, 
  INSTAGRAM_URL, 
  getWhatsAppLink 
} from '../data/constants';

export function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Person",
      "name": AUTHOR_NAME,
      "jobTitle": AUTHOR_ROLE,
      "image": AUTHOR_IMG,
      "url": "https://www.mleedigital.com.br/sobre/"
    }
  };

  return (
    <div className="w-full">
      <SEOHead
        title="Sobre a MLee Digital & Márcia MLee"
        description="Conheça a história, filosofia e método de trabalho da MLee Digital, liderada por Márcia MLee na criação de sites e soluções web de alto padrão."
        canonicalPath="/sobre/"
        schemaJson={aboutSchema}
      />

      <Breadcrumbs items={[{ label: "Sobre Nós" }]} />

      {/* Topo */}
      <TopoInterno
        rotulo="Propósito e método de trabalho"
        titulo="Design que encanta, tecnologia que funciona e foco real em resultados."
        texto="A MLee Digital nasceu com o compromisso de oferecer uma experiência digital refinada para quem não tem tempo a perder com burocracias técnicas."
      />

      {/* Quem faz */}
      <section className="py-24 sm:py-32 bg-[#F4EFE8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <div className="moldura-grafite max-w-md">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#E9E2D8] shadow-[0_0_0_1px_rgba(190,196,198,.7)]">
                <img src={fotoMarciaSobre} alt={`${AUTHOR_NAME}, ${AUTHOR_ROLE}`} className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[#A8675B] mb-5">Fundadora e desenvolvedora</p>
            <h2 className="font-serif text-[40px] sm:text-[60px] leading-[0.98] tracking-[-0.02em]">Por trás da MLee Digital</h2>
            <p className="mt-7 text-[17px] text-[#4A5153] leading-relaxed max-w-xl">
              Durante anos acompanhando médicos, psicólogos, advogados, donas de estúdios e empreendedores, percebi uma dor constante: profissionais excelentes em suas áreas sentiam-se perdidos em meio a orçamentos exorbitantes de agências tradicionais ou reféns de ferramentas automáticas complicadas que não entregavam nenhum resultado.
            </p>
            <p className="mt-5 text-[17px] text-[#4A5153] leading-relaxed max-w-xl">
              Na MLee Digital, o processo é direto e acolhedor. Você fala diretamente com quem planeja e programa o seu projeto. Não há intermediários ou termos técnicos incompreensíveis. Eu cuido do código, do design e da otimização para que você possa se dedicar ao que faz de melhor: atender seus clientes.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <a href={getWhatsAppLink("Olá Márcia! Gostaria de conversar sobre um projeto.")} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-4 rounded-full bg-[#111819] text-[#F4EFE8] pl-7 pr-6 py-3.5 text-[15px] hover:bg-[#0A0F10] transition-colors">
                Conversar comigo no WhatsApp <Ponto className="text-[#CC8A80]" />
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="group link-ponto text-[15px]">Instagram <Ponto /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="pb-24 sm:pb-32 bg-[#F4EFE8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <LinhasPortal className="mb-24 sm:mb-32" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.3em] text-[#A8675B] mb-5">Pilares</p>
              <h2 className="font-serif text-[40px] sm:text-[60px] leading-[0.98] tracking-[-0.02em]">Como cada entrega é feita</h2>
            </div>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 border-t border-[#111819]">
            {[
              { t: 'Transparência e respeito', d: 'Preços fixos, prazos cumpridos à risca e zero surpresas ou taxas escondidas. Você sabe exatamente o que vai receber.' },
              { t: 'Estética de alto padrão', d: 'Nada de templates genéricos ou layouts poluídos. Cada projeto é pensado com tipografia nobre e hierarquia visual harmoniosa.' },
              { t: 'Velocidade e Google', d: 'Sites que abrem rápido no celular e seguem as regras do Google para aparecer nas buscas.' },
            ].map((p, i) => (
              <div key={p.t} className={`pt-8 pb-6 md:pr-10 ${i > 0 ? 'md:pl-10 md:border-l border-[#DCD2C6]' : ''} border-b md:border-b-0 border-[#DCD2C6]`}>
                <p className="font-serif text-[64px] leading-none text-[#CC8A80]/60">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-5 font-serif text-[28px] leading-tight">{p.t}</h3>
                <p className="mt-3 text-[16px] text-[#4A5153] leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
