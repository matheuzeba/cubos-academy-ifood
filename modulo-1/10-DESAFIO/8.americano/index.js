function solucao (numeros) {
  // criar funcao que soma o array usando metodo reduce
  const soma = numeros.reduce (
    (acumulador, valorAtual) =>
      // somando todos os valores do array
      acumulador + valorAtual
  );

  // criar variavel imultavel
  // que recebe modulo de soma com length do array
  const restoDaSoma = soma % numeros.length;

  // caso o resto seja 0
  if (restoDaSoma === 0) {
    // imprimimos o length
    console.log (numeros.length);
  } else {
    // caso nao seja
    // imprimimos o resto da soma
    console.log (restoDaSoma);
  }
}
