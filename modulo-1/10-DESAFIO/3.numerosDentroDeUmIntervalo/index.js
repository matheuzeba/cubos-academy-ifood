function solucao (numero, limiteInferior, limiteSuperior) {
  // criei uma condicional que verifica se o valor de numero
  // esta entre limite inferior e limite superior
  if (numero >= limiteInferior && numero <= limiteSuperior) {
    // caso esteja, ele retornara que 'PERTENCE'
    return console.log ('PERTENCE');
  } else {
    // caso nao esteja, ele retornara que 'NAO PERTENCE'
    return console.log ('NAO PERTENCE');
  }
}
