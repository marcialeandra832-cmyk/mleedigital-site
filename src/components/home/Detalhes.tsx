// Pequenos detalhes visuais que vêm do portal do topo e se repetem pelo site.

// Linhas laminadas rosé e grafite (as camadas do portal), usadas como divisória
export function LinhasPortal({ escuro = false, className = '' }: { escuro?: boolean; className?: string }) {
  return (
    <div aria-hidden="true" className={`linhas-portal ${escuro ? 'linhas-portal--escuro' : ''} ${className}`}>
      <span /><span /><span /><span /><span />
    </div>
  );
}

// Marcador de linha com ponto, usado nos links e botões
export function Ponto({ className = '' }: { className?: string }) {
  return <span aria-hidden="true" className={`ponto ${className}`} />;
}
