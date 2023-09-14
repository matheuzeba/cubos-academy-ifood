const express = require('express');
const server = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let nomeDoJogador = 0;

server.get('/', (req, res) => {
    res.send(`É a vez de ${jogadores[nomeDoJogador]} jogar!`);
    nomeDoJogador++;
    if (nomeDoJogador === jogadores.length) {
        nomeDoJogador = 0;
    }
});

server.listen(3000);
