const palavras = ["livro", "caneta", "sol", "carro", "orelha"]

const palavraEMaiorQueCinco = (array) => {
    let tamanhoPalavra = (palavra) => (palavra.length > 5)
    
    if(array.some(tamanhoPalavra)) {
        console.log('existe palavra inválida')
    }
    
    else {
        console.log('todas as palavras sao validas!');
    }    
}

palavraEMaiorQueCinco(palavras)
