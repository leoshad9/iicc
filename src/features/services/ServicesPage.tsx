import React from 'react';
import { AmenitiesSection } from './AmenitiesSection';

export const ServicesPage: React.FC = () => {
  return (
    <div className="w-full">
      <section className="bg-white border-b border-stone-200 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-[#1e3a8a] font-bold">
              Services & Dining
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-stone-900 mt-2">
              On-Site Amenities & Campus Services
            </h1>
            <p className="text-base text-stone-600 mt-4 max-w-2xl">
              Guest rooms, fine dining, and a world-class reference library — everything you need on the IICC campus.
            </p>
          </div>
        </div>
      </section>
      <AmenitiesSection />
    </div>
  );
};
