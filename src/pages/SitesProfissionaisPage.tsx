import { useState } from 'react';
import { Ponto, LinhasPortal } from '../components/home/Detalhes';
import { TopoInterno, botaoClaro } from '../components/common/TopoInterno';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Layers, 
  ExternalLink,
  MessageCircle,
  Eye,
  Check,
  ChevronRight,
  HelpCircle,
  LayoutTemplate,
  Compass,
  Building2,
  Stethoscope,
  Scale,
  Sparkle
} from 'lucide-react';
import { SEOHead } from '../components/layout/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { PricingTable } from '../components/common/PricingTable';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { CTASection } from '../components/common/CTASection';
import { projectsData } from '../data/projects';
import { segmentsData } from '../data/segments';
import { getWhatsAppLink } from '../data/constants';

export function SitesProfissionaisPage() {
  const [filterPlan, setFilterPlan] = useState<'ALL' | 'SITE ESSENCIAL' | 'SITE PROFISSIONAL'>('ALL');

  const breadcrumbItems = [
    { label: "Serviços", path: "/sites-profissionais/" },
    { label: "Sites Profissionais" }
  ];

  const filteredProjects = filterPlan === 'ALL' 
    ? projectsData 
    : projectsData.filter(p => p.planType === filterPlan);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Criação de Sites Profissionais | MLee Digital",
    "provider": {
      "@type": "ProfessionalService",
      "name": "MLee Digital",
      "founder": "Márcia MLee"
    },
    "description": "Desenvolvimento de sites profissionais elegantes, rápidos e de alta autoridade para empresas, clínicas e especialistas. Planos Site Essencial (R$ 997) e Site Profissional (R$ 1.397).",
    "offers": [
      {
        "@type": "Offer",
        "name": "Site Essencial (One Page)",
        "price": "997.00",
        "priceCurrency": "BRL"
      },
      {
        "@type": "Offer",
        "name": "Site Profissional (Multipágina)",
        "price": "1397.00",
        "priceCurrency": "BRL"
      }
    ]
  };

  const faqItems = [
    {
      q: "Qual a diferença entre o Site Essencial e o Site Profissional?",
      a: "O Site Essencial (R$ 997 desenvolvimento + R$ 127/mês de manutenção e hospedagem) é uma estrutura One Page profissional completa onde todas as seções principais (hero, serviços, sobre, localização, diferenciais e contato) ficam em uma única página contínua e fluida, ideal para quem precisa de agilidade e conversão direta no WhatsApp. O Site Profissional (R$ 1.397 desenvolvimento + R$ 197/mês de manutenção e hospedagem) é uma estrutura multipágina de até 5 páginas individuais, ideal para negócios com muitos procedimentos que precisam de páginas dedicadas para ranqueamento avançado no Google e catálogo aprofundado."
    },
    {
      q: "O Site Essencial substitui uma Landing Page?",
      a: "Com certeza! O Site Essencial foi desenhado justamente para unir o melhor dos dois mundos: possui todo o poder de conversão direta e foco em ação de uma Landing Page, com a credibilidade, autoridade e elegância de um site oficial com domínio próprio (.com.br)."
    },
    {
      q: "O que é 'Modelo' e o que é 'Plano'?",
      a: "Plano é o produto comercial e investimento contratado (Site Essencial R$ 997 ou Site Profissional R$ 1.397). Modelo é a referência visual e estrutural de design adaptada para cada nicho (odontologia, medicina, arquitetura, direito, estética). Qualquer modelo de referência pode ser contratado dentro do plano correspondente à sua necessidade."
    },
    {
      q: "Quanto tempo leva para o site ficar pronto?",
      a: "O prazo para o Site Essencial é de até 4 dias úteis e para o Site Profissional de até 7 dias úteis, contados a partir do envio completo das informações, fotos e textos pelo cliente."
    },
    {
      q: "Como funciona a manutenção e hospedagem mensal?",
      a: "O desenvolvimento do site é um investimento único. Após a publicação, o plano mensal (R$ 127/mês no Essencial ou R$ 197/mês no Profissional) garante a continuidade da infraestrutura, hospedagem em nuvem de alta velocidade, backups automáticos, segurança com certificado SSL, monitoramento e pequenas alterações de textos e fotos com suporte dedicado."
    },
    {
      q: "O registro do domínio (.com.br) está incluso no valor do plano?",
      a: "O registro anual do domínio próprio (ex: suanome.com.br) é por conta do cliente e feito diretamente em seu próprio CPF ou CNPJ — nós indicamos e auxiliamos no registro pela Hostinger (ou Registro.br). Isso é fundamental para garantir que você seja o único dono legal do endereço do seu negócio. Nós auxiliamos no passo a passo do registro e realizamos toda a configuração técnica de DNS e conexão com o site gratuitamente."
    },
    {
      q: "O site vai funcionar perfeitamente no celular?",
      a: "Sim! Desenvolvemos 100% dos sites com metodologia Mobile-First, garantindo leitura agradável, botões acessíveis e velocidade máxima em conexões móveis (4G/5G)."
    }
  ];

  return (
    <div className="w-full">
      <SEOHead
        title="Criação de Sites Profissionais | Site Essencial e Multipágina"
        description="Desenvolvimento de sites profissionais elegantes, rápidos e com foco em conversão no WhatsApp. Site Essencial (R$ 997) e Site Profissional (R$ 1.397)."
        canonicalPath="/sites-profissionais/"
        schemaJson={serviceSchema}
      />

      <Breadcrumbs items={breadcrumbItems} />

      {/* Topo */}
      <TopoInterno
        rotulo="Investimento"
        titulo="Criação de sites profissionais"
        texto="Transforme visitantes em clientes com um site elegante, rápido e preparado para o Google. Escolha a estrutura ideal para o momento do seu negócio: da página única ao site com várias páginas."
        acoes={
          <>
            <a href={getWhatsAppLink("Olá Márcia! Gostaria de um orçamento para criar o site profissional do meu negócio.")} target="_blank" rel="noopener noreferrer" className={botaoClaro}>
              Pedir orçamento no WhatsApp <Ponto className="text-[#A8675B]" />
            </a>
            <a href="#modelos" className="group link-ponto text-[15px]">Ver modelos <Ponto /></a>
          </>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl border-t border-[#F4EFE8]/15">
          <div className="pt-6 pb-2 sm:pr-8">
            <p className="flex items-baseline justify-between gap-4"><span className="text-[12px] uppercase tracking-[0.2em] text-[#CC8A80]">Site Essencial</span><span className="font-serif text-2xl">R$ 997</span></p>
            <p className="mt-3 text-[14px] text-[#F4EFE8]/70 leading-relaxed">Página única e completa, com foco no contato direto pelo WhatsApp.</p>
          </div>
          <div className="pt-6 pb-2 sm:pl-8 sm:border-l border-[#F4EFE8]/15">
            <p className="flex items-baseline justify-between gap-4"><span className="text-[12px] uppercase tracking-[0.2em] text-[#CC8A80]">Site Profissional</span><span className="font-serif text-2xl">R$ 1.397</span></p>
            <p className="mt-3 text-[14px] text-[#F4EFE8]/70 leading-relaxed">Até 5 páginas, uma para cada serviço importante, para aparecer mais no Google.</p>
          </div>
        </div>
      </TopoInterno>

      {/* O Essencial já é completo */}
      <section className="pt-24 sm:pt-32 bg-[#F4EFE8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[#A8675B] mb-5">Sem complicação</p>
            <h2 className="font-serif text-[40px] sm:text-[60px] leading-[0.98] tracking-[-0.02em]">O Site Essencial já é uma página única completa.</h2>
          </div>
          <p className="lg:col-span-5 text-[17px] text-[#4A5153] leading-relaxed">
            Você não precisa contratar uma "landing page" separada. O Site Essencial entrega a força de uma página de vendas, somada à credibilidade, localização e mapa de um site oficial no seu próprio domínio (.com.br).
          </p>
        </div>
      </section>

      <PricingTable />

      {/* Modelos */}
      <section id="modelos" className="py-24 sm:py-32 bg-[#F4EFE8] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <LinhasPortal className="mb-24 sm:mb-32" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.3em] text-[#A8675B] mb-5">Modelos de referência</p>
              <h2 className="font-serif text-[40px] sm:text-[60px] leading-[0.98] tracking-[-0.02em]">Este modelo pode ser o seu.</h2>
            </div>
            <p className="lg:col-span-5 text-[17px] text-[#4A5153] leading-relaxed">
              Modelo é a referência visual da sua área. Plano é o que você contrata: Essencial (R$ 997) ou Profissional (R$ 1.397). Qualquer modelo é adaptado com o seu nome, fotos e cores.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {([['ALL', `Todos (${projectsData.length})`], ['SITE ESSENCIAL', 'Essencial'], ['SITE PROFISSIONAL', 'Profissional']] as const).map(([id, rotulo]) => (
              <button
                  key={id}
                  type="button"
                  onClick={() => setFilterPlan(id)}
                  className={`px-4 py-2 rounded-full text-[13px] border transition-colors ${filterPlan === id ? 'bg-[#111819] text-[#F4EFE8] border-[#111819]' : 'border-[#111819]/20 text-[#4A5153] hover:border-[#111819]'}`}
                >
                  {rotulo}
                </button>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredProjects.map((project, i) => (
              <article key={project.id}>
                <a href={project.demo || `/portfolio/${project.slug}/`} target={project.demo ? '_blank' : undefined} rel="noopener noreferrer" data-cursor="Ver" className="group block overflow-hidden rounded-2xl aspect-[16/10] bg-[#E9E2D8] shadow-[0_0_0_1px_rgba(190,196,198,.7),0_30px_50px_-30px_rgba(17,24,25,.55)]">
                  <img src={project.img} alt={project.client} referrerPolicy="no-referrer" loading="lazy" className="w-full h-full object-cover object-top scale-[1.04] group-hover:scale-100 transition-transform duration-[1.2s] ease-out" />
                </a>
                <p className="mt-6 flex items-baseline gap-3 text-[12px] uppercase tracking-[0.2em] text-[#A8675B]">
                  <span className="tabular-nums tracking-normal">{String(i + 1).padStart(2, '0')}</span>{project.category}
                </p>
                <h3 className="mt-2 font-serif text-[28px] leading-tight">{project.client}</h3>
                <p className="mt-2 text-[15px] text-[#4A5153] leading-relaxed line-clamp-2">{project.tagline}</p>
                <p className="mt-3 text-[13px] text-[#4A5153]">{project.planType === 'SITE PROFISSIONAL' ? 'Plano Profissional · R$ 1.397' : 'Plano Essencial · R$ 997'}</p>
                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-[15px]">
                  <a href={getWhatsAppLink(`Olá Márcia! Gostei muito do modelo de referência "${project.client}" e gostaria de criar o meu site baseado nessa estrutura.`)} target="_blank" rel="noopener noreferrer" className="group link-ponto text-[#111819]">Quero esse com o meu nome <Ponto /></a>
                  <Link to={`/portfolio/${project.slug}/`} className="text-[#4A5153] hover:text-[#111819]">Ver estudo</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram x site */}
      <section className="fundo-mar text-[#F4EFE8] py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.3em] text-[#CC8A80] mb-5">Por que ter um site</p>
              <h2 className="font-serif text-[40px] sm:text-[60px] leading-[0.98] tracking-[-0.02em]">Só o Instagram limita as suas vendas.</h2>
            </div>
            <p className="lg:col-span-5 text-[17px] text-[#F4EFE8]/72 leading-relaxed">Redes sociais atraem atenção, mas é no site oficial que o cliente toma a decisão.</p>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 border-t border-[#F4EFE8]/25">
            {[
              { t: 'Sem site próprio', itens: ['Você não aparece quando alguém pesquisa no Google pela sua especialidade na cidade.', 'O cliente se perde entre dezenas de postagens sem saber onde clicar ou agendar.', 'Passa a impressão de um negócio informal ou iniciante.'] },
              { t: 'Com site da MLee Digital', itens: ['Domínio próprio (.com.br), que transmite autoridade na hora.', 'Estrutura clara com os seus serviços e botão direto para o WhatsApp.', 'Aparece no Google para quem está procurando o seu serviço agora.'] },
            ].map((c, i) => (
              <div key={c.t} className={`pt-8 pb-4 ${i === 1 ? 'md:pl-10 md:border-l border-[#F4EFE8]/15' : 'md:pr-10'}`}>
                <h3 className={`font-serif text-[30px] ${i === 1 ? 'text-[#F4EFE8]' : 'text-[#F4EFE8]/55'}`}>{c.t}</h3>
                <ul className="mt-5 space-y-3">
                  {c.itens.map((it) => (
                    <li key={it} className="flex gap-3 text-[16px] leading-relaxed text-[#F4EFE8]/75">
                      <span className={`mt-[0.55em] w-1.5 h-1.5 rounded-full shrink-0 ${i === 1 ? 'bg-[#CC8A80]' : 'bg-[#F4EFE8]/30'}`} />{it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas */}
      <section className="py-24 sm:py-32 bg-[#F4EFE8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#A8675B] mb-5">Por área</p>
          <h2 className="font-serif text-[40px] sm:text-[60px] leading-[0.98] tracking-[-0.02em] max-w-3xl">Veja a estrutura recomendada para a sua área</h2>
          <ul className="mt-14 border-t border-[#111819]">
            {[
              { name: 'Clínicas médicas e odontológicas', slug: 'sites-para-clinicas' },
              { name: 'Estética e beleza', slug: 'sites-para-esteticistas' },
              { name: 'Arquitetura', slug: 'sites-para-arquitetos' },
              { name: 'Advocacia', slug: 'sites-para-advogados' },
              { name: 'Catálogo digital', slug: 'catalogo-digital' },
            ].map((seg, i) => (
              <li key={seg.slug} className="border-b border-[#DCD2C6]">
                <Link to={`/${seg.slug}/`} className="group flex items-baseline justify-between gap-6 py-6">
                  <span className="flex items-baseline gap-5">
                    <span className="text-[12px] text-[#CC8A80] tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-serif text-[26px] sm:text-[32px] leading-tight group-hover:text-[#A8675B] transition-colors">{seg.name}</span>
                  </span>
                  <Ponto className="text-[#111819]" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Perguntas */}
      <section className="pb-24 sm:pb-32 bg-[#F4EFE8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <FAQAccordion items={faqItems} title="Perguntas frequentes" />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Pronto para ter o seu site no ar?"
        subtitle="Escolha entre o Site Essencial (R$ 997) ou Site Profissional (R$ 1.397) e receba seu projeto pronto com entrega ágil."
        whatsappMessage="Olá Márcia! Gostaria de contratar a criação de um site profissional para o meu negócio."
      />
    </div>
  );
}
