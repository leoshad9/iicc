import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  ArrowRight, Building2, CheckCircle2, Clock, Mail, MapPin, Maximize2,
  Phone, ShieldAlert, Sparkles, Users
} from 'lucide-react';
import { GST_RATE, venueAddOnCharges, departmentContacts } from '../../data/mockData';
import { auditoriumDetails, auditoriumTariff } from '../../data/auditorium';

const inr = (amount: number) => amount.toLocaleString('en-IN');
const cgstOf = (amount: number) => Math.round(amount * (GST_RATE / 2));

type ShiftId = 'first' | 'second' | 'fullDay';

export const AuditoriumPage: React.FC = () => {
  const { i18n } = useTranslation();
  const isUrdu = i18n.language === 'ur';
  const text = (en: string, ur: string) => (isUrdu ? ur : en);

  const [isMember, setIsMember] = useState(true);
  const [shiftId, setShiftId] = useState<ShiftId>('second');
  const [extraHours, setExtraHours] = useState(0);
  const [withProjector, setWithProjector] = useState(false);
  const [withSound, setWithSound] = useState(true);
  const [microphones, setMicrophones] = useState(2);
  const [form, setForm] = useState({ name: '', organization: '', email: '', phone: '', date: '2026-10-15', guests: '250', purpose: '' });
  const [bookingRef, setBookingRef] = useState('');

  const addon = (id: string) => venueAddOnCharges.find(charge => charge.id === id);
  const shift = useMemo(
    () => auditoriumDetails.shiftOptions.find(option => option.value === shiftId) ?? auditoriumDetails.shiftOptions[1],
    [shiftId]
  );

  const shiftBase = isMember ? shift.member : shift.nonMember;
  const extraHourRate = isMember ? auditoriumDetails.extraHour.member : auditoriumDetails.extraHour.nonMember;
  const extraHourTotal = extraHourRate * extraHours;
  const projectorCharge = withProjector ? addon('addon-projector')?.amount ?? 0 : 0;
  const soundCharge = withSound ? addon('addon-sound')?.amount ?? 0 : 0;
  const microphoneCharge = (addon('addon-microphone')?.amount ?? 0) * microphones;
  const subtotal = shiftBase + extraHourTotal + projectorCharge + soundCharge + microphoneCharge;
  const cgst = cgstOf(subtotal);
  const sgst = cgst;
  const grandTotal = subtotal + cgst + sgst;

  const venueDesk = departmentContacts.find(contact => contact.department === 'Venue Booking & Event Cell');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setBookingRef(`IICC-AUD-${Math.floor(100000 + Math.random() * 900000)}`);
  };

  return (
    <div className="w-full" data-page="auditorium">
      {/* ═══ Hero ═══ */}
      <section className="relative overflow-hidden bg-blue-950 text-stone-100">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-7xl mx-auto px-4 py-14 sm:py-20 lg:py-24">
          <nav aria-label={text('Breadcrumb', 'صفحے کا راستہ')} className="flex gap-2 items-center text-xs text-stone-300 mb-10">
            <Link to="/venues" className="hover:text-amber-200">{text('Venues', 'مقامات')}</Link><span aria-hidden="true">/</span><span>{text('Auditorium', 'آڈیٹوریم')}</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-amber-300 uppercase tracking-[0.18em] text-xs font-bold"><Building2 className="w-4 h-4" />{text('Conference · Seminar · Culture', 'کانفرنس · سیمینار · ثقافت')}</span>
            <h1 className={`mt-5 font-serif-title font-bold ${isUrdu ? 'text-3xl sm:text-4xl leading-loose' : 'text-4xl sm:text-5xl lg:text-6xl leading-tight'}`}>{text(auditoriumDetails.name, auditoriumDetails.nameUrdu)}</h1>
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-stone-300">
              {text('A state-of-the-art venue for conferences, seminars, lectures, theatrical performances and cultural activities at the India Islamic Cultural Centre.', 'انڈیا اسلامک کلچرل سینٹر کا جدید ترین مقام — کانفرنسوں، سیمینارز، خطبات، ڈراموں اور ثقافتی تقاریب کے لیے۔')}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#auditorium-tariff" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-300 text-blue-950 font-bold text-sm hover:bg-amber-200 transition">{text('View Tariff Plan', 'ٹیرف پلان دیکھیں')}<ArrowRight className="w-4 h-4 rtl:rotate-180" /></a>
              <a href="#book-auditorium" className="inline-flex items-center px-6 py-3 rounded-xl border border-white/25 text-sm hover:bg-white/10 transition">{text('Book This Venue', 'یہ مقام بک کریں')}</a>
            </div>
          </div>
          <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
            {[
              { icon: <Users className="w-4 h-4" />, label: text('Capacity', 'گنجائش'), value: text('300 persons', '300 افراد'), hint: text(auditoriumDetails.capacityLabel, 'تھیٹر انداز') },
              { icon: <Maximize2 className="w-4 h-4" />, label: text('Stage', 'اسٹیج'), value: text(auditoriumDetails.stage, '32 × 24 فٹ'), hint: text('Performance stage', 'اسٹیج برائے پرفارمنس') },
              { icon: <Sparkles className="w-4 h-4" />, label: text('Comfort', 'سہولت'), value: text('Fully Air-Conditioned', 'مکمل ایئر کنڈیشنڈ'), hint: text('Advanced AV equipment', 'جدید آڈیو بصری سامان') },
              { icon: <CheckCircle2 className="w-4 h-4" />, label: text('Backstage', 'بیک اسٹیج'), value: text('2 Green Rooms', '2 گرین رومز'), hint: text('Fully equipped', 'مکمل سازوسامان') }
            ].map(spec => (
              <div key={spec.label} className="rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm p-4">
                <dt className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-amber-200 font-bold">{spec.icon}{spec.label}</dt>
                <dd className="mt-2 text-lg font-serif-title font-bold text-white leading-snug">{spec.value}</dd>
                <p className="mt-1 text-[10px] text-stone-300">{spec.hint}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ═══ Facilities ═══ */}
      <section className="py-16 sm:py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">{text('Key facilities', 'اہم سہولیات')}</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-serif-title text-stone-900 leading-snug">{text('Built for Significant Gatherings', 'اہم اجتماعات کے لیے')}
            </h2>
            <p className="mt-5 text-sm text-stone-600 leading-relaxed">{text('A fully air-conditioned hall with advanced audio-visual equipment, backed by two green rooms and a welcoming lobby for registration and display.', 'مکمل ایئر کنڈیشنڈ ہال، جدید آڈیو بصری سامان، دو گرین رومز اور رجسٹریشن کے لیے وسیع لابی کے ساتھ۔')}</p>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-3">
            {auditoriumDetails.amenities.map(item => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-stone-50 border border-stone-200 text-sm font-semibold text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />{item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Tariff ═══ */}
      <section id="auditorium-tariff" className="scroll-mt-28 py-16 sm:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">{text('Official rates', 'سرکاری شرحیں')}</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-serif-title text-stone-900">{text('Tariff Plans', 'ٹیرف پلان')}</h2>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-stone-200 bg-white">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="bg-blue-950 text-white text-start">
                  <th className="px-5 py-4 text-start font-bold">{text('Timings', 'اوقات')}</th>
                  <th className="px-5 py-4 text-end font-bold">{text('Member', 'رکن')}</th>
                  <th className="px-5 py-4 text-end font-bold">{text('Non-Member', 'غیر رکن')}</th>
                </tr>
              </thead>
              <tbody>
                {auditoriumTariff.map(row => (
                  <tr key={row.id} className="border-t border-stone-100">
                    <td className="px-5 py-4 font-semibold text-stone-800">{isUrdu ? row.labelUrdu : row.label}</td>
                    <td className="px-5 py-4 text-end tabular-nums text-stone-700">₹ {inr(row.member)}/-</td>
                    <td className="px-5 py-4 text-end tabular-nums text-stone-700">₹ {inr(row.nonMember)}/-</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="flex gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-stone-700">
              <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>{text('All rates are subject to 18% GST (CGST 9% + SGST 9%). Additional equipment — projector ₹ 2,500, sound system ₹ 3,000 and microphones ₹ 500 each — incurs extra charges.', 'تمام شرحوں پر 18% جی ایس ٹی (سی جی ایس ٹی 9% + ایس جی ایس ٹی 9%) لاگو ہوگا۔ پروجیکٹر ₹2,500، ساؤنڈ سسٹم ₹3,000 اور مائیک ₹500 فی عدد کے اضافی چارجز الگ ہوں گے۔')}</span>
            </div>
            <div className="flex gap-3 p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-stone-700">
              <Clock className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
              <span>{text('First shift: 9 AM – 2 PM · Second shift: 4 PM – 10 PM · Full day: 9 AM – 10 PM. Additional hours are billed per hour beyond the booked shift.', 'پہلی شفٹ: صبح 9 تا دوپہر 2 · دوسری شفٹ: شام 4 تا رات 10 · پورا دن: صبح 9 تا رات 10۔ بکنگ سے آگے اضافی اوقات فی گھنٹہ واجب ہوں گے۔')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Booking Enquiry & Estimate ═══ */}
      <section id="book-auditorium" className="scroll-mt-28 py-16 sm:py-20 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">{text('Booking enquiry', 'بکنگ کی درخواست')}</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-serif-title text-stone-900">{text('Estimate & Enquire', 'تخمینہ اور درخواست')}</h2>
          <p className="mt-3 text-sm text-stone-600 max-w-2xl">{text('Build an indicative estimate below, then send your enquiry to the Venue Booking & Event Cell. Final confirmation follows with the venue team.', 'نیچے تخمینہ بنائیں اور اپنی درخواست بھیجیں۔ حتمی تصدیق مقامی انتظامیہ کے ساتھ ہوگی۔')}</p>
          <div className="mt-10 grid lg:grid-cols-12 gap-8 items-start">
            {/* Estimate configurator */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 rounded-2xl border border-stone-200 bg-stone-50 p-6 space-y-5">
              <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-stone-100">
                {[true, false].map(member => (
                  <button key={String(member)} type="button" aria-pressed={isMember === member} onClick={() => setIsMember(member)} className={`px-3 py-2.5 text-xs font-bold rounded-lg transition ${isMember === member ? 'bg-white text-blue-950 shadow-sm' : 'text-stone-600 hover:text-stone-900'}`}>
                    {member ? text('Member Rate', 'رکن شرح') : text('Non-Member Rate', 'غیر رکن شرح')}
                  </button>
                ))}
              </div>
              <div>
                <label htmlFor="aud-shift" className="block text-xs font-bold text-stone-600 mb-2">{text('Booking Shift', 'بکنگ شفٹ')}</label>
                <select id="aud-shift" value={shiftId} onChange={event => setShiftId(event.target.value as ShiftId)} className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500">
                  {auditoriumDetails.shiftOptions.map(option => <option key={option.value} value={option.value}>{option.label} — ₹ {inr(isMember ? option.member : option.nonMember)}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="aud-extra" className="block text-xs font-bold text-stone-600 mb-2">{text('Additional Hours', 'اضافی گھنٹے')} ({text('per hour', 'فی گھنٹہ')})</label>
                <input id="aud-extra" type="number" min={0} max={10} value={extraHours} onChange={event => setExtraHours(Math.max(0, Number(event.target.value)))} className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
              </div>
              <fieldset className="space-y-2.5 pt-1">
                <legend className="text-xs font-bold text-stone-600 mb-2">{text('Equipment Add-ons', 'اضافی سامان')}</legend>
                <label className="flex items-center justify-between gap-3 text-sm text-stone-700"><span className="flex items-center gap-2"><input id="addon-projector" type="checkbox" checked={withProjector} onChange={event => setWithProjector(event.target.checked)} className="accent-amber-600 w-4 h-4" />{text('Projector with Screen', 'پروجیکٹر اسکرین کے ساتھ')}</span><span className="tabular-nums text-stone-500">₹ {inr(addon('addon-projector')?.amount ?? 0)}</span></label>
                <label className="flex items-center justify-between gap-3 text-sm text-stone-700"><span className="flex items-center gap-2"><input id="addon-sound" type="checkbox" checked={withSound} onChange={event => setWithSound(event.target.checked)} className="accent-amber-600 w-4 h-4" />{text('Sound System', 'ساؤنڈ سسٹم')}</span><span className="tabular-nums text-stone-500">₹ {inr(addon('addon-sound')?.amount ?? 0)}</span></label>
                <div className="flex items-center justify-between gap-3 text-sm text-stone-700">
                  <label htmlFor="aud-mics" className="flex items-center gap-2"><span>{text('Microphones', 'مائیکس')}</span></label>
                  <span className="flex items-center gap-2"><input id="aud-mics" type="number" min={0} max={20} value={microphones} onChange={event => setMicrophones(Math.max(0, Number(event.target.value)))} className="w-16 rounded-lg border border-stone-300 bg-white px-2 py-1.5 text-sm tabular-nums text-end" /><span className="tabular-nums text-stone-500">₹ {inr(microphoneCharge)}</span></span>
                </div>
              </fieldset>
            </div>


            {/* Live estimate + form */}
            <div className="lg:col-span-7 space-y-6">
              <div id="auditorium-estimate" className="rounded-2xl border border-blue-900/10 bg-blue-950 text-stone-100 p-6 sm:p-8">
                <h3 className="text-sm font-bold uppercase tracking-widest text-amber-300">{text('Indicative Estimate', 'ابتدائی تخمینہ')}</h3>
                <dl className="mt-5 space-y-3 text-sm">
                  <div className="flex justify-between gap-4"><dt className="text-stone-300">{shift.label}</dt><dd className="tabular-nums">₹ {inr(shiftBase)}</dd></div>
                  {extraHourTotal > 0 && <div className="flex justify-between gap-4"><dt className="text-stone-300">{text(`Additional hours × ${extraHours}`, `اضافی گھنٹے × ${extraHours}`)}</dt><dd className="tabular-nums">₹ {inr(extraHourTotal)}</dd></div>}
                  {projectorCharge > 0 && <div className="flex justify-between gap-4"><dt className="text-stone-300">{text('Projector with Screen', 'پروجیکٹر اسکرین کے ساتھ')}</dt><dd className="tabular-nums">₹ {inr(projectorCharge)}</dd></div>}
                  {soundCharge > 0 && <div className="flex justify-between gap-4"><dt className="text-stone-300">{text('Sound System', 'ساؤنڈ سسٹم')}</dt><dd className="tabular-nums">₹ {inr(soundCharge)}</dd></div>}
                  {microphoneCharge > 0 && <div className="flex justify-between gap-4"><dt className="text-stone-300">{text(`Microphones × ${microphones}`, `مائیکس × ${microphones}`)}</dt><dd className="tabular-nums">₹ {inr(microphoneCharge)}</dd></div>}
                  <div className="flex justify-between gap-4 pt-3 border-t border-white/15"><dt className="text-stone-300">{text('Subtotal (excl. GST)', 'ذیلی رقم (جی ایس ٹی کے بغیر)')}</dt><dd className="tabular-nums">₹ {inr(subtotal)}</dd></div>
                  <div className="flex justify-between gap-4"><dt className="text-stone-400 text-xs">CGST 9%</dt><dd className="tabular-nums text-stone-300">₹ {inr(cgst)}</dd></div>
                  <div className="flex justify-between gap-4"><dt className="text-stone-400 text-xs">SGST 9%</dt><dd className="tabular-nums text-stone-300">₹ {inr(sgst)}</dd></div>
                </dl>
                <div className="mt-5 pt-4 border-t border-white/15 flex justify-between items-end">
                  <span className="text-sm text-stone-300">{text('Estimated Total', 'مجموعی تخمینہ')}</span>
                  <span id="estimate-total" className="text-3xl font-serif-title font-bold text-amber-200 tabular-nums">₹ {inr(grandTotal)}</span>
                </div>
                <p className="mt-3 text-[10px] text-stone-400">{text('Indicative only — final tariff is confirmed by the Venue Booking & Event Cell at the published rates.', 'یہ ابتدائی تخمینہ ہے — حتمی شرح مقامی انتظامیہ کی طرف سے تصدیق ہوگی۔')}</p>
              </div>

              {/* Enquiry form */}
              <form id="aud-form" onSubmit={handleSubmit} className="rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="aud-name" className="block text-xs font-bold text-stone-600 mb-2">{text('Contact Person', 'رابطہ شخص')} *</label>
                    <input id="aud-name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  </div>
                  <div>
                    <label htmlFor="aud-org" className="block text-xs font-bold text-stone-600 mb-2">{text('Organization', 'ادارہ')}</label>
                    <input id="aud-org" value={form.organization} onChange={e => setForm({ ...form, organization: e.target.value })} className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  </div>
                  <div>
                    <label htmlFor="aud-email" className="block text-xs font-bold text-stone-600 mb-2">{text('Email', 'ای میل')} *</label>
                    <input id="aud-email" type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  </div>
                  <div>
                    <label htmlFor="aud-phone" className="block text-xs font-bold text-stone-600 mb-2">{text('Mobile Number', 'موبائل نمبر')} *</label>
                    <input id="aud-phone" type="tel" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  </div>
                  <div>
                    <label htmlFor="aud-date" className="block text-xs font-bold text-stone-600 mb-2">{text('Preferred Date', 'مطلوبہ تاریخ')} *</label>
                    <input id="aud-date" type="date" required value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  </div>
                  <div>
                    <label htmlFor="aud-guests" className="block text-xs font-bold text-stone-600 mb-2">{text('Expected Guests', 'متوقع شرکت کنندگان')}</label>
                    <input id="aud-guests" type="number" min={1} max={auditoriumDetails.capacity} value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })} className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  </div>
                </div>
                <div>
                  <label htmlFor="aud-purpose" className="block text-xs font-bold text-stone-600 mb-2">{text('Event Details', 'تقریب کی تفصیلات')} *</label>
                  <textarea id="aud-purpose" required rows={3} value={form.purpose} onChange={e => setForm({ ...form, purpose: e.target.value })} className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <div className="pt-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <button type="submit" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-950 text-amber-200 font-bold text-sm hover:bg-blue-900 transition">{text('Send Enquiry', 'درخواست بھیجیں')}</button>
                  {bookingRef && <p role="status" className="text-xs font-semibold text-green-700">{text('Enquiry noted', 'درخواست درج ہو گئی')} — {bookingRef}</p>}
                </div>
              </form>
            </div>
          </div>


          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-stone-200 p-6">
              <h3 className="text-sm font-bold text-stone-900">{text('Venue Booking & Event Cell', 'ہال بکنگ اور تقاریب سیل')}</h3>
              {venueDesk && (
                <div className="mt-3 space-y-1.5 text-sm text-stone-600">
                  <div className="flex flex-wrap gap-x-4 gap-y-1">{venueDesk.phones.map(p => <a key={p} href={`tel:${p.replace(/[^+\d]/g, '')}`} className="inline-flex items-center gap-1.5 text-[#1e3a8a] hover:underline"><Phone className="w-3.5 h-3.5" /><span dir="ltr">{p}</span></a>)}</div>
                  {venueDesk.email && <a href={`mailto:${venueDesk.email}`} className="inline-flex items-center gap-1.5 text-[#1e3a8a] hover:underline"><Mail className="w-3.5 h-3.5" />{venueDesk.email}</a>}
                  <p className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{venueDesk.timing}</p>
                  <p className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{venueDesk.location}</p>
                </div>
              )}
            </div>
            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-6 text-sm text-amber-900 flex gap-3">
              <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">{text('Statutory & Equipment Charges', 'قانونی اور سامان چارجز')}</p>
                <p className="mt-1.5 leading-relaxed">{text('All rates are subject to 18% GST (CGST 9% + SGST 9%). Additional charges apply for the projector (₹ 2,500), sound system (₹ 3,000) and microphones (₹ 500 each).', 'تمام شرحوں پر 18% جی ایس ٹی (CGST 9% + SGST 9%) لاگو ہے۔ پروجیکٹر (₹ 2,500)، ساؤنڈ سسٹم (₹ 3,000) اور مائیکس (₹ 500 فی عدد) پر اضافی چارجز لاگو ہیں۔')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
