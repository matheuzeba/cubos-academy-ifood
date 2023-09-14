const express = require('express');
const alunos = require('./controladores/alunos');
const validarSenha = require('./intermediarios')

const rotas = express();

rotas.use(validarSenha)

rotas.get('/alunos', alunos.listarAlunos);
rotas.get('/alunos/:id', alunos.listarAlunoId);
rotas.post('/alunos', alunos.cadastrarAluno);
rotas.delete('/alunos/:id', alunos.excluirAluno);



module.exports =  rotas