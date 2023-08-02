/*

Suponha que você está trabalhando no Ministério da Saúde e está trabalhando num simulador de casos de COVID-19. Seu trabalho é fazer um programa que calcula qual será o total de pessoas infectadas a partir de 3 variáveis.

Formula:

p =  po * x^t/7

Po = a população incial de pessoas infectadas
X = quantidade de pessoas para as quais um paciente infectado pode transmitir
t = tempo percorrido

Ou seja, se:

Po = 1000
x = 4
t = 100

O seu sistema ira calcular quantas pessoas estarão infectadas após 100 dias, dado que inicialmente havia 1000 pessoas infectadas, cada uma delas transmitindo para outras 4 pessoas.

*/

//  Variaveis imutaveis para formula
const populacaoInicial = 1000;
const quantidadePessoas = 4;
const tempoPercorrido = 100;

// Formula
const pessoasInfectadas = Math.round(populacaoInicial * Math.pow(quantidadePessoas, tempoPercorrido/7));

console.log(pessoasInfectadas);