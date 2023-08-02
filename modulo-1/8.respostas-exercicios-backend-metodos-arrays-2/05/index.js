const usuarios = [
    {
      nome: "André",
      idade: 29,
      habilitado: false,
    },
    {
      nome: "Marcos",
      idade: 70,
      habilitado: true,
    },
    {
      nome: "Ana",
      idade: 35,
      habilitado: true,
    },
    {
      nome: "Vinícius",
      idade: 44,
      habilitado: true,
    },
    {
      nome: "Carlos",
      idade: 17,
      habilitado: false,
    },
    {
      nome: "Maria",
      idade: 19,
      habilitado: true,
    },
];

const resposta = () => {
    const filtrarIdade = usuarios.filter(usuarios => usuarios.idade >= 18 && usuarios.idade <= 65)
    const checarhabilitacao = filtrarIdade.every(filtrarIdade => filtrarIdade.habilitado)
    
    if(!checarhabilitacao) {
        console.log('todos precisam estar habilitados');
    }
    else {
        console.log('todos estao habilitados :)')
    }
}

resposta()