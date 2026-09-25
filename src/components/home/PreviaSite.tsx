import { useMemo, useState } from 'react';
import { MessageCircle, MapPin, Lock } from 'lucide-react';
import { getWhatsAppLink } from '../../data/constants';

// ---------- Conteúdo por área (textos e cores de cada prévia) ----------
type Area = {
  id: string;
  nome: string;
  rotulo: string;
  titulo: string;
  texto: string;
  servicos: string[];
  botao: string;
  menu: string;
  fonte: string;
  cor: string; // cor principal padrão da área
};

const areas: Area[] = [
  {
    id: 'estetica',
    nome: 'Estética',
    rotulo: 'Estética avançada',
    titulo: 'Resultados naturais, com a segurança de quem entende de pele.',
    texto: 'Protocolos personalizados para realçar o que já é seu, sem exageros.',
    servicos: ['Harmonização facial', 'Limpeza de pele profunda', 'Bioestimuladores'],
    botao: 'Agendar avaliação',
    menu: 'Tratamentos',
    fonte: '"Cormorant Garamond", serif',
    cor: '#A86B5C',
  },
  {
    id: 'odonto',
    nome: 'Odontologia',
    rotulo: 'Odontologia',
    titulo: 'Seu sorriso cuidado com precisão e sem pressa.',
    texto: 'Tratamentos planejados do primeiro exame ao resultado final.',
    servicos: ['Clareamento dental', 'Lentes de contato dental', 'Implantes'],
    botao: 'Agendar consulta',
    menu: 'Tratamentos',
    fonte: '"Inter", sans-serif',
    cor: '#1F6F80',
  },
  {
    id: 'medicina',
    nome: 'Medicina',
    rotulo: 'Consultório médico',
    titulo: 'Cuidado médico atento, do diagnóstico ao acompanhamento.',
    texto: 'Consultas com tempo para ouvir, explicar e decidir junto com você.',
    servicos: ['Consultas', 'Check-up completo', 'Acompanhamento'],
    botao: 'Agendar consulta',
    menu: 'Tratamentos',
    fonte: '"Playfair Display", serif',
    cor: '#2C4675',
  },
  {
    id: 'mulher',
    nome: 'Saúde da mulher',
    rotulo: 'Saúde da mulher',
    titulo: 'Cuidado integral em todas as fases da vida da mulher.',
    texto: 'Prevenção, acolhimento e informação clara em cada consulta.',
    servicos: ['Ginecologia preventiva', 'Pré-natal', 'Climatério e menopausa'],
    botao: 'Agendar consulta',
    menu: 'Tratamentos',
    fonte: '"Playfair Display", serif',
    cor: '#9A4560',
  },
  {
    id: 'nutri',
    nome: 'Nutrição',
    rotulo: 'Nutrição',
    titulo: 'Alimentação que cabe na sua rotina e no seu objetivo.',
    texto: 'Planos feitos para a sua vida real, com acompanhamento de perto.',
    servicos: ['Reeducação alimentar', 'Emagrecimento', 'Nutrição esportiva'],
    botao: 'Agendar consulta',
    menu: 'Tratamentos',
    fonte: '"Inter", sans-serif',
    cor: '#5E7F45',
  },
  {
    id: 'psico',
    nome: 'Psicologia',
    rotulo: 'Psicologia',
    titulo: 'Um espaço seguro para cuidar da sua saúde emocional.',
    texto: 'Atendimento presencial e online, no seu tempo.',
    servicos: ['Terapia individual', 'Atendimento online', 'Terapia de casal'],
    botao: 'Agendar sessão',
    menu: 'Atendimentos',
    fonte: '"Cormorant Garamond", serif',
    cor: '#6E5A8A',
  },
  {
    id: 'advocacia',
    nome: 'Advocacia',
    rotulo: 'Advocacia',
    titulo: 'Orientação jurídica clara, do primeiro contato à solução.',
    texto: 'Atendimento próximo e explicações sem juridiquês.',
    servicos: ['Direito de família', 'Direito trabalhista', 'Contratos e consultoria'],
    botao: 'Agendar consulta',
    menu: 'Atuação',
    fonte: '"Playfair Display", serif',
    cor: '#2E3A59',
  },
  {
    id: 'arquitetura',
    nome: 'Arquitetura',
    rotulo: 'Arquitetura e interiores',
    titulo: 'Projetos que traduzem o jeito como você quer viver.',
    texto: 'Do primeiro esboço à obra pronta, com acompanhamento de perto.',
    servicos: ['Projeto residencial', 'Interiores', 'Consultoria de reforma'],
    botao: 'Solicitar orçamento',
    menu: 'Projetos',
    fonte: '"Cormorant Garamond", serif',
    cor: '#7A6A55',
  },
];

