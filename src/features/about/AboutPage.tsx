import React from 'react';
import { PresidentVision } from './PresidentVision';
import { EventsSection } from '../events/EventsSection';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full">
      <section className="bg-white border-b border-stone-200 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-[#1e3a8a] font-bold">
              About IICC
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-stone-900 mt-2">
              Leadership, Governance & Institutional Code
            </h1>
            <p className="text-base text-stone-600 mt-4 max-w-2xl">
              Discover the vision of the President, explore our history, and understand the administrative structure of India Islamic Cultural Centre on Lodhi Road.
            </p>
          </div>
        </div>
      </section>
      <PresidentVision />
      <EventsSection />
    </div>
  );
};
