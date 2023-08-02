const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const resposta = () => {
    const filtrarCidades = cidades.filter(cidades => cidades.length <= 8);
    return console.log(filtrarCidades.join(', '));
}

resposta()