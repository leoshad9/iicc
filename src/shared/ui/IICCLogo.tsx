import React from 'react';

interface LogoIconProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const iconSizes: Record<NonNullable<LogoIconProps['size']>, string> = {
  sm: 'w-8 h-8',
  md: 'w-11 h-11',
  lg: 'w-16 h-16',
  xl: 'w-24 h-24',
};

const LogoIcon = ({ size = 'md' }: LogoIconProps) => (
  <svg
    viewBox="0 0 460 360"
    className={`${iconSizes[size]} shrink-0 drop-shadow-xs`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="iicc-emblem-svg">
      {/* LEFT PILLAR 1: Cyan dot, Purple rectangle */}
      <rect x="36" y="24" width="26" height="26" rx="3" fill="#008ecc" />
      <rect x="36" y="68" width="26" height="230" rx="3" fill="#583186" />

      {/* LEFT PILLAR 2: Purple dot, Cyan rectangle */}
      <rect x="88" y="24" width="26" height="26" rx="3" fill="#583186" />
      <rect x="88" y="68" width="26" height="230" rx="3" fill="#008ecc" />

      {/* CRESCENT 1 (OUTER "C") */}
      <path d="M 235 48 A 155 155 0 0 1 395 24 L 406 40 A 175 175 0 0 0 225 68 Z" fill="#008ecc" />
      <path d="M 176 90 A 155 155 0 0 1 235 48 L 225 68 A 175 175 0 0 0 162 118 Z" fill="#fff500" />
      <path d="M 144 175 A 155 155 0 0 1 176 90 L 162 118 A 175 175 0 0 0 144 175 Z" fill="#583186" />
      <path d="M 144 175 A 155 155 0 0 0 176 260 L 162 232 A 175 175 0 0 1 144 175 Z" fill="#583186" />
      <path d="M 176 260 A 155 155 0 0 0 235 302 L 225 282 A 175 175 0 0 1 162 232 Z" fill="#fff500" />
      <path d="M 235 302 A 155 155 0 0 0 395 326 L 406 310 A 175 175 0 0 1 225 282 Z" fill="#008ecc" />

      {/* CRESCENT 2 (INNER "C") */}
      <path d="M 270 88 A 120 120 0 0 1 390 64 L 398 78 A 136 136 0 0 0 262 104 Z" fill="#583186" />
      <path d="M 238 122 A 120 120 0 0 1 270 88 L 262 104 A 136 136 0 0 0 226 144 Z" fill="#fff500" />
      <path d="M 198 175 A 120 120 0 0 1 238 122 L 226 144 A 136 136 0 0 0 198 175 Z" fill="#008ecc" />
      <path d="M 198 175 A 120 120 0 0 0 238 228 L 226 206 A 136 136 0 0 1 198 175 Z" fill="#008ecc" />
      <path d="M 238 228 A 120 120 0 0 0 270 262 L 262 246 A 136 136 0 0 1 226 206 Z" fill="#fff500" />
      <path d="M 270 262 A 120 120 0 0 0 390 286 L 398 272 A 136 136 0 0 1 262 246 Z" fill="#583186" />

      {/* 24-RAY GOLDEN RADIANT SUN */}
      <g transform="translate(348, 175)">
        <circle cx="0" cy="0" r="44" fill="#ffee00" stroke="#facc15" strokeWidth={2} />
        {[0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345].map((angle) => (
          <path
            key={angle}
            d="M -5 -44 L 0 -105 L 5 -44 Z"
            fill="#ffee00"
            transform={`rotate(${angle})`}
          />
        ))}
        <circle cx="0" cy="0" r="38" fill="#fff740" />
      </g>
    </g>
  </svg>
);

interface IICCLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon-only' | 'horizontal';
  theme?: 'light' | 'dark' | 'color';
}

export const IICCLogo: React.FC<IICCLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'horizontal',
  theme = 'color',
}) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-[#15195b]';
  const subtextColor = isDark ? 'text-stone-300' : 'text-[#15195b]';

  if (variant === 'icon-only') {
    return <LogoIcon size={size} />;
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <LogoIcon size={size} />
        <div className="mt-2">
          <div className={`font-bold font-display tracking-tight text-sm sm:text-base ${textColor}`}>
            India Islamic Cultural Centre
          </div>
          <div className={`text-xs font-semibold tracking-wider uppercase mt-0.5 ${subtextColor}`}>
            New Delhi
          </div>
        </div>
      </div>
    );
  }

  // Horizontal variant (default for headers and bars)
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="bg-white p-1 rounded-xl shadow-xs border border-stone-200/60 shrink-0">
        <LogoIcon size={size} />
      </div>
      <div>
        <div className={`font-display font-extrabold tracking-tight text-base sm:text-lg leading-tight ${textColor}`}>
          INDIA ISLAMIC CULTURAL CENTRE
        </div>
        <div className="flex items-center gap-2 text-xs font-serif-title font-semibold text-blue-800 dark:text-blue-300 mt-0.5">
          <span>Lodhi Road · New Delhi</span>
          <span className="hidden sm:inline text-stone-300">•</span>
          <span className="hidden sm:inline text-stone-500 font-normal">انڈیا اسلامک کلچرل سینٹر</span>
        </div>
      </div>
    </div>
  );
};
