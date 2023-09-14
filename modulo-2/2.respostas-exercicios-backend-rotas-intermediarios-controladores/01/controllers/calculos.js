const somar = (req, res) => {
    const {num1} = req.query;
    const {num2} = req.query;
    const calculo = (Number(num1) + Number(num2));
    res.send('a soma deu: ' + calculo);
}

const subtrair = (req, res) => {
    const {num1} = req.query;
    const {num2} = req.query;
    const calculo = (Number(num1) - Number(num2));
    res.send('a subtração deu: ' + calculo);
}

const multiplicar = (req, res) => {
    const {num1} = req.query;
    const {num2} = req.query;
    const calculo = (Number(num1) * Number(num2));
    res.send('a multiplicação deu: ' + calculo);
}

const dividir = (req, res) => {
    const {num1} = req.query;
    const {num2} = req.query;
    const calculo = (Number(num1) / Number(num2));
    res.send('a divisão deu: ' + calculo);
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}