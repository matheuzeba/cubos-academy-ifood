const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const checarLength = cidades.reduce((contador, valorAtual) => {
    let maiorCidade = contador;

    if(maiorCidade.length < valorAtual.length) {
        maiorCidade = valorAtual
    }

    return maiorCidade
})

console.log(checarLength)
