const express = require('express');
const enderecos = require('../controladores/enderecos');

const rota = express();

rota.get('/enderecos/:cep', enderecos.listarEnderecos);

module.exports = rota