const texto = "Aprenda programar do zero na Cubos Academy";

const urlAmigavel = function(texto) {
    const url = texto.toLowerCase().replaceAll(' ', '-')
    return url
}

console.log(urlAmigavel(texto))