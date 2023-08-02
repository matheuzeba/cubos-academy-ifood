const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];


// letra A
function reverso(array) {
    const reverso = array.reverse()
    console.log(reverso.join(', '))
}

// letra B
function removerEAdicionar(array) {
    array.reverse()
    array.splice(0, 1)
    array.splice(array.length, 1, 'Melão')
    console.log(array)
}


reverso(frutas)
removerEAdicionar(frutas)