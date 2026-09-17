import React, { useState } from 'react';
import { 
  BedDouble, 
  Utensils, 
  BookOpen, 
  Coffee, 
  CheckCircle, 
  Search, 
  Clock, 
  Calendar, 
  PhoneCall, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { Language, GuestRoom } from '../../shared/types';
import { guestRoomsData, diningInfo, libraryInfo } from '../../data/mockData';
import { translations } from '../../data/translations';
import { useTranslation } from 'react-i18next';

interface AmenitiesSectionProps {
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as 'en' | 'ur';
  const [activeTab, setActiveTab] = useState<'rooms' | 'dining' | 'library'>('rooms');
  const [selectedRoom, setSelectedRoom] = useState<GuestRoom | null>(null);
  const [roomBookingSuccess, setRoomBookingSuccess] = useState(false);
  const [roomForm, setRoomForm] = useState({
    name: '',
    phone: '',
    email: '',
    checkIn: '2026-10-10',
    checkOut: '2026-10-12',
    roomsCount: '1',
    isMember: true,
    memberId: ''
  });

  // Library catalog search
  const [catalogQuery, setCatalogQuery] = useState('');
  const sampleBooks = [
    { title: 'Tazkirat-ul-Auliya (Biographies of Sufis)', author: 'Fariduddin Attar', lang: 'Persian/Urdu', callNo: 'IICC-LIB-SUF-102' },
    { title: 'Sirat-e-Mustaqeem: The Straight Path', author: 'Shah Ismail Dehlavi', lang: 'Arabic/Urdu', callNo: 'IICC-LIB-TH-304' },
    { title: 'Kulliyat-e-Mir Taqi Mir (Complete Works)', author: 'Mir Taqi Mir', lang: 'Urdu', callNo: 'IICC-LIB-UR-811' },
    { title: 'Indian Muslims: Where Have They Gone Wrong?', author: 'Rafiq Zakaria', lang: 'English', callNo: 'IICC-LIB-SOC-509' },
    { title: 'Architecture of the Mughal Empire', author: 'Catherine B. Asher', lang: 'English', callNo: 'IICC-LIB-ART-240' },
  ];

  const filteredBooks = sampleBooks.filter(b => 
    b.title.toLowerCase().includes(catalogQuery.toLowerCase()) ||
    b.author.toLowerCase().includes(catalogQuery.toLowerCase()) ||
    b.lang.toLowerCase().includes(catalogQuery.toLowerCase())
  );

  const handleRoomEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setRoomBookingSuccess(true);
    setTimeout(() => {
      setRoomBookingSuccess(false);
      setSelectedRoom(null);
      setRoomForm({
        name: '',
        phone: '',
        email: '',
        checkIn: '2026-10-10',
        checkOut: '2026-10-12',
        roomsCount: '1',
        isMember: true,
        memberId: ''
      });
    }, 2800);
  };

  return (
    <section className="py-16 bg-white border-b border-stone-200" id="services">
      <div id="library" className="-mt-20 pt-20" />
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#1e3a8a] uppercase tracking-wider">
              <Utensils className="w-4 h-4 text-amber-600" />
              <span>{currentLang === 'ur' ? 'مہمان نوازی اور خدمات' : 'Hospitality, Dining & Intellectual Resources'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif-title font-bold text-stone-900 mt-1">
              {currentLang === 'ur' ? 'کیمپس میں مہمان خانے، ریفرنس لائبریری اور دسترخوان' : 'On-Site Amenities & Campus Services'}
            </h2>
          </div>

          {/* Sub-tabs */}
          <div className="flex bg-stone-100 p-1 rounded-lg border border-stone-200 self-start md:self-auto">
            <button
              id="tab-amenity-rooms-btn"
              onClick={() => setActiveTab('rooms')}
              className={`px-4 py-2.5 text-xs font-bold rounded-md transition flex items-center gap-1.5 min-h-[44px] ${
                activeTab === 'rooms' ? 'bg-white text-[#1e3a8a] shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <BedDouble className="w-3.5 h-3.5" />
              <span>Guest Rooms</span>
            </button>
            <button
              id="tab-amenity-dining-btn"
              onClick={() => setActiveTab('dining')}
              className={`px-4 py-2.5 text-xs font-bold rounded-md transition flex items-center gap-1.5 min-h-[44px] ${
                activeTab === 'dining' ? 'bg-white text-[#1e3a8a] shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>Dining & Cafe</span>
            </button>
            <button
              id="tab-amenity-library-btn"
              onClick={() => setActiveTab('library')}
              className={`px-4 py-2.5 text-xs font-bold rounded-md transition flex items-center gap-1.5 min-h-[44px] ${
                activeTab === 'library' ? 'bg-white text-[#1e3a8a] shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Library & Archives</span>
            </button>
          </div>
        </div>

        {/* 1. GUEST ROOMS TAB */}
        {activeTab === 'rooms' && (
          <div className="space-y-8">
            <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-stone-700">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-800 shrink-0" />
                <span>
                  <strong>Lodhi Road Guest Wing:</strong> 32 tastefully furnished air-conditioned rooms and suites with 24/7 security, room service, and direct proximity to cultural events.
                </span>
              </div>
              <div className="font-semibold text-amber-900">
                Front Desk Direct: +91 9717455353 / 011-43535353
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {guestRoomsData.map((room) => (
                <div key={room.id} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition flex flex-col justify-between">
                  <div>
                    <div className="relative h-60 bg-stone-100">
                      <img src={room.image} alt={room.type} className="w-full h-full object-cover" />
                      <div className="absolute top-3 left-3 bg-[#1e3a8a] text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                        {room.count} Rooms Available
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-xl font-bold font-serif-title text-stone-900">
                          {room.type}
                        </h3>
                      </div>
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                        {room.description}
                      </p>

                      <div className="mt-4 pt-3 border-t border-stone-100">
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-2">Room Amenities</h4>
                        <div className="grid grid-cols-2 gap-2">
                            {room.amenities.map((item) => (
                              <div key={item} className="text-xs text-stone-700 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-700"></span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 flex items-center justify-between mb-4">
                      <div>
                        <div className="text-[11px] text-stone-500">Member Tariff / Night:</div>
                        <div className="text-lg font-bold font-serif-title text-blue-900">
                          ₹ {room.tariffMember.toLocaleString()}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[11px] text-stone-500">Non-Member:</div>
                        <div className="text-sm font-bold text-stone-700">
                          ₹ {room.tariffNonMember.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedRoom(room)}
                      className="w-full py-2.5 rounded-lg bg-[#1e3a8a] hover:bg-blue-900 text-amber-200 text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book / Enquire Room Availability</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. DINING TAB */}
        {activeTab === 'dining' && (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left: Dastarkhwan Restaurant */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs p-6 sm:p-8 space-y-6">
              <div className="relative h-64 rounded-xl overflow-hidden bg-stone-100">
                <img src={diningInfo.images[0]} alt="Dastarkhwan Dining" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-xs bg-amber-400 text-blue-950 font-bold px-2 py-0.5 rounded-full uppercase">
                      Fine Dining
                    </span>
                    <h3 className="text-2xl font-serif-title font-bold text-white mt-1">
                      {diningInfo.restaurantName}
                    </h3>
                    <p className="text-xs text-stone-200 mt-0.5">
                      {currentLang === 'ur' ? diningInfo.restaurantUrdu : 'Authentic Awadhi & Mughlai Heritage Cuisine'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-200/60 text-xs text-blue-950 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-800" />
                    <span><strong>Operating Hours:</strong> {diningInfo.timing}</span>
                  </div>
                  <span className="font-semibold text-blue-800">Open Daily</span>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                    Culinary Specialties & House Recommendations
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {diningInfo.specialties.map((spec) => (
                      <div key={spec} className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 text-xs font-semibold text-stone-800 flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 text-xs text-stone-500 flex items-center justify-between border-t border-stone-100">
                  <span>Reservations & Takeaway Desk: 011-43535350</span>
                  <span className="text-blue-800 font-bold">Dine-in with Mughal Garden View</span>
                </div>
              </div>
            </div>

            {/* Right: Cultural Coffee Lounge & Book Cafe */}
            <div className="lg:col-span-5 bg-stone-50 rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
              <div className="relative h-48 rounded-xl overflow-hidden bg-stone-100">
                <img src={diningInfo.images[1]} alt="Coffee Lounge" className="w-full h-full object-cover" />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-stone-800">
                  Daily: 10 AM - 9:30 PM
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-wider">
                  <Coffee className="w-4 h-4" />
                  <span>Literary Cafe</span>
                </div>
                <h3 className="text-xl font-bold font-serif-title text-stone-900 mt-1">
                  {diningInfo.cafeName}
                </h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  {diningInfo.cafeOfferings}
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200 text-xs space-y-2 text-stone-700">
                <div className="font-bold text-stone-900">Featured Beverages:</div>
                <ul className="space-y-1 text-stone-600">
                  <li>• Authentic Kashmiri Kahwa with crushed almonds & saffron</li>
                  <li>• Traditional Sulaimani Mint Tea & Masala Chai</li>
                  <li>• Freshly Brewed Filter Coffee & Artisan Pastries</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* 3. LIBRARY TAB */}
        {activeTab === 'library' && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-8" id="library">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full uppercase">
                  {libraryInfo.volumes}
                </span>
                <h3 className="text-2xl font-serif-title font-bold text-stone-900">
                  {libraryInfo.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  An invaluable repository of academic scholarship, rare lithographs, Urdu poetry anthologies, and manuscripts dating back to the medieval era. Welcomes researchers, doctoral scholars, and members for tranquil reference study.
                </p>

                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-2">
                  <div className="flex items-center justify-between text-stone-700">
                    <span className="text-stone-500">Operating Schedule:</span>
                    <strong>{libraryInfo.timing}</strong>
                  </div>
                  <div className="flex items-center justify-between text-stone-700">
                    <span className="text-stone-500">Languages Available:</span>
                    <strong>{libraryInfo.languages.join(' · ')}</strong>
                  </div>
                  <div className="text-stone-600 pt-1 border-t border-stone-200">
                    {libraryInfo.readingRoom}
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                    Core Subject Classifications
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {libraryInfo.sections.map((sec) => (
                      <div key={sec.name} className="p-2 bg-blue-50/70 border border-blue-200/50 rounded-lg text-xs">
                        <div className="font-semibold text-blue-950">{sec.name}</div>
                        <div className="text-[11px] text-blue-700">{sec.count}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Searchable Online Catalog Simulator */}
              <div className="lg:col-span-6 bg-stone-50 rounded-xl border border-stone-200 p-5 space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    OPAC Online Public Access Catalog Search
                  </h4>
                  <p className="text-xs text-stone-500">
                    Search titles, authors, and classification call numbers in the IICC archives.
                  </p>
                </div>

                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    type="text"
                    value={catalogQuery}
                    onChange={(e) => setCatalogQuery(e.target.value)}
                    placeholder="Search by title, author (e.g. Attar, Mir, Architecture)..."
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-1 focus:ring-blue-800"
                  />
                </div>

                <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                  {filteredBooks.map((book) => (
                    <div key={book.callNo} className="p-3 bg-white rounded-lg border border-stone-200 text-xs flex justify-between items-start gap-2">
                      <div>
                        <h5 className="font-bold text-stone-900">{book.title}</h5>
                        <p className="text-stone-500 text-[11px] mt-0.5">Author: {book.author} · Language: {book.lang}</p>
                      </div>
                      <span className="font-mono text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded shrink-0">
                        {book.callNo}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="text-[11px] text-stone-500 pt-2 border-t border-stone-200 flex justify-between">
                  <span>Physical collection accessible to all registered IICC members</span>
                  <span className="text-blue-800 font-bold">Ground Floor Library Wing</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* GUEST ROOM BOOKING MODAL */}
        {selectedRoom && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
              <button
                onClick={() => { setSelectedRoom(null); setRoomBookingSuccess(false); }}
                className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100"
              >
                ✕
              </button>

              {roomBookingSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold font-serif-title text-stone-900">
                    Room Enquiry Registered!
                  </h3>
                  <p className="text-xs text-stone-600 max-w-xs mx-auto">
                    The Hospitality Front Desk has received your inquiry for <strong>{selectedRoom.type}</strong>. A staff member will verify availability and reach out on your mobile within 2 hours.
                  </p>
                </div>
              ) : (
                <div>
                  <span className="text-[11px] font-bold text-blue-800 uppercase">Guest Wing Reservation</span>
                  <h3 className="text-xl font-bold font-serif-title text-stone-900 mt-1">
                    Enquire for {selectedRoom.type}
                  </h3>
                  <p className="text-xs text-stone-500 mb-4">
                    Member Tariff: ₹{selectedRoom.tariffMember} / night · Standard: ₹{selectedRoom.tariffNonMember}
                  </p>

                  <form onSubmit={handleRoomEnquiry} className="space-y-3">
                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">Guest Name *</label>
                      <input
                        required
                        type="text"
                        value={roomForm.name}
                        onChange={(e) => setRoomForm({...roomForm, name: e.target.value})}
                        placeholder="Full Name"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">Phone *</label>
                        <input
                          required
                          type="tel"
                          value={roomForm.phone}
                          onChange={(e) => setRoomForm({...roomForm, phone: e.target.value})}
                          placeholder="+91..."
                          className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">Email *</label>
                        <input
                          required
                          type="email"
                          value={roomForm.email}
                          onChange={(e) => setRoomForm({...roomForm, email: e.target.value})}
                          placeholder="email@domain.com"
                          className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">Check-in Date *</label>
                        <input
                          required
                          type="date"
                          value={roomForm.checkIn}
                          onChange={(e) => setRoomForm({...roomForm, checkIn: e.target.value})}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">Check-out Date *</label>
                        <input
                          required
                          type="date"
                          value={roomForm.checkOut}
                          onChange={(e) => setRoomForm({...roomForm, checkOut: e.target.value})}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="is-member-check"
                        checked={roomForm.isMember}
                        onChange={(e) => setRoomForm({...roomForm, isMember: e.target.checked})}
                        className="rounded text-blue-800"
                      />
                      <label htmlFor="is-member-check" className="text-xs text-stone-700">
                        Applying under IICC Member Subsidy Rate
                      </label>
                    </div>

                    {roomForm.isMember && (
                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">Membership ID *</label>
                        <input
                          required
                          type="text"
                          value={roomForm.memberId}
                          onChange={(e) => setRoomForm({...roomForm, memberId: e.target.value})}
                          placeholder="e.g. IICC-LM-1092"
                          className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300"
                        />
                      </div>
                    )}

                    <div className="pt-2 flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedRoom(null)}
                        className="px-4 py-2 text-xs font-semibold text-stone-600 rounded-lg hover:bg-stone-50"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 text-xs font-bold text-amber-200 bg-[#1e3a8a] hover:bg-blue-900 rounded-lg shadow"
                      >
                        Submit Room Reservation Request
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
