//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;


const converterParaReal = valorDoProduto / 100;
let calculoDoRestante = converterParaReal - valorPago;
const calculoDaParcela = Math.round((calculoDoRestante  / quantidadeDoParcelamento) / 10);
calculoDoRestante = Math.round(calculoDoRestante / calculoDaParcela);

if(valorPago !== valorDoProduto) {
    console.log(`Restam ${calculoDaParcela} parcelas de R$${calculoDoRestante}`);
}

else {
    console.log("Todas as suas parcelas foram pagas!");
}


