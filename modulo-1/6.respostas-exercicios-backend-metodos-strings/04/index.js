let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";


function reformarTudo (identificador, nome, email) {

    function funcaoIdentificador () {
        if(identificador.length < 6) {
            const novoIdentificador = (identificador.padStart(6, '0'));
            return novoIdentificador;
        }
        else {
            return identificador;
        }
    }

    function funcaoNome () {
        let cortarNome = nome.split(' ');
        let novoNome = '';

        for(let i = 0; i < cortarNome.length; i++) {
            novoNome += cortarNome[i][0].toUpperCase() + cortarNome[i].slice(1) + ' ';
        }
        return novoNome;
    }

    function funcaoEmail () {
        const novoEmail = email.trim();
        return novoEmail
    }
    
    return `${funcaoIdentificador()}\n${funcaoNome()}\n${funcaoEmail()}`
}

console.log(reformarTudo(identificador, nome, email))