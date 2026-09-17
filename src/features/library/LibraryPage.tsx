import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BookOpen, Calendar, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { libraryDetails } from '../../data/library';

export const LibraryPage: React.FC = () => {
  const { i18n } = useTranslation();
  const isUrdu = i18n.language === 'ur';
  const text = (en: string, ur: string) => isUrdu ? ur : en;
  return (
    <div>
      <section className="bg-[#06241e] text-stone-100 relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex gap-2 items-center text-amber-300 text-xs font-bold uppercase tracking-widest"><BookOpen className="w-4 h-4" />{text('Welcome to', 'خوش آمدید')}</span>
            <h1 className={`mt-5 font-serif-title ${isUrdu ? 'text-4xl sm:text-5xl leading-loose' : 'text-5xl sm:text-6xl leading-tight'}`}>{text(libraryDetails.name, libraryDetails.nameUrdu)}</h1>
            <p className="mt-5 text-stone-300">{text('India Islamic Cultural Centre · Lodhi Road, New Delhi', 'انڈیا اسلامک کلچرل سینٹر · لودھی روڈ، نئی دہلی')}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#library-holidays" className="bg-amber-300 text-blue-950 px-5 py-3 rounded-xl text-sm font-bold hover:bg-amber-200">{text('View Holiday Schedule', 'تعطیلات دیکھیں')}</a>
              <a href="#library-contact" className="border border-white/25 px-5 py-3 rounded-xl text-sm hover:bg-white/10">{text('Contact the Library', 'لائبریری سے رابطہ')}</a>
            </div>
          </div>
          <aside className="lg:col-span-5 rounded-3xl border border-amber-200/20 bg-[#10372c] p-8">
            <Clock className="w-7 h-7 text-amber-300" />
            <h2 className="mt-5 text-xl font-serif-title">{text('Library Timings', 'لائبریری کے اوقات')}</h2>
            <p className="mt-4 text-2xl sm:text-3xl text-amber-200" dir="ltr">{libraryDetails.hours}</p>
            <p className="mt-3 text-stone-300 text-sm">{text('Monday to Saturday', 'پیر سے ہفتہ')}</p>
            <p className="mt-6 pt-5 border-t border-white/15 text-xs text-stone-300">{text('Closed on Sundays and the holidays listed below.', 'اتوار اور درج ذیل تعطیلات پر بند رہتی ہے۔')}</p>
          </aside>
        </div>
      </section>
      <section className="bg-white py-12 border-b border-stone-200">
        <figure className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-widest font-bold text-amber-700">{text('Quote of the Day', 'آج کا قول')}</p>
          <blockquote className="mt-5 text-2xl sm:text-3xl font-serif-title text-stone-900 leading-relaxed">“{text(libraryDetails.quote, 'جب چیزیں مل کر آگے بڑھتی ہیں، الگ تھلگ نہیں، تو سب بہتر ہوتا ہے۔')}”</blockquote>
          <figcaption className="mt-5 text-sm text-stone-500">Silo · <a href="https://www.silo.net" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-700">www.silo.net</a></figcaption>
        </figure>
      </section>
      <section id="library-holidays" className="scroll-mt-28 bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <Calendar className="w-7 h-7 text-amber-700" />
            <h2 className="mt-4 text-3xl font-serif-title text-stone-900">{text('Plan Your Library Visit', 'لائبریری آنے کا منصوبہ بنائیں')}</h2>
            <p className="mt-5 text-sm leading-relaxed text-stone-600">{text('The library remains closed on these holidays. Dates marked “As per calendar” vary; please confirm the current schedule with the library before visiting.', 'ان تعطیلات پر لائبریری بند رہتی ہے۔ جن کی تاریخ کیلنڈر کے مطابق ہے، ان کی موجودہ تاریخ آنے سے پہلے لائبریری سے معلوم کریں۔')}</p>
          </div>
          <div className="lg:col-span-8 min-w-0 rounded-2xl border border-stone-200 overflow-hidden bg-white">
            <table className="w-full text-sm text-start">
              <caption className="sr-only">{text('Library holiday schedule', 'لائبریری کی تعطیلات')}</caption>
              <thead className="bg-[#06241e] text-stone-100"><tr><th scope="col" className="p-4 text-start">{text('Holiday', 'تعطیل')}</th><th scope="col" className="p-4 text-start">{text('Date', 'تاریخ')}</th></tr></thead>
              <tbody>{libraryDetails.holidays.map(holiday => <tr key={holiday.name} className="border-t border-stone-200"><th scope="row" className="p-4 text-start font-medium text-stone-800">{text(holiday.name, holiday.urdu)}</th><td className="p-4 text-stone-600">{text(holiday.date ?? 'As per calendar', holiday.dateUrdu ?? 'کیلنڈر کے مطابق')}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>
      <section id="library-contact" className="scroll-mt-28 bg-white py-16 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif-title text-stone-900">{text('Contact the Library', 'لائبریری سے رابطہ')}</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200"><MapPin className="w-6 h-6 text-amber-700" /><h3 className="mt-4 font-semibold text-stone-900">{text('Visit', 'پتہ')}</h3><address className="mt-3 not-italic text-sm text-stone-600 leading-relaxed">India Islamic Cultural Centre (IICC)<br />87–88, Lodhi Road<br />New Delhi – 110003, India</address><Link to="/" className="inline-block mt-4 text-sm text-[#1e3a8a] underline">{text('IICC Website', 'آئی آئی سی سی ویب سائٹ')}</Link></div>
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 min-w-0"><Mail className="w-6 h-6 text-amber-700" /><h3 className="mt-4 font-semibold text-stone-900">{text('Email', 'ای میل')}</h3><a href={`mailto:${libraryDetails.email}`} dir="ltr" className="inline-block mt-3 break-all text-sm text-[#1e3a8a] underline">{libraryDetails.email}</a><p className="mt-4 text-sm text-stone-600">{text('For catalog access and library enquiries, please contact the library team.', 'کیٹلاگ تک رسائی اور لائبریری کی معلومات کے لیے عملے سے رابطہ کریں۔')}</p></div>
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200"><Phone className="w-6 h-6 text-amber-700" /><h3 className="mt-4 font-semibold text-stone-900">{text('Call', 'فون')}</h3>{libraryDetails.phones.map(phone => <a key={phone.href} href={phone.href} dir="ltr" className="block mt-3 text-sm text-[#1e3a8a] underline">{phone.label}</a>)}</div>
          </div>
        </div>
      </section>
    </div>
  );
};
