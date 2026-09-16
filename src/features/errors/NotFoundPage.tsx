import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 text-center">
      <p className="text-sm font-bold text-blue-900">404</p>
      <h1 className="text-3xl font-serif-title font-bold mt-3">{t('notFound.title')}</h1>
      <p className="text-stone-600 mt-4">{t('notFound.description')}</p>
      <Link to="/" className="inline-block mt-6 text-blue-900 underline">{t('nav.home')}</Link>
    </section>
  );
}
