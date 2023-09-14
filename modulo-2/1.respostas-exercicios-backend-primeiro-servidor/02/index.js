const express = require('express');
const server = express();

let minutos = 0;
let segundos = 0;

const contagem = () => {
    segundos++
    if(segundos === 60) {
        segundos = 0;
        minutos++
    }
} 

const comecar = () => {
    idDoSetInterval = setInterval(contagem, 1000);
}

const parar = () => {
    clearInterval(idDoSetInterval);
}

server.get('/', (req,res) => {
    minutos = Math.floor(minutos).toString().padStart(2,0);
    segundos = Math.floor(segundos).toString().padStart(2,0);
    res.send(`Tempo atual do cronômetro: ${minutos} minutos e ${segundos} segundos`);
})

server.get('/iniciar',(req,res) => {
    res.send('Cronômetro Iniciado');
    comecar();
})

server.get('/pausar', (req, res) => {
    res.send('Cronômetro pausado!');
    parar();
})

server.get('/continuar', (req, res) => {
    res.send('Cronômetro continuando!');
    comecar();
})


server.get('/zerar', (req,res) => {
    res.send('Cronômetro zerado!');
    segundos = 0;
    minutos = 0;
})

server.listen(3000)