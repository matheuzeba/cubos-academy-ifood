const express = require('express');
const rotas = require('./rotas/pokemon');

const app = express();

app.use(express.json());
app.use(rotas)


app.listen(8000);