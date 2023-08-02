const numeros = [0, 122, 4, 6, 7, 8, 44]

const resposta = (array) => {
    let par = (numero) => (numero % 2 === 0);

    if(array.every(par)) {
        return console.log('array é valido');
    }
    else {
        return console.log('array invalido');
    }
}

resposta(numeros)
