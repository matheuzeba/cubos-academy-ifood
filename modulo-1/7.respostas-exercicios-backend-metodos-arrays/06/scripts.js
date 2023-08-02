const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

const encontrarPet = function(pet) {
    let dono = '';

    for(let item of usuarios) {
        if(item.pets.includes(pet)) {
            dono = item.nome;
        }
    }

    if(!dono) { 
        console.log(`Que pena ${pet}, não encontramos seu dono(a)`)
    }
    else {
        return console.log(`O dono(a) do(a) ${pet} é o(a) ${dono}`)
    }

}

encontrarPet('Max')
