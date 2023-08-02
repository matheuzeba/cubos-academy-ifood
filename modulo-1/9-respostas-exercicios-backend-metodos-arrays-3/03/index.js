const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const maiorNumero = numeros.reduce((numeroAnterior, numeroAtual) => {
    let maior = numeroAnterior;

    if(numeroAnterior < numeroAtual) {
        maior = numeroAtual;
    }

    return maior
})

console.log(maiorNumero)