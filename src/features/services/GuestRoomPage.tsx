import React, { useMemo, useState } from 'react';
import {
  BedSingle,
  BedDouble,
  Sparkles,
  Crown,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle2,
  Calculator,
  Calendar,
  Send,
  FileText,
  Info,
  ReceiptText,
  Users,
  Percent,
  Clock,
  ArrowRight,
  BadgeCheck,
  Landmark,
  ChevronRight
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  GST_RATE,
  guestRoomAdditionalBedTariff,
  guestRoomsData,
  venueAddOnCharges,
  departmentContacts
} from '../../data/mockData';

/** One row of the published accommodation tariff ledger. */
interface TariffRow {
  id: string;
  label: string;
  labelUrdu: string;
  tariff: number;
  note: string;
}

const roomIcons: Record<string, React.ReactNode> = {
  'gr-single': <BedSingle className="w-4 h-4" />,
  'gr-double': <BedDouble className="w-4 h-4" />,
  'gr-suite': <Sparkles className="w-4 h-4" />,
  'gr-presidential-suite': <Crown className="w-4 h-4" />
};

/** Accent gradient per category, used on the showcase image chrome. */
const roomAccent: Record<string, string> = {
  'gr-single': 'from-blue-950/90 to-blue-800/40',
  'gr-double': 'from-amber-700/80 to-amber-500/30',
  'gr-suite': 'from-emerald-950/90 to-emerald-700/40',
  'gr-presidential-suite': 'from-stone-950/90 to-stone-700/40'
};

/** Applies the published statutory rate (CGST 9% + SGST 9%) to a base amount. */
const withGst = (amount: number) => Math.round(amount * (1 + GST_RATE));

/** CGST and SGST halves of the statutory rate. */
const cgstOf = (amount: number) => Math.round(amount * (GST_RATE / 2));

const inr = (amount: number) => amount.toLocaleString('en-IN');

