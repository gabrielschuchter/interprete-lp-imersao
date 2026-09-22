# Imersão Interprete — Do artigo à prática

Landing page editorial, estática e mobile-first para a imersão online do Interprete.

## Desenvolvimento

```bash
npm install
npm run dev
```

Configure as variáveis públicas de checkout em `.env.local` a partir de `.env.example`:

- `NEXT_PUBLIC_APPS_SCRIPT_URL` — endpoint do Google Apps Script que recebe o pré-checkout.
- `NEXT_PUBLIC_CHECKOUT_URL` — URL do checkout após a tentativa de tracking.

O tracking usa timeout curto e é fail-open: uma falha do Apps Script não impede o avanço quando o checkout está configurado.

## Verificações

```bash
npm run lint
npm run typecheck
npm run build
```
