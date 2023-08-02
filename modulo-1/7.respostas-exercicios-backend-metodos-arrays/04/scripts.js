const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

const agendar = function(array, nome) {
    array.push(nome)
    console.log(array)
}

const atender = function(array) {
    array.shift()
    console.log(array)
}

agendar(pacientes, 'matheus')
atender(pacientes)

//resposta
console.log(pacientes.join(', '))