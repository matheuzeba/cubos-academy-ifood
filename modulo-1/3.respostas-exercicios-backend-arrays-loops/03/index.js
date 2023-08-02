const numeros = [54, 22, 14, 87, 10, 284];

let possui = 0;
let localDoNumero = 0;
for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] === 10) {
        numero = numeros[i];
        possui += 1;
        console.log(numeros.indexOf(numero));
    }
}

if (!possui) {
    console.log('-1')
}