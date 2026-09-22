'use client';

import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '@/src/config/site';
import { PurchaseCta } from '@/src/components/purchase-cta';
import { ArrowIcon } from '@/src/components/icons';

export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);
  const atEndRef = useRef(false);

  useEffect(() => {
    const closing = document.getElementById('fechamento');
    const footer = document.querySelector('footer');
    const mobile = window.matchMedia('(max-width: 767px)');
    const update = () => {
      setVisible(mobile.matches && window.scrollY > window.innerHeight * 0.75 && !atEndRef.current);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        const nextAtEnd = entries.some((entry) => entry.isIntersecting);
        atEndRef.current = nextAtEnd;
        update();
      },
      { threshold: 0.08 }
    );
    if (closing) observer.observe(closing);
    if (footer) observer.observe(footer);
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    mobile.addEventListener('change', update);
    update();
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      mobile.removeEventListener('change', update);
    };
  }, []);

  return (
    <div className={`mobile-sticky ${visible ? 'is-visible' : ''}`} aria-hidden={!visible}>
      <span className="mobile-sticky-price">{siteConfig.price}</span>
      <PurchaseCta className="mobile-sticky-button" origin="hero" tabIndex={visible ? 0 : -1}>
        Garantir vaga <ArrowIcon size={20} />
      </PurchaseCta>
    </div>
  );
}
