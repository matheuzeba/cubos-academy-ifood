const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];

// a) Ordenar o array abaixo em ordem crescente.
numeros.sort((a, b) => {
    return  a - b;
})

console.log(numeros);

console.log(' ');
//b) Ordenar o array abaixo em ordem decrescente.

numeros.sort((a,b) => {
    return b - a;
})

console.log(numeros);
console.log(' ');

//c) Ordenar o array abaixo em ordem crescente, com base nos valores dos pontos de código Unicode.
numeros.sort();
console.log(numeros);

//d) Ordenar o array abaixo em ordem alfabética.
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

frutas.sort((a,b) => {
    return a.localeCompare(b);
})

console.log(frutas);

//e) Ordenar o array abaixo em ordem alfabética decrescente.
frutas.sort((a,b) => {
    return b.localeCompare(a);
})

console.log(frutas);

//f) Ordenar o array abaixo em ordem crescente, de acordo com a quantidade de caracters (do que tem menos caracteres, para o que tem mais).

frutas.sort((a,b) => {
    return a.length - b.length
})

console.log(frutas)
