import monograma from '../../assets/brand/monograma.svg';
import monogramaClaro from '../../assets/brand/monograma-claro.svg';

type Props = { claro?: boolean; tamanho?: number; soMonograma?: boolean; className?: string };

// Logo oficial da MLee Digital: monograma + nome em Bodoni Moda + "DIGITAL" em Jost.
export function Logo({ claro = false, tamanho = 36, soMonograma = false, className = '' }: Props) {
  const cor = claro ? 'text-[#F4EFE8]' : 'text-[#0F3B40]';
  return (
    <span className={`inline-flex items-center ${className}`} style={{ gap: tamanho * 0.42 }}>
      <img
        src={claro ? monogramaClaro : monograma}
        alt={soMonograma ? 'MLee Digital' : ''}
        width={Math.round(tamanho * 1.26)}
        height={tamanho}
        style={{ width: tamanho * 1.26, height: tamanho }}
      />
      {!soMonograma && (
        <>
          <span className="block bg-[#CC8A80]" style={{ width: 1, height: tamanho * 0.8 }} aria-hidden="true" />
          <span className="flex flex-col">
            <span className={`font-serif leading-none ${cor}`} style={{ fontSize: tamanho * 0.52, fontWeight: 500 }}>MLee</span>
            <span className={`font-sans uppercase ${cor}`} style={{ fontSize: Math.max(8, tamanho * 0.2), letterSpacing: '0.5em', marginTop: tamanho * 0.1 }}>Digital</span>
          </span>
        </>
      )}
    </span>
  );
}
