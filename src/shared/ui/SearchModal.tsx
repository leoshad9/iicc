import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Calendar, Building, Bell, Briefcase, ArrowRight } from 'lucide-react';
import { SectionId } from '../../shared/types';
import { upcomingEvents, venuesData, noticesData, tendersData } from '../../data/mockData';
import { IICCLogo } from './IICCLogo';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: SectionId) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      requestAnimationFrame(() => {
        searchInputRef.current?.focus();
      });
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const matchedEvents = upcomingEvents.filter(e => 
    e.title.toLowerCase().includes(query.toLowerCase()) ||
    e.description.toLowerCase().includes(query.toLowerCase())
  );

  const matchedVenues = venuesData.filter(v =>
    v.name.toLowerCase().includes(query.toLowerCase()) ||
    v.bestFor.toLowerCase().includes(query.toLowerCase())
  );

  const matchedNotices = noticesData.filter(n =>
    n.title.toLowerCase().includes(query.toLowerCase()) ||
    n.summary.toLowerCase().includes(query.toLowerCase())
  );

  const matchedTenders = tendersData.filter(t =>
    t.title.toLowerCase().includes(query.toLowerCase()) ||
    t.tenderNo.toLowerCase().includes(query.toLowerCase())
  );

  const hasResults = query.trim().length > 0;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-xs flex items-start justify-center p-4 pt-20 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden border border-stone-200 animate-in fade-in zoom-in-95">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-stone-200 flex items-center gap-3 bg-stone-50">
          <Search className="w-5 h-5 text-blue-800 shrink-0" />
          <input
            ref={searchInputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search events, venues, tenders, circulars, books..."
            className="flex-1 bg-transparent border-0 outline-none text-sm text-stone-900 placeholder:text-stone-400"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-stone-400 hover:text-stone-600 p-1">
              <X className="w-4 h-4" />
            </button>
          )}
          <button 
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold bg-stone-200 hover:bg-stone-300 text-stone-700 rounded-md"
          >
            Esc
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4 text-xs">
          {!hasResults ? (
            <div className="py-8 text-center text-stone-400 space-y-2">
              <p>Type keywords to search across the IICC portal</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {['Noorani', 'Mushaira', 'Auditorium', 'Membership', 'Guest Rooms', 'Dastarkhwan'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 bg-stone-100 hover:bg-blue-50 text-stone-600 hover:text-blue-900 rounded-full text-xs transition cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Events Results */}
              {matchedEvents.length > 0 && (
                <div>
                  <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-blue-800" />
                    <span>Events & Lectures ({matchedEvents.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedEvents.map(e => (
                      <button type="button"
                        key={e.id}
                        onClick={() => { onNavigate('events'); onClose(); }}
                        className="p-2.5 rounded-lg hover:bg-stone-50 border border-transparent hover:border-stone-200 cursor-pointer flex justify-between items-center transition"
                      >
                        <div>
                          <span className="font-bold text-stone-900">{e.title}</span>
                          <span className="text-[11px] text-stone-500 block">{e.date} · {e.venue}</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Venues Results */}
              {matchedVenues.length > 0 && (
                <div>
                  <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Building className="w-3 h-3 text-blue-800" />
                    <span>Venues & Facilities ({matchedVenues.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedVenues.map(v => (
                      <button type="button"
                        key={v.id}
                        onClick={() => { onNavigate('venues'); onClose(); }}
                        className="p-2.5 rounded-lg hover:bg-stone-50 border border-transparent hover:border-stone-200 cursor-pointer flex justify-between items-center transition"
                      >
                        <div>
                          <span className="font-bold text-stone-900">{v.name}</span>
                          <span className="text-[11px] text-stone-500 block">Capacity: {v.capacity}</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Notices Results */}
              {matchedNotices.length > 0 && (
                <div>
                  <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Bell className="w-3 h-3 text-blue-800" />
                    <span>Notice Board ({matchedNotices.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedNotices.map(n => (
                      <button type="button"
                        key={n.id}
                        onClick={() => { onNavigate('notices'); onClose(); }}
                        className="p-2.5 rounded-lg hover:bg-stone-50 border border-transparent hover:border-stone-200 cursor-pointer flex justify-between items-center transition"
                      >
                        <div>
                          <span className="font-bold text-stone-900">{n.title}</span>
                          <span className="text-[11px] text-stone-500 block">Ref: {n.refNo} · {n.date}</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Tenders Results */}
              {matchedTenders.length > 0 && (
                <div>
                  <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Briefcase className="w-3 h-3 text-blue-800" />
                    <span>Tenders ({matchedTenders.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedTenders.map(t => (
                      <div
                        key={t.id}
                        onClick={() => { onNavigate('tenders'); onClose(); }}
                        className="p-2.5 rounded-lg hover:bg-stone-50 border border-transparent hover:border-stone-200 cursor-pointer flex justify-between items-center transition"
                      >
                        <div>
                          <span className="font-bold text-stone-900">{t.title}</span>
                          <span className="text-[11px] text-stone-500 block">Tender No: {t.tenderNo} · Deadline: {t.closingDate}</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {matchedEvents.length === 0 && matchedVenues.length === 0 && matchedNotices.length === 0 && matchedTenders.length === 0 && (
                <div className="py-6 text-center text-stone-500">
                  No direct matches found for "{query}". Try another term like "Lecture", "Banquet", or "Tender".
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Bar */}
        <div className="bg-stone-100 px-4 py-2.5 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-500">
          <div className="flex items-center gap-2">
            <IICCLogo size="sm" variant="icon-only" />
            <span className="font-semibold text-stone-700">IICC Official Index</span>
          </div>
          <span>Press ESC or click outside to dismiss</span>
        </div>
      </div>
    </div>
  );
};
