function solucao (precos) {
    
  // constante que tem metodo reduce para somar os elementos do array
  const soma = precos.reduce (
    (acumulador, ValorAtual) => acumulador + ValorAtual
  );

  // caso o numero seja maior ou igual a 3
  if (precos.length >= 3) {
    // pegue o menor numero
    const menorNumero = precos.reduce ((valorAnterior, valorAtual) => {
      let menorNumero = valorAnterior;

      if (valorAnterior > valorAtual) {
        menorNumero = valorAtual;
      }

      return menorNumero;
    });

    // faca o calculo do desconto
    const desconto = menorNumero * 0.5;

    // subtraia o desconto da soma total
    console.log (soma - desconto);
  } else {
    // caso nao seja
    // imprima a soma
    console.log (soma);
  }
}
