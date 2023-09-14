function solucao (jogadores) {
  const acertos = jogadores.filter (el => el.jogada === 1);
  const erros = jogadores.filter (el => el.jogada === 0);

  if (acertos.length === 1) {
    // caso ganhem
    console.log (acertos[0].nome);
  } else if (erros.length === 1) {
    // desempate
    console.log (erros[0].nome);
  } else {
    // caso ninguem ganhe
    console.log ('NINGUEM');
  }
}
