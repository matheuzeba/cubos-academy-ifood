const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};


function corrigirProva (prova) {
    let correta = 0;

    for(let i = 0; i < prova.questoes.length; i++) {
        if(prova.questoes[i].resposta === prova.questoes[i].correta) {
            correta += 1;
        }
    }

    return `O aluno(a) ${prova.aluno} acertou ${correta} questões e obteve nota ${correta * 2}`
}

console.log(corrigirProva(prova))
