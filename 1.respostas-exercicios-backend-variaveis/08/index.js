/* 
Faça um programa que, a partir do raio de um círculo, calcula o comprimento (C) e a área (A) deste círculo. Esses valores são obtidos pelas fórmulas:

c=2piR
a=piR^2

Onde:

C: comprimento do círculo
A: área do círculo
R: raio do círculo

sendo,

R=1

*/

//  variavel do raio do circulo
const raioDoCirculo = 1;

//  formula comprimento do circulo
const comprimentoDoCirculo = (2*Math.PI*raioDoCirculo).toFixed(1);

//  formula area do circulo
const areaDoCirculo = (Math.PI*Math.pow(raioDoCirculo, 2)).toFixed(2);

console.log(comprimentoDoCirculo);
console.log(areaDoCirculo);