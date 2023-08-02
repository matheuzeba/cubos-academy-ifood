const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];

const comecacomA = nomes.filter(nome => nome.charAt(0) === 'a' || nome.charAt(0) === 'A');

console.log(comecacomA)