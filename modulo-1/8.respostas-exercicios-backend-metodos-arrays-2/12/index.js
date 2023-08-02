const pessoas = [
    {
      nome: "Antonio",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Maria",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Ana",
      idade: 21,
      profissao: "Programador",
    },
    {
      nome: "Beatriz",
      idade: 20,
      profissao: "Programador",
    },
    {
      nome: "José",
      idade: 32,
      profissao: "Jornalista",
    },
    {
      nome: "Marcos",
      idade: 30,
      profissao: "Programador",
    },
];
const resposta = () => {
    //filtrar programadores
    const programadores = console.log(pessoas.filter(pessoa => pessoa.profissao === 'Programador' && pessoa.idade > 20));
    
    //filtrar jornalistas
    const jornalistas = console.log(pessoas.filter(pessoa => pessoa.profissao === 'Jornalista' && pessoa.idade > 30));
    
    //filtrar ibge
    const ibge = console.log(pessoas.filter(pessoa => pessoa.idade <= 29));
    
    return (`${programadores}\n${jornalistas}\n${ibge}`);
}

resposta()

