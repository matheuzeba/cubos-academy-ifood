function processData (input) {
  const minusculo = input.toLowerCase ();

  if (input === minusculo || input === minusculo.toUpperCase ()) {
    console.log (minusculo);
  } else if (
    input[0] === minusculo[0] &&
    input.slice (1) === minusculo.slice (1).toUpperCase ()
  ) {
    console.log (minusculo.slice (0, 1).toUpperCase () + minusculo.slice (1));
  } else {
    console.log (input);
  }
}
