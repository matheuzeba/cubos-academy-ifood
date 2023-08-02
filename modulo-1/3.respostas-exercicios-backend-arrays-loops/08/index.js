const numeros = [3, 24, 1, 8, 11, 7, 15];


let guardar = numeros[0];
for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] > guardar)
    guardar = numeros[i]
}

console.log(guardar)