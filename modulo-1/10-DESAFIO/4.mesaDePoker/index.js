function solucao (min, max, valores) {
  // criei um metodo filter para o array de valores
  // usando o metodo filter eu posso filtrar o array de acordo com o enunciado
  const arrayFiltrador = valores.filter (el => el >= min && el <= max);

  // retornando valor
  return console.log (arrayFiltrador);
}
