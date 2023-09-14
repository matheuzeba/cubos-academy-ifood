const express = require('express');

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

let vezdoJogador = 0
const contador = (req,res) => {
    res.send(`${jogadores[vezdoJogador]}`)
    vezdoJogador++

    if(vezdoJogador === jogadores.length) vezdoJogador = 0;
}

const remover = (req, res) => {
    let {indice} = req.query;
    indice = Number(indice);
    if(indice >= jogadores.length || indice < 0) {
        res.send(`Não existe jogador no índice informado (${indice}) para ser removido.`)
    } else {
        res.send(`jogador ${jogadores[indice]} foi removido`)
        jogadores.splice(indice,1)
    }
}

app.get('/', contador);
app.get('/remover', remover);
app.get('/adicionar', (req, res) => {
    let {nome} = req.query;
    let {indice} = req.query;

    if(indice >= jogadores.length || indice < 0) {
        res.send(`O índice informado (${indice}) não existe no array. Novo jogador não foi adicionado.`)
    }

    else if(indice.length === 0) {
        jogadores.push(nome)
    }

    else {
        jogadores.splice(indice, 0, nome)
    }

    res.send(jogadores)
})


app.listen(8000)