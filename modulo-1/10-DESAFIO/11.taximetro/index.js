function solucao (min, km) {
  // criar const de precoTotal
  let precoTotal = 0;
  // criar const de resto do km
  let restoKm = km - 10;
  // criar const de resto de min
  let restoMin = min - 20;

  // caso o min seja menor ou igual a 20
  if (min <= 20) {
    // multiplicamos o minuto pelos 50 centavos
    precoTotal += min * 50;
  } else {
    // caso seja maior
    // multiplicamos os vinte pelo valor padrao de 50 centavos
    // depois multiplicamos o resto do valor dos min por 30 centavos
    // apos isso e so somar tudo
    precoTotal += 20 * 50 + restoMin * 30;
  }

  // caso km seja menor que 10
  if (km <= 10) {
    // multiplicamos km pelos 70 centavos
    precoTotal += km * 70;
  } else {
    // caso seja maior
    // multiplicamos os 10 pelo valor padrao de 70 centavos
    // multiplicamos o resto dos km com os 50 centavos
    // somamos tudo
    precoTotal += 10 * 70 + restoKm * 50;
  }

  // retornamos o valor
  return console.log (Math.floor (precoTotal));
}
