import { SEOHead } from '../components/layout/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-white pb-20">
      <SEOHead
        title="Política de Privacidade"
        description="Termos de privacidade e tratamento de dados da MLee Digital em conformidade com a LGPD."
        canonicalPath="/politica-de-privacidade/"
      />

      <Breadcrumbs items={[{ label: "Política de Privacidade" }]} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <h1 className="text-3xl sm:text-4xl font-serif text-[#0F3B40] mb-6">
          Política de Privacidade
        </h1>

        <div className="space-y-6 text-sm text-[#6B7C7D] leading-relaxed">
          <p>
            A <strong>MLee Digital</strong> valoriza a sua privacidade e está comprometida com a proteção dos dados pessoais coletados neste site, em total conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
          </p>

          <h2 className="text-xl font-serif text-[#0F3B40] pt-4">1. Coleta de Informações</h2>
          <p>
            Coletamos informações pessoais que você nos fornece voluntariamente quando entra em contato através do nosso WhatsApp, formulários de simulação ou e-mail. Essas informações podem incluir seu nome, número de telefone, e-mail e dados do seu negócio.
          </p>

          <h2 className="text-xl font-serif text-[#0F3B40] pt-4">2. Finalidade do Tratamento de Dados</h2>
          <p>
            Os dados coletados são utilizados exclusivamente para:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Responder a solicitações de orçamento e dúvidas sobre nossos serviços;</li>
            <li>Executar os contratos de prestação de serviços de desenvolvimento de sites e sistemas;</li>
            <li>Melhorar a experiência de navegação e desempenho da nossa plataforma web.</li>
          </ul>

          <h2 className="text-xl font-serif text-[#0F3B40] pt-4">3. Cookies e Tecnologias de Rastreamento</h2>
          <p>
            Podemos utilizar cookies e ferramentas analíticas (como Google Analytics) para compreender métricas agregadas de audiência e navegação. Você pode configurar seu navegador para recusar cookies a qualquer momento.
          </p>

          <h2 className="text-xl font-serif text-[#0F3B40] pt-4">4. Links de Afiliados e Sites de Terceiros</h2>
          <p>
            Nosso site pode conter links para serviços externos e ferramentas recomendadas. Não nos responsabilizamos pelas políticas de privacidade ou práticas de sites de terceiros.
          </p>

          <h2 className="text-xl font-serif text-[#0F3B40] pt-4">5. Seus Direitos como Titular de Dados</h2>
          <p>
            Você tem o direito de solicitar o acesso, correção, atualização ou exclusão definitiva dos seus dados pessoais dos nossos registros a qualquer momento entrando em contato pelo nosso WhatsApp oficial.
          </p>

          <p className="pt-6 text-xs text-[#3F5557]">
            Última atualização: Agosto de 2026.
          </p>
        </div>
      </div>
    </div>
  );
}
