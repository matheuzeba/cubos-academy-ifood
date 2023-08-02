const enderecos = [
    { cep: parseInt('00111222'), rua: "Rua dos Artistas" },
    { cep: parseInt('00111333'), rua: "Rua Augusta" },
    { cep: parseInt('00222444'), rua: "Avenida Paralela" },
    { cep: parseInt('11222333'), rua: "Rua Carlos Gomes" },
];

const resposta = (array, cep) => {
    const acharcep = array.find(array => array.cep === parseInt(cep))
    return console.log(acharcep.rua);
}

resposta(enderecos, '00222444')
