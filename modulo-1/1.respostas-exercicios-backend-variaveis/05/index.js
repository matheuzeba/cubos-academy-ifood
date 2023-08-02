/* 
Calcule a distância entre dois pontos utilizando a seguinte fórmula, considerando que (x1, y1) e (x2, y2) sejam dois pontos em um plano:

x1	x2	y1	y2
1	1	1	4

formula:
d = Math.sqrt(x²-x¹)² + (y² - y¹)²
*/

// variavel imutavel dos pontos
const pontoX2 = 1;
const pontoX1 = 1;
const pontoY2 = 4;
const pontoY1 = 1;

// variavel imutavel da formula
const distancia = Math.sqrt( Math.pow((pontoX2 - pontoX1), 2) + Math.pow((pontoY2 - pontoY1), 2) );

console.log(distancia)