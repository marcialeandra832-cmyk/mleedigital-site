import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Navegação estrutural" className="py-3 px-4 sm:px-6 max-w-7xl mx-auto w-full text-xs sm:text-sm text-[#3F5557]">
      <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2">
        <li className="flex items-center">
          <Link 
            to="/" 
            className="flex items-center gap-1 hover:text-[#A8675B] transition-colors"
            title="Página Inicial"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Início</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5 sm:gap-2">
              <ChevronRight className="w-3 h-3 text-[#3F5557]" />
              {isLast || !item.path ? (
                <span className="text-[#0F3B40] font-medium truncate max-w-[200px] sm:max-w-md" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link 
                  to={item.path} 
                  className="hover:text-[#A8675B] transition-colors truncate max-w-[150px] sm:max-w-xs"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
