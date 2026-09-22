'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { siteConfig, type CtaOrigin } from '@/src/config/site';

type ModalStatus = 'idle' | 'sending' | 'missing-checkout';

type LeadPayload = {
  timestamp: string;
  nome: string;
  email: string;
  whatsapp: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  referrer: string;
  pathname: string;
  origem_do_cta: CtaOrigin;
  status: 'checkout_iniciado';
};

function timeoutPromise(ms: number) {
  return new Promise<never>((_, reject) => {
    window.setTimeout(() => reject(new Error('tracking-timeout')), ms);
  });
}

function readTracking(origin: CtaOrigin, name: string, email: string, whatsapp: string): LeadPayload {
  const params = new URLSearchParams(window.location.search);
  const get = (key: string) => params.get(key) ?? '';
  return {
    timestamp: new Date().toISOString(),
    nome: name,
    email,
    whatsapp,
    utm_source: get('utm_source'),
    utm_medium: get('utm_medium'),
    utm_campaign: get('utm_campaign'),
    utm_content: get('utm_content'),
    utm_term: get('utm_term'),
    referrer: document.referrer,
    pathname: window.location.pathname,
    origem_do_cta: origin,
    status: 'checkout_iniciado'
  };
}

export function PurchaseModal() {
  const [open, setOpen] = useState(false);
  const [origin, setOrigin] = useState<CtaOrigin>('hero');
  const [status, setStatus] = useState<ModalStatus>('idle');
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleOpen = (event: Event) => {
      const detail = (event as CustomEvent<{ origin?: CtaOrigin }>).detail;
      setOrigin(detail?.origin ?? 'hero');
      setStatus('idle');
      setError('');
      setOpen(true);
    };
    window.addEventListener('interprete:open-purchase', handleOpen);
    return () => window.removeEventListener('interprete:open-purchase', handleOpen);
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.classList.remove('modal-open');
      return;
    }

    document.body.classList.add('modal-open');
    firstInputRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>('button, input, [href], select, textarea, [tabindex]:not([tabindex="-1"])')
      ).filter((node) => !node.hasAttribute('disabled'));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  if (!open) return null;

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    setError('');
    const payload = readTracking(origin, name.trim(), email.trim(), whatsapp.trim());
    const appsScriptUrl = siteConfig.checkout.appsScriptUrl;
    const checkoutUrl = siteConfig.checkout.checkoutUrl;

    if (appsScriptUrl) {
      try {
        await Promise.race([
          fetch(appsScriptUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(payload),
            keepalive: true
          }),
          timeoutPromise(900)
        ]);
      } catch {
        // O tracking é deliberadamente fail-open: a compra não depende dele.
      }
    }

    if (!checkoutUrl) {
      setStatus('missing-checkout');
      setError('O checkout ainda não foi configurado. Preencha NEXT_PUBLIC_CHECKOUT_URL para concluir a inscrição.');
      return;
    }

    window.location.assign(checkoutUrl);
  };

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
      <div className="purchase-modal" role="dialog" aria-modal="true" aria-labelledby="purchase-modal-title" ref={dialogRef}>
        <button className="modal-close" type="button" aria-label="Fechar formulário" onClick={() => setOpen(false)}>×</button>
        <p className="eyebrow">PRÉ-CHECKOUT · {siteConfig.price}</p>
        <h2 id="purchase-modal-title">Dê o primeiro passo.</h2>
        <p className="modal-intro">Deixe seus dados para seguir para o pagamento da imersão.</p>
        <form onSubmit={submit}>
          <label htmlFor="lead-name">Nome</label>
          <input ref={firstInputRef} id="lead-name" name="name" autoComplete="name" required value={name} onChange={(event) => setName(event.target.value)} />
          <label htmlFor="lead-email">E-mail</label>
          <input id="lead-email" name="email" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} />
          <label htmlFor="lead-whatsapp">WhatsApp</label>
          <input id="lead-whatsapp" name="whatsapp" type="tel" autoComplete="tel" required value={whatsapp} onChange={(event) => setWhatsapp(event.target.value)} />
          {error && <p className="form-error" role="alert">{error}</p>}
          <button className="modal-submit" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Preparando pagamento…' : 'Continuar para o pagamento'}
            <span aria-hidden="true">→</span>
          </button>
        </form>
        <p className="modal-fineprint">Se o tracking estiver indisponível, você ainda poderá seguir para o checkout.</p>
      </div>
    </div>
  );
}
