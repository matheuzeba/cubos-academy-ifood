const express = require('express');

const imoveis = require('./dados/imoveis');
const {imoveisHome} = require('./roteador')
const {imoveisId} = require('./roteador')
const {get} = require('./controladores/imoveis');
const {getPorId} = require('./controladores/imoveis');

const app = express();

app.get(imoveisHome, get);
app.get(imoveisId, getPorId);

app.listen(8000);


