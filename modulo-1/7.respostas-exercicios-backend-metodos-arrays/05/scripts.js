const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

const agendarPaciente = function(array, paciente) {
    array.push(paciente)
    console.log(array.join(', '))
}

const atenderPaciente = function(array) {
    array.shift()
    console.log(array.join(', '))
}

const cancelarAtendimento = function(array, nome) {
    let indexDoPaciente = array.indexOf(nome)
    array.splice(indexDoPaciente, 1);
    console.log(array.join(', '))
}

agendarPaciente(pacientes, 'paciente-agendado')
atenderPaciente(pacientes)
cancelarAtendimento(pacientes, 'Maria')
