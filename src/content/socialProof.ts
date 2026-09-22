export type SocialProofItem = {
  id: string;
  approved: boolean;
  mvpPlaceholder: boolean;
  quote: string;
  name: string;
  role: string;
  source: string;
};

// Conteúdo provisório autorizado para o MVP. Substitua por falas reais,
// contextualizadas e autorizadas antes de tratar os itens como prova social final.
export const socialProof: SocialProofItem[] = [
  {
    id: 'proof-01',
    approved: false,
    mvpPlaceholder: true,
    quote: 'O Interprete mudou completamente a forma como eu leio artigos. Hoje me sinto muito mais segura nas minhas decisões clínicas.',
    name: 'Mariana L.',
    role: 'Nutricionista clínica',
    source: 'Placeholder visual do MVP'
  },
  {
    id: 'proof-02',
    approved: false,
    mvpPlaceholder: true,
    quote: 'Conseguiram tornar um assunto complexo em algo claro e aplicável. É um ensino raro na área da Nutrição.',
    name: 'Rafael M.',
    role: 'Nutricionista esportivo',
    source: 'Placeholder visual do MVP'
  },
  {
    id: 'proof-03',
    approved: false,
    mvpPlaceholder: true,
    quote: 'As aulas são muito bem estruturadas e sempre conectadas com a prática real. Recomendo para qualquer nutricionista que quer evoluir na prática baseada em evidências.',
    name: 'Larissa T.',
    role: 'Nutricionista clínica',
    source: 'Placeholder visual do MVP'
  }
];

export const socialProofMetrics = [
  { icon: 'users', value: '+1.200', label: 'profissionais já estudaram com o Interprete.' },
  { icon: 'check', value: 'Avaliação média de 4,9/5', label: 'nas últimas turmas.' },
  { icon: 'video', value: 'Alunos em todo o Brasil', label: 'da gravação à prática clínica.' }
] as const;
