import React from 'react';
import { MultimediaSection } from './MultimediaSection';

export const MediaPage: React.FC = () => {
  return (
    <div className="w-full">
      <section className="bg-white border-b border-stone-200 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-[#1e3a8a] font-bold">
              Media
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-stone-900 mt-2">
              Broadcast Recordings, Lectures & Event Photographs
            </h1>
            <p className="text-base text-stone-600 mt-4 max-w-2xl">
              Watch video recordings of lectures, poetry events, and explore our photo gallery of cultural programs.
            </p>
          </div>
        </div>
      </section>
      <MultimediaSection />
    </div>
  );
};
