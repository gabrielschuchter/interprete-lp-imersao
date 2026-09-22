export const siteConfig = {
  brand: 'Interprete.',
  product: 'Imersão Do artigo à prática',
  title: 'Do artigo à prática | Imersão Interprete.',
  description:
    'Uma manhã online para buscar, interpretar e aplicar evidências com mais segurança na prática clínica.',
  date: '17.10.26',
  isoDate: '2026-10-17',
  time: '8h às 12h',
  calendarStart: '20261017T110000Z',
  calendarEnd: '20261017T150000Z',
  roomOpens: '7h45',
  format: 'online',
  recording: 'Acesso à gravação incluído',
  price: 'R$ 77,90',
  teachers: ['Gabriel Schuchter', 'Gianluca Pinheiro'],
  checkout: {
    appsScriptUrl: process.env.NEXT_PUBLIC_APPS_SCRIPT_URL ?? '',
    checkoutUrl: process.env.NEXT_PUBLIC_CHECKOUT_URL ?? ''
  },
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '',
    instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? ''
  },
  privacy: {
    responsibleName: '',
    responsibleDocument: '',
    retentionPolicy: '',
    updatedAt: '22.09.2026'
  }
} as const;

export type CtaOrigin =
  | 'hero'
  | 'problema'
  | 'programacao'
  | 'professores'
  | 'oferta'
  | 'faq'
  | 'fechamento';
