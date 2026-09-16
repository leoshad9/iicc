import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { canonicalUrl, getSeoPage } from '../../data/seo';

export default function Seo() {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const page = getSeoPage(pathname);
    const title = pathname === '/' ? page.title : `${page.title} | IICC New Delhi`;
    const setMeta = (attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.content = content;
    };
    document.title = title;
    setMeta('name', 'description', page.description);
    setMeta('name', 'robots', page.noindex ? 'noindex, follow' : 'index, follow');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', page.description);
    setMeta('property', 'og:url', canonicalUrl(pathname));
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', page.description);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl(pathname);
    document.documentElement.lang = i18n.language.startsWith('ur') ? 'ur' : 'en';
    document.documentElement.dir = i18n.language.startsWith('ur') ? 'rtl' : 'ltr';
  }, [pathname, i18n.language]);

  return null;
}
