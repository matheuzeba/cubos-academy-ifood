function processData (input) {
  // tratando input e criando subarrays
  const inputTratado = input
    .trim ()
    .split ('\n')
    .map (letra => letra.split (''));

  //pegando senha e dando trim caso seja maior
  const senha = inputTratado[0].filter (el => el.trim ().length > 0);
  const digitado = inputTratado[1].filter (el => el.trim ().length > 0);

  // adicionando checar como number
  let checar = 0;

  // interando sobre letras de digitado
  for (let letra of digitado) {
    // caso a letra atual seja igual a letra atual de senha
    if (letra === senha[checar]) {
      // aumentamos o checar
      checar++;
    }
  }

  // caso o tamanho dos dois seja igual
  if (checar === senha.length) {
    // imprimir sim
    console.log ('SIM');
  } else {
    // caso nao seja
    // imprimir nao
    console.log ('NAO');
  }
}
