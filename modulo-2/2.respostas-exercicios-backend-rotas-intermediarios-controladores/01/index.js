const express = require('express');
const {somar, dividir, subtrair, multiplicar} = require('./controllers/calculos')


const app = express();

app.get('/somar', somar);
app.get('/subtrair', subtrair);
app.get('/multiplicar', multiplicar);
app.get('/dividir', dividir);

app.listen(3000);