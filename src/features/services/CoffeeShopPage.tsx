import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Coffee, Mail, MapPin, PlayCircle } from 'lucide-react';
import { youtubeEmbedUrl, youtubeThumbnailUrl, youtubeWatchUrl } from '../../shared/utils/youtube';
import { coffeeShopInfo, coffeeShopVideo } from '../../data/mockData';

export const CoffeeShopPage: React.FC = () => {
  const { i18n } = useTranslation();
  const isUrdu = i18n.language === 'ur';
  const t = (en: string, ur: string) => isUrdu ? ur : en;
  const title = coffeeShopVideo.title;
  const thumb = youtubeThumbnailUrl(coffeeShopVideo.youtubeId);
  const watchLink = youtubeWatchUrl(coffeeShopVideo.youtubeId);
  const embedUrl = youtubeEmbedUrl(coffeeShopVideo.youtubeId);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="w-full" data-page="coffee-shop">
      <section className="relative overflow-hidden bg-stone-900 text-stone-100">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="relative max-w-7xl mx-auto px-4 py-14 sm:py-20 lg:py-24">
          <nav aria-label={t('Breadcrumb', 'صفحے کا راستہ')} className="flex gap-2 items-center text-xs text-stone-300 mb-8">
            <Link to="/services" className="hover:text-amber-200">{t('Services', 'خدمات')}</Link><span aria-hidden="true">/</span><span>{t('Coffee Shop', 'کفے شاپ')}</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-amber-300 uppercase tracking-[0.18em] text-xs font-bold"><Coffee className="w-4 h-4" />{t('A pause between commitments', 'کاموں کے درمیان ایک مختہر')}</span>
            <h1 className={`mt-5 font-serif-title font-bold ${isUrdu ? 'text-3xl sm:text-4xl leading-loose' : 'text-4xl sm:text-5xl lg:text-6xl leading-tight'}`}>{t(coffeeShopInfo.name, coffeeShopInfo.nameUrdu)}</h1>
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-stone-300 max-w-xl">{t(coffeeShopInfo.vibe, coffeeShopInfo.vibeUrdu)}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#coffee-shop-video" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-300 text-blue-950 font-bold text-sm hover:bg-amber-200 transition">{t('Watch the Space', 'اس جگہ کو دیکھیں')}<ArrowRight className="w-4 h-4 rtl:rotate-180" /></a>
              <a href="#coffee-shop-contact" className="inline-flex items-center px-6 py-3 rounded-xl border border-white/25 text-sm hover:bg-white/10 transition">{t('Find Us at IICC', 'آئی آئی سی سی میں تشریف کریں')}</a>
            </div>
          </div>
        </div>
      </section>

      <section id="coffee-shop-video" className="scroll-mt-28 px-4 py-16 sm:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="lg:w-1/2 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-700">{t('Show, don\'t tell', 'دکھائیں، نہ کہ بتائیں')}</span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-serif-title text-stone-900">{t('A Quiet Coffee Lounge', 'ایک پرسکون کفے لاؤنج')}</h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-stone-600">{t(coffeeShopInfo.vibe, coffeeShopInfo.vibeUrdu)}</p>
              <p className="text-sm text-stone-500">{t(coffeeShopInfo.menuHint, coffeeShopInfo.menuHintUrdu)}</p>
            </div>
            <div className="lg:w-1/2">
              {thumb && !playing && (
                <button type="button" onClick={() => setPlaying(true)} aria-label={t('Play video: The Coffee Shop', 'ویڈیو چلائیں: کفے شاپ')} className="group relative block w-full rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-sm ring-1 ring-stone-200 hover:ring-amber-300 transition">
                  <img src={thumb} alt={title} className="w-full aspect-video object-cover" />
                  <span className="absolute inset-0 flex items-center justify-center bg-blue-950/25 group-hover:bg-blue-950/35 transition">
                    <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/95 text-blue-950 shadow-lg group-hover:scale-105 transition"><PlayCircle className="w-10 h-10" /></span>
                  </span>
                </button>
              )}
              {thumb && playing && (
                <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm ring-1 ring-stone-200">
                  <iframe src={`${embedUrl}?autoplay=1`} title={title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full aspect-video" />
                </div>
              )}
              {!thumb && <div className="h-48 bg-stone-200 rounded-2xl flex items-center justify-center text-stone-500">{t('Video thumbnail unavailable', 'ویڈیو کی تصویر دستیاب نہیں')}</div>}
              <p className="mt-3 text-xs text-stone-500 flex flex-wrap gap-x-4 gap-y-1">{t('Video by', 'ویڈیو بنا')} {coffeeShopVideo.author}<a href={watchLink} target="_blank" rel="noreferrer noopener" className="text-[#1e3a8a] font-semibold hover:underline">{t('Open on YouTube', 'یوٹیوب پر کھولیں')}</a></p>
            </div>
          </div>
        </div>
      </section>

      <section id="coffee-shop-contact" className="scroll-mt-28 bg-white border-t border-stone-200 px-4 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">{t('Reach out', 'رابطہ کریں')}</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-serif-title text-stone-900">{t('Find Us at IICC', 'آئی آئی سی سی میں تشریف کریں')}</h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-8 p-6 sm:p-8 rounded-2xl border border-stone-200 bg-stone-50">
            {[
              { icon: <MapPin className="w-5 h-5" />, label: t('Address', 'پتہ'), value: 'India Islamic Cultural Centre\n87–88, Lodhi Road, New Delhi – 110003' },
              { icon: <Mail className="w-5 h-5" />, label: t('General Enquiries', 'عمومی معلومات'), value: 'iiccdelhi29@rediffmail.com' }
            ].map(item => (
              <div key={item.label} className="flex gap-3">
                <div className="shrink-0 mt-0.5 text-amber-700">{item.icon}</div>
                <div>
                  <p className="text-xs text-stone-500 font-semibold">{item.label}</p>
                  <p className="mt-0.5 text-sm text-stone-700 whitespace-pre-line">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-stone-500">{t('Ask the General Enquiries desk to connect you with the coffee shop.', 'کفے شاپ سے رابطے کے لیے General Enquiries ڈیسک سے رابطہ کروانے کی درخواست کریں۔')}</p>
        </div>
      </section>
    </div>
  );
};
