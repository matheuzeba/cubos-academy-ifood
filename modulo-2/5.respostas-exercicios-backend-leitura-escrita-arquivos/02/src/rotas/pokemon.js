const express = require('express');
const pokemon = require('../controladores/pokemon');

const rotas = express();

rotas.get('/pokemon' , pokemon.listarPokemon);
rotas.get('/pokemon/:pesquisar' , pokemon.detalharOPokemonNum);

module.exports = rotas;