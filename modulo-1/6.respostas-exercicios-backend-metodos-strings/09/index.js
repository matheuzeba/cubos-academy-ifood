const nome = 'Guido Cerqueira';

const nickname = function (nome) {
    let tirarEspaco = nome.replaceAll(' ', '');
    let removerUltimasLetras = '';
    
    if(nome.length > 13) {
        removerUltimasLetras = tirarEspaco.slice(0, nome.length - 3);
        return console.log(`@${removerUltimasLetras.toLowerCase()}`);
    }
    
    else {
        return console.log(`@${tirarEspaco.toLowerCase()}`);
    }
}

nickname(nome)