// importando express
const express = require('express');

// importando rotas
const rotas = require('./roteador')

// criando servidor
const app = express();

app.use(express.json());

app.use(rotas)

// iniciando servidor
app.listen(3000);