import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  User, 
  CheckCircle, 
  ChevronLeft, 
  ChevronRight, 
  Filter, 
  Users, 
  Ticket, 
  X,
  Share2
} from 'lucide-react';
import { EventItem } from '../../shared/types';
import { upcomingEvents } from '../../data/mockData';
import { translations } from '../../data/translations';
import { useTranslation } from 'react-i18next';

const CALENDAR_CELLS = Array.from({ length: 35 }, (_, i) => ({ id: `cal-cell-${i}`, offset: i - 1 }));

interface EventsSectionProps {
}

export const EventsSection: React.FC<EventsSectionProps> = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as 'en' | 'ur';
  const [activeView, setActiveView] = useState<'feed' | 'calendar'>('feed');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [selectedEventForRSVP, setSelectedEventForRSVP] = useState<EventItem | null>(null);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [rsvpForm, setRsvpForm] = useState({
    name: '',
    email: '',
    phone: '',
    tickets: '1',
    isMember: false,
    memberId: ''
  });

  // Calendar State (September 2026)
  const [calendarMonth, setCalendarMonth] = useState<'September 2026' | 'October 2026'>('September 2026');
  const [selectedDateFilter, setSelectedDateFilter] = useState<string | null>(null);

  const t = translations[currentLang];

  const categories = [
    'All',
    'Lecture Series',
    'Mushaira & Poetry',
    'Music & Cultural',
    'Panel Discussion',
    'Book Release'
  ];

  const filteredEvents = upcomingEvents.filter(evt => {
    const matchesCat = categoryFilter === 'All' || evt.category === categoryFilter;
    const matchesDate = !selectedDateFilter || evt.date.includes(selectedDateFilter);
    return matchesCat && matchesDate;
  });

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRsvpSubmitted(true);
    setTimeout(() => {
      setRsvpSubmitted(false);
      setSelectedEventForRSVP(null);
      setRsvpForm({ name: '', email: '', phone: '', tickets: '1', isMember: false, memberId: '' });
    }, 2800);
  };

  return (
    <section className="py-16 bg-stone-50 border-b border-stone-200" id="events">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#1e3a8a] uppercase tracking-wider">
              <CalendarIcon className="w-4 h-4 text-amber-600" />
              <span>{currentLang === 'ur' ? 'تقاریب اور ادبی پروگرام' : 'Events & Academic Programs'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif-title font-bold text-stone-900 mt-1">
              {currentLang === 'ur' ? 'آنے والے سمپوزیم، مشاعرے اور خطبات' : 'Upcoming Convocations, Mushairas & Lectures'}
            </h2>
          </div>

          {/* View Toggle: Feed vs Calendar */}
          <div className="flex bg-stone-200/70 p-1 rounded-lg self-start md:self-auto">
            <button
              id="view-feed-btn"
              onClick={() => setActiveView('feed')}
              className={`px-4 py-2 text-xs font-bold rounded-md transition ${
                activeView === 'feed' ? 'bg-white text-[#1e3a8a] shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Feed View
            </button>
            <button
              id="view-calendar-btn"
              onClick={() => setActiveView('calendar')}
              className={`px-4 py-2 text-xs font-bold rounded-md transition ${
                activeView === 'calendar' ? 'bg-white text-[#1e3a8a] shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Interactive Calendar
            </button>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setCategoryFilter(cat); setSelectedDateFilter(null); }}
              className={`px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition min-h-[44px] ${
                categoryFilter === cat && !selectedDateFilter
                  ? 'bg-[#1e3a8a] text-amber-200 shadow-xs'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
              }`}
            >
              {cat}
            </button>
          ))}
          {selectedDateFilter && (
            <button
              onClick={() => setSelectedDateFilter(null)}
              className="px-3 py-1.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 flex items-center gap-1 border border-amber-300"
            >
              <span>Date: {selectedDateFilter}</span>
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* 1. CALENDAR VIEW */}
        {activeView === 'calendar' && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs mb-8">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-100">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-bold font-serif-title text-stone-900">{calendarMonth}</h3>
                <span className="text-xs bg-blue-100 text-blue-900 px-2.5 py-0.5 rounded-full font-semibold">
                  IICC Cultural Season
                </span>
              </div>
              <div className="flex items-center gap-1">
                  <button
                  onClick={() => setCalendarMonth(calendarMonth === 'September 2026' ? 'October 2026' : 'September 2026')}
                  className="p-2 rounded hover:bg-stone-100 text-stone-600 min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                  <button
                  onClick={() => setCalendarMonth(calendarMonth === 'September 2026' ? 'October 2026' : 'September 2026')}
                  className="p-2 rounded hover:bg-stone-100 text-stone-600 min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Calendar Grid Representation */}
            <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold text-stone-500 mb-2">
              <div>Sun</div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {CALENDAR_CELLS.map((cell) => {
                const dayNum = cell.offset; // Offset for month days
                const isDay = dayNum >= 1 && dayNum <= 30;
                const dateKey = dayNum < 10 ? `0${dayNum}` : `${dayNum}`;
                const eventForDay = upcomingEvents.find(e => 
                  (dayNum === 5 && calendarMonth.includes('September') && e.id === 'evt-1') ||
                  (dayNum === 12 && calendarMonth.includes('September') && e.id === 'evt-2') ||
                  (dayNum === 16 && calendarMonth.includes('September') && e.id === 'evt-3') ||
                  (dayNum === 18 && calendarMonth.includes('September') && e.id === 'evt-4') ||
                  (dayNum === 21 && calendarMonth.includes('September') && e.id === 'evt-5') ||
                  (dayNum === 22 && calendarMonth.includes('September') && e.id === 'evt-6') ||
                  (dayNum === 25 && calendarMonth.includes('September') && e.id === 'evt-7') ||
                  (dayNum === 27 && calendarMonth.includes('September') && e.id === 'evt-8')
                );

                if (!isDay) {
                  return <div key={cell.id} className="h-20 bg-stone-50/40 rounded-lg opacity-40"></div>;
                }

                return (
                  <div
                    key={cell.id}
                    onClick={() => {
                      if (eventForDay) {
                        setSelectedDateFilter(`${calendarMonth.split(' ')[0]} ${dateKey}`);
                        setActiveView('feed');
                      }
                    }}
                    className={`h-22 p-2 rounded-lg border text-left flex flex-col justify-between transition cursor-pointer ${
                      eventForDay 
                        ? 'bg-blue-50/70 border-blue-300 hover:border-blue-600 shadow-xs' 
                        : 'bg-white border-stone-100 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <span className={`text-xs font-bold ${eventForDay ? 'text-blue-950 font-bold' : 'text-stone-500'}`}>
                        {dayNum}
                      </span>
                      {eventForDay && (
                        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                      )}
                    </div>

                    {eventForDay && (
                      <div className="mt-1">
                        <div className="text-[10px] font-bold text-blue-900 line-clamp-2 leading-tight">
                          {eventForDay.title}
                        </div>
                        <div className="text-[9px] text-blue-700 font-mono mt-0.5">
                          {eventForDay.time.split('-')[0]}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 2. EVENTS FEED GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => {
            const seatsLeft = event.seatsTotal - event.seatsBooked;
            return (
              <div 
                key={event.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition flex flex-col justify-between group"
              >
                <div>
                  {/* Event Thumbnail Banner */}
                  <div className="relative h-48 bg-stone-100 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-[#1e3a8a] text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {event.category}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-stone-900 text-xs font-bold px-2.5 py-1 rounded-md shadow">
                      {seatsLeft > 0 ? `${seatsLeft} Seats Remaining` : 'House Full'}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-semibold text-amber-700">
                      <CalendarIcon className="w-3.5 h-3.5" />
                      <span>{event.date}</span>
                      <span className="text-stone-300">•</span>
                      <Clock className="w-3.5 h-3.5" />
                      <span>{event.time}</span>
                    </div>

                    <h3 className="text-base font-bold font-serif-title text-stone-900 group-hover:text-[#1e3a8a] transition">
                      {currentLang === 'ur' && event.titleUrdu ? event.titleUrdu : event.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs text-stone-600">
                      <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span className="truncate">{event.venue}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-stone-600">
                      <User className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span className="truncate">Key Speaker: {event.speaker}</span>
                    </div>

                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed pt-1">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => {
                        navigator.clipboard?.writeText(window.location.href);
                        alert("Event link copied to clipboard!");
                      }}
                      className="p-2 rounded-lg text-stone-500 hover:text-stone-800 hover:bg-stone-100 text-xs"
                      title="Share Event Link"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>

                    <button
                      id={`rsvp-btn-${event.id}`}
                      onClick={() => setSelectedEventForRSVP(event)}
                      className="flex-1 py-2 px-4 rounded-lg bg-[#1e3a8a] hover:bg-blue-900 text-amber-200 text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <Ticket className="w-3.5 h-3.5" />
                      <span>Reserve Seats / RSVP</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* RSVP / REGISTRATION MODAL */}
        {selectedEventForRSVP && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
              <button
                onClick={() => { setSelectedEventForRSVP(null); setRsvpSubmitted(false); }}
                className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>

              {rsvpSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold font-serif-title text-stone-900">
                    Registration Confirmed!
                  </h3>
                  <p className="text-xs text-stone-600 max-w-xs mx-auto">
                    Your digital pass for <strong>{selectedEventForRSVP.title}</strong> has been generated and sent to your email.
                  </p>
                  <div className="p-3 bg-stone-50 rounded-lg text-xs font-mono text-stone-600">
                    Pass Ref: IICC-RSVP-{Math.floor(100000 + Math.random() * 900000)}
                  </div>
                </div>
              ) : (
                <div>
                  <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                    Registration Desk
                  </span>
                  <h3 className="text-xl font-bold font-serif-title text-stone-900 mt-1">
                    RSVP for {selectedEventForRSVP.title}
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5 mb-4">
                    {selectedEventForRSVP.date} · {selectedEventForRSVP.venue}
                  </p>

                  <form onSubmit={handleRsvpSubmit} className="space-y-3">
                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">Attendee Name *</label>
                      <input
                        required
                        type="text"
                        value={rsvpForm.name}
                        onChange={(e) => setRsvpForm({...rsvpForm, name: e.target.value})}
                        placeholder="Full Name"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 focus:outline-none focus:ring-1 focus:ring-blue-800"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">Email *</label>
                        <input
                          required
                          type="email"
                          value={rsvpForm.email}
                          onChange={(e) => setRsvpForm({...rsvpForm, email: e.target.value})}
                          placeholder="email@example.com"
                          className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 focus:outline-none focus:ring-1 focus:ring-blue-800"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">Mobile Phone *</label>
                        <input
                          required
                          type="tel"
                          value={rsvpForm.phone}
                          onChange={(e) => setRsvpForm({...rsvpForm, phone: e.target.value})}
                          placeholder="+91..."
                          className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 focus:outline-none focus:ring-1 focus:ring-blue-800"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">Number of Attendees</label>
                        <select
                          value={rsvpForm.tickets}
                          onChange={(e) => setRsvpForm({...rsvpForm, tickets: e.target.value})}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 bg-white"
                        >
                          <option value="1">1 Seat</option>
                          <option value="2">2 Seats</option>
                          <option value="3">3 Seats</option>
                          <option value="4">4 Seats (Family Pass)</option>
                        </select>
                      </div>

                      <div className="flex items-center gap-2 pt-6">
                        <input
                          type="checkbox"
                          id="member-checkbox"
                          checked={rsvpForm.isMember}
                          onChange={(e) => setRsvpForm({...rsvpForm, isMember: e.target.checked})}
                          className="rounded text-blue-800 focus:ring-blue-700"
                        />
                        <label htmlFor="member-checkbox" className="text-xs text-stone-700">
                          IICC Member (Priority Front Row)
                        </label>
                      </div>
                    </div>

                    {rsvpForm.isMember && (
                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">IICC Member ID *</label>
                        <input
                          required
                          type="text"
                          value={rsvpForm.memberId}
                          onChange={(e) => setRsvpForm({...rsvpForm, memberId: e.target.value})}
                          placeholder="e.g. IICC-LM-4821"
                          className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 font-mono"
                        />
                      </div>
                    )}

                    <div className="pt-2 flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedEventForRSVP(null)}
                        className="px-4 py-2 text-xs font-semibold text-stone-600 rounded-lg hover:bg-stone-50"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 text-xs font-bold text-amber-200 bg-[#1e3a8a] hover:bg-blue-900 rounded-lg shadow cursor-pointer"
                      >
                        Confirm Attendance
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
