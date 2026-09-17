import React from 'react';

interface PlaceholderPageProps {
  title: string;
  subtitle: string;
}

export const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title, subtitle }) => {
  return (
    <div className="w-full">
      <section className="bg-white border-b border-stone-200 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-[#1e3a8a] font-bold">
              IICC
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-stone-900 mt-2">
              {title}
            </h1>
            <p className="text-base text-stone-600 mt-4 max-w-2xl">
              {subtitle}
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-stone-500 max-w-md mx-auto">
            This page is under construction. Please check back soon for updates.
          </p>
        </div>
      </section>
    </div>
  );
};
