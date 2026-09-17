import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  Building, 
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { Language } from '../../shared/types';
import { departmentContacts } from '../../data/mockData';
import { translations } from '../../data/translations';
import { useTranslation } from 'react-i18next';

interface HelplineDirectoryProps {
}

export const HelplineDirectory: React.FC<HelplineDirectoryProps> = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as 'en' | 'ur';
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'General Enquiries',
    message: ''
  });

  const t = translations[currentLang];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setInquiryForm({ name: '', email: '', phone: '', department: 'General Enquiries', message: '' });
    }, 3500);
  };

  return (
    <section className="py-16 bg-stone-50 border-b border-stone-200" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#1e3a8a] uppercase tracking-wider">
              <Phone className="w-4 h-4 text-amber-600" />
              <span>{currentLang === 'ur' ? 'شعبہ جاتی ہیلپ لائنز اور رابطہ' : 'Direct Helpline & Reservations Directory'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif-title font-bold text-stone-900 mt-1">
              {currentLang === 'ur' ? 'شعبہ جاتی فون نمبرز اور لودھی روڈ کیمپس' : 'Official Communications & Campus Coordinates'}
            </h2>
          </div>

          <div className="text-xs text-stone-600 bg-white px-3 py-1.5 rounded-lg border border-stone-200 self-start md:self-auto flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span>Central PBX Lines Operational 24/7</span>
          </div>
        </div>

        {/* 4 Categorized Department Helpline Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {departmentContacts.map((dept, idx) => (
              <div 
                key={dept.department}
                className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs hover:shadow-md transition flex flex-col justify-between"
              >
              <div>
                <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Desk {idx + 1}
                </span>

                <h3 className="text-base font-bold font-serif-title text-stone-900 mt-2">
                  {currentLang === 'ur' && dept.departmentUrdu ? dept.departmentUrdu : dept.department}
                </h3>
                <p className="text-[11px] text-stone-500 mt-0.5">In-Charge: {dept.officerInCharge}</p>

                {/* Direct Dial Links */}
                <div className="mt-4 pt-3 border-t border-stone-100 space-y-2">
                  <div className="text-xs text-stone-600">
                    <span className="text-stone-400 block text-[10px] font-semibold uppercase">Direct Lines:</span>
                    <div className="flex flex-col gap-1 mt-1 font-mono font-bold text-blue-900">
                      {dept.phones.map((phone) => (
                        <a 
                          key={phone} 
                          href={`tel:${phone.replace(/\s+/g, '')}`}
                          className="hover:text-amber-600 transition flex items-center gap-1.5"
                        >
                          <Phone className="w-3 h-3 text-amber-600" />
                          <span>{phone}</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs text-stone-600 pt-2 border-t border-stone-100">
                    <span className="text-stone-400 block text-[10px] font-semibold uppercase">Email:</span>
                    {dept.email ? (
                      <a
                        href={`mailto:${dept.email}`}
                        className="text-stone-800 hover:text-blue-800 font-medium truncate block mt-0.5"
                      >
                        {dept.email}
                      </a>
                    ) : (
                      <span className="text-stone-400 text-xs">—</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-1">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-stone-400" />
                  <span>{dept.timing}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-stone-400" />
                  <span>{dept.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Physical Campus Coordinates & Quick Inquiry Form */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Physical Campus Map & Directions */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-800 uppercase tracking-wider mb-1">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>Strategic Central Delhi Location</span>
              </div>
              <h3 className="text-xl font-bold font-serif-title text-stone-900">
                India Islamic Cultural Centre Campus
              </h3>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                87-88, Lodhi Road, New Delhi - 110003, India.<br />
                Centrally positioned in Delhi’s diplomatic and intellectual corridor, right opposite the historic Lodhi Gardens and near the India International Centre and India Habitat Centre.
              </p>

              {/* Map Embed */}
              <div className="mt-6 rounded-xl overflow-hidden border border-stone-200">
                <iframe
                  title="IICC Location"
                  src="https://maps.google.com/maps?q=India+Islamic+Cultural+Centre,+87-88+Lodhi+Road,+New+Delhi,+110003&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Transportation / Access Notes */}
              <div className="mt-6 space-y-3 text-xs">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <strong className="text-stone-900 block font-semibold">Nearest Metro Stations:</strong>
                  <span className="text-stone-600">
                    JLN Stadium Metro Station (Violet Line) · 1.2 km<br />
                    Khan Market Metro Station (Violet Line) · 1.8 km
                  </span>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <strong className="text-stone-900 block font-semibold">Official Email Address:</strong>
                  <a href="mailto:iiccdelhi29@rediffmail.com" className="text-blue-800 font-bold hover:underline">
                    iiccdelhi29@rediffmail.com
                  </a>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <strong className="text-stone-900 block font-semibold">Parking:</strong>
                  <span className="text-stone-600">Dedicated basement & open visitor parking with valet assistance during major convocations and mushairas.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-100 flex items-center justify-between text-xs">
              <span className="text-stone-500">Security Guard Post: Gates 1 & 2 Active 24/7</span>
              <a 
                href="https://maps.google.com/?q=India+Islamic+Cultural+Centre+Lodhi+Road+New+Delhi" 
                target="_blank" 
                rel="noreferrer"
                className="text-blue-800 font-bold hover:text-blue-950 flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: Direct Dispatch Message Form */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
            {inquirySent ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif-title text-stone-900">
                  Message Dispatched!
                </h3>
                <p className="text-sm text-stone-600 max-w-sm mx-auto">
                  Thank you for contacting the India Islamic Cultural Centre. Your communication has been routed to the respective desk in-charge.
                </p>
                <div className="text-xs text-stone-500">
                  Ticket ID: IICC-MSG-{Math.floor(1000 + Math.random() * 9000)}
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">
                  <Mail className="w-4 h-4" />
                  <span>Electronic Dispatch</span>
                </div>
                <h3 className="text-xl font-bold font-serif-title text-stone-900">
                  Send Direct Inquiry to Secretariat
                </h3>
                <p className="text-xs text-stone-500 mt-1 mb-5">
                  Have a specific inquiry regarding membership, lectures, hall availability, or cultural collaborations?
                </p>

                <form onSubmit={handleInquirySubmit} className="space-y-3.5">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">Your Name *</label>
                      <input
                        required
                        type="text"
                        value={inquiryForm.name}
                        onChange={(e) => setInquiryForm({...inquiryForm, name: e.target.value})}
                        placeholder="e.g. Alok Sharma"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 focus:outline-none focus:ring-1 focus:ring-blue-800"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">Email Address *</label>
                      <input
                        required
                        type="email"
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
                        placeholder="you@domain.com"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 focus:outline-none focus:ring-1 focus:ring-blue-800"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">Mobile Phone</label>
                      <input
                        type="tel"
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm({...inquiryForm, phone: e.target.value})}
                        placeholder="+91..."
                        className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 focus:outline-none focus:ring-1 focus:ring-blue-800"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">Target Department *</label>
                      <select
                        value={inquiryForm.department}
                        onChange={(e) => setInquiryForm({...inquiryForm, department: e.target.value})}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 bg-white"
                      >
                        <option value="General Enquiries">General Enquiries</option>
                        <option value="Secretary Office">Secretary Office & Administration</option>
                        <option value="Guest Room Reservations">Guest Room Reservations</option>
                        <option value="Venue Booking Enquiries">Venue Booking & Events</option>
                        <option value="Library Archives">Library & Manuscripts Cell</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-stone-700 block mb-1">Your Message or Booking Query *</label>
                    <textarea
                      required
                      rows={3}
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({...inquiryForm, message: e.target.value})}
                      placeholder="Please write your inquiry here..."
                      className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 focus:outline-none focus:ring-1 focus:ring-blue-800"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-lg bg-[#1e3a8a] hover:bg-blue-900 text-amber-200 text-xs font-bold transition shadow flex items-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Message</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
