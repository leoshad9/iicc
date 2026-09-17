import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Building, 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle, 
  ShieldCheck,
  ExternalLink,
  Lock,
  X
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { IICCLogo } from './IICCLogo';

export const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [activePolicyModal, setActivePolicyModal] = useState<'terms' | 'privacy' | 'disclaimer' | null>(null);
  const location = useLocation();
  const currentLang = i18n.language as 'en' | 'ur';

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterSubscribed(false);
        setNewsletterEmail('');
      }, 3500);
    }
  };

  const isHome = location.pathname === '/';

  return (
    <footer className={`bg-[#07211b] text-stone-300 pt-16 pb-8 border-t border-blue-950 transition-all ${isHome ? '' : 'mt-0'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-blue-900/60">
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-xl shadow-xs shrink-0">
                <IICCLogo size="sm" variant="icon-only" />
              </div>
              <div>
                <h3 className="font-display font-bold text-stone-100 text-sm tracking-wide">
                  INDIA ISLAMIC CULTURAL CENTRE
                </h3>
                <div className="text-[11px] text-amber-400 font-medium">
                  {currentLang === 'ur' ? 'نئی دہلی · لودھی روڈ' : 'New Delhi · Lodhi Road · Estd. 1981'}
                </div>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              {currentLang === 'ur' 
                ? 'ایک خود مختار، غیر سیاسی قومی ادارہ جو ثقافتی ہم آہنگی، ادب، بین المذاہب مکالمہ، کثیرگرائی، اور فکری بیداری کے فروغ کے لیے وقف ہے۔'
                : 'An autonomous, non-political national institution dedicated to cultural harmony, literature, interfaith dialogue, pluralism, and intellectual enlightenment.'}
            </p>

            <div className="pt-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-amber-300 mb-2">
                {currentLang === 'ur' ? 'نیوز لیٹر اور پروگرام بُلٹنز' : 'Newsletter & Program Bulletins'}
              </div>
              {newsletterSubscribed ? (
                <div className="p-2.5 bg-blue-900/60 text-amber-200 rounded-lg text-xs flex items-center gap-2 border border-amber-500/30">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>{currentLang === 'ur' ? 'سبسکرائب شدہ!' : 'Subscribed!'}</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-1.5">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder={currentLang === 'ur' ? 'اپنا ای میل ڈالیں' : 'Enter your email address'}
                    className="flex-1 min-w-0 px-3 py-1.5 text-xs bg-blue-950/70 border border-blue-800 rounded-lg text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-amber-400"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-blue-950 text-xs font-bold rounded-lg transition shrink-0 cursor-pointer"
                  >
                    {currentLang === 'ur' ? 'سبسکرائب' : 'Subscribe'}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              {currentLang === 'ur' ? 'عام اور اکاؤنٹ' : 'General & Account'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-amber-300 transition">{currentLang === 'ur' ? 'مرکزی صفحہ' : 'Home'}</Link></li>
              <li><Link to="/about/history" className="hover:text-amber-300 transition">{currentLang === 'ur' ? 'تاریخ' : 'History'}</Link></li>
              <li><Link to="/membership/signin" className="hover:text-amber-300 transition">{currentLang === 'ur' ? 'اراکین لاگ اِن' : "Member's Sign In"}</Link></li>
              <li><Link to="/membership/new" className="hover:text-amber-300 transition">{currentLang === 'ur' ? 'نئی رکنیت' : 'New Membership'}</Link></li>
              <li><Link to="/contact" className="hover:text-amber-300 transition">{currentLang === 'ur' ? 'رابطہ' : 'Contact Us'}</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              {currentLang === 'ur' ? 'تقریبات اور مہمان نوازی' : 'Events & Hospitality'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/events/current" className="hover:text-amber-300 transition">{currentLang === 'ur' ? 'موجودہ تقاریب' : 'Current Events'}</Link></li>
              <li><Link to="/events/calendar" className="hover:text-amber-300 transition">{currentLang === 'ur' ? 'تقاریب کا تقویم' : 'Event Calendar'}</Link></li>
              <li><Link to="/services/guest-room" className="hover:text-amber-300 transition">{currentLang === 'ur' ? 'مہمان خانہ' : 'Guest Room'}</Link></li>
              <li><Link to="/services/restaurant" className="hover:text-amber-300 transition">{currentLang === 'ur' ? 'ریستوران' : 'Restaurant'}</Link></li>
              <li><Link to="/services/coffee-shop" className="hover:text-amber-300 transition">{currentLang === 'ur' ? 'کافی شاپ' : 'Coffee Shop'}</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              {currentLang === 'ur' ? 'مقامات کی فہرست' : 'Venues Catalog'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/venues/auditorium" className="hover:text-amber-300 transition">{currentLang === 'ur' ? 'آڈیٹوریم' : 'Auditorium'}</Link></li>
              <li><Link to="/venues/conference-hall" className="hover:text-amber-300 transition">{currentLang === 'ur' ? 'کانفرنس ہال' : 'Conference Hall'}</Link></li>
              <li><Link to="/venues/board-room" className="hover:text-amber-300 transition">{currentLang === 'ur' ? 'بورڈ روم' : 'Board Room'}</Link></li>
              <li><Link to="/venues/banquet-hall" className="hover:text-amber-300 transition">{currentLang === 'ur' ? 'بینکوئٹ ہال' : 'Banquet Hall'}</Link></li>
              <li><Link to="/venues/main-lawn" className="hover:text-amber-300 transition">{currentLang === 'ur' ? 'مین لون' : 'Main Lawn'}</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-12 pt-6 border-t border-blue-900/30">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  {currentLang === 'ur' ? 'معلومات اور انتظام' : 'Resources & Admin'}
                </h4>
                <ul className="space-y-2 text-xs">
                  <li><Link to="/library" className="hover:text-amber-300 transition">{currentLang === 'ur' ? 'لائبریری' : 'Library'}</Link></li>
                  <li><Link to="/gallery" className="hover:text-amber-300 transition">{currentLang === 'ur' ? 'نگارخانہ' : 'Gallery'}</Link></li>
              <li><Link to="/archive" className="hover:text-amber-300 transition">{currentLang === 'ur' ? 'آرکائیو' : 'Archive'}</Link></li>
                  <li><Link to="/notices/tenders" className="hover:text-amber-300 transition">{currentLang === 'ur' ? 'ٹینڈرز' : 'Tenders'}</Link></li>
                  <li><Link to="/terms" className="hover:text-amber-300 transition">{currentLang === 'ur' ? 'ٹرمز اور شرائط' : 'Terms & Condition'}</Link></li>
                  <li><Link to="/login" className="hover:text-amber-300 transition flex items-center gap-1 text-amber-400">
                    <Lock className="w-3 h-3" />
                    <span>{currentLang === 'ur' ? 'انتظامی لاگ اِن' : 'Admin Login'}</span>
                  </Link></li>
                </ul>
              </div>

              <div className="lg:col-span-3 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  {currentLang === 'ur' ? 'کیمپس کے رابطہ نقطے' : 'Campus Coordinates'}
                </h4>
                <div className="space-y-2.5 text-xs text-stone-400">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>India Islamic Cultural Centre</strong><br />
                      87-88, Lodhi Road, New Delhi - 110003, India
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>PBX: 011-43535353, 011-43535350</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                    <a href="mailto:iiccdelhi29@rediffmail.com" className="hover:text-amber-300 transition">
                      iiccdelhi29@rediffmail.com
                    </a>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-stone-500">
                  {currentLang === 'ur' 
                    ? 'مہمان گیلری، لائبریری اور ریستوران دیکھنے کے لیے روزانہ موزوں ہیں۔'
                    : 'Visitors are welcome to tour the gallery, library, and restaurant daily.'}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © {new Date().getFullYear()} {currentLang === 'ur' ? 'انڈیا اسلامک کلچرل سینٹر' : 'India Islamic Cultural Centre'} (IICC). {currentLang === 'ur' ? 'تمام حقوق محفوظ' : 'All rights reserved'}.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <button
              onClick={() => setActivePolicyModal('terms')}
              className="hover:text-amber-300 transition cursor-pointer"
            >
              {currentLang === 'ur' ? 'ٹرمز اور شرائط' : 'Terms & Conditions'}
            </button>
            <span className="text-blue-900">•</span>
            <button
              onClick={() => setActivePolicyModal('privacy')}
              className="hover:text-amber-300 transition cursor-pointer"
            >
              {currentLang === 'ur' ? 'پرائیویسی پالیسی' : 'Privacy Policy'}
            </button>
            <span className="text-blue-900">•</span>
            <button
              onClick={() => setActivePolicyModal('disclaimer')}
              className="hover:text-amber-300 transition cursor-pointer"
            >
              {currentLang === 'ur' ? 'ادارہ جاتی اختیار' : 'Institutional Disclaimer'}
            </button>
            <span className="text-blue-900">•</span>
            <span className="text-stone-500">Lodhi Road, New Delhi</span>
          </div>
        </div>
      </div>

      {activePolicyModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white text-stone-900 rounded-2xl max-w-xl w-full p-6 shadow-2xl relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setActivePolicyModal(null)}
              className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>

            {activePolicyModal === 'terms' && (
              <div className="space-y-3 text-xs text-stone-700">
                <h3 className="text-lg font-bold font-serif-title text-stone-900">
                  {currentLang === 'ur' ? 'کیمپس استعمال کی ٹرمز اور شرائط' : 'Terms & Conditions of Campus Usage'}
                </h3>
                <p>
                  1. <strong>{currentLang === 'ur' ? 'ادارہ جاتی اختیار:' : 'Institutional Code:'}</strong> {currentLang === 'ur' ? 'تمام اراکین، تقریب کے منظمین اور وفدین کو IICC کی باعزت ثقافتی، سیکولر اور کثیرگرائی فضائی کا احترام برقرار رکھنا ہوگا۔' : 'All members, event organizers, and delegates must uphold the dignified cultural, secular, and pluralist ethos of the India Islamic Cultural Centre.'}
                </p>
                <p>
                  2. <strong>{currentLang === 'ur' ? 'ہال کی بکنگ:' : 'Venue Hire:'}</strong> {currentLang === 'ur' ? 'آڈیٹورم، لونز اور بینکوئٹ ہال کی بکنگز کی تائید کے لیے انتظامیہ کی فارمیل منظوری ضروری ہے۔' : 'Bookings for Auditorium, Lawns, and Banquet Hall are subject to formal approval.'}
                </p>
                <p>
                  3. <strong>{currentLang === 'ur' ? 'رکنیت امتیاز:' : 'Membership Privileges:'}</strong> {currentLang === 'ur' ? 'لائف اور ایسوسی ایٹ اراکین کو پرائمری بکنگ حقوق، رعایت ممبر ٹیریف، اور لائبریری کے قرض کے اختیارات ہیں۔' : 'Life and Associate members enjoy priority booking rights and discounted tariffs.'}
                </p>
              </div>
            )}

            {activePolicyModal === 'privacy' && (
              <div className="space-y-3 text-xs text-stone-700">
                <h3 className="text-lg font-bold font-serif-title text-stone-900">
                  {currentLang === 'ur' ? 'ادارہ جاتی پرائیویسی پالیسی' : 'Institutional Privacy Policy'}
                </h3>
                <p>
                  1. <strong>{currentLang === 'ur' ? 'رکن ڈیٹا سپروٹیکشن:' : 'Member Data Protection:'}</strong> {currentLang === 'ur' ? 'IICC تمام رکن KYC ریکارڈز، بائیومیٹرک تصاویر، رابطہ معلومات، اور بلنگ تاریخچے کی حفاظت کرتا ہے۔' : 'The IICC safeguards all member KYC records, biometric photographs, and contact information.'}
                </p>
                <p>
                  2. <strong>{currentLang === 'ur' ? 'فنانسیل ٹرانزاکشنز:' : 'Financial Transactions:'}</strong> {currentLang === 'ur' ? 'آن لائن ادائیگی اور بکنگ ایڈوانس مکی اینکرپٹڈ اور متاثرہ بینکنگ گیٹ وے سے پروسیس ہوتے ہیں۔' : 'Online payments are encrypted and processed through certified banking gateways.'}
                </p>
                <p>
                  3. <strong>{currentLang === 'ur' ? 'سی سی ٹی وی نگرانی:' : 'CCTV Surveillance:'}</strong> {currentLang === 'ur' ? 'کیمپس گلیاں، گیٹ پر نظامی دستخط اور پارکنگ کے علاقے 24/7 نگرانی میں ہیں۔' : 'Campus corridors and parking areas are monitored round-the-clock.'}
                </p>
              </div>
            )}

            {activePolicyModal === 'disclaimer' && (
              <div className="space-y-3 text-xs text-stone-700">
                <h3 className="text-lg font-bold font-serif-title text-stone-900">
                  {currentLang === 'ur' ? 'ادارہ جاتی اختیار' : 'Institutional Disclaimer'}
                </h3>
                <p>
                  {currentLang === 'ur' 
                    ? 'IICC ایک خود مختار، درجہ یافتہ ادارہ ہے۔ سپیکرز، شاعر، پینل شرکاء اور مصنفین کے خیالات ان کے ذاتی خیالات ہیں اور بالضرور IICC کے سرکاری پالیسی سے منظور نہیں ہیں۔'
                    : 'IICC is an autonomous registered society. Opinions expressed by speakers, poets, and authors during symposiums represent independent views of the respective presenters and do not necessarily reflect the official stance of the IICC Governing Body.'}
                </p>
                <p>
                  {currentLang === 'ur' ? 'سرکاری استفسارات دفتر سکریٹری، IICC، 87-88 لودھی روڈ، نئی دہلی کو ہدایت کریں۔' : 'Official inquiries should be directed to the Secretary, IICC at 87-88 Lodhi Road, New Delhi.'}
                </p>
              </div>
            )}

            <div className="pt-4 border-t border-stone-200 text-right">
              <button
                onClick={() => setActivePolicyModal(null)}
                className="px-4 py-1.5 bg-[#1e3a8a] text-amber-200 text-xs font-bold rounded-lg min-h-[44px] cursor-pointer"
              >
                {currentLang === 'ur' ? 'پالیسی بند کریں' : 'Close Policy'}
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
