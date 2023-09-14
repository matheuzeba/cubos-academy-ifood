function solucao (carta) {
  // Fiz um simples switch case
  // Ele vai pegar o valor da carta e retornar outro valor
  switch (carta) {
    case 'Q':
      console.log ('J');
      break;
    case 'J':
      console.log ('K');
      break;
    case 'K':
      console.log ('A');
      break;
    case 'A':
      console.log ('2');
      break;
    case '2':
      console.log ('3');
      break;
    case '3':
      console.log ('Q');
      break;
  }
}
