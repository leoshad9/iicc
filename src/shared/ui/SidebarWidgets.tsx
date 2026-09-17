import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { upcomingEvents } from '../../data/mockData';

const sidebarEvents = upcomingEvents.slice(0, 3);

export interface HelplineRow {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

interface HelplineWidgetProps {
  title?: string;
  icon?: React.ReactNode;
  rows: HelplineRow[];
}

export const UpcomingEventsWidget: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as 'en' | 'ur';
  return (
    <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs">
      <h3 className="text-sm font-bold text-stone-900 mb-4 flex items-center gap-2">
        <Calendar className="w-4 h-4 text-amber-500" />
        {currentLang === 'ur' ? 'آنے والی تقاریب' : 'Upcoming Events'}
      </h3>
      <div className="space-y-3">
        {sidebarEvents.map((evt) => (
          <div key={evt.id} className="border-b border-stone-100 last:border-0 pb-3 last:pb-0">
            <p className="text-xs font-semibold text-stone-900">{evt.title}</p>
            <p className="text-[10px] text-stone-500 mt-0.5">{evt.date} | {evt.venue}</p>
            <p className="text-[10px] text-stone-400">
              {currentLang === 'ur' ? 'انتظام:' : 'Organized by:'} {evt.speaker}
            </p>
          </div>
        ))}
      </div>
      <Link
        to="/events/past"
        className="mt-4 text-[11px] font-semibold text-[#1e3a8a] hover:text-blue-700 flex items-center gap-1"
      >
        {currentLang === 'ur' ? 'گذشتہ تقاریب دیکھیں' : 'View Past Events'}
        <ExternalLink className="w-3 h-3" />
      </Link>
    </div>
  );
};

export const HelplineWidget: React.FC<HelplineWidgetProps> = ({ title, icon, rows }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as 'en' | 'ur';
  const heading = title ?? (currentLang === 'ur' ? 'ہیلپ لائن' : 'Our Helpline');
  return (
    <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs">
      <h3 className="text-sm font-bold text-stone-900 mb-4 flex items-center gap-2">
        {icon}
        {heading}
      </h3>
      <div className="space-y-3 text-xs">
        {rows.map((row) => (
          <div key={row.label} className="flex items-start gap-2">
            {row.icon}
            <div>
              <p className="text-stone-500">{row.label}</p>
              {row.href ? (
                <a href={row.href} className="font-semibold text-[#1e3a8a] hover:underline">
                  {row.value}
                </a>
              ) : (
                <p className="font-semibold text-stone-800">{row.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
