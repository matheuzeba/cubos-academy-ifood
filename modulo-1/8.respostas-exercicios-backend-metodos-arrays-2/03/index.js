const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const resposta = (array) => {
    let temOuNao = (elemento) => (elemento === "cerveja" || elemento === "vodka")
    
    if(array.some(temOuNao)) {
        return console.log('revise sua lista, joão. possui bebida com venda proibida!');
    }
    else {
        return console.log('tudo tranquilo, Joao.');
    }
}

resposta(palavras)