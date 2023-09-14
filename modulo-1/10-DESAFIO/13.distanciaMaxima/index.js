function processData (input) {
  // tratar input

  // tirando espacos extras
  // transformar em array de acordo com as linhas
  const tratandoInput = input.trim ().split ('\n');

  // criar substring e transformar em float
  const inputTratado = tratandoInput.map (el =>
    el.split (' ').map (el => parseFloat (el))
  );

  // A primeira linha deste string sera o inteiro N que indica o numero de funcionarios da Cubos.
  const n = parseInt (tratandoInput[0]);

  // criando a variavel pessoas que ignora o 'n'
  const pessoas = inputTratado.slice (1);

  // criando variavel da distanciaMaxima
  let distanciaMaxima = 0;

  // pessoa1 = B
  for (let pessoa1 = 0; pessoa1 < n; pessoa1++) {
    //pessoa2 = A
    for (let pessoa2 = pessoa1 + 1; pessoa2 < n; pessoa2++) {
      // pegando xA
      const xA = pessoas[pessoa2][0];

      // pegando xB
      const xB = pessoas[pessoa1][0];

      // pegando yA
      const yA = pessoas[pessoa2][1];

      // pegando yB
      const yB = pessoas[pessoa1][1];

      // formula Distancia Maxima
      const distanciaAB = Math.sqrt ((xB - xA) ** 2 + (yB - yA) ** 2);

      // caso a distanciaAB seja maior que a maxima
      if (distanciaAB > distanciaMaxima) {
        // a maxima recebe AB
        distanciaMaxima = distanciaAB;
      }
    }
  }

  // imprimir distanciaMaxima
  console.log (distanciaMaxima);
}
