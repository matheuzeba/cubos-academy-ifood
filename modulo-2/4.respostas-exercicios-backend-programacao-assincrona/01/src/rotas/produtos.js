const express = require('express');
const produtos = require('../controladores/produtos')

const rotas = express();

rotas.get('/produtos', produtos.listarProdutos);
rotas.get('/produtos/:idProduto', produtos.listarProdutoId);
rotas.get('/produtos/:idProduto/frete/:cep', produtos.frete);

module.exports = rotas