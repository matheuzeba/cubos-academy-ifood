//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

let valorFinal;
let desconto;

switch (tipoDePagamento) {
    case "credito":
        desconto = 0.05;
        valorFinal = (valorDoProduto - (valorDoProduto * desconto)) /1000;
        console.log(`Valor a ser pago: R$${valorFinal}0`);
        break;

    case "cheque":
        desconto = 0.03;
        valorFinal = (valorDoProduto - (valorDoProduto * desconto)) /1000;
        console.log(`Valor a ser pago: R$${valorFinal}0`);
        break;

    default :
        desconto = 0.10;
        valorFinal = (valorDoProduto - (valorDoProduto * desconto)) /1000;
        console.log(`Valor a ser pago: R$${valorFinal}0`);
        break;
}
