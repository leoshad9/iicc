import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { UpcomingEventsWidget, HelplineWidget } from '../../shared/ui/SidebarWidgets';

export const HistoryPage: React.FC = () => {
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
              {currentLang === 'ur'
                ? 'انڈیا اسلامک کلچرل سینٹر، نئی دہلی کی تاریخی داستان'
                : 'A Historical Timeline of the India Islamic Cultural Centre, New Delhi'}
            </h1>
            <p className="text-base text-stone-600 mt-4 max-w-2xl">
              {currentLang === 'ur'
                ? 'چودہویں ہجری صدی کی یاد: ہندوستانی اسلامی ثقافتی نشاۃ ثانیہ کا آغاز'
                : 'Commemorating the 14th Hijra Centenary: The Genesis of the Indian Islamic Cultural Renaissance'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_320px] gap-8">
            {/* Main Content */}
            <div className="space-y-12">
              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-bold font-serif-title text-stone-900 mb-4">
                  Hijra Centenary & National Committee
                </h2>
                <p className="text-sm text-stone-700 leading-relaxed mb-4">
                  The conclusion of the 14th century of the Hijra Calendar marked a historic milestone celebrated across the Islamic world. The Government of India established a National Committee led by Janab Mohammad Hidayatullah (11th Chief Justice and Vice-President of India) to organize nationwide celebrations.
                </p>
                <h3 className="text-sm font-bold text-stone-900 mb-2">Key Initiatives:</h3>
                <ul className="space-y-3 text-sm text-stone-700">
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5"></span>
                    <span><strong>Commemorative Stamp:</strong> Released on November 3, 1980, by Prime Minister Mrs. Indira Gandhi.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5"></span>
                    <span><strong>International Seminar (January 1981):</strong> <em>"Islamic Contribution to the Culture and Civilization of the World, with Special Reference to India"</em>.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5"></span>
                    <span><strong>Cultural Programs:</strong> International Qira'at Competition and cultural events promoting India's composite identity.</span>
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-bold font-serif-title text-stone-900 mb-4">
                  The beginning of a Premier Cultural Institution: The Conception of IICC
                </h2>
                <p className="text-sm text-stone-700 leading-relaxed">
                  Vision to build a bridge of understanding between communities and present the pluralistic, inclusive message of Islam, supported by PM Indira Gandhi.
                </p>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-bold font-serif-title text-stone-900 mb-4">
                  Formation of the Society – India Islamic Cultural Centre
                </h2>
                <ul className="space-y-3 text-sm text-stone-700">
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5"></span>
                    <span><strong>April 1981:</strong> Registered under the Societies Registration Act.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5"></span>
                    <span><strong>Land Allotment:</strong> Government allotted two bungalows on Lodhi Road, New Delhi (~8,000 sq. meters).</span>
                  </li>
                </ul>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-bold font-serif-title text-stone-900 mb-4">
                  Founding Members / Original Signatories of the Memorandum of Association:
                </h2>
                <ul className="space-y-2 text-sm text-stone-700 mb-6">
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0 mt-1.5"></span>
                    Janab Hakim Abdul Hameed (<em>Founder President</em>)
                  </li>
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0 mt-1.5"></span>
                    Janab Mufti Atiqur Rahman (<em>Vice President</em>)
                  </li>
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0 mt-1.5"></span>
                    Janab Chaudhary Mohammad Arif (<em>Secretary</em>)
                  </li>
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0 mt-1.5"></span>
                    Janab Badr-ud-Din Tyabji, ICS (<em>Director</em>)
                  </li>
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0 mt-1.5"></span>
                    Janab Syed S. Shafi (<em>Joint Director</em>)
                  </li>
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0 mt-1.5"></span>
                    Janab M. W. K. Yusufzai (<em>Treasurer</em>)
                  </li>
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0 mt-1.5"></span>
                    Begum Abida Ahmed Sahiba (<em>Member</em>)
                  </li>
                </ul>

                <h3 className="text-base font-bold text-stone-900 mb-2">Foundation Stone & Early Funding</h3>
                <ul className="space-y-3 text-sm text-stone-700">
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5"></span>
                    <span><strong>Foundation Stone:</strong> Laid on August 24, 1984, by PM Indira Gandhi, supported by General Shahnawaz, Chaudhary Tayyab Hussain, and Justice Mohammad Hidayatullah.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5"></span>
                    <span><strong>Funding:</strong> ₹10,50,000 from Indian Institute of Islamic Studies (Janab Hakeem Abdul Hameed) and ₹10,00,000 grant from Department of Culture, Government of India.</span>
                  </li>
                </ul>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-bold font-serif-title text-stone-900 mb-4">
                  Realizing a Vision: The Rise of the India Islamic Cultural Centre
                </h2>
                <ul className="space-y-4 text-sm text-stone-700">
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 mt-1.5"></span>
                    <span><strong>Youth Coaching:</strong> Lodhi Road bungalows hosted young Muslim students preparing for competitive exams and civil services.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 mt-1.5"></span>
                    <span><strong>1994 Leadership:</strong> Begum Abida Ahmad Sahiba (President), Chaudhary Mohammad Arif (Secretary), Janab Mohammad Fazal (Director General — constructed boundary wall).</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 mt-1.5"></span>
                    <span><strong>Fundraising:</strong> Janab Moosa Raza (former Union Steel Secretary) assumed leadership and mobilized funds nationally and internationally.</span>
                  </li>
                </ul>
                <h3 className="text-base font-bold text-stone-900 mt-4 mb-2">Seminars & Pluralism</h3>
                <p className="text-sm text-stone-700 mb-2">Hosted <em>"Islam for Peace"</em> (Chief Guest: PM Inder Kumar Gujral) along with seminars on:</p>
                <ul className="space-y-1.5 text-sm text-stone-700">
                  <li className="flex gap-2">
                    <span className="w-1 h-1 rounded-full bg-stone-400 shrink-0 mt-1.5"></span>
                    Importance of Indian Islamic Culture and Values
                  </li>
                  <li className="flex gap-2">
                    <span className="w-1 h-1 rounded-full bg-stone-400 shrink-0 mt-1.5"></span>
                    Mutual Understanding and Tolerance in a Diverse India
                  </li>
                  <li className="flex gap-2">
                    <span className="w-1 h-1 rounded-full bg-stone-400 shrink-0 mt-1.5"></span>
                    Women's Empowerment in Islam
                  </li>
                  <li className="flex gap-2">
                    <span className="w-1 h-1 rounded-full bg-stone-400 shrink-0 mt-1.5"></span>
                    Human Rights in Islam
                  </li>
                  <li className="flex gap-2">
                    <span className="w-1 h-1 rounded-full bg-stone-400 shrink-0 mt-1.5"></span>
                    Muslim Agenda in the 21st Century
                  </li>
                  <li className="flex gap-2">
                    <span className="w-1 h-1 rounded-full bg-stone-400 shrink-0 mt-1.5"></span>
                    Role of Civil Services in Nation-Building
                  </li>
                  <li className="flex gap-2">
                    <span className="w-1 h-1 rounded-full bg-stone-400 shrink-0 mt-1.5"></span>
                    Rise of Information Technology
                  </li>
                </ul>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-bold font-serif-title text-stone-900 mb-4">
                  A New Chapter Begins
                </h2>
                <p className="text-sm text-stone-700 leading-relaxed">
                  <strong>Inauguration:</strong> Officially opened on June 12, 2006, by Mrs. Sonia Gandhi.
                </p>
                <p className="text-sm text-stone-700 leading-relaxed mt-2">
                  <strong>Post-Inauguration:</strong> Restructured towards self-sustainability, interfaith harmony, civilizational dialogue, and cultural preservation.
                </p>
              </div>
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
                    label: currentLang === 'ur' ? 'ای میل' : 'Email',
                    value: 'iiccdelhi29@rediffmail.com',
                    href: 'mailto:iiccdelhi29@rediffmail.com',
                  },
                  {
                    icon: <Clock className="w-3 h-3 text-stone-400 shrink-0 mt-0.5" />,
                    label: currentLang === 'ur' ? 'بکنگ لائنیں' : 'Reservation Lines',
                    value: '011-43535353, 09717455353',
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
