const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function grupoCarro (array, posicao) {
    const pegarCarros = array.slice(posicao,posicao + 3)
    console.log(pegarCarros.join(" - "))
}

grupoCarro(nomes, posicao)
