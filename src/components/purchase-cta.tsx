'use client';

import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { CtaOrigin } from '@/src/config/site';

type PurchaseCtaProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  origin: CtaOrigin;
  children: ReactNode;
};

export function PurchaseCta({ origin, children, className = '', ...props }: PurchaseCtaProps) {
  const open = () => {
    window.dispatchEvent(new CustomEvent('interprete:open-purchase', { detail: { origin } }));
  };

  return (
    <button
      type="button"
      className={`purchase-cta ${className}`.trim()}
      onClick={open}
      {...props}
    >
      {children}
    </button>
  );
}
