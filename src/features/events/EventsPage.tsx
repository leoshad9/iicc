import React from 'react';
import { EventsSection } from './EventsSection';
import { VenuesSection } from '../venues/VenuesSection';

export const EventsPage: React.FC = () => {
  return (
    <div className="w-full">
      <section className="bg-white border-b border-stone-200 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-[#1e3a8a] font-bold">
              Events
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-stone-900 mt-2">
              Upcoming Convocations, Mushairas & Lectures
            </h1>
            <p className="text-base text-stone-600 mt-4 max-w-2xl">
              Browse our full calendar of cultural programs, academic lectures, mushairas, and events at IICC Lodhi Road.
            </p>
          </div>
        </div>
      </section>
      <EventsSection />
      <VenuesSection />
    </div>
  );
};
