/*
Faça um programa que calcula a taxa de juros que foi operada sobre um financiamento a partir do montate total que foi pago, do capital inicial que foi obtido como empréstimo e do tempo decorrido do financiamento.

i = M^1/n / C - 1;

onde:

i: taxa de juros
M: montante
C: capital inicial (valor de dinheiro inicial)
n: número de meses

EX:
Digamos que pegou emprestado R$ 60.000,00 e após 24 meses tenha pago R$ 90.000,00 para encerrar sua dívida. Qual a taxa de juros mensal desse emprestimo?

Do enunciado acima temos:

M: 90000
C: 60000
n: 24

*/

//  variaveis para a formula
const montante = 90000;
const capitalInicial = 60000;
const meses = 24;

//  formula de calcular a taxa de juros
const i = ((Math.pow(montante/capitalInicial, 1/meses) - 1) * 100).toFixed(3);

console.log(`O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${i}%, pois após ${meses} meses você teve que pagar ${montante} reais.`)