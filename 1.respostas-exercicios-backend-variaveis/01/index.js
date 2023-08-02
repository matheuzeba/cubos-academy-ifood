/* 
O seu programa deverá imprimir o IMC de alguem com base no input recebido.

EX:
Se minha altura é 1,79m e meu peso, 76kg, qual é meu IMC?

Sendo:

P = 76
A = 1.79

IMC = 23.7
*/

// criado variavel imultável p, a
const p = 76;
const a = 1.79;

// criado formula imultável do IMC
const imc = p / Math.pow(a, 2); //Math.pow é usado para criar e calcular potências 
const resultado = imc.toFixed(1) //Math.toFixed é usado para limitar a quantidade de números após o . decimal

// printando resultado na tela
console.log(resultado);
