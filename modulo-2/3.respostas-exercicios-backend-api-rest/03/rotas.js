const express = require('express');

const biblioteca = require('./controladores/biblioteca');

const rotas = express();

rotas.get('/livros', biblioteca.consultarColecao);
rotas.get('/:id', biblioteca.consultarLivro);
rotas.post('/livros', biblioteca.adicionarLivro);
rotas.put('/livros/:id', biblioteca.atualizarLivros);
rotas.patch('/livros/:id', biblioteca.atualizarAlgoNoLivro);
rotas.delete('/livros/:id', biblioteca.deletarLivro);

module.exports = rotas;