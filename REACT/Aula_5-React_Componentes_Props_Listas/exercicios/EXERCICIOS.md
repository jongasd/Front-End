# Exercícios — Aula 5 (componentes, props e listas)

Ponto de partida: `exercicios/techfood-react` = o TechFood **já com o live coding da Aula 5** (descrição, curtir, limite de 10, total em R$ e Limpar continuam).
Rode `npm install` e `npm run dev`. Procure por `TODO` (Ctrl + Shift + F no VS Code).
O CSS dos exercícios (selo Picante, preço riscado, "Em breve!") já está pronto no final do `App.css`.

| Nº | Arquivo(s) | O que fazer |
|---|---|---|
| E1 | cardapio.js | Adicionar uma bebida nova (id 6) com todos os campos, inclusive `descricao` |
| E2 | cardapio.js, CardPrato.jsx, SecaoCardapio.jsx | Selo "Picante" com `&&` (campo `picante: true` em um prato principal) |
| E3 | cardapio.js, CardPrato.jsx, SecaoCardapio.jsx | Ternário: com `precoPromocional`, mostrar o preço antigo riscado e o novo; o total do pedido usa o preço promocional |
| E4 | SecaoCardapio.jsx | Mostrar a quantidade de pratos no título: "Sobremesa (2)" |
| D1 | SecaoCardapio.jsx, App.jsx | Desafio: seção sem pratos mostra "Em breve!" (teste com "Entrada") |

## Como testar
1. Seção Bebida com 2 cards.
2. Um prato principal com o selo Picante.
3. Pudim: ~~R$ 15,00~~ R$ 12,00. Adicionar 1 Pudim soma R$ 12,00 no total.
4. Títulos: "Prato principal (2)", "Sobremesa (2)", "Bebida (2)".
5. Desafio: "Entrada (0)" com o texto "Em breve!".

## Entrega
Prints da tela funcionando + o código dos arquivos alterados, em **1 PDF** no Classroom (AULA05_SEUNOME.pdf).
