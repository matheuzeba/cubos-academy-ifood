function solucao (lista) {
  // criei uma arrow function com o metodo REDUCE
  const soma = lista.reduce (
    (acumulador, valorAtual) =>
      // Pegamos o acumulador e somamos com o valor atual
      acumulador + valorAtual
  );

  // apos isso e so retornar a soma do array
  return console.log (soma);
}
