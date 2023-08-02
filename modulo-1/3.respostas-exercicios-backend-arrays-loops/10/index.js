const numeros = [8, 11, 4, 1];

// seu codigo aqui
let maiorNumero = numeros[0];
let menorNumero = numeros[0];

for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    } 
    else if (numeros[i] < menorNumero) {
        menorNumero = numeros[i];
    }
}

const diferenca = console.log(`a diferença é de: ${maiorNumero - menorNumero}`);