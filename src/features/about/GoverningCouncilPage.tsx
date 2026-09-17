import React from 'react';
import { Users, Scale, Crown, Handshake } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CouncilMember {
  name: string;
  designation: string;
}

const governingCouncil: CouncilMember[] = [
  { name: 'Mr. Salman Khurshid', designation: 'President' },
  { name: 'Mr. Mohd. Furqan', designation: 'Vice President' },
  { name: 'Mr. Sikandar Hayat', designation: 'Treasurer' },
  { name: 'Mrs. Shahana Begum', designation: 'Secretary' },
];

const boardOfTrustees: CouncilMember[] = [
  { name: 'Mr. Abuzar Hussain Khan', designation: 'Trustee' },
  { name: 'Mr. Qamar Ahmed (IPS Retd)', designation: 'Trustee' },
  { name: 'Mr. Sikandar Hayat', designation: 'Trustee' },
  { name: 'Mr. Sirajuddin Qureshi', designation: 'Trustee' },
  { name: 'Mrs. F. Naaz', designation: 'Trustee' },
  { name: 'Dr. Khwaja M. Shahid', designation: 'Trustee' },
  { name: 'Mr. Shahwar Mohd Khan', designation: 'Trustee' },
];

const executiveCouncil: CouncilMember[] = [
  { name: 'Mrs. Shahana Begum', designation: 'Member' },
  { name: 'Prof. (Dr) Shamama Ahmed', designation: 'Member' },
  { name: 'Mr. Shahid Ali Khan', designation: 'Member' },
  { name: 'Mr. Arman Ahmad Khan', designation: 'Member' },
  { name: 'Mr. Shaikh Mohammed Shoyeb', designation: 'Member' },
];

interface GroupSectionProps {
  icon: React.ReactNode;
  title: string;
  members: CouncilMember[];
}

const GroupSection: React.FC<GroupSectionProps> = ({ icon, title, members }) => (
  <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
    <h3 className="text-lg font-bold font-serif-title text-stone-900 mb-4 flex items-center gap-2">
      {icon}
      {title}
    </h3>
    <div className="grid sm:grid-cols-2 gap-3">
      {members.map((member) => (
        <div key={member.name} className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg">
          <div className="w-9 h-9 rounded-full bg-blue-950 text-amber-400 flex items-center justify-center shrink-0">
            <span className="text-xs font-bold">
              {member.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
            </span>
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-stone-900 truncate">{member.name}</p>
            <p className="text-[10px] text-stone-500">{member.designation}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const GoverningCouncilPage: React.FC = () => {
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
              {currentLang === 'ur' ? 'دیوانی کونسل' : 'Governing Council'}
            </h1>
            <p className="text-base text-stone-600 mt-4 max-w-2xl">
              {currentLang === 'ur'
                ? 'انڈیا اسلامک کلچرل سینٹر کی قیادت اور انتظامیہ۔'
                : 'Leadership and governance of the India Islamic Cultural Centre.'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-6">
            <GroupSection
              icon={<Crown className="w-5 h-5 text-amber-500" />}
              title={currentLang === 'ur' ? 'دیوانی کونسل' : 'Governing Council'}
              members={governingCouncil}
            />
            <GroupSection
              icon={<Scale className="w-5 h-5 text-[#1e3a8a]" />}
              title={currentLang === 'ur' ? 'بورڈ آف ٹرسٹیز' : 'Board of Trustees'}
              members={boardOfTrustees}
            />
            <GroupSection
              icon={<Handshake className="w-5 h-5 text-green-600" />}
              title={currentLang === 'ur' ? 'ایگزیکٹو کونسل' : 'Executive Council'}
              members={executiveCouncil}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
