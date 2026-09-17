import React, { useState } from 'react';
import { 
  Award, 
  Clock, 
  Sparkles, 
  Quote, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Building2,
  Users,
  ShieldAlert,
  FileCheck,
  Briefcase,
  AlertTriangle
} from 'lucide-react';
import { Language } from '../../shared/types';
import { presidentVisionData } from '../../data/mockData';
import { translations } from '../../data/translations';
import { useTranslation } from 'react-i18next';

interface PresidentVisionProps {
}

export const PresidentVision: React.FC<PresidentVisionProps> = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as 'en' | 'ur';
  const t = translations[currentLang];
  const [activeTab, setActiveTab] = useState<'vision' | 'history' | 'administration' | 'guidelines'>('vision');

  const executiveMembers = [
    { name: 'Mr. Salman Khurshid', role: 'President', designation: 'Senior Advocate, Supreme Court of India · Former Union Minister', contact: 'president@iiccentre.com' },
    { name: 'Dr. S. Y. Quraishi', role: 'Vice President', designation: 'Former Chief Election Commissioner of India', contact: 'vp@iiccentre.com' },
    { name: 'Mr. M. Wadood', role: 'Secretary', designation: 'Head of Administration & Executive Affairs', contact: 'secretary@iiccentre.com' },
    { name: 'Mr. Aamir Raza', role: 'Treasurer & Chair, Finance Committee', designation: 'Chartered Accountant & Financial Trustee', contact: 'finance@iiccentre.com' },
    { name: 'Justice (Retd.) B. A. Khan', role: 'Trustee & Legal Advisor', designation: 'Former Chief Justice of High Court', contact: 'legal@iiccentre.com' },
    { name: 'Prof. Akhtarul Wasey', role: 'Chair, Library & Academic Committee', designation: 'Padma Shri Awardee · Renowned Scholar', contact: 'library.committee@iiccentre.com' }
  ];

  const administrativeDepts = [
    { name: 'Secretariat & Protocol', head: 'General Secretary', phone: '011-43535353 Ext 101', email: 'secretary@iiccentre.com', desc: 'Member governance, Executive Committee meetings, and inter-institutional protocol.' },
    { name: 'Finance & Accounts', head: 'Chief Accounts Officer', phone: '011-43535345', email: 'accounts@iiccentre.com', desc: 'Auditing, statutory compliances, membership subscription reconciliation, and vendor payments.' },
    { name: 'Administration & HR', head: 'Manager (Admin & HR)', phone: '011-43535350', email: 'admin@iiccentre.com', desc: 'Staff recruitment, establishment oversight, procurement tenders, and office administration.' },
    { name: 'Maintenance & Infrastructure', head: 'Executive Engineer (Civil & Electrical)', phone: '011-43535339', email: 'maintenance@iiccentre.com', desc: 'HVAC central plant, solar grid, auditorium AV console, and campus civil preservation.' },
    { name: 'Security & Protocol Vigilance', head: 'Chief Security Officer', phone: '011-43535344', email: 'security@iiccentre.com', desc: '24/7 CCTV surveillance, gate access control, VIP security, and vehicle parking management.' },
  ];

  return (
    <section className="py-16 bg-white border-b border-stone-200" id="about">
      {/* Anchor for Administration navigation */}
      <div id="administration" className="-mt-20 pt-20" />

      <div className="max-w-7xl mx-auto px-4">
        {/* Sub-navigation tabs matching iiccentre.com structure */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-stone-200 pb-4 mb-8 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#1e3a8a] font-bold">
              {currentLang === 'ur' ? 'قیادت، تاریخ اور انتظامیہ' : 'Leadership, Governance & Institutional Code'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-title font-bold text-stone-900 mt-1">
              {activeTab === 'vision' && (currentLang === 'ur' ? 'صدر محترم جناب سلمان خورشید کا پیغام' : "President's Vision & Welcome Message")}
              {activeTab === 'history' && (currentLang === 'ur' ? 'انڈیا اسلامک کلچرل سینٹر کی تاریخ' : "Institutional History & Lodhi Road Complex")}
              {activeTab === 'administration' && (currentLang === 'ur' ? 'انتظامیہ اور ایگزیکٹو کمیٹی' : "Administration & Board of Trustees")}
              {activeTab === 'guidelines' && (currentLang === 'ur' ? 'قواعد و ضوابط اور سہولیات کی ہدایات' : "Facility Guidelines, By-Laws & Campus Decorum")}
            </h2>
          </div>

          <div className="flex bg-stone-100 p-1 rounded-xl border border-stone-200 self-start md:self-auto overflow-x-auto max-w-full">
            <button
              id="tab-presidents-vision-btn"
              onClick={() => setActiveTab('vision')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition whitespace-nowrap cursor-pointer min-h-[44px] ${
                activeTab === 'vision' ? 'bg-white text-[#1e3a8a] shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              President's Vision
            </button>
            <button
              id="tab-history-btn"
              onClick={() => setActiveTab('history')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition whitespace-nowrap cursor-pointer min-h-[44px] ${
                activeTab === 'history' ? 'bg-white text-[#1e3a8a] shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Centre History
            </button>
            <button
              id="tab-administration-btn"
              onClick={() => setActiveTab('administration')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition whitespace-nowrap cursor-pointer min-h-[44px] ${
                activeTab === 'administration' ? 'bg-white text-[#1e3a8a] shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Administration
            </button>
            <button
              id="tab-guidelines-btn"
              onClick={() => setActiveTab('guidelines')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition whitespace-nowrap cursor-pointer min-h-[44px] ${
                activeTab === 'guidelines' ? 'bg-white text-[#1e3a8a] shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Guidelines & Rules
            </button>
          </div>
        </div>

        {/* 1. PRESIDENT'S VISION VIEW */}
        {activeTab === 'vision' && (
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left: Portrait & Credentials */}
            <div className="lg:col-span-4 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200 bg-stone-100">
                <img
                  src={presidentVisionData.image}
                  alt={presidentVisionData.name}
                  className="w-full h-80 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                  <h3 className="text-xl font-bold font-serif-title text-white">
                    {currentLang === 'ur' ? presidentVisionData.nameUrdu : presidentVisionData.name}
                  </h3>
                  <p className="text-xs text-amber-300 font-medium mt-0.5">
                    {currentLang === 'ur' ? presidentVisionData.roleUrdu : presidentVisionData.role}
                  </p>
                  <p className="text-[11px] text-stone-300 mt-1">
                    Senior Advocate, Supreme Court of India · Former Union Minister for External Affairs
                  </p>
                </div>
              </div>

              {/* Core Pillars */}
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-200/70 text-xs space-y-2">
                <div className="font-bold text-blue-950 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-800" />
                  <span>Key Priorities Under Current Tenure:</span>
                </div>
                <ul className="space-y-1.5 text-stone-700">
                  <li className="flex items-start gap-1.5">
                    <span className="text-blue-700 font-bold">•</span>
                    <span>Interfaith and pluralist civil society dialogue</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-blue-700 font-bold">•</span>
                    <span>Digitization of 1,200+ rare Persian & Urdu folios</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-blue-700 font-bold">•</span>
                    <span>Empowering youth & women in cultural governance</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-blue-700 font-bold">•</span>
                    <span>State-of-the-art auditorium & guest room upgrades</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Full Statement & Direct Words */}
            <div className="lg:col-span-8 space-y-6">
              {/* Highlight Quote Banner */}
              <div className="relative p-6 sm:p-8 rounded-2xl bg-stone-50 border-l-4 border-[#1e3a8a] border-t border-r border-b border-stone-200 shadow-xs">
                <Quote className="w-8 h-8 text-amber-600/30 absolute top-4 right-4" />
                <p className="font-serif-title text-base sm:text-lg text-stone-900 leading-relaxed italic">
                  "{presidentVisionData.quote}"
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-bold text-blue-900">
                  <span>— Salman Khurshid</span>
                  <span className="text-stone-400">|</span>
                  <span className="text-stone-500 font-normal">President, IICC</span>
                </div>
              </div>

              {/* Text Paragraphs */}
              <div className="space-y-4 text-sm text-stone-700 leading-relaxed font-light">
                {presidentVisionData.paragraphs.map((para) => (
                  <p key={para.slice(0, 30)}>{para}</p>
                ))}
              </div>

              {/* Governance Statement */}
              <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-500">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>Elected Executive Committee 2024-2029</span>
                </div>
                <div>
                  Lodhi Road Secretariat · Office of the President
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. INSTITUTIONAL HISTORY VIEW */}
        {activeTab === 'history' && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <p className="text-sm text-stone-700 leading-relaxed">
                The India Islamic Cultural Centre was conceived in the late 20th century under the high patronage of national leaders including Prime Minister Indira Gandhi and distinguished statesmen who envisioned a premier non-political cultural institution to promote communal harmony and cultural exchange.
              </p>
            </div>

            {/* Building Heritage Photo Card */}
            <div className="rounded-2xl overflow-hidden border border-stone-200 bg-stone-50 shadow-xs grid lg:grid-cols-12 items-center">
              <div className="lg:col-span-6 h-64 sm:h-72">
                <img
                  src="/iicc-background.webp"
                  alt="India Islamic Cultural Centre Main Building on Lodhi Road"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:col-span-6 p-6 sm:p-8 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                  Lodhi Road Architectural Heritage
                </span>
                <h3 className="text-xl font-bold font-serif-title text-stone-900">
                  The Historic Sandstone Complex
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  The landmark campus at 87-88 Lodhi Road combines traditional Mughal jaali latticework with contemporary civic architecture. The central wall proudly bears the institution's official crest alongside its name in English, Urdu (انڈیا اسلامک کلچرل سینٹر), and Hindi (इंडिया इस्लामिक कल्चरल सेन्टर).
                </p>
                <div className="flex items-center gap-4 text-xs text-stone-500 pt-2 border-t border-stone-200">
                  <span>• 87-88, Lodhi Road, New Delhi</span>
                  <span>• Established 1981</span>
                </div>
              </div>
            </div>

            {/* Timeline Milestones */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {presidentVisionData.historyMilestones.map((item) => (
                <div 
                  key={item.year} 
                  className="bg-stone-50 rounded-xl p-5 border border-stone-200 relative overflow-hidden"
                >
                  <div className="text-2xl font-serif-title font-bold text-[#1e3a8a]">
                    {item.year}
                  </div>
                  <div className="text-sm font-bold text-stone-900 mt-1">
                    {item.title}
                  </div>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Institutional Objectives Box */}
            <div className="p-6 bg-blue-50/70 border border-blue-200 rounded-2xl">
              <h4 className="text-sm font-bold text-blue-950 uppercase tracking-wider mb-3">
                Constitutional Objectives of the Society (Article 3)
              </h4>
              <div className="grid md:grid-cols-2 gap-3 text-xs text-stone-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
                  <span>To promote mutual understanding and appreciation of Islamic culture and traditions amongst all citizens of India.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
                  <span>To establish research libraries, reading rooms, and archives to preserve literary and artistic heritage.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
                  <span>To organize national seminars, mushairas, symposiums, and exhibitions in furtherance of national integration.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
                  <span>To facilitate guest accommodations and intellectual exchange for visiting scholars, diplomats, and writers.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. ADMINISTRATION & GOVERNANCE VIEW (From iiccentre.com) */}
        {activeTab === 'administration' && (
          <div className="space-y-10">
            <div>
              <p className="text-sm text-stone-700 leading-relaxed max-w-3xl">
                The management of the India Islamic Cultural Centre is vested in an elected Executive Committee and Board of Trustees as prescribed in the Constitution of the Society. The Secretariat oversees day-to-day administrative, financial, infrastructural, and security operations on the Lodhi Road campus.
              </p>
            </div>

            {/* Executive Committee & Trustees Grid */}
            <div>
              <h3 className="text-base font-bold font-serif-title text-[#1e3a8a] uppercase tracking-wider mb-4 flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-600" />
                <span>Executive Committee & Board of Trustees (2024-2029)</span>
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {executiveMembers.map((member) => (
                  <div key={member.name} className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded-full uppercase">
                        {member.role}
                      </span>
                      <span className="text-[11px] text-stone-400 font-mono">IICC-EC</span>
                    </div>
                    <div className="font-bold text-sm text-stone-900">{member.name}</div>
                    <p className="text-xs text-stone-600 leading-snug">{member.designation}</p>
                    <div className="pt-2 text-[11px] text-blue-800 font-mono">{member.contact}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Administrative Departments (Finance, HR, Maintenance, Security from iiccentre.com) */}
            <div>
              <h3 className="text-base font-bold font-serif-title text-[#1e3a8a] uppercase tracking-wider mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-amber-600" />
                <span>Secretariat & Administrative Departments</span>
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {administrativeDepts.map((dept) => (
                  <div key={dept.name} className="p-4 rounded-xl bg-blue-50/50 border border-blue-200/60 space-y-2">
                    <div className="font-bold text-sm text-blue-950">{dept.name}</div>
                    <div className="text-xs text-stone-600 font-medium">Head: {dept.head}</div>
                    <p className="text-xs text-stone-600 leading-relaxed">{dept.desc}</p>
                    <div className="pt-2 border-t border-blue-100 text-[11px] text-stone-600 space-y-0.5">
                      <div>Phone: <strong>{dept.phone}</strong></div>
                      <div>Email: <span className="font-mono text-blue-900">{dept.email}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 4. GUIDELINES & BY-LAWS (From iiccentre.com) */}
        {activeTab === 'guidelines' && (
          <div className="space-y-6">
            <div className="max-w-3xl">
              <p className="text-sm text-stone-700 leading-relaxed">
                To preserve the dignity, sanctity, and operational excellence of the Centre, all members, guests, organizers, and visitors must adhere strictly to the Centre's General By-Laws and Facility Usage Guidelines (iiccentre.com official protocol).
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Rules of Facility Usage */}
              <div className="p-6 rounded-2xl bg-amber-50/40 border border-amber-200 space-y-4">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm uppercase tracking-wider">
                  <AlertTriangle className="w-5 h-5 text-amber-700" />
                  <span>Facility Hire & Event Regulations</span>
                </div>
                <ul className="space-y-2.5 text-xs text-stone-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 font-bold">•</span>
                    <span><strong>No Outside Catering:</strong> All catering services for auditoriums, conference halls, and lawns must be engaged through the official IICC Dastarkhwan or empanelled concessionaire. Outside catering is strictly prohibited.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 font-bold">•</span>
                    <span><strong>No Outside Decorators:</strong> In-house stage, audiovisual and electrical teams execute setups to avoid damage to sandstone architectural fixtures and acoustic wall panels.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 font-bold">•</span>
                    <span><strong>Prescribed Event Timings:</strong> Morning session: 09:00 AM to 01:00 PM. Evening session: 04:00 PM to 09:00 PM (Lawns close strictly at 10:00 PM as per Delhi Police environmental sound norms).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 font-bold">•</span>
                    <span><strong>Strictly Alcohol-Free Campus:</strong> Possession, service, or consumption of alcoholic beverages or non-prescribed substances is completely banned anywhere within the campus premises.</span>
                  </li>
                </ul>
              </div>

              {/* Member Code of Conduct */}
              <div className="p-6 rounded-2xl bg-blue-50/40 border border-blue-200 space-y-4">
                <div className="flex items-center gap-2 text-blue-950 font-bold text-sm uppercase tracking-wider">
                  <FileCheck className="w-5 h-5 text-blue-800" />
                  <span>Member Privileges & Decorum</span>
                </div>
                <ul className="space-y-2.5 text-xs text-stone-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-700 font-bold">•</span>
                    <span><strong>RFID Card Mandate:</strong> Members must carry their valid physical or digital RFID Membership Card when accessing the library, dining hall, guest rooms, or general meetings.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-700 font-bold">•</span>
                    <span><strong>Guest Accommodations:</strong> Up to 2 rooms per member may be booked at subsidized member rates, subject to advance written inquiry and availability. Check-in: 12:00 Noon, Check-out: 11:00 AM.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-700 font-bold">•</span>
                    <span><strong>Library Decorum:</strong> Silence must be strictly observed in the Maulana Azad Reading Rooms. No lending of rare manuscripts; digital scans may be requested through the Chief Librarian.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-700 font-bold">•</span>
                    <span><strong>Parking Regulation:</strong> Dedicated parking is available for approximately 150 vehicles on a first-come, first-served basis with priority stickers for members.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
