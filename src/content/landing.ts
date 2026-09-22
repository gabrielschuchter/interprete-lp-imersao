import { siteConfig } from '@/src/config/site';

export const heroBenefits = [
  { icon: 'question', title: 'Formule', text: 'melhores perguntas' },
  { icon: 'search', title: 'Encontre', text: 'a melhor evidência' },
  { icon: 'chart', title: 'Interprete', text: 'os resultados com segurança' },
  { icon: 'person', title: 'Avalie', text: 'a aplicabilidade ao paciente real' },
  { icon: 'check', title: 'Tome', text: 'decisões mais confiantes' }
] as const;

export const problemSteps = [
  { number: '1', icon: 'question', title: 'Dúvida', text: 'Transforme sua questão clínica em uma pergunta responsável.' },
  { number: '2', icon: 'search', title: 'Busca', text: 'Encontre a melhor evidência, nos lugares certos.' },
  { number: '3', icon: 'chart', title: 'Interpretação', text: 'Entenda o que os resultados realmente mostram.' },
  { number: '4', icon: 'check', title: 'Julgamento', text: 'Avalie a qualidade e as limitações da evidência.' },
  { number: '5', icon: 'person', title: 'Aplicação', text: 'Traduza o achado para o seu paciente real, com mais segurança.' }
] as const;

export const schedule = [
  {
    time: '07h45',
    title: 'Abertura da sala',
    description: 'Conecte-se, ajuste seu ambiente e venha com a gente.',
    kind: 'quiet'
  },
  {
    time: '08h – 09h30',
    title: 'Bloco 01 · Da dúvida à busca',
    items: [
      'Principais tipos de estudo',
      'Estudos mais relevantes na decisão clínica',
      'Como estruturar boas perguntas',
      'Como encontrar a melhor evidência'
    ],
    kind: 'highlight'
  },
  {
    time: '09h30 – 10h',
    title: 'Intervalo',
    description: 'Um respiro para voltar ainda melhor.',
    kind: 'quiet'
  },
  {
    time: '10h – 11h30',
    title: 'Bloco 02 · Do artigo à prática',
    items: [
      'Como interpretar os resultados',
      'Quanto confiar na evidência',
      'Limitações que podem mudar a conclusão',
      'Aplicação ao paciente real'
    ],
    kind: 'highlight'
  },
  {
    time: '11h30 – 12h',
    title: 'Discussão e dúvidas',
    description: 'Tire suas perguntas com a gente.',
    kind: 'quiet'
  }
] as const;

export const offerIncludes = [
  { icon: 'play', title: '4 horas de imersão ao vivo', text: 'Do básico ao aplicado, em um formato direto e interativo.' },
  { icon: 'video', title: 'Acesso à gravação', text: 'Assista quando quiser, conforme o período definido para esta edição.' },
  { icon: 'users', title: 'Com Gabriel e Gianluca', text: 'Dois nutricionistas, pesquisadores e educadores em PBE.' },
  { icon: 'laptop', title: 'Imersão online', text: 'Participe de onde estiver, com uma manhã feita para a prática.' }
] as const;

export const closingFacts = [
  { icon: 'calendar', title: siteConfig.date, text: `${siteConfig.time} (sala aberta às ${siteConfig.roomOpens})` },
  { icon: 'laptop', title: 'Online', text: 'Ao vivo e com gravação' },
  { icon: 'shield', title: 'Pagamento seguro', text: 'Via checkout configurado' },
  { icon: 'users', title: 'Com Gabriel e Gianluca', text: 'Pesquisadores e educadores em PBE' }
] as const;

export const closingBenefits = [
  { icon: 'book', title: 'Interprete.', text: 'Educação em evidências para uma Nutrição mais real.' },
  { icon: 'sprout', title: 'Ciência com propósito', text: 'Menos teoria desconexa. Mais aplicação na prática.' },
  { icon: 'users', title: '+1.200 profissionais da área da saúde', text: 'já estudaram com o Interprete.' },
  { icon: 'bolt', title: 'Conhecimento que transforma', text: 'Da informação à decisão, com método e clareza.' }
] as const;
