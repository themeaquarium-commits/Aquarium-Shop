import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link, useRouter } from '../context/RouterContext';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const { currentMeta, path } = useRouter();

  // If no custom items passed, construct from current route
  const breadcrumbItems: BreadcrumbItem[] = items || [
    { name: 'Home', path: '/' },
    ...(path !== '/' ? [{ name: currentMeta.breadcrumbName, path }] : []),
  ];

  if (breadcrumbItems.length <= 1) return null;

  // Schema.org BreadcrumbList JSON-LD
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `https://themeaquarium.com${item.path === '/' ? '' : item.path}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="bg-[#040c14]/80 border-b border-slate-800/80 py-3 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-2 text-xs font-mono text-slate-400">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;

          return (
            <React.Fragment key={item.path + index}>
              {index === 0 ? (
                <Link
                  to={item.path}
                  className="flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  <Home className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{item.name}</span>
                </Link>
              ) : isLast ? (
                <span className="text-emerald-400 font-semibold truncate max-w-xs sm:max-w-md">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  {item.name}
                </Link>
              )}

              {!isLast && (
                <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};
