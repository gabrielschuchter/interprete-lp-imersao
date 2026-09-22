import { siteConfig } from '@/src/config/site';

export type FAQItem = {
  question: string;
  answer: string;
};

export const faqItems: readonly FAQItem[] = [
  {
    question: 'Preciso já entender de estatística para acompanhar?',
    answer: 'Não. A imersão parte das perguntas e mostra como interpretar resultados com clareza. Você não precisa chegar dominando estatística.'
  },
  {
    question: 'A imersão é para quem está começando?',
    answer: 'Sim. O percurso foi organizado para quem quer ganhar segurança ao buscar, interpretar e aplicar evidências, inclusive se ainda está construindo essa base.'
  },
  {
    question: 'Já sei pesquisar artigos. Ainda faz sentido?',
    answer: 'Sim. Encontrar um artigo é só uma etapa. A manhã percorre também interpretação, julgamento e aplicação ao paciente real.'
  },
  {
    question: 'É apenas para nutricionistas?',
    answer: 'A edição é conduzida por profissionais de Nutrição e foi pensada a partir de situações da prática clínica nutricional. A elegibilidade final deve seguir as condições do checkout.'
  },
  {
    question: 'Como será o formato? É ao vivo?',
    answer: `Sim. Será uma imersão ${siteConfig.format}, ao vivo, das ${siteConfig.time}, com abertura da sala às ${siteConfig.roomOpens}.`
  },
  {
    question: 'E se eu não conseguir assistir no horário?',
    answer: `${siteConfig.recording}. O período exato de acesso deve ser informado nas condições finais da inscrição.`
  },
  {
    question: 'Por quanto tempo terei acesso à gravação?',
    answer: 'O período de acesso ainda não está definido nesta configuração. Ele deve ser confirmado antes da publicação das condições do checkout.'
  },
  {
    question: 'Terei certificado de participação?',
    answer: 'A emissão de certificado ainda não está definida nesta configuração. Essa informação deve ser confirmada antes da inscrição.'
  },
  {
    question: 'Como faço para me inscrever?',
    answer: 'Clique em qualquer botão de inscrição, preencha nome, e-mail e WhatsApp e continue para o pagamento pelo checkout configurado.'
  },
  {
    question: 'Posso cancelar a minha inscrição?',
    answer: 'A política de cancelamento ainda não está definida nesta configuração. Consulte as condições exibidas no checkout antes de concluir a inscrição.'
  }
] as const;
