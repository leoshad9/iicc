import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronDown,
  Users,
  Landmark,
  ScrollText,
  Handshake,
  BookOpen,
  Award,
  Heart,
  Briefcase,
  Library,
  Building2,
  Coins,
  FileSignature,
  GraduationCap,
  PenTool,
  Sprout,
  ShieldCheck,
} from 'lucide-react';
import {
  UpcomingEventsWidget,
  HelplineWidget,
} from '../../shared/ui/SidebarWidgets';
import {
  memorandumMeta,
  memorandumObjectives,
  memorandumEndeavours,
  memorandumIncomeClause,
  memorandumSignatories,
  memorandumManagement,
  memorandumQuickLinks,
  memorandumRules,
  membershipFeeTable,
} from '../../data/memorandumData';

const endeavourIcons: React.ReactNode[] = [
  <BookOpen className="w-5 h-5" />,       // Studies & Research
  <GraduationCap className="w-5 h-5" />,  // Knowledge & Career Development
  <Users className="w-5 h-5" />,          // Community Advancement
  <PenTool className="w-5 h-5" />,        // Publications
  <Library className="w-5 h-5" />,        // Library & Research Centres
  <Landmark className="w-5 h-5" />,       // Regional Centres
  <Handshake className="w-5 h-5" />,      // Cooperation with Institutions
  <Building2 className="w-5 h-5" />,      // Residential Accommodation
  <ShieldCheck className="w-5 h-5" />,    // Board of Trustees
  <Coins className="w-5 h-5" />,          // Funds & Donations
  <Landmark className="w-5 h-5" />,       // Acquisition of Property
  <Coins className="w-5 h-5" />,          // Investment of Funds
  <Briefcase className="w-5 h-5" />,      // Transfer of Property
  <Building2 className="w-5 h-5" />,      // Buildings & Works
  <ScrollText className="w-5 h-5" />,     // Endowments & Trust Funds
  <Heart className="w-5 h-5" />,          // Benevolent Fund
  <Award className="w-5 h-5" />,          // Prizes & Scholarships
  <Sprout className="w-5 h-5" />,         // Incidental Activities
];

