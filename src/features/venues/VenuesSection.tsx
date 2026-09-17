import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  Maximize2, 
  CheckCircle2, 
  Calculator, 
  Calendar, 
  Sparkles, 
  FileText,
  Phone,
  ShieldAlert,
  ArrowRight,
  Clock,
  X
} from 'lucide-react';
import { Venue } from '../../shared/types';
import { venuesData } from '../../data/mockData';
import { translations } from '../../data/translations';
import { useTranslation } from 'react-i18next';

interface VenuesSectionProps {
}

export const VenuesSection: React.FC<VenuesSectionProps> = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as 'en' | 'ur';
  const [selectedVenue, setSelectedVenue] = useState<Venue>(venuesData[0]);
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [isMemberRate, setIsMemberRate] = useState(true);
  const [bookingVenueId, setBookingVenueId] = useState(venuesData[0].id);
  const [bookingSlot, setBookingSlot] = useState<'morning' | 'evening' | 'fullday'>('evening');
  const [includeAV, setIncludeAV] = useState(true);
  const [includeCatering, setIncludeCatering] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const [bookingForm, setBookingForm] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    eventDate: '2026-10-15',
    eventPurpose: 'Annual Cultural Convocation & Lecture',
    expectedGuests: '250',
    memberId: 'IICC-LM-4821'
  });

  const t = translations[currentLang];

  // Calculate estimated venue quote
  const currentVenue = venuesData.find(v => v.id === bookingVenueId) || venuesData[0];
  const hourlyBase = isMemberRate ? currentVenue.hourlyTariffMember : currentVenue.hourlyTariffStandard;
  const dayBase = isMemberRate ? currentVenue.dayTariffMember : currentVenue.dayTariffStandard;
  
  const venueTotal = bookingSlot === 'fullday' ? dayBase : hourlyBase * (bookingSlot === 'morning' ? 4 : 5);
  const avCost = includeAV ? 12000 : 0;
  const cateringEstimate = includeCatering ? parseInt(bookingForm.expectedGuests || '100', 10) * 750 : 0;
  const subtotal = venueTotal + avCost + cateringEstimate;
  const gst = Math.round(subtotal * 0.18);
  const grandTotal = subtotal + gst;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `IICC-BK-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setBookingSubmitted(true);
  };

  return (
    <section className="py-16 bg-stone-50 border-b border-stone-200" id="venues">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#1e3a8a] uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-amber-600" />
              <span>{currentLang === 'ur' ? 'ہالز و عمارات' : 'Venues & Facility Hire'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif-title font-bold text-stone-900 mt-1">
              {currentLang === 'ur' ? 'تقاریب اور کانفرنسوں کے لیے عالمی معیار کے ہالز' : 'State-of-the-Art Spaces for Convocations & Celebrations'}
            </h2>
          </div>

          <button
            id="open-venue-calculator-btn"
            onClick={() => {
              setBookingVenueId(selectedVenue.id);
              setCalculatorOpen(true);
            }}
            className="px-4 py-2.5 rounded-lg bg-[#1e3a8a] hover:bg-blue-900 text-amber-300 text-xs font-bold shadow-xs transition flex items-center gap-2 self-start md:self-auto cursor-pointer min-h-[44px]"
          >
            <Calculator className="w-4 h-4" />
            <span>Venue Tariff Calculator & Booking</span>
          </button>
        </div>

        {/* Venue Selection Carousel / Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
          {venuesData.map((venue) => (
            <button
              key={venue.id}
              onClick={() => setSelectedVenue(venue)}
              className={`p-4 rounded-xl text-left border transition cursor-pointer flex flex-col justify-between min-h-[44px] ${
                selectedVenue.id === venue.id
                  ? 'bg-white border-[#1e3a8a] shadow-md ring-1 ring-[#1e3a8a]'
                  : 'bg-white/70 border-stone-200 hover:bg-white hover:border-stone-300'
              }`}
            >
              <div>
                <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider block mb-1">
                  {venue.capacity}
                </span>
                <h3 className="text-xs font-bold text-stone-900 line-clamp-2">
                  {currentLang === 'ur' && venue.nameUrdu ? venue.nameUrdu : venue.name}
                </h3>
              </div>
              <div className="mt-3 text-[11px] font-medium text-blue-800 flex items-center gap-1">
                <span>View Details</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </button>
          ))}
        </div>

        {/* Selected Venue Showcase Display */}
        <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
          <div className="grid lg:grid-cols-12">
            {/* Left: Photos */}
            <div className="lg:col-span-6 relative min-h-[340px] bg-stone-100">
              <img
                src={selectedVenue.image}
                alt={selectedVenue.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <span className="text-xs bg-amber-400 text-blue-950 font-bold px-2.5 py-0.5 rounded-full uppercase">
                    {selectedVenue.dimensions}
                  </span>
                  <h3 className="text-2xl font-serif-title font-bold text-white">
                    {currentLang === 'ur' && selectedVenue.nameUrdu ? selectedVenue.nameUrdu : selectedVenue.name}
                  </h3>
                  <p className="text-xs text-stone-200">
                    Capacity: <strong>{selectedVenue.capacity}</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Technical Specs & Tariff Matrix */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">
                    Optimal Utilization
                  </h4>
                  <p className="text-xs font-semibold text-blue-900 bg-blue-50 p-2.5 rounded-lg border border-blue-200/60">
                    {selectedVenue.bestFor}
                  </p>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {selectedVenue.description}
                </p>

                {/* Features List */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                    Integrated Facilities & Audio-Visual
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {selectedVenue.features.map((f) => (
                      <div key={f} className="flex items-center gap-1.5 text-xs text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tariff Strip */}
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-stone-600">Member Subsidized Full-Day:</span>
                    <strong className="text-blue-900 font-serif-title text-sm">
                      ₹ {selectedVenue.dayTariffMember.toLocaleString()} + GST
                    </strong>
                  </div>
                  <div className="flex items-center justify-between text-xs pt-1 border-t border-stone-200">
                    <span className="text-stone-600">Standard Non-Member Full-Day:</span>
                    <strong className="text-stone-800 font-serif-title text-sm">
                      ₹ {selectedVenue.dayTariffStandard.toLocaleString()} + GST
                    </strong>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    setBookingVenueId(selectedVenue.id);
                    setCalculatorOpen(true);
                  }}
                  className="flex-1 py-2.5 px-4 rounded-lg bg-[#1e3a8a] hover:bg-blue-900 text-amber-300 text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve & Estimate Cost for this Venue</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* TARIFF CALCULATOR & BOOKING MODAL */}
        {calculatorOpen && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative my-8 max-h-[92vh] overflow-y-auto">
              <button
                onClick={() => { setCalculatorOpen(false); setBookingSubmitted(false); }}
                className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>

              {bookingSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif-title text-stone-900">
                    Booking Request Registered!
                  </h3>
                  <p className="text-sm text-stone-600 max-w-md mx-auto">
                    Your provisional booking inquiry for <strong>{currentVenue.name}</strong> on {bookingForm.eventDate} has been dispatched to the IICC Venue Facilitation Secretariat.
                  </p>
                  <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 max-w-xs mx-auto">
                    <span className="text-xs text-stone-500 block">Provisional Booking Reference:</span>
                    <strong className="text-lg font-mono text-blue-900">{bookingRef}</strong>
                  </div>
                  <p className="text-xs text-stone-500 max-w-sm mx-auto">
                    The Secretariat will contact you via email ({bookingForm.email}) or phone ({bookingForm.phone}) within 24 hours to confirm date allotment and security deposit terms.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                      Official Tariff Estimator
                    </span>
                    <h3 className="text-2xl font-bold font-serif-title text-stone-900 mt-1">
                      Venue Booking & Cost Calculator
                    </h3>
                    <p className="text-xs text-stone-500">
                      Compute exact institutional rates, member subsidies, audio-visual technical fees, and tax estimates.
                    </p>
                  </div>

                  {/* Calculator Form Controls */}
                  <div className="grid md:grid-cols-12 gap-6 items-start">
                    <div className="md:col-span-7 space-y-4">
                      {/* Venue selector */}
                      <div>
                        <label className="text-xs font-bold text-stone-700 block mb-1">Select Facility / Hall *</label>
                        <select
                          value={bookingVenueId}
                          onChange={(e) => setBookingVenueId(e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 bg-white"
                        >
                          {venuesData.map(v => (
                            <option key={v.id} value={v.id}>{v.name} ({v.capacity})</option>
                          ))}
                        </select>
                      </div>

                      {/* Slot selector */}
                      <div>
                        <label className="text-xs font-bold text-stone-700 block mb-1">Time Slot / Duration *</label>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { key: 'morning', label: 'Morning Slot (09:00 - 13:00)' },
                            { key: 'evening', label: 'Evening Slot (16:00 - 21:00)' },
                            { key: 'fullday', label: 'Full Day (09:00 - 21:00)' }
                          ].map(s => (
                            <button
                              key={s.key}
                              type="button"
                              onClick={() => setBookingSlot(s.key as any)}
                              className={`p-2 rounded-lg text-xs font-semibold border text-center transition ${
                                bookingSlot === s.key 
                                  ? 'bg-blue-50 border-[#1e3a8a] text-[#1e3a8a] font-bold' 
                                  : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                              }`}
                            >
                              {s.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Membership rate toggle */}
                      <div className="flex items-center justify-between p-3 rounded-lg bg-stone-50 border border-stone-200">
                        <div className="text-xs">
                          <span className="font-bold text-stone-900 block">IICC Member Concession Rate</span>
                          <span className="text-stone-500">Apply subsidized member tariff (subject to active ID)</span>
                        </div>
                        <input
                          type="checkbox"
                          checked={isMemberRate}
                          onChange={(e) => setIsMemberRate(e.target.checked)}
                          className="w-4 h-4 rounded text-blue-800"
                        />
                      </div>

                      {/* Addons */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-stone-700 block">Auxiliary Technical & Catering Add-ons</label>
                        <label className="flex items-center gap-2 text-xs text-stone-700 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={includeAV}
                            onChange={(e) => setIncludeAV(e.target.checked)}
                            className="rounded text-blue-800"
                          />
                          <span>High-Definition Sound & Stage Lighting Package (+₹12,000)</span>
                        </label>
                        <label className="flex items-center gap-2 text-xs text-stone-700 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={includeCatering}
                            onChange={(e) => setIncludeCatering(e.target.checked)}
                            className="rounded text-blue-800"
                          />
                          <span>Dastarkhwan Buffet Catering Package (~₹750/person)</span>
                        </label>
                      </div>

                      {/* Organizer Details */}
                      <form onSubmit={handleBookingSubmit} className="space-y-3 pt-2 border-t border-stone-200">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="text-xs font-semibold text-stone-700 block mb-1">Organizer Name *</label>
                            <input
                              required
                              type="text"
                              value={bookingForm.name}
                              onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                              placeholder="Full Name"
                              className="w-full px-3 py-1.5 text-xs rounded border border-stone-300"
                            />
                          </div>
                          <div>
                            <label htmlFor="booking-organization" className="text-xs font-semibold text-stone-700 block mb-1">Organization / Trust</label>
                            <input
                              id="booking-organization"
                              type="text"
                              value={bookingForm.organization}
                              onChange={(e) => setBookingForm({...bookingForm, organization: e.target.value})}
                              placeholder="e.g. Society for Heritage"
                              className="w-full px-3 py-1.5 text-xs rounded border border-stone-300"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="text-xs font-semibold text-stone-700 block mb-1">Contact Phone *</label>
                            <input
                              required
                              type="tel"
                              value={bookingForm.phone}
                              onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                              placeholder="+91..."
                              className="w-full px-3 py-1.5 text-xs rounded border border-stone-300"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-semibold text-stone-700 block mb-1">Email *</label>
                            <input
                              required
                              type="email"
                              value={bookingForm.email}
                              onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                              placeholder="email@example.com"
                              className="w-full px-3 py-1.5 text-xs rounded border border-stone-300"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="text-xs font-semibold text-stone-700 block mb-1">Desired Event Date *</label>
                            <input
                              required
                              type="date"
                              value={bookingForm.eventDate}
                              onChange={(e) => setBookingForm({...bookingForm, eventDate: e.target.value})}
                              className="w-full px-3 py-1.5 text-xs rounded border border-stone-300"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-semibold text-stone-700 block mb-1">Expected Attendees</label>
                            <input
                              type="number"
                              value={bookingForm.expectedGuests}
                              onChange={(e) => setBookingForm({...bookingForm, expectedGuests: e.target.value})}
                              className="w-full px-3 py-1.5 text-xs rounded border border-stone-300"
                            />
                          </div>
                        </div>

                        <div className="pt-2">
                          <button
                            type="submit"
                            className="w-full py-2.5 rounded-lg bg-[#1e3a8a] hover:bg-blue-900 text-amber-200 text-xs font-bold transition shadow cursor-pointer"
                          >
                            Submit Provisional Reservation Request
                          </button>
                        </div>
                      </form>
                    </div>

                    {/* Right: Real-time Itemized Cost Breakdown */}
                    <div className="md:col-span-5 bg-stone-50 rounded-xl p-5 border border-stone-200 space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 border-b border-stone-200 pb-2">
                        Estimated Tariff Breakdown
                      </h4>

                      <div className="space-y-2.5 text-xs">
                        <div className="flex justify-between text-stone-700">
                          <span>Base Venue Allotment:</span>
                          <span className="font-mono font-semibold">₹ {venueTotal.toLocaleString()}</span>
                        </div>
                        {includeAV && (
                          <div className="flex justify-between text-stone-700">
                            <span>Stage Sound & AV Console:</span>
                            <span className="font-mono font-semibold">₹ 12,000</span>
                          </div>
                        )}
                        {includeCatering && (
                          <div className="flex justify-between text-stone-700">
                            <span>Catering ({bookingForm.expectedGuests} pax):</span>
                            <span className="font-mono font-semibold">₹ {cateringEstimate.toLocaleString()}</span>
                          </div>
                        )}

                        <div className="pt-2 border-t border-stone-200 flex justify-between text-stone-800">
                          <span>Subtotal:</span>
                          <span className="font-mono font-bold">₹ {subtotal.toLocaleString()}</span>
                        </div>

                        <div className="flex justify-between text-stone-500 text-[11px]">
                          <span>GST (18% Statutory):</span>
                          <span className="font-mono">₹ {gst.toLocaleString()}</span>
                        </div>

                        <div className="pt-2 border-t border-stone-300 flex justify-between text-sm font-bold text-blue-900">
                          <span>Estimated Total:</span>
                          <span className="font-mono text-base text-[#1e3a8a]">₹ {grandTotal.toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="p-3 bg-amber-50 rounded-lg border border-amber-200/60 text-[11px] text-amber-900 space-y-1">
                        <div className="font-bold flex items-center gap-1">
                          <ShieldAlert className="w-3.5 h-3.5 text-amber-700" />
                          <span>Booking Advisory:</span>
                        </div>
                        <p>
                          Formal allotment is confirmed following Executive Committee review and payment of a 50% advance security deposit.
                        </p>
                      </div>

                      <div className="text-[11px] text-stone-500 text-center">
                        Direct Booking Desk: <strong>011-43535338</strong>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
