/*

Você deseja comprar um tênis novo, porém, está com o dinheiro do mês contado e te sobrará somente R$ 80,00 para comprá-lo.

O tênis custa R$ 129,99 porém um amigo seu trabalha na loja e consegue te dar um cupom de desconto, a única coisa que ele precisa saber é quanto por cento de desconto você necessita.

Crie um programa para calcular a porcentagem necessária de desconto para você conseguir comprar o tênis, utilizando a regra de três.


Cálculo da regra de três (calculo para porcentagem do desconto):

d = (c*b) / a

Calculo para encontrar o valor do desconto

*/

//criando variaveis  imutaveis
const meuDinheiro = 80;
const valorTotalDoProduto = 129.99;
const valorDoDesconto = valorTotalDoProduto - meuDinheiro;

// criando variaveis  mutavel com calculo da regra de 3
let porcentagemDoDesconto = (valorDoDesconto * 100) / valorTotalDoProduto;

// a variável é mutavel para poder limitar o numero de decimais
porcentagemDoDesconto = porcentagemDoDesconto.toFixed(1);

console.log(porcentagemDoDesconto)