const coresExtras = ['#B08A4E', '#C27C7C', '#3E6B5A', '#2F2F2F', '#B5654A', '#4F6D9A'];

// ---------- Ajudantes ----------
function misturar(hex: string, alvo: string, peso: number) {
  const h = (s: string) => [1, 3, 5].map((i) => parseInt(s.slice(i, i + 2), 16));
  const a = h(hex);
  const b = h(alvo);
  const c = a.map((v, i) => Math.round(v + (b[i] - v) * peso));
  return `#${c.map((v) => v.toString(16).padStart(2, '0')).join('')}`;
}

function paleta(cor: string) {
  return {
    acc: cor,
    fundo: misturar(cor, '#ffffff', 0.93),
    suave: misturar(cor, '#ffffff', 0.8),
    tinta: misturar(cor, '#000000', 0.72),
    texto: misturar(cor, '#3a3a3a', 0.75),
  };
}

const ignorar = ['dr', 'dra', 'clinica', 'clínica', 'studio', 'estudio', 'consultorio', 'consultório', 'escritorio', 'escritório', 'advocacia', 'arquitetura', 'de', 'da', 'do', 'e', 'das', 'dos'];

function iniciais(nome: string) {
  const palavras = nome
    .replace(/[.]/g, ' ')
    .split(/\s+/)
    .filter((p) => p && !ignorar.includes(p.toLowerCase()));
  if (!palavras.length) return 'A';
  if (palavras.length === 1) return palavras[0][0].toUpperCase();
  return (palavras[0][0] + palavras[palavras.length - 1][0]).toUpperCase();
}

function dominio(nome: string) {
  const base = nome
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
  return `${base || 'seunegocio'}.com.br`;
}

const NOME_EXEMPLO = 'Dra. Ana Lima';

