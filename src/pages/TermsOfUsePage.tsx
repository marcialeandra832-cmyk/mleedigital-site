import { SEOHead } from '../components/layout/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export function TermsOfUsePage() {
  return (
    <div className="w-full bg-white pb-20">
      <SEOHead
        title="Termos de Uso"
        description="Termos e condições gerais de uso e contratação dos serviços da MLee Digital."
        canonicalPath="/termos-de-uso/"
      />

      <Breadcrumbs items={[{ label: "Termos de Uso" }]} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <h1 className="text-3xl sm:text-4xl font-serif text-[#0F3B40] mb-6">
          Termos de Uso
        </h1>

        <div className="space-y-6 text-sm text-[#6B7C7D] leading-relaxed">
          <p>
            Bem-vindo ao site da <strong>MLee Digital</strong>. Ao navegar por este portal ou contratar nossos serviços de desenvolvimento, você concorda com os seguintes termos e condições.
          </p>

          <h2 className="text-xl font-serif text-[#0F3B40] pt-4">1. Escopo dos Serviços</h2>
          <p>
            A MLee Digital presta serviços profissionais de design, desenvolvimento de websites, landing pages e aplicativos web sob encomenda, bem como comercializa acesso a sistemas de software próprios.
          </p>

          <h2 className="text-xl font-serif text-[#0F3B40] pt-4">2. Prazos e Entrega</h2>
          <p>
            Os prazos informados (ex: até 4 dias úteis para o Plano Essencial e até 7 dias úteis para o Plano Profissional) são contabilizados a partir da data de envio completo pelo cliente de todos os materiais necessários (textos, fotos, credenciais de domínio/hospedagem).
          </p>

          <h2 className="text-xl font-serif text-[#0F3B40] pt-4">3. Domínio e Hospedagem</h2>
          <p>
            O registro e a anuidade do domínio próprio (ex: suanome.com.br na Hostinger, Registro.br ou registrador de preferência) é de responsabilidade e contratação direta por conta do cliente. Isso garante que a titularidade, posse e controle legal do domínio fiquem sempre e exclusivamente em nome do cliente (CPF ou CNPJ). A MLee Digital oferece assessoria e configuração técnica gratuita de DNS para publicação. A infraestrutura de hospedagem e manutenção contínua é regida pelo plano mensal contratado.
          </p>

          <h2 className="text-xl font-serif text-[#0F3B40] pt-4">4. Propriedade Intelectual e Conteúdo</h2>
          <p>
            Após a quitação integral do valor do projeto, o cliente detém a posse de seu site e de seus conteúdos enviados. Os códigos base e bibliotecas de código aberto seguem suas respectivas licenças vigentes.
          </p>

          <h2 className="text-xl font-serif text-[#0F3B40] pt-4">5. Divulgação de Links de Afiliados</h2>
          <p>
            Determinadas recomendações em nosso blog ou seção de ferramentas indicadas contêm links de parceiros afiliados. A MLee Digital apenas recomenda ferramentas e produtos previamente testados e de qualidade comprovada.
          </p>

          <p className="pt-6 text-xs text-[#3F5557]">
            Última atualização: Agosto de 2026.
          </p>
        </div>
      </div>
    </div>
  );
}
