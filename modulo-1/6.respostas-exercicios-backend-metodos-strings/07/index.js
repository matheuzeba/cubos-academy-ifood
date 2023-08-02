const email = "aluno@cubos.academy";

const checarSePossuiPontoNoFinal = email.slice(email.length - 1, email.length + 1) === '.'

if (!email.includes('.') || !email.includes('@') || email[0] === '.' || checarSePossuiPontoNoFinal) {
    console.log('E-mail inválido')
}

else {
    console.log('E-mail válido')
}
