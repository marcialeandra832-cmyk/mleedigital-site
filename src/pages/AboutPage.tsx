import fotoMarciaSobre from '../assets/brand/marcia-em-pe.webp';
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
      "url": "https://mleedigital.com.br/sobre/"
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

      {/* Hero Section */}
      <section className="pt-10 pb-16 bg-gradient-to-b from-[#FBF8F3] to-white border-b border-[#DCD2C6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#A8675B] font-semibold text-xs tracking-widest uppercase mb-3 inline-block">
            PROPÓSITO & MÉTODO DE TRABALHO
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F3B40] font-normal leading-tight mb-6">
            Design que encanta, tecnologia que funciona e foco real em resultados.
          </h1>
          <p className="text-base sm:text-lg text-[#6B7C7D] font-light leading-relaxed max-w-2xl mx-auto">
            A MLee Digital nasceu com o compromisso de oferecer uma experiência digital refinada para quem não tem tempo a perder com burocracias técnicas.
          </p>
        </div>
      </section>

      {/* Founder Story Breakdown */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Founder Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0F3B40]/30 to-[#0F3B40]/20 rounded-3xl transform -rotate-2" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#DCD2C6] aspect-[4/5] bg-[#F4EFE8]">
                  <img 
                    src={fotoMarciaSobre} 
                    alt={`${AUTHOR_NAME} - ${AUTHOR_ROLE}`} 
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#F4EFE8] p-4 text-[#0F3B40]">
                    <div className="text-base font-serif font-medium">{AUTHOR_NAME}</div>
                    <div className="text-xs text-[#A8675B]">{AUTHOR_ROLE}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Text */}
            <div className="lg:col-span-7 space-y-5 text-[#0F3B40]">
              <div>
                <span className="text-[#A8675B] font-semibold text-xs tracking-widest uppercase mb-2 block">
                  FUNDADORA & DESENVOLVEDORA
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#0F3B40]">
                  Por trás da MLee Digital
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#6B7C7D] leading-relaxed">
                Durante anos acompanhando médicos, psicólogos, advogados, donas de estúdios e empreendedores, percebi uma dor constante: profissionais excelentes em suas áreas sentiam-se perdidos em meio a orçamentos exorbitantes de agências tradicionais ou reféns de ferramentas automáticas complicadas que não entregavam nenhum resultado.
              </p>

              <p className="text-sm sm:text-base text-[#6B7C7D] leading-relaxed">
                Na MLee Digital, o processo é direto e acolhedor. Você fala diretamente com quem planeja e programa o seu projeto. Não há intermediários ou termos técnicos incompreensíveis. Cuidamos do código, do design e da otimização para que você possa se dedicar ao que faz de melhor: atender seus clientes.
              </p>

              <div className="pt-2 flex items-center gap-4">
                <a
                  href={getWhatsAppLink("Olá Márcia! Gostaria de conversar sobre um projeto.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-[#F4EFE8] text-[#0F3B40] text-xs font-semibold hover:bg-[#0F3B40] hover:text-[#F4EFE8] transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-[#25D366]" />
                  <span>Conversar Comigo no WhatsApp</span>
                </a>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-white border border-[#DCD2C6] text-[#0F3B40] text-xs font-semibold hover:text-[#A8675B] transition-all"
                >
                  <Instagram className="w-4 h-4 text-[#E1306C]" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values & Principles */}
      <section className="py-16 bg-[#FBF8F3] border-t border-[#DCD2C6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#A8675B] font-semibold text-xs tracking-widest uppercase mb-2 block">
              NOSSOS PILARES
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#0F3B40]">
              Como garantimos excelência em cada entrega
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-[#DCD2C6] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0F3B40]/15 text-[#A8675B] flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-lg font-serif text-[#0F3B40]">Transparência e Respeito</h3>
              <p className="text-xs sm:text-sm text-[#6B7C7D] leading-relaxed">
                Preços fixos, prazos cumpridos à risca e zero surpresas ou taxas escondidas. Você sabe exatamente o que vai receber.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#DCD2C6] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0F3B40]/15 text-[#A8675B] flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-lg font-serif text-[#0F3B40]">Estética de Alto Padrão</h3>
              <p className="text-xs sm:text-sm text-[#6B7C7D] leading-relaxed">
                Nada de templates genéricos ou layouts poluídos. Cada projeto é calibrado com tipografia nobre e hierarquia visual harmoniosa.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#DCD2C6] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0F3B40]/15 text-[#A8675B] flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-lg font-serif text-[#0F3B40]">Velocidade e SEO Técnico</h3>
              <p className="text-xs sm:text-sm text-[#6B7C7D] leading-relaxed">
                Código moderno em React e Tailwind que abre instantaneamente em celulares e segue todas as diretrizes de indexação do Google.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
