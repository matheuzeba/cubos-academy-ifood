/* 
De acordo com o aplicativo do tempo, agora está 73 ºF na sua cidade, se convertêssemos isso para Celsius, qual seria o resultado?


Formula de conversão:

C = (f-32) * 5/9
*/

// Criado variavel imutavel Fahrenheit
const fahrenheit = 73;

// Criado variavel imutavel Celsius
const celsius = Math.round((fahrenheit-32) * 5/9); //utilizado Math.round para arredondar o valor do resultado

console.log(celsius);