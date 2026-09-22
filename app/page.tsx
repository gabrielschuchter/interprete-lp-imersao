import Image from 'next/image';
import type { ReactNode } from 'react';
import { FaqAccordion } from '@/src/components/faq-accordion';
import { LineIcon, ArrowIcon, type IconName } from '@/src/components/icons';
import { MobileStickyCta } from '@/src/components/mobile-sticky-cta';
import { PurchaseCta } from '@/src/components/purchase-cta';
import { PurchaseModal } from '@/src/components/purchase-modal';
import { siteConfig, type CtaOrigin } from '@/src/config/site';
import { faqItems } from '@/src/content/faq';
import {
  closingBenefits,
  closingFacts,
  heroBenefits,
  offerIncludes,
  problemSteps,
  schedule
} from '@/src/content/landing';
import { socialProof, socialProofMetrics } from '@/src/content/socialProof';

const asset = (name: string) => `/assets/${name}`;

function BrandLogo({ className = '' }: { className?: string }) {
  return (
    <Image
      className={`brand-logo ${className}`.trim()}
      src={asset('site_01_interprete.svg')}
      alt="Interprete."
      width={4890}
      height={896}
      sizes="(max-width: 767px) 123px, 155px"
    />
  );
}

function FoldHeader({ number, label, withLogo = false }: { number: string; label: string; withLogo?: boolean }) {
  return (
    <div className="fold-header shell">
      <div className="fold-label"><span>{number}</span><i aria-hidden="true" /><span>{label}</span></div>
      <div className="fold-meta">
        {withLogo && <BrandLogo className="brand-logo--small" />}
        <span>IMERSÃO ONLINE</span><i aria-hidden="true" /><span>{siteConfig.date}</span>
      </div>
    </div>
  );
}

function EditorialButton({ origin, children }: { origin: CtaOrigin; children: ReactNode }) {
  return <PurchaseCta className="editorial-button" origin={origin}>{children}<ArrowIcon /></PurchaseCta>;
}

function IconLabel({ icon, title, text }: { icon: IconName; title: string; text: string }) {
  return <span className="icon-label"><LineIcon name={icon} size={31} /><strong>{title}</strong><small>{text}</small></span>;
}

