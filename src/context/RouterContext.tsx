import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ROUTES_METADATA, RouteMeta, getRouteMetadata } from '../types/routes';

interface RouterContextType {
  path: string;
  search: string;
  queryParams: URLSearchParams;
  navigate: (to: string, options?: { replace?: boolean; scrollToTop?: boolean }) => void;
  currentMeta: RouteMeta;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

function normalizePath(pathname: string): string {
  // Strip trailing slashes except for root '/'
  let clean = pathname.replace(/\/+$/, '');
  if (!clean) clean = '/';
  return clean;
}

export const RouterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Check for SPA redirect from 404.html (e.g. /?p=/shop or sessionStorage)
  const getInitialPath = (): { path: string; search: string } => {
    if (typeof window === 'undefined') return { path: '/', search: '' };

    const searchParams = new URLSearchParams(window.location.search);
    const redirectedPath = searchParams.get('p');
    if (redirectedPath) {
      // Clean query parameter and update history
      searchParams.delete('p');
      const remainingSearch = searchParams.toString() ? `?${searchParams.toString()}` : '';
      const targetPath = normalizePath(redirectedPath);
      window.history.replaceState(null, '', targetPath + remainingSearch + window.location.hash);
      return { path: targetPath, search: remainingSearch };
    }

    return {
      path: normalizePath(window.location.pathname),
      search: window.location.search,
    };
  };

  const initial = getInitialPath();
  const [currentPath, setCurrentPath] = useState<string>(initial.path);
  const [currentSearch, setCurrentSearch] = useState<string>(initial.search);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
      setCurrentSearch(window.location.search);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string, options?: { replace?: boolean; scrollToTop?: boolean }) => {
    const [pathnamePart, searchPart = ''] = to.split('?');
    const targetPath = normalizePath(pathnamePart);
    const targetSearch = searchPart ? `?${searchPart}` : '';
    const fullUrl = targetPath + targetSearch;

    if (options?.replace) {
      window.history.replaceState(null, '', fullUrl);
    } else {
      window.history.pushState(null, '', fullUrl);
    }

    setCurrentPath(targetPath);
    setCurrentSearch(targetSearch);

    if (options?.scrollToTop !== false) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const queryParams = new URLSearchParams(currentSearch);

  // Get current metadata dynamically including categories and products
  const currentMeta: RouteMeta = getRouteMetadata(currentPath);

  // Dynamically update document title, meta tags, and canonical link
  useEffect(() => {
    if (typeof document === 'undefined') return;

    document.title = currentMeta.title;

    // Update or create meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', currentMeta.description);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentMeta.canonical);

    // Update OpenGraph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', currentMeta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', currentMeta.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', currentMeta.canonical);
  }, [currentPath, currentMeta]);

  return (
    <RouterContext.Provider
      value={{
        path: currentPath,
        search: currentSearch,
        queryParams,
        navigate,
        currentMeta,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};

// Reusable Link component for web app routing
interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  replace?: boolean;
  scrollToTop?: boolean;
  children: ReactNode;
}

export const Link: React.FC<LinkProps> = ({
  to,
  replace = false,
  scrollToTop = true,
  children,
  onClick,
  className,
  ...rest
}) => {
  const { navigate, path } = useRouter();
  const [toPath] = to.split('?');
  const isActive = normalizePath(toPath) === path;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Let browser handle middle click, cmd/ctrl click (open in new tab)
    if (e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
      e.preventDefault();
      if (onClick) onClick(e);
      navigate(to, { replace, scrollToTop });
    }
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={className}
      data-active={isActive ? 'true' : 'false'}
      {...rest}
    >
      {children}
    </a>
  );
};
