function solucao (lista) {
  // criei uma arrow function com o metodo REDUCE
  const somaDaLista = lista.reduce (
    (acumulador, valorAtual) =>
      // Pegamos o acumulador e somamos com o valor atual
      acumulador + valorAtual
  );

  // criei uma variavel imutavel da media aritmetica
  // ela pega a soma de todos os elementos do array ('const somaDaLista')
  // e logo apos divide pelo tamanho do array
  const mediaAritmetica = somaDaLista / lista.length;

  // chamando a solucao
  return console.log (mediaAritmetica);
}
