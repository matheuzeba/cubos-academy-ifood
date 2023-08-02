/* 
Se um capital de R$ 1000,00 é aplicado durante 5 meses no sistema de juros compostos sob uma taxa mensal fixa de 12,5%, qual será o valor do montante?

Formula:

M = C(1+i)^t

Sendo:

C = 1000
i = 0,125
t = 5

Onde,

M: montante (o capital acrescido dos juros, ou seja, Capital + Juros)
C: capital (valor inicial de uma dívida, empréstimo ou investimento)
i: taxa fixa de juros (expressa em decimal na fórmula, ou seja, o valor da taxa dividido por 100)
t: período de tempo

*/

//  variaveis imutaveis com base na formula
const capital = 1000;
const taxa = 0.125;
const periodoDeTempo = 5;

//  formula de montante. Math.round para arredondar o resultado e Math.pow é o expoente
const montante = Math.round(capital* Math.pow((1+taxa), periodoDeTempo));

console.log(montante)