export const GuestRoomPage: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as 'en' | 'ur';
  const isUrdu = currentLang === 'ur';

  const reservationDesk =
    departmentContacts.find(d => d.department === 'Guest Room Reservations') ?? departmentContacts[2];

  const tariffRows: TariffRow[] = [
    ...guestRoomsData.map(room => ({
      id: room.id,
      label: room.type,
      labelUrdu: room.typeUrdu ?? room.type,
      tariff: room.tariff,
      note: isUrdu && room.occupancyUrdu ? room.occupancyUrdu : room.occupancy
    })),
    {
      id: 'additional-bed',
      label: 'Additional Bed',
      labelUrdu: 'اضافی بستر',
      tariff: guestRoomAdditionalBedTariff,
      note: isUrdu ? 'فی رات، فی اضافی بستر' : 'per night, per additional bed'
    }
  ];

  const today = new Date().toLocaleDateString('en-CA');
  const [formError, setFormError] = useState('');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'IICC Member',
    memberId: '',
    roomId: guestRoomsData[0].id,
    checkIn: '',
    checkOut: '',
    rooms: '1',
    extraBeds: '0'
  });

  const selectedRoom = guestRoomsData.find(r => r.id === form.roomId) ?? guestRoomsData[0];

  const nights = useMemo(() => {
    const checkIn = new Date(form.checkIn).getTime();
    const checkOut = new Date(form.checkOut).getTime();
    if (!Number.isFinite(checkIn) || !Number.isFinite(checkOut)) return 1;
    return Math.max(1, Math.round((checkOut - checkIn) / 86400000));
  }, [form.checkIn, form.checkOut]);

  const roomsCount = Math.max(1, parseInt(form.rooms, 10) || 1);
  const extraBeds = Math.max(0, parseInt(form.extraBeds, 10) || 0);
  const roomSubtotal = selectedRoom.tariff * roomsCount * nights;
  const bedSubtotal = guestRoomAdditionalBedTariff * extraBeds * nights;
  const subtotal = roomSubtotal + bedSubtotal;
  const gstAmount = Math.round(subtotal * GST_RATE);
  const grandTotal = subtotal + gstAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.checkIn || !form.checkOut || form.checkIn < today || form.checkOut <= form.checkIn) {
      setFormError(isUrdu ? 'درست تاریخیں منتخب کریں؛ روانگی آمد کے بعد ہونی چاہیے۔' : 'Choose valid dates: check-in cannot be in the past and check-out must be after check-in.');
      return;
    }
    setFormError('');
    const message = [
      'Guest room reservation enquiry (not a confirmed booking)',
      `Name: ${form.name}`, `Phone: ${form.phone}`, `Email: ${form.email}`,
      `Category: ${form.category}`,
      ...(form.category !== 'Guest of the Centre' && form.memberId ? [`Membership ID: ${form.memberId}`] : []),
      `Room: ${selectedRoom.type}`, `Dates: ${form.checkIn} to ${form.checkOut}`,
      `Rooms: ${roomsCount}; additional beds per night: ${extraBeds}`,
      `Estimated total: INR ${inr(grandTotal)} (assuming 18% GST; please confirm applicable taxes)`,
      'Please confirm availability and final charges.'
    ].join('\n');
    window.open(`https://wa.me/919717455353?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  const scrollToForm = (roomId?: string) => {
    if (roomId) setForm(prev => ({ ...prev, roomId }));
    document.getElementById('reserve')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const roomName = (room: (typeof guestRoomsData)[number]) =>
    isUrdu && room.typeUrdu ? room.typeUrdu : room.type;

  return (
    <div className="w-full">
      {/* ═══ Institutional Hero Band ═══ */}
      <section className="relative bg-[#06241e] text-stone-100 overflow-hidden border-b border-amber-500/20">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: 'radial-gradient(#f59e0b 1px, transparent 1px), radial-gradient(#10b981 1px, #06241e 1px)',
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 20px 20px'
          }}
        />
        <div
          className="absolute inset-y-0 right-0 w-full lg:w-3/5 opacity-15 lg:opacity-25 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: 'url(/iicc-background.webp)',
            maskImage: 'linear-gradient(to left, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to left, black, transparent)'
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Narrative column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-[11px] text-stone-400">
                <Landmark className="w-3.5 h-3.5 text-amber-400" />
                <span>{isUrdu ? 'خدمات و ضیافت' : 'Services & Dining'}</span>
                <ChevronRight className="w-3 h-3" />
                <span className="text-amber-300 font-semibold">{isUrdu ? 'مہمان خانہ' : 'Guest Rooms'}</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/70 border border-blue-700/60 text-amber-300 text-xs font-semibold">
                <BadgeCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>{isUrdu ? 'مہمان وِنگ · لودھی روڈ کیمپس' : 'Guest Wing · Lodhi Road Campus'}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold tracking-tight text-white leading-tight">
                {isUrdu
                  ? 'کیمپس میں قیام — مہمان رہائش کی چار اقسام'
                  : 'Stay On Campus — Four Categories of Guest Accommodation'}
              </h1>

              <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-2xl font-light">
                {isUrdu
                  ? 'اراکین اور مہمانوں کے لیے لودھی روڈ کیمپس میں رہائش۔ اپنی ضرورت کے مطابق کمرہ منتخب کریں اور قیام کا تخمینہ دیکھیں۔'
                  : 'A welcoming stay on the Lodhi Road campus for members and visiting guests. Explore room categories, compare tariffs and plan your visit in one place.'}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => scrollToForm()}
                  className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold text-xs sm:text-sm transition flex items-center gap-2 shadow-lg cursor-pointer min-h-[44px]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{isUrdu ? 'کمرہ بک کریں' : 'Book a Room'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${reservationDesk.phones[0].replace(/[^0-9+]/g, '')}`}
                  className="px-5 py-3 rounded-xl bg-blue-900/80 hover:bg-blue-800 text-stone-100 border border-blue-600/70 text-xs sm:text-sm font-semibold transition flex items-center gap-2 min-h-[44px]"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>{reservationDesk.phones[0]}</span>
                </a>

                <a
                  href="https://wa.me/919717455353"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-stone-900/60 hover:bg-stone-900 text-stone-200 border border-stone-700 text-xs sm:text-sm font-medium transition flex items-center gap-2 min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="pt-6 border-t border-blue-800/60 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <div className="text-xl sm:text-2xl font-serif-title font-bold text-amber-300">
                    {guestRoomsData.length}
                  </div>
                  <div className="text-[11px] text-stone-400">
                    {isUrdu ? 'رہائش کی اقسام' : 'Room Categories'}
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-serif-title font-bold text-amber-300">
                    ₹ {inr(guestRoomsData[0].tariff)}
                  </div>
                  <div className="text-[11px] text-stone-400">{isUrdu ? 'سے شروع، فی رات' : 'Starting Tariff / Night'}</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-serif-title font-bold text-amber-300">
                    ₹ {inr(guestRoomAdditionalBedTariff)}
                  </div>
                  <div className="text-[11px] text-stone-400">{isUrdu ? 'اضافی بستر، فی رات' : 'Additional Bed / Night'}</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-serif-title font-bold text-amber-300">18%</div>
                  <div className="text-[11px] text-stone-400">CGST 9% + SGST 9%</div>
                </div>
              </div>
            </div>

            {/* Glass tariff card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-amber-500/30 bg-blue-950/60 backdrop-blur-md shadow-2xl overflow-hidden">
                <div className="relative h-40 bg-stone-900">
                  <img
                    src="/iicc-background.webp"
                    alt="India Islamic Cultural Centre campus, 87-88 Lodhi Road, New Delhi"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-amber-300 font-bold">
                        {isUrdu ? 'کرایہ فی رات' : 'Nightly Tariff From'}
                      </div>
                      <div className="text-2xl font-serif-title font-bold text-white">
                        ₹ {inr(guestRoomsData[0].tariff)}
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-blue-950 bg-amber-300 px-2 py-1 rounded-full">
                      {isUrdu ? '+ ٹیکس' : '+ GST'}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-stone-400">
                    <ReceiptText className="w-3.5 h-3.5 text-amber-400" />
                    <span>{isUrdu ? 'کرایہ کی فہرست' : 'Tariff Plan'}</span>
                  </div>

                  <div className="divide-y divide-blue-800/60">
                    {tariffRows.map(row => (
                      <div
                        key={row.id}
                        className={`flex items-center justify-between py-2 ${row.id === 'additional-bed' ? 'text-amber-200' : 'text-stone-200'}`}
                      >
                        <span className="text-xs flex items-center gap-2">
                          {roomIcons[row.id] ?? <BedDouble className="w-4 h-4 text-amber-400" />}
                          {isUrdu ? row.labelUrdu : row.label}
                        </span>
                        <span className="font-mono text-xs font-bold">₹ {inr(row.tariff)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-start gap-2 pt-1 text-[10px] text-stone-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      {isUrdu
                        ? 'تمام نرخ ہندوستانی روپوں میں ہیں۔ کمروں کے حتمی نرخ اور ٹیکس بکنگ ڈیسک سے تصدیق کریں۔'
                        : 'Rates in Indian Rupees. Confirm final accommodation charges and applicable taxes with the desk.'}
                    </span>
                  </div>

                  <button
                    onClick={() => scrollToForm()}
                    className="w-full mt-1 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-blue-950 text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calculator className="w-4 h-4" />
                    <span>{isUrdu ? 'کرایہ کا تخمینہ لگائیں' : 'Estimate My Stay'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Tax-Split Tariff Ledger ═══ */}
      <section className="py-16 bg-stone-50 border-b border-stone-200" id="tariff">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#1e3a8a] uppercase tracking-wider">
                <ReceiptText className="w-4 h-4 text-amber-600" />
                <span>{isUrdu ? 'سرکاری کرایہ کی فہرست' : 'Published Tariff Plan'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif-title font-bold text-stone-900 mt-1">
                {isUrdu ? 'شفاف حساب — بنیادی نرخ، CGST اور SGST' : 'Transparent Ledger — Base Rate, CGST & SGST'}
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-900 bg-emerald-50 border border-emerald-200 px-2.5 py-1.5 rounded-lg">
                <Percent className="w-3.5 h-3.5" />
                <span>{isUrdu ? 'ٹیکس 18% (9% + 9%)' : '18% statutory (9% + 9%)'}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-stone-700 bg-white border border-stone-200 px-2.5 py-1.5 rounded-lg">
                <Info className="w-3.5 h-3.5 text-stone-400" />
                <span>{isUrdu ? 'تمام نرخ روپوں میں' : 'All rates in INR'}</span>
              </span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#1e3a8a] text-amber-200">
                  <tr>
                    <th className="text-left px-4 sm:px-6 py-3.5 text-[11px] font-bold uppercase tracking-wider">
                      {isUrdu ? 'کمرے کی قسم' : 'Room Category'}
                    </th>
                    <th className="text-left px-4 py-3.5 text-[11px] font-bold uppercase tracking-wider">
                      {isUrdu ? 'بنیاد' : 'Basis'}
                    </th>
                    <th className="text-right px-4 py-3.5 text-[11px] font-bold uppercase tracking-wider">
                      {isUrdu ? 'بنیادی نرخ' : 'Base'}
                    </th>
                    <th className="text-right px-4 py-3.5 text-[11px] font-bold uppercase tracking-wider">CGST 9%</th>
                    <th className="text-right px-4 py-3.5 text-[11px] font-bold uppercase tracking-wider">SGST 9%</th>
                    <th className="text-right px-4 sm:px-6 py-3.5 text-[11px] font-bold uppercase tracking-wider">
                      {isUrdu ? 'کل فی رات' : 'Payable / Night'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {tariffRows.map(row => (
                    <tr
                      key={row.id}
                      className={`transition ${row.id === 'additional-bed' ? 'bg-amber-50/70' : 'bg-white hover:bg-stone-50'}`}
                    >
                      <td className="px-4 sm:px-6 py-3.5">
                        <div className="flex items-center gap-2">
                          <span className={`w-7 h-7 rounded-lg flex items-center justify-center ${row.id === 'additional-bed' ? 'bg-amber-100 text-amber-800' : 'bg-blue-50 text-[#1e3a8a]'}`}>
                            {roomIcons[row.id] ?? <BedDouble className="w-4 h-4" />}
                          </span>
                          <span className="font-semibold text-stone-900">{isUrdu ? row.labelUrdu : row.label}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3.5 text-xs text-stone-500">{row.note}</td>
                      <td className="px-4 py-3.5 text-right font-mono text-stone-700">₹ {inr(row.tariff)}</td>
                      <td className="px-4 py-3.5 text-right font-mono text-xs text-stone-500">₹ {inr(cgstOf(row.tariff))}</td>
                      <td className="px-4 py-3.5 text-right font-mono text-xs text-stone-500">₹ {inr(cgstOf(row.tariff))}</td>
                      <td className="px-4 sm:px-6 py-3.5 text-right font-mono font-bold text-[#1e3a8a]">
                        ₹ {inr(withGst(row.tariff))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-start gap-2 px-4 sm:px-6 py-3 bg-stone-50 border-t border-stone-200 text-[11px] text-stone-600">
              <ShieldCheck className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
              <p>
                {isUrdu
                  ? 'ٹیکس والے کالم صرف 18% کے مفروضے پر تخمینہ ہیں۔ فراہم کردہ ٹیکس کی شرح مقامات کے لیے ہے؛ کمروں پر لاگو ٹیکس کی تصدیق بکنگ ڈیسک سے کریں۔'
                  : 'Tax columns illustrate an estimate assuming 18% GST, not a confirmed room-tax rate. The supplied tax statement applies to venues; confirm accommodation taxes with the reservations desk.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Category Showcase (magazine layout) ═══ */}
      <section className="py-16 bg-white border-b border-stone-200" id="categories">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#1e3a8a] uppercase tracking-wider">
                <BedDouble className="w-4 h-4 text-amber-600" />
                <span>{isUrdu ? 'رہائش کی اقسام' : 'Accommodation Categories'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif-title font-bold text-stone-900 mt-1">
                {isUrdu ? 'اپنی ضرورت کے مطابق کمرہ منتخب کریں' : 'Choose the Category That Suits Your Stay'}
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-amber-900 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg">
              <BedSingle className="w-3.5 h-3.5" />
              <span>
                {isUrdu
                  ? `اضافی بستر ₹ ${inr(guestRoomAdditionalBedTariff)} فی رات + ٹیکس`
                  : `Additional bed ₹ ${inr(guestRoomAdditionalBedTariff)} per night + GST`}
              </span>
            </div>
          </div>

          <div className="space-y-14 lg:space-y-20">
            {guestRoomsData.map((room, index) => (
              <article key={room.id} className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Visual */}
                <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-lg bg-stone-100 group">
                    <img
                      src={room.image}
                      alt={room.type}
                      referrerPolicy="no-referrer"
                      className="w-full h-64 sm:h-80 lg:h-[26rem] object-cover group-hover:scale-105 transition duration-700"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr ${roomAccent[room.id] ?? 'from-blue-950/70 to-transparent'} mix-blend-multiply`}
                    />
                    <span className="absolute top-4 left-4 bg-white/95 text-[#1e3a8a] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {isUrdu && room.occupancyUrdu ? room.occupancyUrdu : room.occupancy}
                    </span>
                    <span className="absolute bottom-4 right-4 bg-blue-950/80 text-stone-200 text-[10px] font-bold px-2 py-1 rounded-md font-mono">
                      {index + 1} / {guestRoomsData.length}
                    </span>
                  </div>
                </div>

                {/* Narrative */}
                <div className={`lg:col-span-5 space-y-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-blue-50 text-[#1e3a8a] flex items-center justify-center">
                      {roomIcons[room.id]}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-serif-title text-stone-900">
                      {roomName(room)}
                    </h3>
                  </div>

                  <p className="text-sm text-stone-600 leading-relaxed">{room.description}</p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {room.amenities.map(item => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 text-[11px] text-stone-700 bg-stone-50 border border-stone-200 px-2 py-1 rounded-lg"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-2 rounded-xl border border-stone-200 bg-stone-50 p-4 grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-stone-500 font-bold">
                        {isUrdu ? 'فی رات (بنیادی)' : 'Per Night (Base)'}
                      </div>
                      <div className="text-lg font-bold font-serif-title text-[#1e3a8a]">₹ {inr(room.tariff)}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase tracking-wider text-stone-500 font-bold">
                        {isUrdu ? '18% ٹیکس کے ساتھ تخمینہ' : 'Estimate with 18% GST'}
                      </div>
                      <div className="text-lg font-bold font-serif-title text-stone-800">₹ {inr(withGst(room.tariff))}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => scrollToForm(room.id)}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#1e3a8a] hover:bg-blue-900 text-amber-200 text-xs font-bold transition shadow flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{isUrdu ? 'اس قسم کا کمرہ بک کریں' : 'Reserve This Category'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Reservation Studio (form + sticky estimate) ═══ */}
      <section className="py-16 bg-stone-50 border-b border-stone-200" id="reserve">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#1e3a8a] uppercase tracking-wider">
                <Calculator className="w-4 h-4 text-amber-600" />
                <span>{isUrdu ? 'بکنگ اور تخمینہ' : 'Reservation Studio'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif-title font-bold text-stone-900 mt-1">
                {isUrdu ? 'تاریخیں منتخب کریں — تخمینہ فوراً دیکھیں' : 'Pick Your Dates — See the Estimate Instantly'}
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-stone-700 bg-white border border-stone-200 px-3 py-1.5 rounded-lg">
              <Clock className="w-3.5 h-3.5 text-blue-800" />
              <span>{reservationDesk.timing}</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Booking form */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-[#1e3a8a] text-amber-200 text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <div>
                  <div className="text-sm font-bold font-serif-title text-stone-900">
                    {isUrdu ? 'مہمان کی تفصیل اور قیام کی معلومات' : 'Guest Details & Stay Information'}
                  </div>
                  <div className="text-[11px] text-stone-500">
                    {isUrdu
                      ? 'درخواست بھیجنے کے بعد بکنگ ڈیسک دستیابی کی تصدیق کرے گا'
                      : 'The reservations desk confirms availability after submission'}
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-stone-700 block mb-1.5">
                      {isUrdu ? 'مہمان کا نام *' : 'Guest Name *'}
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder={isUrdu ? 'مکمل نام' : 'Full name'}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/25 focus:border-[#1e3a8a] transition"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-stone-700 block mb-1.5">
                      {isUrdu ? 'موبائل نمبر *' : 'Mobile Phone *'}
                    </label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91..."
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/25 focus:border-[#1e3a8a] transition"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-stone-700 block mb-1.5">
                      {isUrdu ? 'ای میل *' : 'Email Address *'}
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@domain.com"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/25 focus:border-[#1e3a8a] transition"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-stone-700 block mb-1.5">
                      {isUrdu ? 'درخواست کی بنیاد' : 'Reservation Category'}
                    </label>
                    <select
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/25 focus:border-[#1e3a8a] transition"
                    >
                      <option value="IICC Member">IICC Member</option>
                      <option value="Member's Nominee">Member's Nominee</option>
                      <option value="Guest of the Centre">Guest of the Centre</option>
                    </select>
                  </div>
                </div>

{/* Membership ID (members) & room category */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1.5">
                        {isUrdu ? 'رکنیت نمبر' : 'Membership ID'}
                      </label>
                      <input
                        type="text"
                        disabled={form.category === 'Guest of the Centre'}
                        value={form.memberId}
                        onChange={(e) => setForm({ ...form, memberId: e.target.value })}
                        placeholder={form.category === 'Guest of the Centre' ? '—' : 'e.g. IICC-LM-1092'}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/25 focus:border-[#1e3a8a] transition disabled:bg-stone-100 disabled:text-stone-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1.5">
                        {isUrdu ? 'کمرے کی قسم *' : 'Room Category *'}
                      </label>
                      <select
                        value={form.roomId}
                        onChange={(e) => setForm({ ...form, roomId: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/25 focus:border-[#1e3a8a] transition"
                      >
                        {guestRoomsData.map(room => (
                          <option key={room.id} value={room.id}>
                            {room.type} — ₹ {inr(room.tariff)} / night
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block text-xs font-semibold text-stone-700">
                    {isUrdu ? 'آمد کی تاریخ *' : 'Check-in *'}
                    <input required type="date" value={form.checkIn} min={today}
                      onChange={e => setForm({ ...form, checkIn: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-stone-300 px-3.5 py-2.5" />
                  </label>
                  <label className="block text-xs font-semibold text-stone-700">
                    {isUrdu ? 'روانگی کی تاریخ *' : 'Check-out *'}
                    <input required type="date" value={form.checkOut} min={form.checkIn || today}
                      onChange={e => setForm({ ...form, checkOut: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-stone-300 px-3.5 py-2.5" />
                  </label>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block text-xs font-semibold text-stone-700">
                    {isUrdu ? 'کمروں کی تعداد' : 'Number of rooms'}
                    <input required type="number" min="1" step="1" value={form.rooms}
                      onChange={e => setForm({ ...form, rooms: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-stone-300 px-3.5 py-2.5" />
                  </label>
                  <label className="block text-xs font-semibold text-stone-700">
                    {isUrdu ? 'اضافی بستروں کی کل تعداد' : 'Additional beds (total per night)'}
                    <input required type="number" min="0" step="1" value={form.extraBeds}
                      onChange={e => setForm({ ...form, extraBeds: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-stone-300 px-3.5 py-2.5" />
                  </label>
                </div>
                {formError && <p role="alert" className="text-sm text-red-700">{formError}</p>}
                <p className="text-xs leading-relaxed text-stone-500">
                  {isUrdu ? 'واٹس ایپ میں درخواست کھلے گی۔ بھیجنے سے پہلے جائزہ لیں۔ دستیابی اور حتمی قیمت بکنگ ڈیسک سے تصدیق کریں۔' : 'Opens an enquiry in WhatsApp for you to review and send. Availability and final charges must be confirmed with the reservations desk. This is not a confirmed booking.'}
                </p>
                <button type="submit" className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#1e3a8a] px-5 py-3 text-sm font-bold text-white hover:bg-blue-900 transition">
                  <MessageCircle className="w-4 h-4" />
                  {isUrdu ? 'واٹس ایپ پر درخواست تیار کریں' : 'Prepare WhatsApp Enquiry'}
                </button>
              </form>
            </div>
            <aside className="lg:col-span-5 lg:sticky lg:top-28 rounded-2xl overflow-hidden bg-[#06241e] text-white shadow-lg">
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 text-amber-300 text-xs uppercase tracking-wider font-bold">
                  <ReceiptText className="w-4 h-4" />{isUrdu ? 'قیام کا تخمینہ' : 'Your Stay Estimate'}
                </div>
                <h3 className="mt-4 text-2xl font-serif-title">{roomName(selectedRoom)}</h3>
                <p className="mt-2 text-sm text-stone-300">{roomsCount} {isUrdu ? 'کمرے' : 'room(s)'} · {nights} {isUrdu ? 'راتیں' : 'night(s)'}</p>
                <dl className="mt-6 space-y-4 text-sm">
                  {[
                    [isUrdu ? 'کمرے' : 'Room subtotal', roomSubtotal],
                    [isUrdu ? 'اضافی بستر' : 'Additional beds', bedSubtotal],
                    ['CGST (9% estimate)', cgstOf(subtotal)],
                    ['SGST (9% estimate)', cgstOf(subtotal)]
                  ].map(([label, amount]) => (
                    <div key={label} className="flex justify-between gap-4"><dt className="text-stone-300">{label}</dt><dd className="tabular-nums">₹ {inr(Number(amount))}</dd></div>
                  ))}
                </dl>
                <div className="mt-6 border-t border-white/15 pt-6 flex justify-between gap-4 items-end" aria-live="polite">
                  <span className="text-sm text-stone-300">{isUrdu ? 'تخمینی کل' : 'Estimated total'}</span>
                  <strong className="text-3xl text-amber-300 tabular-nums">₹ {inr(grandTotal)}</strong>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-stone-400">{isUrdu ? 'تخمینے میں 18% ٹیکس فرض کیا گیا ہے۔ کمروں پر لاگو ٹیکس کی تصدیق بکنگ ڈیسک سے کریں۔' : 'Estimate assumes 18% GST. The supplied tax statement covers venues; please confirm applicable accommodation taxes with the desk.'}</p>
                <a href="tel:+911143535353" className="mt-6 inline-flex items-center gap-2 text-sm text-amber-200 hover:underline"><Phone className="w-4 h-4" />011-43535353</a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1e3a8a]"><Percent className="w-4 h-4" />{isUrdu ? 'اضافی سہولیات' : 'Planning an event alongside your stay?'}</div>
          <h2 className="mt-2 text-3xl font-serif-title font-bold text-stone-900">{isUrdu ? 'مقامات کے اضافی اخراجات' : 'Venue Add-ons & Charges'}</h2>
          <p className="mt-3 text-sm text-stone-600">{isUrdu ? 'تمام مقامات پر CGST 9% اور SGST 9% لاگو ہیں۔ یہ اخراجات کمرے کے تخمینے میں شامل نہیں ہیں۔' : 'CGST 9% and SGST 9% apply to all venues. These optional venue charges are separate from your room estimate.'}</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {venueAddOnCharges.map(charge => (
              <article key={charge.id} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                <h3 className="text-sm font-semibold text-stone-800">{isUrdu ? charge.itemUrdu ?? charge.item : charge.item}</h3>
                <p className="mt-3 text-xl font-bold text-[#1e3a8a]">₹ {inr(charge.amount)} <span className="text-xs font-normal text-stone-500">+ GST{charge.id === 'addon-microphone' ? (isUrdu ? ' / فی مائیک' : ' / microphone') : ''}</span></p>
                <p className="mt-1 text-xs text-stone-500">₹ {inr(withGst(charge.amount))} {isUrdu ? 'ٹیکس سمیت' : 'including GST'}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif-title font-bold text-stone-900">{isUrdu ? 'ہم سے رابطہ کریں' : 'Speak with Our Team'}</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { title: isUrdu ? 'رہائش اور عمومی معلومات' : 'Rooms & General Enquiries', phones: ['011-43535353', '011-43535350', '+91 97174 55353'] },
              { title: isUrdu ? 'مقامات کی بکنگ' : 'Venue Reservations', phones: ['011-43535338', '+91 88600 49535'] },
              { title: isUrdu ? 'سیکریٹری دفتر' : 'Secretary Office', phones: ['011-43535353', '+91 98103 93707'] }
            ].map(contact => (
              <div key={contact.title} className="rounded-2xl border border-stone-200 bg-white p-6">
                <h3 className="font-semibold text-[#1e3a8a] mb-4">{contact.title}</h3>
                {contact.phones.map(phone => <a key={phone} href={`tel:${phone.startsWith('0') ? '+91' + phone.slice(1).replace(/\D/g, '') : phone.replace(/[^+0-9]/g, '')}`} className="flex items-center gap-2 py-2 text-sm text-stone-600 hover:text-blue-800"><Phone className="w-4 h-4" /><span dir="ltr">{phone}</span></a>)}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col lg:flex-row gap-6 justify-between text-sm text-stone-600">
            <div className="flex items-start gap-3"><MapPin className="w-5 h-5 shrink-0 text-amber-600" /><address className="not-italic">India Islamic Cultural Centre<br />87 - 88, Lodhi Road, New Delhi - 110003</address></div>
            <div className="space-y-2">{['iiccdelhi29@rediffmail.com', 'iiccdelhi@gmail.com'].map(email => <a key={email} href={`mailto:${email}`} className="flex items-center gap-2 hover:text-blue-800"><Mail className="w-4 h-4" />{email}</a>)}</div>
          </div>
        </div>
      </section>
    </div>
  );
};