const Accordion: React.FC<{
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}> = ({ title, icon, children }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="bg-white rounded-xl border border-stone-200 shadow-xs overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left hover:bg-stone-50 transition"
      >
        <span className="flex items-center gap-2.5">
          {icon}
          <span className="text-sm font-bold text-stone-900">{title}</span>
        </span>
        <ChevronDown
          className={`w-4 h-4 text-stone-500 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <div className="px-5 pb-5 pt-1 border-t border-stone-100">{children}</div>}
    </div>
  );
};

export const MemorandumPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero with subtle architectural background banner */}
      <section className="relative bg-white border-b border-stone-200 py-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: 'url(/iicc-background.webp)' }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <nav aria-label="Breadcrumb" className="mb-4 text-xs text-stone-500 flex items-center gap-1.5">
            <Link to="/" className="hover:text-[#1e3a8a] transition">Home</Link>
            <span>/</span>
            <Link to="/about" className="hover:text-[#1e3a8a] transition">About Us</Link>
            <span>/</span>
            <span className="font-semibold text-stone-700">Memorandum of Association</span>
          </nav>
          <span className="text-xs uppercase tracking-widest text-[#1e3a8a] font-bold">
            About IICC
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-stone-900 mt-2">
            Memorandum of Association
          </h1>
          <p className="text-base text-stone-600 mt-4 max-w-2xl">
            The founding charter of the India Islamic Cultural Centre, registered under the Societies
            Registration Act XXI of 1860 (Punjab Amendment Act of 1957).
          </p>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-8 items-start">
            {/* Main Content (70%) */}
            <div className="space-y-8">
              {/* Name & Registered Office */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs">
                  <h2 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-[#1e3a8a]" />
                    1. Name
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    The name of the &ldquo;Centre&rdquo; shall be{' '}
                    <strong className="text-stone-900">{memorandumMeta.name}</strong>.
                  </p>
                </div>
                <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs">
                  <h2 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#1e3a8a]" />
                    2. Registered Office
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    {memorandumMeta.registeredOffice}
                  </p>
                </div>
              </div>

              {/* Aims and Objects */}
              <div>
                <h2 className="text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <ScrollText className="w-5 h-5 text-[#1e3a8a]" />
                  3. Aims and Objects
                </h2>
                <div className="grid gap-4">
                  {memorandumObjectives.map((objective, index) => (
                    <div
                      key={index}
                      className="flex gap-4 bg-white border border-stone-200 rounded-xl p-5 shadow-xs"
                    >
                      <span className="shrink-0 w-10 h-10 rounded-lg bg-[#1e3a8a] text-white flex items-center justify-center text-xs font-bold font-mono">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p className="text-sm text-stone-700 leading-relaxed">{objective}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* "The Society shall endeavour to" clauses */}
              <div>
                <h2 className="text-lg font-bold text-stone-900 mb-1 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#1e3a8a]" />
                  With these objectives, the Society shall endeavour to
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  {memorandumEndeavours.map((clause, index) => (
                    <div
                      key={clause.title}
                      className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs"
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-9 h-9 rounded-lg bg-blue-950 text-amber-400 flex items-center justify-center shrink-0">
                          {endeavourIcons[index]}
                        </div>
                        <h3 className="text-xs font-bold text-stone-900">{clause.title}</h3>
                      </div>
                      <p className="text-xs text-stone-700 leading-relaxed">{clause.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Income clause callout */}
              <div className="bg-white border-l-4 border-[#1e3a8a] p-6 rounded-r-xl shadow-xs">
                <h2 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1e3a8a]" />
                  Application of Income &amp; Property
                </h2>
                <p className="text-sm text-stone-800 leading-relaxed">
                  {memorandumIncomeClause}
                </p>
              </div>

              {/* Collapsible accordions for remaining clauses */}
              <div className="space-y-3">
                <Accordion
                  title="Present Members of Board of Trustees & Executive Committee (Section 2)"
                  icon={<Users className="w-4 h-4 text-amber-500" />}
                >
                  <p className="text-xs text-stone-600 leading-relaxed mt-3 mb-4">
                    The names, addresses, occupation and designation of the present Members of the
                    Board of Trustees &amp; the Executive Committee, to whom the management and
                    affairs of the Society are entrusted as required under Section 2 of the Societies
                    Registration Act of 1860 (Punjab Amendment Act, 1957) as extended to the Union
                    Territory of Delhi:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {memorandumManagement.map((member) => (
                      <div
                        key={member.name}
                        className="flex items-center gap-3 p-2.5 bg-stone-50 rounded-lg"
                      >
                        <div className="w-8 h-8 rounded-full bg-blue-950 text-amber-400 flex items-center justify-center shrink-0">
                          <span className="text-[10px] font-bold">
                            {member.name.replace(/^(Mr\.|Mrs\.|Ms\.)\s*/, '')
                              .split(' ')
                              .map((n) => n[0])
                              .slice(0, 2)
                              .join('')
                              .toUpperCase()}
                          </span>
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-stone-900 truncate">
                            {member.name}
                          </p>
                          <p className="text-[10px] text-stone-500">{member.designation}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Accordion>

                <Accordion
                  title="Declaration & Founding Signatories"
                  icon={<FileSignature className="w-4 h-4 text-amber-500" />}
                >
                  <p className="text-xs text-stone-600 leading-relaxed mt-3 mb-4">
                    {memorandumMeta.registration}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {memorandumSignatories.map((signatory) => (
                      <div
                        key={signatory.name}
                        className="flex items-center gap-3 p-2.5 bg-stone-50 rounded-lg"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shrink-0">
                          <FileSignature className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-stone-900 truncate">
                            {signatory.name}
                          </p>
                          <p className="text-[10px] text-stone-500">{signatory.occupation}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Accordion>

                {/* Rules & Regulations — rules 1 to 21 */}
                <div className="flex items-center gap-3 pt-4">
                  <span className="h-px flex-1 bg-stone-200"></span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#1e3a8a]">
                    Rules &amp; Regulations of the Society
                  </span>
                  <span className="h-px flex-1 bg-stone-200"></span>
                </div>
                {memorandumRules.map((rule) => (
                  <Accordion
                    key={rule.number}
                    title={`${rule.number}. ${rule.title}`}
                    icon={<ScrollText className="w-4 h-4 text-amber-500" />}
                  >
                    {rule.intro && (
                      <p className="text-xs text-stone-600 leading-relaxed mt-3 mb-3">{rule.intro}</p>
                    )}
                    {rule.paragraphs.length > 0 && (
                      <div className="space-y-2 mb-1">
                        {rule.paragraphs.map((para, i) => (
                          <p key={i} className="text-xs text-stone-700 leading-relaxed">{para}</p>
                        ))}
                      </div>
                    )}
                    {rule.number === '6' && (
                      <div className="overflow-x-auto mt-2">
                        <table className="w-full text-xs border border-stone-200 rounded-lg overflow-hidden">
                          <thead>
                            <tr className="bg-[#1e3a8a] text-white text-left">
                              <th className="px-3 py-2 font-semibold">Class of Membership</th>
                              <th className="px-3 py-2 font-semibold">Admission Fee (Rs.)</th>
                              <th className="px-3 py-2 font-semibold">Annual Subscription (Rs.)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {membershipFeeTable.map((row) => (
                              <tr key={row.cls} className="border-t border-stone-100 odd:bg-stone-50">
                                <td className="px-3 py-2 font-medium text-stone-800">{row.cls}</td>
                                <td className="px-3 py-2 text-stone-700">{row.admission}</td>
                                <td className="px-3 py-2 text-stone-700">{row.annual}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </Accordion>
                ))}
              </div>
            </div>

            {/* Right Sidebar (30%) */}
            <aside className="space-y-6">
              {/* Quick Navigation Widget */}
              <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs">
                <h3 className="text-sm font-bold text-stone-900 mb-4">Quick Navigation</h3>
                <ul className="space-y-2">
                  {memorandumQuickLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="flex items-center justify-between text-xs font-medium text-stone-700 hover:text-[#1e3a8a] transition py-2 border-b border-stone-100 last:border-0"
                      >
                        {link.label}
                        <ExternalLink className="w-3 h-3 text-stone-400" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact & Helpline Card */}
              <HelplineWidget
                title="Contact & Helpline"
                icon={<Phone className="w-4 h-4 text-amber-500" />}
                rows={[
                  {
                    icon: <Phone className="w-3 h-3 text-stone-400 shrink-0 mt-0.5" />,
                    label: 'Contact Us',
                    value: '011-43535353, 011-43535350',
                  },
                  {
                    icon: <Mail className="w-3 h-3 text-stone-400 shrink-0 mt-0.5" />,
                    label: 'Email',
                    value: 'iiccdelhi29@rediffmail.com',
                    href: 'mailto:iiccdelhi29@rediffmail.com',
                  },
                  {
                    icon: <MapPin className="w-3 h-3 text-stone-400 shrink-0 mt-0.5" />,
                    label: 'Registered Office',
                    value: 'India Islamic Cultural Centre, 87-88, Lodhi Road, New Delhi - 110003',
                  },
                ]}
              />

              {/* Upcoming Events Widget */}
              <UpcomingEventsWidget />
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};
