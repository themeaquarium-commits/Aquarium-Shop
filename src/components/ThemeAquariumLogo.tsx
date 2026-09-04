import React, { useState } from 'react';

interface ThemeAquariumLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const ThemeAquariumLogo: React.FC<ThemeAquariumLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = false,
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'h-9 sm:h-10',
    md: 'h-12 sm:h-14',
    lg: 'h-16 sm:h-18',
    xl: 'h-20 sm:h-24',
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Theme Aquarium Brand Logo */}
      <div className="relative flex items-center justify-center bg-white px-3.5 py-1.5 rounded-xl shadow-lg border border-emerald-500/30 hover:border-emerald-400/50 transition-all">
        {!imageError ? (
          <img
            src="/images/theme-aquarium-logo.png"
            alt="Theme Aquarium Chennai"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className={`${sizeClasses} w-auto object-contain max-w-[200px] sm:max-w-[240px] drop-shadow-sm`}
          />
        ) : (
          <img
            src="/images/theme-aquarium-logo.svg"
            alt="Theme Aquarium Chennai"
            referrerPolicy="no-referrer"
            className={`${sizeClasses} w-auto object-contain max-w-[200px] sm:max-w-[240px]`}
          />
        )}
      </div>

      {showSubtitle && (
        <div className="hidden sm:flex flex-col border-l border-emerald-500/30 pl-3">
          <span className="text-xs font-bold tracking-wider text-emerald-400 uppercase">
            Theme Aquarium
          </span>
          <span className="text-[10px] tracking-wide text-slate-400 font-mono">
            Adyar, Chennai
          </span>
        </div>
      )}
    </div>
  );
};

