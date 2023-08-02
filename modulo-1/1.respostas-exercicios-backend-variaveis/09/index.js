/* 

Faça um programa que, a partir do número de lados de um polígono, imprima na tela a soma dos seus ângulos internos, conforme a fórmula abaixo:

Formula:
S = (n-2)*180

Onde:

S: soma dos ângulos internos do polígono
n: número de lados do polígono

Em seguida, calcule quanto vale cada um desses ângulos, caso eles sejam todos iguais, utilizando a fórmula abaixo:

Formula:
a = S/n

Sendo:

a: o valor de cada ângulo em graus

*/

//  variavel numero de lados
const numeroDeLados = 6;

//  variavel da formula S
const somaDosAngulosInternos = (numeroDeLados-2) * 180;

//  variavel da formula A
const valorDeCadaAngulo = somaDosAngulosInternos/numeroDeLados;

console.log(somaDosAngulosInternos);
console.log(valorDeCadaAngulo);