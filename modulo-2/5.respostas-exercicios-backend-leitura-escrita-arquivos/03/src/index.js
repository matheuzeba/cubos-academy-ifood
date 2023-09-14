const express = require('express');
const rotas = require('./rotas/enderecos');

const app = express();
app.use(express.json());
app.use(rotas)

app.listen(3000, console.log('servidor inicializado'));