export default function HomePage() {
  return (
    <>
      <main id="conteudo">
        <section className="fold hero-fold" id="hero" aria-labelledby="hero-title">
          <header className="site-bar shell">
            <div className="site-bar-left">
              <BrandLogo />
              <span className="site-rule" aria-hidden="true" />
              <nav className="editorial-nav" aria-label="Navegação editorial">
                <a href="#problema">EVIDÊNCIA</a>
                <span aria-hidden="true">|</span>
                <a href="#programacao">PRÁTICA</a>
                <span aria-hidden="true">|</span>
                <a href="#professores">PESSOAS</a>
              </nav>
            </div>
            <div className="hero-meta"><span>IMERSÃO ONLINE</span><i aria-hidden="true" /><span>{siteConfig.date}</span></div>
          </header>

          <div className="hero-grid shell">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">UMA MANHÃ PARA ENTENDER</p>
              <h1 id="hero-title">Da dúvida à<br />decisão clínica.<em>Na prática.</em></h1>
              <p className="hero-lede">Uma imersão para você aprender, em poucas horas,<br className="desktop-only" /> como <em>buscar, interpretar e aplicar</em> evidências na sua rotina como nutricionista.</p>

              <div className="hero-benefits" aria-label="O que você vai praticar">
                {heroBenefits.map((item) => <IconLabel key={item.title} icon={item.icon} title={item.title} text={item.text} />)}
              </div>

              <EditorialButton origin="hero">Garantir minha vaga por {siteConfig.price}</EditorialButton>

              <div className="offer-facts" aria-label="Informações da imersão">
                <IconLabel icon="calendar" title={siteConfig.date} text={`${siteConfig.time} (sala aberta às ${siteConfig.roomOpens})`} />
                <IconLabel icon="play" title="Online" text={siteConfig.recording} />
                <IconLabel icon="shield" title={siteConfig.price} text="Pagamento seguro" />
              </div>
            </div>

            <figure className="hero-art">
              <Image
                src={asset('01_visual_principal_fallback.png')}
                alt="Colagem editorial com Gabriel Schuchter, Gianluca Pinheiro, papéis de pergunta, evidência e prática, e um busto clássico."
                width={683}
                height={1010}
                priority
                sizes="(max-width: 900px) 100vw, 54vw"
              />
            </figure>
          </div>

          <div className="hero-footer shell">
            <div className="hero-proof-placeholder"><span className="proof-avatars" aria-hidden="true"><i /><i /><i /><i /></span><strong>Uma manhã para estudar com método.</strong><span>Conteúdo aplicado, do artigo à prática.</span></div>
            <div className="hero-footer-note">UM PASSO REAL EM DIREÇÃO<br />A UMA PRÁTICA BASEADA EM EVIDÊNCIAS.</div>
            <span className="page-count">01 / 07</span>
          </div>
        </section>

        <section className="fold problem-fold" id="problema" aria-labelledby="problem-title">
          <FoldHeader number="02" label="O PROBLEMA" />
          <div className="problem-main shell">
            <div className="problem-copy">
              <h2 id="problem-title">Você encontra<br />artigos. A parte<br /><em>difícil começa depois.</em></h2>
              <p>Hoje, você tem acesso a mais informação do que consegue usar. São estudos, revisões, diretrizes e opiniões — mas nem sempre fica claro o que realmente importa para o seu paciente.</p>
              <p>A imersão foi criada para te mostrar, de forma prática, como percorrer o caminho completo da evidência, da dúvida inicial até uma decisão clínica mais segura.</p>
            </div>
            <figure className="problem-art">
              <Image src={asset('02_laptop_artigo_fallback.png')} alt="Laptop com artigo científico, livros, notas e a pergunta sobre a aplicabilidade ao paciente." width={730} height={580} loading="lazy" sizes="(max-width: 900px) 100vw, 52vw" />
            </figure>
          </div>

          <div className="problem-steps shell" aria-label="Caminho da dúvida à aplicação">
            {problemSteps.map((step) => <article className="problem-step" key={step.number}><span className="step-number">{step.number}</span><LineIcon name={step.icon} size={34} /><h3>{step.title}</h3><p>{step.text}</p></article>)}
          </div>

          <div className="argument-band shell">
            <p>É esse caminho que vamos<br /><em>percorrer juntos na imersão.</em></p>
            <EditorialButton origin="problema">Garantir minha vaga por {siteConfig.price}</EditorialButton>
          </div>
        </section>

        <section className="fold program-fold" id="programacao" aria-labelledby="program-title">
          <FoldHeader number="03" label="A PROGRAMAÇÃO" />
          <div className="program-intro shell">
            <div>
              <h2 id="program-title">Uma manhã<br />com conteúdo aplicado<br /><em>da teoria à prática.</em></h2>
              <p>Um percurso completo, em duas partes, para você sair da imersão com mais segurança para buscar, interpretar e aplicar evidências na sua rotina clínica.</p>
            </div>
            <figure className="program-art"><Image src={asset('03_colagem_programacao_fallback.png')} alt="Colagem editorial com artigos, evidência, um busto clássico e notas manuscritas." width={690} height={800} loading="lazy" sizes="(max-width: 900px) 100vw, 49vw" /></figure>
          </div>

          <div className="schedule-layout shell">
            <div className="timeline" aria-label="Programação da imersão">
              {schedule.map((entry, index) => <article className={`timeline-entry timeline-entry--${entry.kind}`} key={entry.time}>
                <span className="timeline-dot" aria-hidden="true" />
                <time>{entry.time}</time>
                <div><h3>{entry.title}</h3>{'items' in entry ? <ul>{entry.items.map((item) => <li key={item}>{item}</li>)}</ul> : <p>{entry.description}</p>}</div>
              </article>)}
              <EditorialButton origin="programacao">Garantir minha vaga por {siteConfig.price}</EditorialButton>
            </div>
            <div className="schedule-aside">
              <p className="hand-note">Melhores<br />perguntas.<br />Melhores<br />decisões.</p>
              <div className="schedule-attributes">
                <IconLabel icon="laptop" title="Online" text="Participe de onde estiver" />
                <IconLabel icon="play" title="Acesso à gravação" text="Assista quando quiser" />
                <IconLabel icon="shield" title="Pagamento seguro" text="Seus dados protegidos" />
              </div>
            </div>
          </div>
        </section>

        <section className="fold teachers-fold" id="professores" aria-labelledby="teachers-title">
          <FoldHeader number="04" label="QUEM CONDUZ E O QUE DIZEM" withLogo />
          <div className="teachers-layout shell">
            <div className="teachers-copy">
              <h2 id="teachers-title">Aprenda com<br />quem vive a<br />evidência<br /><em>na prática.</em></h2>
              <p>Uma manhã conduzida por profissionais que trabalham com pesquisa, ensino e prática clínica, e que acreditam em uma Nutrição mais crítica, mais autônoma e mais bem informada.</p>
              <figure className="teachers-art"><Image src={asset('04_professores_fallback.png')} alt="Retratos editoriais de Gabriel Schuchter e Gianluca Pinheiro ao lado de um busto clássico." width={575} height={410} loading="lazy" sizes="(max-width: 900px) 100vw, 42vw" /></figure>
            </div>
            <div className="proof-column">
              <p className="eyebrow proof-kicker">O QUE NOSSOS ALUNOS DIZEM</p>
              <div className="proof-grid">
                {socialProof.map((item) => <article className="proof-card" key={item.id}>
                  <span className="quote-mark" aria-hidden="true">“</span>
                  <p>“{item.quote}”</p>
                  <div className="proof-author"><span className="author-avatar" aria-hidden="true" /><span><strong>{item.name}</strong><small>{item.role}</small></span></div>
                </article>)}
              </div>
              <a className="proof-more" href="#professores">Ver mais depoimentos <ArrowIcon size={22} /></a>
              <div className="proof-metrics">
                <div className="metrics-head"><p className="eyebrow">MESMO OBJETIVO.<br />PESSOAS REAIS.</p><h3>Mais confiança<br /><em>para decidir.</em></h3></div>
                <div className="metrics-list">{socialProofMetrics.map((metric) => <IconLabel key={metric.value} icon={metric.icon} title={metric.value} text={metric.label} />)}</div>
              </div>
              <PurchaseCta className="proof-cta" origin="professores">
                <span className="proof-cta-arrow" aria-hidden="true">→</span>
                <i aria-hidden="true" />
                <span>Garanta sua vaga por {siteConfig.price}</span>
                <i aria-hidden="true" />
                <small>UMA MANHÃ QUE PODE<br />MUDAR SUA PRÁTICA.</small>
              </PurchaseCta>
            </div>
          </div>
        </section>

        <section className="fold offer-fold" id="oferta" aria-labelledby="offer-title">
          <FoldHeader number="05" label="SUA INSCRIÇÃO" withLogo />
          <div className="offer-layout shell">
            <div className="offer-copy">
              <p className="eyebrow">UMA CONDIÇÃO SIMPLES<br />PARA UM GRANDE AVANÇO.</p>
              <h2 id="offer-title">Garanta sua vaga<br /><em>e dê o primeiro passo.</em></h2>
              <p>Uma manhã para resolver dúvidas reais, com conteúdo aplicável, professores experientes e um formato direto ao ponto.</p>
              <div className="price-card">
                <div className="price-card-top"><span className="eyebrow">IMERSÃO ONLINE</span><span><strong>{siteConfig.date}</strong><br />{siteConfig.time}<small>(sala aberta às {siteConfig.roomOpens})</small></span></div>
                <h3>{siteConfig.product.replace('Imersão ', '')}</h3>
                <div className="price-card-bottom"><strong>{siteConfig.price}</strong><div><IconLabel icon="play" title="Acesso à gravação" text="" /><IconLabel icon="laptop" title="Online e ao vivo" text="" /><IconLabel icon="shield" title="Pagamento seguro" text="" /></div></div>
              </div>
              <EditorialButton origin="oferta">Quero participar da imersão por {siteConfig.price}</EditorialButton>
              <p className="security-note">INSCRIÇÃO SEGURA VIA CHECKOUT CONFIGURADO</p>
            </div>
            <div className="offer-includes"><p className="eyebrow">O QUE ESTÁ INCLUÍDO</p>{offerIncludes.map((item) => <article className="include-card" key={item.title}><LineIcon name={item.icon} size={38} /><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
            <figure className="offer-art"><Image src={asset('05_still_life_fallback.png')} alt="Still life editorial com busto clássico, laptop, livros, caneca e caderno." width={456} height={740} loading="lazy" sizes="(max-width: 900px) 100vw, 30vw" /></figure>
          </div>
          <div className="offer-benefits shell"><p className="eyebrow">MAIS DO QUE CONHECIMENTO,<br /><em>um novo jeito de pensar a Nutrição.</em></p><IconLabel icon="book" title="Baseado em evidências" text="Conteúdo relevante para a prática clínica." /><IconLabel icon="users" title="Com uma comunidade ativa" text="+1.200 profissionais já estudaram com o Interprete." /><IconLabel icon="chart" title="Aplicável à sua realidade" text="Exemplos e discussão focados na prática." /></div>
        </section>

        <section className="fold faq-fold" id="faq" aria-labelledby="faq-title">
          <FoldHeader number="06" label="DÚVIDAS FREQUENTES" withLogo />
          <div className="faq-layout shell">
            <div className="faq-copy"><h2 id="faq-title">Ainda com dúvidas?<br /><em>Talvez a sua esteja aqui.</em></h2><p>Reunimos as perguntas mais comuns sobre a imersão para você decidir com mais segurança.</p><FaqAccordion items={faqItems} /></div>
            <aside className="faq-cta-card"><div className="faq-card-copy"><p className="eyebrow">UMA MANHÃ.<br />UM CAMINHO COMPLETO.</p><h3>Da dúvida<br /><em>à prática.</em></h3><p>Garanta sua vaga e comece a tomar decisões mais seguras na sua prática clínica.</p><EditorialButton origin="faq">Quero participar por {siteConfig.price}</EditorialButton><div className="faq-card-facts"><IconLabel icon="shield" title="Pagamento seguro" text="" /><IconLabel icon="play" title="Acesso à gravação" text="" /><IconLabel icon="shield" title="Seus dados protegidos" text="" /></div></div><Image className="faq-art" src={asset('06_estatua_faq_fallback.png')} alt="Busto clássico, livros, caneca e uma nota editorial sobre prática baseada em evidências." width={346} height={650} loading="lazy" sizes="(max-width: 900px) 100vw, 30vw" /></aside>
          </div>
          <div className="contact-band shell"><div><p className="eyebrow">AINDA PRECISA CONVERSAR?</p><h3>Fale com a gente.</h3></div><div className="contact-detail"><LineIcon name="book" size={34} />{siteConfig.contact.email ? <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> : <span>Contato a configurar</span>}</div><div className="contact-detail"><LineIcon name="person" size={34} />{siteConfig.contact.instagramUrl ? <a href={siteConfig.contact.instagramUrl}>@interprete</a> : <span>Instagram a configurar</span>}</div><span className="contact-note">CIÊNCIA<br />PARA UMA NUTRIÇÃO<br />MAIS REAL.</span></div>
        </section>

        <section className="fold closing-fold" id="fechamento" aria-labelledby="closing-title">
          <FoldHeader number="07" label="FECHAMENTO" withLogo />
          <div className="closing-layout shell">
            <div className="closing-copy"><p className="eyebrow">UMA MANHÃ.<br />UM NOVO JEITO DE PENSAR A NUTRIÇÃO.</p><h2 id="closing-title">Da dúvida<br />à <em>prática.</em></h2><p>Dê o primeiro passo para tomar decisões mais seguras, críticas e baseadas em evidências na sua prática clínica.</p><EditorialButton origin="fechamento">Quero participar da imersão por {siteConfig.price}</EditorialButton><div className="closing-facts">{closingFacts.map((fact) => <IconLabel key={fact.title} icon={fact.icon} title={fact.title} text={fact.text} />)}</div></div>
            <figure className="closing-art"><Image src={asset('07_still_life_fechamento_fallback.png')} alt="Still life editorial com laptop, livros, caneca, caderno e busto clássico." width={856} height={730} loading="lazy" sizes="(max-width: 900px) 100vw, 57vw" /></figure>
          </div>
          <div className="closing-benefits shell">{closingBenefits.map((item) => <IconLabel key={item.title} icon={item.icon} title={item.title} text={item.text} />)}</div>
        </section>
      </main>

      <footer className="site-footer" id="rodape">
        <div className="footer-inner shell"><div><span className="footer-brand">Interprete.</span><span className="footer-motto">BUSQUE&nbsp; • &nbsp;INTERPRETE&nbsp; • &nbsp;APLIQUE</span></div><nav aria-label="Links do rodapé"><a href="#hero">Início</a><a href="#oferta">Inscrição</a><a href="#faq">FAQ</a><a href="/privacidade">Privacidade</a>{siteConfig.contact.email ? <a href={`mailto:${siteConfig.contact.email}`}>Contato</a> : <span>Contato</span>}</nav><p className="footer-caption">EVIDÊNCIA<br />PARA UMA NUTRIÇÃO<br />MAIS CONSCIENTE.</p></div>
        <div className="footer-bottom shell"><span>© 2026 Interprete. Todos os direitos reservados.</span><span>Do artigo à prática.</span></div>
      </footer>
      <MobileStickyCta />
      <PurchaseModal />
    </>
  );
}
