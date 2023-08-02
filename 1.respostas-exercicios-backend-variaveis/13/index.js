/*
Portanto, para calcular a área total de um cilindro, é necessário somar a área de cada uma das suas duas bases, com a sua área lateral. A fórmula da área total é a seguinte:

Formula:
At = 2piR(R+h)

Sendo:

At: área total do cilindro
R: raio da base
H: altura do cilindro

Para um cilindro com:

R = 3
H = 1

*/
const raioDaBase = 3;
const alturaCilindro = 1;
const areaTotalCilindo = 2 * raioDaBase * (raioDaBase+alturaCilindro);

console.log(areaTotalCilindo)