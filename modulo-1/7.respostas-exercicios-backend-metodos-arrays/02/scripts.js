const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

function grupo(array, tamanhoDoGrupo) {
    let grupo1 = array.slice(0,tamanhoDoGrupo)
    grupo1 = array.join(', ')
    let resto = array.slice(tamanhoDoGrupo)
    resto = resto.join(', ')

    return console.log(`Grupo 1: ${grupo1}\nGrupo 2: ${resto}`)
}

grupo(nomes, tamanhoDoGrupo)