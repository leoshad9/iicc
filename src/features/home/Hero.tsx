import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar, 
  Building, 
  UserPlus, 
  User, 
  Bell, 
  ShieldCheck, 
  BookOpen, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { translations } from '../../data/translations';
import { noticesData } from '../../data/mockData';
import { IICCLogo } from '../../shared/ui/IICCLogo';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  onOpenMemberLogin?: () => void;
  onOpenMembershipApply?: () => void;
  onOpenAdminLogin?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenMemberLogin = () => {},
  onOpenMembershipApply = () => {},
  onOpenAdminLogin = () => {},
}) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const currentLang = i18n.language as 'en' | 'ur';
  const t = translations[currentLang];

  return (
    <div className="relative bg-[#06241e] text-stone-100 overflow-hidden border-b border-amber-500/20" id="home">
      {/* Subtle Islamic Geometrical Arabesque Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(#f59e0b 1px, transparent 1px), radial-gradient(#10b981 1px, #06241e 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}
      />

      {/* 1. FLASH ANNOUNCEMENT TICKER */}
      <div className="bg-blue-950/90 border-b border-blue-800 text-stone-300 py-2 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <span className="bg-amber-400 text-blue-950 font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider flex items-center gap-1 shrink-0">
            <Bell className="w-3 h-3" />
            <span>Latest Notice</span>
          </span>
          <div className="overflow-hidden whitespace-nowrap flex-1">
            <div className="animate-marquee inline-block text-[11px] text-stone-200">
              <span className="font-semibold text-amber-300 mr-2">
                [{noticesData[0].refNo}]:
              </span>
              <span>{noticesData[0].title}</span>
              <span className="mx-6 text-blue-500">◆</span>
              <span className="font-semibold text-amber-300 mr-2">
                [{noticesData[1].refNo}]:
              </span>
              <span>{noticesData[1].title}</span>
            </div>
          </div>
          <button
            onClick={() => navigate('/notices')}
            className="text-[11px] text-amber-400 hover:text-amber-300 font-semibold shrink-0 hidden sm:flex items-center gap-1 cursor-pointer"
          >
            <span>Notice Board</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* 2. HERO DISPLAY CANVAS */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-20 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Mission, Vision, and Action */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/70 border border-blue-700/60 text-amber-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Lodhi Road · Autonomous National Cultural Centre</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold tracking-tight text-white leading-tight">
              {currentLang === 'ur' ? (
                <span>ہندوستان کی مشترکہ تہذیب، مکالمہ اور فکری بصیرت کا ترجمان</span>
              ) : (
                <span>A Living Sanctuary for Harmony, Composite Culture & Intellectual Dialogue</span>
              )}
            </h1>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-2xl font-light">
              {currentLang === 'ur' ? (
                <span>
                  انڈیا اسلامک کلچرل سینٹر ادب، فلسفہ، اور بین المذاہب ہم آہنگی کو فروغ دینے کے لیے پرعزم ہے۔ ہمارا مقصد تمام طبقات اور مکاتبِ فکر کے درمیان علمی اور ثقافتی روابط کو مضبوط بنانا ہے۔
                </span>
              ) : (
                <span>
                  Dedicated to fostering mutual understanding, preserving Urdu and Persian literary heritage, and nurturing an inclusive environment for public lectures, classical arts, research archives, and civil society conventions.
                </span>
              )}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-apply-membership-btn"
                onClick={onOpenMembershipApply}
                className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold text-xs sm:text-sm transition flex items-center gap-2 shadow-lg cursor-pointer min-h-[44px]"
              >
                <UserPlus className="w-4 h-4" />
                <span>{t.portals.newMembership}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                id="hero-reserve-venue-btn"
                onClick={() => navigate('/venues')}
                className="px-5 py-3 rounded-xl bg-blue-900/80 hover:bg-blue-800 text-stone-100 border border-blue-600/70 text-xs sm:text-sm font-semibold transition flex items-center gap-2 cursor-pointer min-h-[44px]"
              >
                <Building className="w-4 h-4 text-amber-300" />
                <span>Venues & Tariff Estimator</span>
              </button>

              <button
                id="hero-member-portal-btn"
                onClick={() => navigate('/login')}
                className="px-4 py-3 rounded-xl bg-stone-900/60 hover:bg-stone-900 text-stone-200 border border-stone-700 text-xs sm:text-sm font-medium transition flex items-center gap-2 cursor-pointer min-h-[44px]"
              >
                <User className="w-4 h-4 text-blue-400" />
                <span>{t.portals.memberSignIn}</span>
              </button>
            </div>

            {/* Trust Badges / Stats */}
            <div className="pt-6 border-t border-blue-800/60 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <div className="text-xl sm:text-2xl font-serif-title font-bold text-amber-300">
                  4,500+
                </div>
                <div className="text-[11px] text-stone-400">Institutional Members</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-serif-title font-bold text-amber-300">
                  25,000+
                </div>
                <div className="text-[11px] text-stone-400">Archival Volumes</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-serif-title font-bold text-amber-300">
                  1981
                </div>
                <div className="text-[11px] text-stone-400">Founding Inception</div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Visual & Quick Portals Bento */}
          <div className="lg:col-span-5 space-y-4">
            {/* Campus Architectural Showcase Card */}
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/40 shadow-2xl group bg-stone-900">
              <img
                src="/iicc-background.webp"
                alt="India Islamic Cultural Centre Campus Building, 87-88 Lodhi Road, New Delhi"
                referrerPolicy="no-referrer"
                className="w-full h-72 sm:h-80 object-cover object-center transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent flex flex-col justify-between p-5">
                {/* Official Logo Watermark Card */}
                <div className="self-end bg-white/95 backdrop-blur-md rounded-xl p-2 shadow-lg border border-stone-200/80 flex items-center gap-2.5">
                  <IICCLogo size="sm" variant="icon-only" />
                  <div className="text-left pr-1">
                    <div className="text-[10px] font-bold text-[#15195b] leading-none uppercase tracking-tight">
                      Official Campus
                    </div>
                    <div className="text-[9px] font-semibold text-blue-800 leading-none mt-0.5">
                      Lodhi Road · New Delhi
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-blue-950/90 px-2 py-0.5 rounded border border-blue-700/60">
                      Autonomous Cultural Landmark
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-serif-title text-white">
                    87-88, Lodhi Road Complex
                  </h3>
                  {/* Trilingual Architectural Inscription representation */}
                  <div className="bg-black/60 backdrop-blur-xs rounded-lg p-2 border border-white/10 text-[11px] space-y-0.5">
                    <div className="font-semibold text-stone-100">India Islamic Cultural Centre</div>
                    <div className="text-amber-200 font-urdu font-medium">انڈیا اسلامک کلچرل سینٹر</div>
                    <div className="text-stone-300 text-[10px]">इंडिया इस्लामिक कल्चरल सेन्टर</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Interactive Portals Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div 
                onClick={() => navigate('/events')}
                className="p-3.5 rounded-xl bg-blue-950/70 border border-blue-800/80 hover:border-amber-400/60 cursor-pointer transition flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between">
                  <Calendar className="w-5 h-5 text-amber-400" />
                  <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-300 transition" />
                </div>
                <div className="mt-3">
                  <div className="text-xs font-bold text-stone-100">Events & RSVP</div>
                  <div className="text-[10px] text-stone-400">Lectures, Mushairas, Fairs</div>
                </div>
              </div>

              <div 
                onClick={() => navigate('/services')}
                className="p-3.5 rounded-xl bg-blue-950/70 border border-blue-800/80 hover:border-amber-400/60 cursor-pointer transition flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between">
                  <BookOpen className="w-5 h-5 text-amber-400" />
                  <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-300 transition" />
                </div>
                <div className="mt-3">
                  <div className="text-xs font-bold text-stone-100">Library & OPAC</div>
                  <div className="text-[10px] text-stone-400">Manuscripts & Books</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
