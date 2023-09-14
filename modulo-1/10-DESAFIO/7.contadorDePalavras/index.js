function solucao (texto) {
  // Seu codigo aqui
  // usar metodo split para cortar a string
  const palavras = texto.split (' ');

  // criar variavel multavel PalavraFinal
  let palavraFinal = [];

  // criar for loop
  for (let palavra of palavras) {
    // caso a palavra seja diferente de um espaco
    if (palavra !== '') {
      // adicionar palavra a palavraFinal
      palavraFinal.push (palavra);
    }
  }

  // retornar length de palavraFinal
  console.log (palavraFinal.length);
}
