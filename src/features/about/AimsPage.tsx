import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { UpcomingEventsWidget, HelplineWidget } from '../../shared/ui/SidebarWidgets';

export const AimsPage: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as 'en' | 'ur';

  return (
    <div className="w-full">
      <section className="bg-white border-b border-stone-200 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-[#1e3a8a] font-bold">
              {currentLang === 'ur' ? 'ہمارے متعلق' : 'About IICC'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-stone-900 mt-2">
              {currentLang === 'ur' ? 'اہداف اور مقاصد' : 'THE AIMS AND OBJECTIVES'}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_320px] gap-8">
            {/* Main Content */}
            <div>
              {/* Preamble Callout Box */}
              <div className="bg-stone-50 border-l-4 border-[#1e3a8a] p-6 rounded-r-xl mb-8">
                <p className="text-base text-stone-800 leading-relaxed italic font-serif-title">
                  The main purpose of India Islamic Cultural Centre is to promote mutual understanding and amity amongst the people of this country and to depict the true face of Islam which is most tolerant, liberal, progressive, rational and forward looking religion besides being based on cardinal principles of human values irrespective of faith, caste, creed and colour.
                </p>
              </div>

              {/* Numbered Core Objectives */}
              <h2 className="text-lg font-bold text-stone-900 mb-4">Core Objectives</h2>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-lg bg-[#1e3a8a] text-white flex items-center justify-center text-xs font-bold font-mono">
                    01
                  </span>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    To promote mutual understanding and tolerance among the diverse trends of India,
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-lg bg-[#1e3a8a] text-white flex items-center justify-center text-xs font-bold font-mono">
                    02
                  </span>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    To remove misunderstanding about Islam and its teachings
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-lg bg-[#1e3a8a] text-white flex items-center justify-center text-xs font-bold font-mono">
                    03
                  </span>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    To promote an awareness of the ethos of Islamic culture.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-lg bg-[#1e3a8a] text-white flex items-center justify-center text-xs font-bold font-mono">
                    04
                  </span>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    To assist in the creation of an ethical society based on tolerance, universal brotherhood, love and charity, and
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-lg bg-[#1e3a8a] text-white flex items-center justify-center text-xs font-bold font-mono">
                    05
                  </span>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    To promote mutual understanding, appreciation and amity between the people of India and those of the Islamic world, through a study of each other's past and present civilization, and a mutual exchange of knowledge and information relating thereto, and by providing facilities that would lead to a fruitful interaction between them and an appreciation of each other's contribution to world civilization.
                  </p>
                </li>
              </ol>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Upcoming Events Widget */}
              <UpcomingEventsWidget />

              {/* Helpline Widget */}
              <HelplineWidget
                icon={<Phone className="w-4 h-4 text-amber-500" />}
                rows={[
                  {
                    icon: <Phone className="w-3 h-3 text-stone-400 shrink-0 mt-0.5" />,
                    label: currentLang === 'ur' ? 'رابطہ کریں' : 'Contact Us',
                    value: '011-43535353, 011-43535350',
                  },
                  {
                    icon: <Mail className="w-3 h-3 text-stone-400 shrink-0 mt-0.5" />,
                    label: currentLang === 'ur' ? 'دفتر برائے سیکریٹری' : 'Secretary Office',
                    value: '011 43535353, +91 9810393707',
                  },
                  {
                    icon: <Phone className="w-3 h-3 text-stone-400 shrink-0 mt-0.5" />,
                    label: currentLang === 'ur' ? 'کمروں کی بکنگ' : 'Room Reservations',
                    value: '011-43535353, 09717455353',
                  },
                  {
                    icon: <Phone className="w-3 h-3 text-stone-400 shrink-0 mt-0.5" />,
                    label: currentLang === 'ur' ? 'ہال بکنگ سیل' : 'Venue Reservations',
                    value: '011-43535338, +91 8860049535',
                  },
                ]}
              />
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};
