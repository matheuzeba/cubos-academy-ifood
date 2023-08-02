const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];
let novoArray = [];

const converterLetra = frutas.map(palavra => {
        const primeiraLetra = palavra.charAt(0).toUpperCase();
        const resto = palavra.slice(1).toLowerCase();
        
        return  primeiraLetra + resto;
})

for(let i = 0; i< converterLetra.length; i++) {
    novoArray.push (`${i} - ${converterLetra[i]}`)
}

console.log(novoArray)