// ---------- Componente ----------
export function PreviaSite() {
  const [nome, setNome] = useState('');
  const [cidade, setCidade] = useState('');
  const [areaId, setAreaId] = useState('estetica');
  const [corEscolhida, setCorEscolhida] = useState<string | null>(null);

  const area = areas.find((a) => a.id === areaId)!;
  const cor = corEscolhida ?? area.cor;
  const p = useMemo(() => paleta(cor), [cor]);
  const nomeFinal = nome.trim() || NOME_EXEMPLO;
  const ini = iniciais(nomeFinal);
  const url = dominio(nomeFinal);
  const local = cidade.trim();

  const msg = `Olá Márcia! Montei a prévia do site para "${nomeFinal}" (${area.nome}${local ? `, ${local}` : ''}) e quero conversar sobre o meu.`;

  const trocaSuave = { transition: 'background-color .5s, color .5s, border-color .5s' };

  return (
    <section id="previa" className="grao py-24 sm:py-32 bg-[#FBF8F3] border-y border-[#DCD2C6] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8">

          {/* Chamada */}
          <div className="lg:col-span-5 lg:row-start-1">
            <p className="text-xs uppercase tracking-[0.3em] text-[#A8675B] mb-5">Experimente</p>
            <h2 className="text-[40px] sm:text-5xl lg:text-[56px] font-serif text-[#0F3B40] leading-[1.02] tracking-[-0.01em]">
              Veja o seu site antes de contratar.
            </h2>
            <p className="mt-5 text-[17px] text-[#3F5557] leading-relaxed max-w-md">
              Digite o nome do seu negócio e escolha a sua área. A prévia muda na hora, do jeito que o seu cliente veria.
            </p>
          </div>

          {/* Campos */}
          <div className="lg:col-span-5 lg:row-start-2 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              <label className="sm:col-span-3 block">
                <span className="block text-sm text-[#0F3B40] mb-1.5">Nome do seu negócio</span>
                <input
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder={NOME_EXEMPLO}
                  maxLength={40}
                  className="w-full rounded-lg bg-white border border-[#DCD2C6] px-4 py-3.5 text-[#0F3B40] placeholder:text-[#8A9A9B] focus:outline-none focus:border-[#0F3B40] focus:ring-1 focus:ring-[#0F3B40]"
                />
              </label>
              <label className="sm:col-span-2 block">
                <span className="block text-sm text-[#0F3B40] mb-1.5">Cidade</span>
                <input
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  placeholder="Videira-SC"
                  maxLength={30}
                  className="w-full rounded-lg bg-white border border-[#DCD2C6] px-4 py-3.5 text-[#0F3B40] placeholder:text-[#8A9A9B] focus:outline-none focus:border-[#0F3B40] focus:ring-1 focus:ring-[#0F3B40]"
                />
              </label>
            </div>

            <fieldset>
              <legend className="text-sm text-[#0F3B40] mb-2">Sua área</legend>
              <div className="flex flex-wrap gap-2">
                {areas.map((a) => (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => {
                      setAreaId(a.id);
                      setCorEscolhida(null);
                    }}
                    aria-pressed={a.id === areaId}
                    className={`px-3.5 py-2 rounded-full text-sm border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0F3B40] ${
                      a.id === areaId
                        ? 'bg-[#0F3B40] text-[#F4EFE8] border-[#0F3B40]'
                        : 'bg-transparent text-[#0F3B40] border-[#DCD2C6] hover:border-[#0F3B40]'
                    }`}
                  >
                    {a.nome}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-sm text-[#0F3B40] mb-2">Cor da sua marca</legend>
              <div className="flex flex-wrap items-center gap-2.5">
                {[area.cor, ...coresExtras].map((c, i) => (
                  <button
                    key={c + i}
                    type="button"
                    onClick={() => setCorEscolhida(i === 0 ? null : c)}
                    aria-label={i === 0 ? 'Cor sugerida para a área' : `Cor ${c}`}
                    aria-pressed={cor === c}
                    className="w-8 h-8 rounded-full border-2 transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F3B40]"
                    style={{
                      background: c,
                      borderColor: cor === c ? '#0F3B40' : 'transparent', boxShadow: cor === c ? 'inset 0 0 0 2px #FBF8F3' : undefined,
                      transform: cor === c ? 'scale(1.12)' : undefined,
                    }}
                  />
                ))}
                <label className="relative w-8 h-8 rounded-full border border-dashed border-[#0F3B40]/40 flex items-center justify-center text-[#3F5557] text-lg cursor-pointer hover:border-[#0F3B40]" title="Escolher outra cor">
                  +
                  <input
                    type="color"
                    value={cor}
                    onChange={(e) => setCorEscolhida(e.target.value)}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    aria-label="Escolher outra cor"
                  />
                </label>
              </div>
            </fieldset>
          </div>

          {/* Prévia */}
          <div className="lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:row-span-3 relative lg:pb-10">

            {/* Computador (só telas maiores) */}
            <div className="hidden sm:block sm:mr-20 lg:mr-24 rounded-xl overflow-hidden border border-[#DCD2C6] shadow-[0_40px_80px_-35px_rgba(15,59,64,0.5)] bg-white">
              <div className="flex items-center gap-3 px-4 py-2.5 bg-[#EDEDED] border-b border-black/10">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex-1 max-w-sm mx-auto flex items-center justify-center gap-1.5 rounded-md bg-white px-3 py-1 text-[12px] text-[#444]">
                  <Lock className="w-3 h-3 text-[#777]" />
                  <span className="truncate">{url}</span>
                </div>
                <span className="w-12" />
              </div>

              <div style={{ background: p.fundo, color: p.texto, ...trocaSuave }}>
                {/* Menu */}
                <div className="flex items-center justify-between px-6 py-3.5 border-b" style={{ borderColor: p.suave, ...trocaSuave }}>
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-semibold text-white shrink-0"
                      style={{ background: p.acc, fontFamily: area.fonte, ...trocaSuave }}
                    >
                      {ini}
                    </span>
                    <span className="text-[14px] font-semibold truncate" style={{ color: p.tinta, fontFamily: area.fonte }}>
                      {nomeFinal}
                    </span>
                  </div>
                  <div className="hidden md:flex items-center gap-4 text-[11px]">
                    <span>Início</span>
                    <span>{area.menu}</span>
                    <span>Sobre</span>
                    <span>Contato</span>
                  </div>
                  <span className="text-[11px] font-semibold text-white rounded-full px-3 py-1.5" style={{ background: p.acc, ...trocaSuave }}>
                    {area.botao}
                  </span>
                </div>

                {/* Topo do site */}
                <div className="grid grid-cols-12 gap-5 px-6 pt-8 pb-6 items-center">
                  <div className="col-span-7">
                    <span className="text-[11px] font-medium" style={{ color: p.acc }}>
                      {area.rotulo}{local ? ` em ${local}` : ''}
                    </span>
                    <h3
                      className="mt-2 text-[26px] md:text-[30px] leading-[1.1] font-medium"
                      style={{ color: p.tinta, fontFamily: area.fonte }}
                    >
                      {area.titulo}
                    </h3>
                    <p className="mt-3 text-[12.5px] leading-relaxed max-w-[34ch]">{area.texto}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-white rounded-full px-4 py-2" style={{ background: p.acc, ...trocaSuave }}>
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        Falar no WhatsApp
                      </span>
                      <span className="text-[11.5px] font-semibold rounded-full px-4 py-2 border" style={{ borderColor: p.acc, color: p.acc, ...trocaSuave }}>
                        Ver {area.menu.toLowerCase()}
                      </span>
                    </div>
                  </div>

                  {/* Arco com monograma */}
                  <div className="col-span-5">
                    <div
                      className="relative aspect-[4/5] rounded-t-full overflow-hidden flex items-center justify-center"
                      style={{ background: `linear-gradient(160deg, ${p.suave}, ${p.acc})`, ...trocaSuave }}
                    >
                      <span className="text-white/90 text-[64px] leading-none" style={{ fontFamily: area.fonte }}>
                        {ini}
                      </span>
                      <span
                        className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] rounded-lg bg-white/90 px-2.5 py-1.5 text-[10px] font-medium inline-flex items-center gap-1"
                        style={{ color: p.tinta }}
                      >
                        <MapPin className="w-3 h-3 shrink-0" style={{ color: p.acc }} />
                        <span className="truncate">{local || 'Sua cidade'}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Serviços */}
                <div className="grid grid-cols-3 gap-3 px-6 pb-7">
                  {area.servicos.map((s) => (
                    <div key={s} className="rounded-lg bg-white/70 px-3 py-3 border" style={{ borderColor: p.suave, ...trocaSuave }}>
                      <span className="block w-5 h-[3px] rounded-full mb-2" style={{ background: p.acc }} />
                      <span className="text-[11.5px] font-semibold" style={{ color: p.tinta }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Celular */}
            <div className="mx-auto sm:mx-0 w-[250px] sm:w-[190px] sm:absolute sm:-bottom-6 sm:right-0 rounded-[2rem] bg-[#0F3B40] p-2 shadow-[0_30px_60px_-20px_rgba(15,59,64,0.6)]">
              <div className="rounded-[1.6rem] overflow-hidden" style={{ background: p.fundo, color: p.texto, ...trocaSuave }}>
                <div className="flex items-center justify-between px-3.5 pt-3 pb-2.5 border-b" style={{ borderColor: p.suave }}>
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-semibold text-white shrink-0" style={{ background: p.acc, fontFamily: area.fonte }}>
                      {ini}
                    </span>
                    <span className="text-[11px] font-semibold truncate" style={{ color: p.tinta, fontFamily: area.fonte }}>
                      {nomeFinal}
                    </span>
                  </div>
                  <span className="flex flex-col gap-[3px]">
                    <span className="block w-3.5 h-[1.5px]" style={{ background: p.tinta }} />
                    <span className="block w-3.5 h-[1.5px]" style={{ background: p.tinta }} />
                  </span>
                </div>
                <div className="px-3.5 pt-3.5 pb-4">
                  <div className="aspect-[5/4] rounded-t-full flex items-center justify-center" style={{ background: `linear-gradient(160deg, ${p.suave}, ${p.acc})`, ...trocaSuave }}>
                    <span className="text-white/90 text-[34px] leading-none" style={{ fontFamily: area.fonte }}>{ini}</span>
                  </div>
                  <span className="block mt-3 text-[9px] font-medium" style={{ color: p.acc }}>
                    {area.rotulo}{local ? ` em ${local}` : ''}
                  </span>
                  <span className="block mt-1 text-[15px] leading-[1.15] font-medium" style={{ color: p.tinta, fontFamily: area.fonte }}>
                    {area.titulo}
                  </span>
                  <span className="mt-3 flex items-center justify-center gap-1 w-full rounded-full py-2 text-[10px] font-semibold text-white" style={{ background: p.acc, ...trocaSuave }}>
                    <MessageCircle className="w-3 h-3 fill-current" />
                    Falar no WhatsApp
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Chamada para ação */}
          <div className="lg:col-span-5 lg:row-start-3 space-y-3">
            <a
              href={getWhatsAppLink(msg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-full bg-[#0F3B40] text-[#F4EFE8] text-[16px] hover:bg-[#0A2C30] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F3B40]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Quero o meu site assim
            </a>
            <p className="text-[13px] text-[#3F5557] leading-relaxed max-w-sm">
              Isto é uma prévia rápida. O seu site é feito do zero, com as suas fotos, os seus textos e a identidade da sua marca.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
