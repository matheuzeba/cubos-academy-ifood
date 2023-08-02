/* 
Para calcular o volume de uma esfera, utilizamos a seguinte fórmula:

v = 4/3 * pi * r^3

onde:

v: volume da esfera
d: diâmetro da esfera

Faça um programa que calcula o volume de uma esfera a partir de seu DIÂMETRO. Lembre-se que o DIÂMETRO de uma esfera é sempre o dobro do raio.

Exemplo:
Considerando uma esfera com raio 3

*/

//  variaveis para a formula
const diametro = 6;

//  formula do raio tendo em vista diametro
const raio = diametro / 2;

//  formula do volume da esfera
const volumeDaEsfera = 4/3 * Math.pow(raio, 3);

console.log(volumeDaEsfera);