import Link from 'next/link';
import { LineIcon } from '@/src/components/icons';
import { siteConfig } from '@/src/config/site';

export default function ThankYouPage() {
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(siteConfig.product)}&dates=${siteConfig.calendarStart}/${siteConfig.calendarEnd}&details=${encodeURIComponent('Imersão online do Interprete. Acesso à gravação incluído.')}`;
  return (
    <main className="simple-page">
      <div className="simple-page-inner">
        <Link className="simple-brand" href="/">Interprete.</Link>
        <p className="eyebrow">PRÓXIMOS PASSOS</p>
        <h1>Obrigado por continuar<br /><em>sua inscrição.</em></h1>
        <p className="simple-lede">Confira o e-mail usado no checkout para acompanhar as instruções da sua inscrição. Esta página não confirma, por si só, o pagamento.</p>
        <div className="simple-facts"><span><LineIcon name="calendar" size={30} /><strong>{siteConfig.date}</strong><small>{siteConfig.time}<br />sala aberta às {siteConfig.roomOpens}</small></span><span><LineIcon name="laptop" size={30} /><strong>Online</strong><small>{siteConfig.recording}</small></span></div>
        <div className="simple-actions"><a className="editorial-button link-button" href={calendarUrl} target="_blank" rel="noreferrer">Adicionar ao Google Agenda <span aria-hidden="true">→</span></a><Link className="text-link" href="/">Voltar para a página</Link></div>
      </div>
    </main>
  );
}
