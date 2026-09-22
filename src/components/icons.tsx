import type { SVGProps } from 'react';

export type IconName =
  | 'book'
  | 'bolt'
  | 'calendar'
  | 'chart'
  | 'check'
  | 'laptop'
  | 'person'
  | 'play'
  | 'question'
  | 'search'
  | 'shield'
  | 'sprout'
  | 'users'
  | 'video';

type IconProps = SVGProps<SVGSVGElement> & { name: IconName; size?: number };

export function LineIcon({ name, size = 28, ...props }: IconProps) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    strokeWidth: 1.8
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" width={size} height={size} {...props}>
      {name === 'question' && <><path {...common} d="M7 25V9.5L10 6h8.5L23 10.5V25" /><path {...common} d="M9 11h8l3 3v8H9z" /><circle cx="25" cy="24.5" r="3" {...common} /><path {...common} d="M25 23v3M23.5 24.5h3" /></>}
      {name === 'search' && <><circle cx="13.5" cy="13.5" r="7" {...common} /><path {...common} d="m19 19 7 7M11 13.5h5M13.5 11v5" /></>}
      {name === 'chart' && <><path {...common} d="M6 26V7M6 26h21" /><path {...common} d="M10 22v-6h4v6M16 22V11h4v11M22 22v-9h4v9" /></>}
      {name === 'check' && <><circle cx="16" cy="16" r="11" {...common} /><path {...common} d="m10.5 16 3.5 3.5 7.5-8" /></>}
      {name === 'person' && <><circle cx="16" cy="9.5" r="4.5" {...common} /><path {...common} d="M7 27v-2.5c0-4.3 4-7.5 9-7.5s9 3.2 9 7.5V27" /></>}
      {name === 'users' && <><circle cx="12" cy="11" r="4" {...common} /><circle cx="22" cy="12" r="3.2" {...common} /><path {...common} d="M4.5 27v-2c0-4 3.2-7 7.5-7s7.5 3 7.5 7v2M20 19c4.2.1 7.5 2.3 7.5 5.6V27" /></>}
      {name === 'play' && <><circle cx="16" cy="16" r="11" {...common} /><path {...common} d="m14 11.5 6 4.5-6 4.5z" /></>}
      {name === 'video' && <><rect x="4" y="8" width="19" height="16" rx="2" {...common} /><path {...common} d="m23 13 5-3v12l-5-3M12 12.5l5 3.5-5 3.5z" /></>}
      {name === 'laptop' && <><rect x="6" y="6" width="20" height="14" rx="1.5" {...common} /><path {...common} d="M3.5 25.5h25M10 25.5l1.5-3h9l1.5 3" /></>}
      {name === 'calendar' && <><rect x="5" y="7" width="22" height="20" rx="2" {...common} /><path {...common} d="M9 4.5v5M23 4.5v5M5 12h22M10 16h.1M16 16h.1M22 16h.1M10 21h.1M16 21h.1" /></>}
      {name === 'shield' && <><path {...common} d="m16 4 10 4v7c0 6-4.2 10.3-10 13-5.8-2.7-10-7-10-13V8z" /><path {...common} d="m11 16 3.2 3.2 6.8-7" /></>}
      {name === 'book' && <><path {...common} d="M5 6.5c3.6-1.2 7.2-.6 11 2v17c-3.8-2.6-7.4-3.2-11-2zM27 6.5c-3.6-1.2-7.2-.6-11 2v17c3.8-2.6 7.4-3.2 11-2z" /></>}
      {name === 'sprout' && <><path {...common} d="M16 27V15M16 19c-5-1-7-4.5-7-8 5.2-.2 8 2.6 8 7M16 16c1-5 4.5-7 8-7 .2 5.2-2.6 8-7 8" /></>}
      {name === 'bolt' && <path {...common} d="m18.5 3-10 14h7L14 29l10-16h-7z" />}
    </svg>
  );
}

export function ArrowIcon({ size = 26 }: { size?: number }) {
  return <span className="arrow-icon" aria-hidden="true" style={{ fontSize: size }}>→</span>;
}
