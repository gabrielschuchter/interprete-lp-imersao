'use client';

import { useState } from 'react';
import type { FAQItem } from '@/src/content/faq';

type FaqAccordionProps = { items: readonly FAQItem[] };

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const answerId = `faq-answer-${index + 1}`;
        return (
          <article className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.question}>
            <button
              className="faq-trigger"
              type="button"
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="faq-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="faq-question">{item.question}</span>
              <span className="faq-chevron" aria-hidden="true">⌄</span>
            </button>
            <div className="faq-answer" id={answerId} hidden={!isOpen}>
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
