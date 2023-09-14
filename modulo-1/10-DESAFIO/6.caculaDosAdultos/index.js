function solucao (lista) {
  // filtrei a lista para pegar apenas os elementos maiores que 18
  const arrayFiltrado = lista.filter (el => el >= 18);

  // caso o arrayFiltrado esteja vazio
  if (arrayFiltrado.length === 0) {
    // imprima isso na tela
    return console.log ('CRESCA E APARECA');
  } else {
    // caso nao esteja vazio
    // usar o metodo reduce no arrayFiltrado
    const menorNumero = arrayFiltrado.reduce ((numeroAnterior, numeroAtual) => {
      // criar variavel 'menor' que receba o numeroAnterior
      let menor = numeroAnterior;

      // caso o numeroAnterior seja maior que o numeroAtual
      if (numeroAnterior >= numeroAtual) {
        // menor recebe numeroAtual
        menor = numeroAtual;
      }

      // retornar menor
      return menor;
    });

    //retornar menor numero do arrayFiltrado
    return console.log (menorNumero);
  }
}
