const nomeArquivo = 'Foto da Familia.pdf';

const validarArquivo = function(nomeArquivo) {
    if(nomeArquivo.includes('.jpg') || nomeArquivo.includes('.jpeg') || nomeArquivo.includes('.gif') || nomeArquivo.includes('.png')) {
        return 'Arquivo válido';
    }
    else {
        return 'Arquivo inválido';
    }
}

console.log(validarArquivo(nomeArquivo))
