import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, User, Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FontSize } from '../../shared/types';

interface HeaderProps {
  fontSize: FontSize;
  onFontSizeChange: (size: FontSize) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onLanguageChange: (lang: 'en' | 'ur') => void;
}

interface NavItem {
  label: string;
  labelUrdu: string;
  path?: string;
  children?: NavItem[];
}

const navLinks: NavItem[] = [
  { label: 'Home', labelUrdu: 'مرکزی صفحہ', path: '/' },
  {
    label: 'About Us', labelUrdu: 'ہمارے متعلق',
    children: [
      { label: 'History', labelUrdu: 'تاریخ', path: '/about/history' },
      { label: "The Aims & Objectives", labelUrdu: 'اہداف اور مقاصد', path: '/about/aims' },
      { label: 'Governing Council', labelUrdu: 'دیوانی کونسل', path: '/about/governing-council' },
      { label: 'Memorandum', labelUrdu: 'یادداشت', path: '/about/memorandum' },
    ]
  },
  {
    label: 'Administration', labelUrdu: 'انتظامیہ',
    children: [
      { label: 'Sign In', labelUrdu: 'سائن اِن', path: '/administration/signin' },
      { label: 'Finance', labelUrdu: 'فنانس', path: '/administration/finance' },
      { label: 'Admin & H.R.', labelUrdu: 'ایڈمن اور ہیڈ ریسورسز', path: '/administration/hr' },
      { label: 'Security', labelUrdu: 'سیکیورٹی', path: '/administration/security' },
      { label: 'Maintenance & Building', labelUrdu: 'مرمت اور عمارات', path: '/administration/maintenance' },
    ]
  },
  {
    label: 'Services', labelUrdu: 'خدمات',
    children: [
      { label: 'Guest Room', labelUrdu: 'مہمان خانہ', path: '/services/guest-room' },
      { label: 'Restaurant', labelUrdu: 'ریستوران', path: '/services/restaurant' },
      { label: 'Coffee Shop', labelUrdu: 'کافی شاپ', path: '/services/coffee-shop' },
    ]
  },
  {
    label: 'Membership', labelUrdu: 'رکنیت',
    children: [
      { label: 'Sign In', labelUrdu: 'سائن اِن', path: '/membership/signin' },
      { label: 'New Membership', labelUrdu: 'نئی رکنیت', path: '/membership/new' },
      { label: 'Rules & Regulations', labelUrdu: 'قواعد و ضوابط', path: '/membership/rules' },
    ]
  },
  {
    label: 'Venues', labelUrdu: 'مقامات و ہالز',
    children: [
      { label: 'Auditorium', labelUrdu: 'آڈیٹوریم', path: '/venues/auditorium' },
      { label: 'Conference Hall', labelUrdu: 'کانفرنس ہال', path: '/venues/conference-hall' },
      { label: 'Board Room', labelUrdu: 'بورڈ روم', path: '/venues/board-room' },
      { label: 'Banquet Hall', labelUrdu: 'بینکوئٹ ہال', path: '/venues/banquet-hall' },
      { label: 'Main Lawn', labelUrdu: 'مین لون', path: '/venues/main-lawn' },
    ]
  },
  {
    label: 'Events', labelUrdu: 'تقاریب',
    children: [
      { label: 'Current Events', labelUrdu: 'موجودہ تقاریب', path: '/events/current' },
      { label: 'Event Calendar', labelUrdu: 'تقاریب کا تقویم', path: '/events/calendar' },
      { label: 'Past Events / Archive', labelUrdu: 'پچھلی تقاریب / آرکائیو', path: '/events/past' },
    ]
  },
  {
    label: 'Notice Board', labelUrdu: 'نوٹس بورڈ',
    children: [
      { label: 'Circulars & Announcements', labelUrdu: 'سرکلرز اطلاعیے', path: '/notices/circulars' },
      { label: 'Tenders', labelUrdu: 'ٹینڈرز', path: '/notices/tenders' },
    ]
  },
  {
    label: 'Contact', labelUrdu: 'رابطہ',
    children: [
      { label: 'Contact Us', labelUrdu: 'رابطہ', path: '/contact' },
    ]
  },
  { label: 'Gallery', labelUrdu: 'نگارخانہ', path: '/gallery' },
  { label: 'Library', labelUrdu: 'لائبریری', path: '/library' },
  { label: 'Archive', labelUrdu: 'آرکائیو', path: '/archive' },
];

function isDropdownItemActive(location: ReturnType<typeof useLocation>, item: NavItem): boolean {
  const children = item.children ?? [];
  return children.some(c => c.path && isPathActive(location.pathname, c.path));
}

function isPathActive(currentPath: string, targetPath: string): boolean {
  if (currentPath === targetPath) return true;
  return currentPath.startsWith(targetPath + '/');
}

