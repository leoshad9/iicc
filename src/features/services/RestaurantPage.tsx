import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ChefHat, Clock, Flame, MapPin, Phone, Search, Users, Utensils, X } from 'lucide-react';
import { restaurantDetails, restaurantMenu } from '../../data/restaurant';

export const RestaurantPage: React.FC = () => {
  const { i18n } = useTranslation();
  const isUrdu = i18n.language === 'ur';
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');
  const visibleSections = useMemo(() => restaurantMenu
    .filter(section => category === 'all' || section.id === category)
    .map(section => ({ ...section, items: section.items.filter(item =>
      `${item.name} ${item.note ?? ''} ${section.name} ${section.nameUrdu}`.toLowerCase().includes(query.trim().toLowerCase())) }))
    .filter(section => section.items.length > 0), [category, query]);
  const resultCount = visibleSections.reduce((total, section) => total + section.items.length, 0);
  const text = (en: string, ur: string) => isUrdu ? ur : en;

  return (
    <div className="w-full">
      <section className="relative overflow-hidden bg-[#06241e] text-stone-100">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-7xl mx-auto px-4 py-14 sm:py-20 lg:py-24 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <nav aria-label={text('Breadcrumb', 'صفحے کا راستہ')} className="flex gap-2 items-center text-xs text-stone-300 mb-10">
              <Link to="/services" className="hover:text-amber-200">{text('Services', 'خدمات')}</Link><span aria-hidden="true">/</span><span>{text('Restaurant', 'ریستوران')}</span>
            </nav>
            <span className="inline-flex items-center gap-2 text-amber-300 uppercase tracking-[0.18em] text-xs font-bold"><Utensils className="w-4 h-4" />{text('A taste of Mughal heritage', 'مغل روایت کا ذائقہ')}</span>
            <h1 className={`mt-5 font-serif-title ${isUrdu ? 'text-4xl sm:text-5xl leading-loose' : 'text-5xl sm:text-6xl lg:text-7xl leading-tight'}`}>{text(restaurantDetails.name, restaurantDetails.nameUrdu)}</h1>
            <p className="mt-5 text-lg text-amber-100 font-serif-title">{text('For a memorable outing.', 'ایک یادگار ملاقات کے لیے۔')}</p>
            <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-stone-300">{text('Delhi’s beloved Mughlai flavours, brought together on a single platter. Settle into a soothing ambience and savour a tradition shaped by royal kitchens.', 'دہلی کے پسندیدہ مغلئی ذائقے ایک دسترخوان پر۔ پُرسکون ماحول میں شاہی باورچی خانوں سے وابستہ روایتی پکوانوں کا لطف اٹھائیں۔')}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#restaurant-menu" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-300 text-blue-950 font-bold text-sm hover:bg-amber-200 transition">{text('Explore the Menu', 'مینو دیکھیں')}<ArrowRight className="w-4 h-4 rtl:rotate-180" /></a>
              <a href="#plan-your-visit" className="inline-flex items-center px-6 py-3 rounded-xl border border-white/25 text-sm hover:bg-white/10 transition">{text('Plan Your Visit', 'اپنی آمد کی منصوبہ بندی کریں')}</a>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-3 rounded-t-[7rem] rounded-b-3xl border border-amber-300/20 pointer-events-none" />
            <div className="relative rounded-t-[6rem] rounded-b-2xl overflow-hidden border border-white/15 bg-[#10372c] p-8 sm:p-10 text-center">
              <div className="mx-auto w-16 h-16 rounded-full border border-amber-300/30 flex items-center justify-center text-amber-300"><ChefHat className="w-8 h-8" /></div>
              <p className="mt-6 text-xs uppercase tracking-widest text-stone-300">{text('Managed by', 'زیرِ انتظام')}</p>
              <p className="mt-2 text-5xl font-serif-title text-amber-200">{restaurantDetails.managedBy}</p>
              <div className="my-8 mx-auto w-14 h-px bg-amber-300/40" />
              <div className="space-y-5 text-sm">
                <div><p className="text-stone-300">{text('Lunch', 'دوپہر کا کھانا')}</p><p className="mt-1 text-xl font-semibold" dir="ltr">{restaurantDetails.lunch}</p></div>
                <div><p className="text-stone-300">{text('Dinner', 'رات کا کھانا')}</p><p className="mt-1 text-xl font-semibold" dir="ltr">{restaurantDetails.dinner}</p></div>
              </div>
              <p className="mt-8 pt-6 border-t border-white/15 text-xs text-stone-300">{text('India Islamic Cultural Centre · New Delhi', 'انڈیا اسلامک کلچرل سینٹر · نئی دہلی')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-stone-200 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">{text('Our culinary tradition', 'ہمارا پکوانی ورثہ')}</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-serif-title text-stone-900 leading-snug">{text('Royal roots. Timeless flavours.', 'شاہی روایت، لازوال ذائقے۔')}</h2>
            <div className="mt-6 flex items-center gap-3 text-sm text-stone-600"><Flame className="w-5 h-5 text-amber-700 shrink-0" />{text('Traditional methods. Experienced chefs.', 'روایتی طریقے۔ تجربہ کار باورچی۔')}</div>
          </div>
          <div className="lg:col-span-8 space-y-5 text-sm sm:text-base leading-relaxed text-stone-600">
            <p>{text('Experience royal Mughlai cuisine prepared by experienced chefs using traditional methods. Herbs and spices impart distinctive flavours to dishes cooked in degs and clay pots over coal or charcoal, then served in Mughlai style.', 'تجربہ کار باورچی روایتی طریقوں سے شاہی مغلئی کھانے تیار کرتے ہیں۔ جڑی بوٹیوں اور مصالحوں کی خوشبو سے بھرپور پکوان دیگوں اور مٹی کے برتنوں میں کوئلے کی آنچ پر پکائے جاتے ہیں اور مغلئی انداز میں پیش کیے جاتے ہیں۔')}</p>
            <p>{text('Shaped by the imperial kitchens of the Mughal Empire and Persian and Turkish influences from Central Asia, this South Asian cuisine ranges from delicately mild to richly spiced. Whole and ground spices, dried fruits and nuts lend its dishes their unmistakable aroma and taste.', 'مغل سلطنت کے شاہی باورچی خانوں اور وسط ایشیا کے فارسی و ترکی اثرات نے اس جنوبی ایشیائی پکوانی روایت کو تشکیل دیا۔ ہلکے سے تیز مصالحے، ثابت اور پسے ہوئے مصالحوں کے ساتھ خشک میوہ جات ان پکوانوں کو منفرد خوشبو اور ذائقہ دیتے ہیں۔')}</p>
            <p>{text('From warming shorbas and roasted meats to rich, creamy and butter-based curries, the meal unfolds with a variety of accompaniments and a sweet finish. Dilli Dastarkhwan brings Delhi’s cherished Mughlai dishes together in a soothing setting made for an unhurried, memorable outing.', 'گرم شوربوں اور بھنے گوشت سے لے کر ملائی اور مکھن سے بھرپور سالن تک، مختلف لوازمات اور مٹھاس کھانے کو مکمل کرتے ہیں۔ دلی دسترخوان کا پُرسکون ماحول دہلی کے پسندیدہ مغلئی پکوانوں کے ساتھ ایک یادگار وقت گزارنے کی دعوت دیتا ہے۔')}</p>
          </div>
        </div>
      </section>

      <section id="restaurant-menu" className="scroll-mt-28 bg-stone-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
            <div><span className="text-xs font-bold uppercase tracking-widest text-amber-700">{text('From shorba to mithas', 'شوربے سے مٹھاس تک')}</span><h2 className="mt-2 text-3xl sm:text-4xl font-serif-title text-stone-900">{text('The Dastarkhwan Menu', 'دسترخوان کا مینو')}</h2></div>
          </div>
          <p className="mt-4 text-sm text-stone-600 max-w-3xl">{text('Browse by course or search for a favourite. Prices were not included; please confirm current prices, availability and dietary requirements with the restaurant.', 'مینو میں اپنی پسند کا کھانا تلاش کریں۔ قیمتیں فراہم نہیں کی گئیں؛ موجودہ قیمتوں، دستیابی اور غذائی ضروریات کی ریستوران سے تصدیق کریں۔')}</p>
          <div className="mt-8 grid lg:grid-cols-12 gap-8 items-start">
            <aside className="lg:col-span-3 lg:sticky lg:top-28">
              <nav aria-label={text('Menu categories', 'مینو کی اقسام')} className="flex flex-wrap lg:flex-col gap-2">
                {[{ id: 'all', name: 'All courses', nameUrdu: 'تمام پکوان' }, ...restaurantMenu].map(section => (
                  <button key={section.id} type="button" aria-pressed={category === section.id} onClick={() => setCategory(section.id)} className={`rounded-xl px-4 py-3 text-start text-sm transition ${category === section.id ? 'bg-[#06241e] text-amber-200 shadow-sm' : 'bg-white border border-stone-200 text-stone-600 hover:border-amber-500'}`}>
                    {text(section.name, section.nameUrdu)}
                  </button>
                ))}
              </nav>
            </aside>
            <div className="lg:col-span-9 min-w-0">
              <label htmlFor="menu-search" className="block text-sm font-semibold text-stone-700 mb-2">{text('Search the menu', 'مینو میں تلاش کریں')}</label>
              <div className="relative">
                <Search className="absolute start-4 top-3.5 w-5 h-5 text-stone-400" />
                <input id="menu-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder={text('Try biryani, paneer or shorba…', 'Biryani، Paneer یا Shorba تلاش کریں…')} className="w-full rounded-xl border border-stone-300 bg-white ps-12 pe-12 py-3 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                {query && <button type="button" aria-label={text('Clear search', 'تلاش صاف کریں')} onClick={() => setQuery('')} className="absolute end-1 top-1 p-3 text-stone-500"><X className="w-4 h-4" /></button>}
              </div>
              <p role="status" className="mt-3 mb-6 text-xs text-stone-500">{resultCount} {text('menu entries shown', 'پکوان دکھائے گئے ہیں')}</p>
              <div className="space-y-6">
                {visibleSections.map(section => (
                  <section key={section.id} aria-labelledby={`menu-${section.id}`} className="rounded-2xl border border-stone-200 bg-white overflow-hidden">
                    <div className="px-5 sm:px-6 py-5 border-b border-stone-200 flex items-center justify-between gap-4">
                      <div><h3 id={`menu-${section.id}`} className="text-xl font-serif-title font-bold text-stone-900">{text(section.name, section.nameUrdu)}</h3>{!isUrdu && <p className="mt-1 text-xs text-stone-500">{section.description}</p>}</div><span className="text-xs text-amber-800 bg-amber-50 rounded-full px-3 py-1">{section.items.length}</span>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-x-6 px-5 sm:px-6">
                      {section.items.map(item => <li key={item.id} dir="ltr" lang="en" className="py-4 border-b border-stone-100 flex gap-3 text-left"><span className="text-[11px] pt-0.5 text-stone-400 tabular-nums w-5 shrink-0">{String(item.id).padStart(2, '0')}</span><div><p className="text-sm font-semibold text-stone-800">{item.name}</p>{item.note && <p className="mt-2 text-xs text-amber-800 bg-amber-50 rounded-lg p-2">{item.note}</p>}</div></li>)}
                    </ul>
                  </section>
                ))}
                {resultCount === 0 && <div className="rounded-2xl border border-dashed border-stone-300 p-10 text-center"><p className="text-stone-600">{text('No dishes match your selection.', 'آپ کی تلاش سے کوئی پکوان نہیں ملا۔')}</p><button onClick={() => { setQuery(''); setCategory('all'); }} className="mt-4 text-sm font-bold text-[#1e3a8a] hover:underline">{text('Reset filters', 'تمام پکوان دکھائیں')}</button></div>}
              </div>
              <p className="mt-6 text-xs leading-relaxed text-stone-500">{text('Dish names follow the supplied menu, including original spellings, and remain in English for easy reference when ordering. Please check ingredients and allergens with the team.', 'پکوانوں کے نام فراہم کردہ مینو کے مطابق اصل ہجوں کے ساتھ انگریزی میں رکھے گئے ہیں۔ اجزاء اور الرجی سے متعلق معلومات عملے سے معلوم کریں۔')}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="plan-your-visit" className="scroll-mt-28 py-16 sm:py-20 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">{text('A place at our table', 'ہمارے دسترخوان پر خوش آمدید')}</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-serif-title text-stone-900">{text('Make an Occasion of It', 'اپنی ملاقات کو یادگار بنائیں')}</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { title: text('Main Dining', 'مرکزی ہال'), value: restaurantDetails.mainSeating, description: text('Diners accommodated in the main area, in a soothing setting for a memorable meal.', 'مرکزی ہال میں پُرسکون ماحول کے ساتھ یادگار کھانے کا لطف اٹھائیں۔') },
              { title: text('Private Dining Room', 'نجی ڈائننگ روم'), value: restaurantDetails.privateSeating, description: text('A more intimate setting when you would like your dining to be a private affair. Enquire about availability.', 'نجی ملاقاتوں کے لیے الگ ماحول۔ دستیابی کے بارے میں معلوم کریں۔') }
            ].map(space => <article key={space.title} className="rounded-2xl border border-stone-200 bg-stone-50 p-6 sm:p-8"><Users className="w-6 h-6 text-amber-700" /><h3 className="mt-5 text-xl font-serif-title text-stone-900">{space.title}</h3><p className="mt-4 text-4xl font-serif-title text-stone-900">{space.value} <span className="text-sm font-sans text-stone-500">{text('seats', 'نشستیں')}</span></p><p className="mt-4 text-sm leading-relaxed text-stone-600">{space.description}</p></article>)}
            <article className="rounded-2xl bg-[#06241e] p-6 sm:p-8 text-stone-100"><Clock className="w-6 h-6 text-amber-300" /><h3 className="mt-5 text-xl font-serif-title">{text('Dining Hours', 'کھانے کے اوقات')}</h3><dl className="mt-5 space-y-5"><div><dt className="text-xs text-stone-300">{text('Lunch', 'دوپہر کا کھانا')}</dt><dd className="mt-1 text-lg" dir="ltr">{restaurantDetails.lunch}</dd></div><div><dt className="text-xs text-stone-300">{text('Dinner', 'رات کا کھانا')}</dt><dd className="mt-1 text-lg" dir="ltr">{restaurantDetails.dinner}</dd></div></dl></article>
          </div>
          <div className="mt-8 rounded-2xl border border-stone-200 p-6 sm:p-8 flex flex-col lg:flex-row gap-6 justify-between">
            <div className="flex gap-3"><MapPin className="w-5 h-5 shrink-0 text-amber-700" /><div><h3 className="font-semibold text-stone-900">{text('Find us at IICC', 'آئی آئی سی سی میں تشریف لائیں')}</h3><address className="mt-2 not-italic text-sm text-stone-600">India Islamic Cultural Centre<br />87–88, Lodhi Road, New Delhi – 110003</address></div></div>
            <div><p className="text-sm font-semibold text-stone-900">{text('IICC General Enquiries', 'آئی آئی سی سی عمومی معلومات')}</p><div className="mt-3 flex flex-wrap gap-4">{['011-43535353', '011-43535350'].map(phone => <a key={phone} href={`tel:+91${phone.slice(1).replace(/-/g, '')}`} className="inline-flex items-center gap-2 text-sm text-[#1e3a8a] hover:underline"><Phone className="w-4 h-4" /><span dir="ltr">{phone}</span></a>)}</div><p className="mt-3 text-xs text-stone-500">{text('Ask to be connected to the restaurant for dining enquiries.', 'کھانے سے متعلق معلومات کے لیے ریستوران سے رابطہ کروانے کی درخواست کریں۔')}</p></div>
          </div>
        </div>
      </section>
    </div>
  );
};
