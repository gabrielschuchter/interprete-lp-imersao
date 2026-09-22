import Link from 'next/link';
import { siteConfig } from '@/src/config/site';

export default function PrivacyPage() {
  const contact = siteConfig.contact.email || 'canal de contato ainda não configurado';
  return (
    <main className="legal-page">
      <div className="legal-inner">
        <Link className="simple-brand" href="/">Interprete.</Link>
        <p className="eyebrow">INFORMAÇÕES DE PRIVACIDADE</p>
        <h1>Privacidade.</h1>
        <p className="legal-intro">Esta página descreve, de forma simples, os dados usados no pré-checkout da imersão Do artigo à prática.</p>
        <div className="legal-content">
          <section><h2>Dados coletados</h2><p>Nome, e-mail e WhatsApp informados no formulário. Também podem ser enviados timestamp, parâmetros UTM, URL de origem, caminho da página e origem do CTA clicado.</p></section>
          <section><h2>Finalidade</h2><p>Os dados são usados para identificar o lead, iniciar o checkout, acompanhar a inscrição e entender a origem das campanhas quando esses recursos estiverem configurados.</p></section>
          <section><h2>Processamento e serviços</h2><p>O formulário pode enviar os dados para um Google Apps Script e, depois, encaminhar a pessoa ao checkout indicado em variável de ambiente. Os endereços exatos devem ser configurados antes da publicação.</p></section>
          <section><h2>UTMs e analytics</h2><p>Quando presentes na URL, utm_source, utm_medium, utm_campaign, utm_content e utm_term são preservados para atribuição. Não há analytics adicional declarado nesta versão.</p></section>
          <section><h2>Retenção</h2><p>{siteConfig.privacy.retentionPolicy || 'O prazo de retenção ainda não foi configurado e deve ser definido pela pessoa responsável antes da publicação final.'}</p></section>
          <section><h2>Direitos do titular</h2><p>Você pode solicitar acesso, correção, atualização ou exclusão dos seus dados pelo canal de contato configurado. No momento, o contato é: <strong>{contact}</strong>.</p></section>
          <section id="contato"><h2>Responsável e atualização</h2><p>{siteConfig.privacy.responsibleName || 'A identificação da pessoa responsável ainda não foi configurada.'}</p><p>Última atualização: {siteConfig.privacy.updatedAt}.</p></section>
        </div>
        <Link className="text-link" href="/">Voltar para a imersão →</Link>
      </div>
    </main>
  );
}