export const Header: React.FC<HeaderProps> = ({
  fontSize,
  onFontSizeChange,
  darkMode,
  onToggleDarkMode,
  onLanguageChange,
}) => {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const openedByHoverRef = useRef(false);
  const location = useLocation();
  const currentLang = i18n.language as 'en' | 'ur';

  // Close the desktop dropdown when the route changes
  useEffect(() => {
    setOpenDropdown(null);
    openedByHoverRef.current = false;
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
      if (mobileNavRef.current && !mobileNavRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
        setMobileExpanded(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    openedByHoverRef.current = true;
    setOpenDropdown(label);
  };

  // Click/keyboard toggle. If the dropdown was opened by hovering, clicking the
  // button must NOT close it (otherwise the panel vanishes on click and
  // navigation never happens). Closing is handled by hover-out, outside click,
  // Escape, or route change.
  const handleDropdownToggle = (label: string) => {
    if (openDropdown === label && openedByHoverRef.current) {
      return;
    }
    openedByHoverRef.current = false;
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 250);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
      {/* Accessibility & language toolbar (all screen sizes) */}
      <div className="bg-blue-950/90 text-stone-100 text-[10px] px-3 py-0.5 flex items-center justify-end gap-2">
        <div className="flex items-center gap-1 shrink-0">
          {/* Font size control */}
          <div
            role="group"
            aria-label={t('accessibility.textSize')}
            className="flex items-center rounded border border-blue-700/50 overflow-hidden"
          >
            {([
              { size: 'sm' as FontSize, label: 'A−', title: `${t('accessibility.textSize')}: S` },
              { size: 'md' as FontSize, label: 'A', title: `${t('accessibility.textSize')}: M` },
              { size: 'lg' as FontSize, label: 'A+', title: `${t('accessibility.textSize')}: L` },
            ]).map(({ size, label, title }) => (
              <button
                key={size}
                id={`font-size-${size}-btn`}
                onClick={() => onFontSizeChange(size)}
                aria-pressed={fontSize === size}
                title={title}
                className={`px-1.5 py-0.5 transition font-semibold text-[9px] ${
                  fontSize === size ? 'bg-amber-400 text-blue-950' : 'hover:text-amber-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Dark mode toggle */}
          <button
            id="dark-mode-toggle-btn"
            onClick={onToggleDarkMode}
            aria-pressed={darkMode}
            aria-label={t('accessibility.darkMode')}
            title={t('accessibility.darkMode')}
            className={`p-1 rounded border transition ${
              darkMode
                ? 'bg-amber-400 text-blue-950 border-amber-400'
                : 'border-blue-700/50 hover:text-amber-200'
            }`}
          >
            <Sun className={`w-3 h-3 ${darkMode ? '' : 'hidden'}`} />
            <Moon className={`w-3 h-3 ${darkMode ? 'hidden' : ''}`} />
          </button>

          {/* Language toggle */}
          <div
            role="group"
            aria-label={t('accessibility.language')}
            className="flex items-center bg-blue-950/80 rounded border border-blue-700/50 overflow-hidden"
          >
            <button
              type="button"
              id="lang-en-btn-header"
              lang="en"
              dir="ltr"
              onClick={() => onLanguageChange('en')}
              aria-pressed={currentLang === 'en'}
              title={t('accessibility.english')}
              className={`px-1.5 py-0.5 transition font-semibold text-[9px] ${
                currentLang === 'en' ? 'bg-amber-400 text-blue-950' : 'hover:text-amber-200'
              }`}
            >
              English
            </button>
            <button
              type="button"
              id="lang-ur-btn-header"
              lang="ur"
              dir="rtl"
              onClick={() => onLanguageChange('ur')}
              aria-pressed={currentLang === 'ur'}
              title={t('accessibility.urdu')}
              className={`px-1.5 py-0.5 transition font-semibold text-[9px] ${
                currentLang === 'ur' ? 'bg-amber-400 text-blue-950' : 'hover:text-amber-200'
              }`}
            >
              اردو
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between gap-4">
        <NavLink to="/" className="min-w-0 flex items-center gap-3.5 cursor-pointer group">
          <img src="/iicc_logo.webp" alt="IICC" className="w-20 h-auto sm:w-24 shrink-0 drop-shadow-xs" />
          <div className="min-w-0">
            <div className="flex items-baseline gap-2">
              <h1 className="font-display font-extrabold text-[#15195b] text-lg sm:text-2xl lg:text-3xl tracking-tight leading-none group-hover:text-[#1e3a8a] transition truncate">
                INDIA ISLAMIC CULTURAL CENTRE
              </h1>
            </div>
            <div className="text-sm font-serif-title font-semibold text-blue-800 tracking-wide mt-1 truncate">
              {currentLang === 'ur' ? 'انڈیا اسلامک کلچرل سینٹر، نئی دہلی' : 'Lodhi Road, New Delhi · Centre for Composite Culture'}
            </div>
            <div className="text-xs text-stone-500 hidden sm:block mt-0.5">
              87-88, Lodhi Road, New Delhi - 110003
            </div>
          </div>
        </NavLink>

        <div className="flex items-center gap-2">
          <NavLink
            to="/login"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-blue-950 text-xs font-bold transition min-h-[44px] flex items-center gap-1.5"
          >
            <User className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Login</span>
          </NavLink>

          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div ref={mobileNavRef} className={`lg:hidden bg-white border-t border-stone-200 overflow-hidden transition-all duration-300 ${
        mobileMenuOpen ? 'max-h-[800px] block' : 'max-h-0 hidden'
      }`}>
        <ul className="px-4 py-3 space-y-1">
          {navLinks.map((item) => (
            <li key={item.label}>
              {item.children ? (
                <div>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition min-h-[44px] text-stone-700 hover:bg-stone-50"
                  >
                    <span>{currentLang === 'ur' ? item.labelUrdu : item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileExpanded === item.label && (
                    <ul className="pl-4 space-y-1 mt-1">
                      {item.children.map((child) => (
                        <li key={child.path || child.label}>
                          <NavLink
                            to={child.path || '/'}
                            onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }}
                            className={({ isActive }) =>
                              `block px-3 py-2 rounded-lg text-xs font-medium transition min-h-[44px] ${
                                isActive ? 'bg-blue-50 text-[#1e3a8a] font-bold border-r-2 border-[#1e3a8a]' : 'text-stone-600 hover:bg-stone-50'
                              }`
                            }
                          >
                            {currentLang === 'ur' ? child.labelUrdu : child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <NavLink
                  to={item.path || '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 rounded-lg text-sm font-semibold transition min-h-[44px] ${
                      isActive 
                        ? 'bg-blue-50 text-[#1e3a8a] font-bold border-r-2 border-[#1e3a8a]' 
                        : 'text-stone-700 hover:bg-stone-50'
                    }`
                  }
                  end={item.path === '/'}
                >
                  {currentLang === 'ur' ? item.labelUrdu : item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>

      <nav ref={navRef} className="hidden lg:block bg-stone-100/90 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-3 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-0.5">
            {navLinks.map((item) => {
                const slug = item.label.replace(/\s+/g, '-').toLowerCase();
                const dropdownId = `dropdown-${slug}`;
                return item.children ? (
                <div
                  key={item.label}
                  className="relative inline-block"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                    aria-controls={dropdownId}
                    onClick={() => handleDropdownToggle(item.label)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleDropdownToggle(item.label);
                      }
                      if (e.key === 'Escape') {
                        setOpenDropdown(null);
                        openedByHoverRef.current = false;
                      }
                    }}
                    className={`px-2 py-2 text-xs font-semibold tracking-wide transition border-b-2 cursor-pointer whitespace-nowrap flex items-center gap-1 ${
                      isDropdownItemActive(location, item)
                        ? 'text-[#1e3a8a] border-[#1e3a8a] font-bold bg-white/70'
                        : 'text-stone-700 border-transparent hover:text-blue-900 hover:border-blue-600'
                    }`}
                  >
                    {currentLang === 'ur' ? item.labelUrdu : item.label}
                    <ChevronDown className={`w-3 h-3 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === item.label && (
                    <div
                      id={dropdownId}
                      className="absolute top-full left-0 z-50 bg-white border border-stone-200 shadow-lg rounded-b-xl min-w-[220px] py-1"
                      onMouseEnter={() => {
                        if (timeoutRef.current) clearTimeout(timeoutRef.current);
                      }}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.children!.map((child) => (
                        <NavLink
                          key={child.path || child.label}
                          to={child.path || '/'}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-xs font-medium transition ${
                              isActive ? 'bg-blue-50 text-[#1e3a8a] font-bold border-r-2 border-[#1e3a8a]' : 'text-stone-700 hover:bg-stone-50'
                            }`
                          }
                        >
                          {currentLang === 'ur' ? child.labelUrdu : child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path || '/'}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `px-2 py-2 text-xs font-semibold tracking-wide transition border-b-2 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'text-[#1e3a8a] border-[#1e3a8a] font-bold bg-white/70'
                        : 'text-stone-700 border-transparent hover:text-blue-900 hover:border-blue-600'
                    }`
                  }
                >
                  {currentLang === 'ur' ? item.labelUrdu : item.label}
                </NavLink>
              )
            })}
          </div>

          <NavLink
            to="/contact"
            className="text-[11px] font-medium text-blue-900 flex items-center gap-1.5 hover:text-blue-700 transition shrink-0 ml-4 whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" />
            Helpline: <strong>011-43535353</strong>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
