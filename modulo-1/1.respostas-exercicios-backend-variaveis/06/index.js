/*
Calcular velocidade media

Formula: 

velocidade = distanciaPercorrida/tempo;

a velocidade deve estar em km/h

formular conversao:

velocidade * 3.6

Considere:

distPercorrida: 500 m
tempo: 10 s

*/

//  variaveis imutaveis para o calculo
const distanciaPercorrida = 500;
const tempo = 10;

//  formula do calculo de velocidade, no final é multiplicado por 3.6 para converter em km
const velocidade = (distanciaPercorrida/tempo) * 3.6;

console.log(velocidade)