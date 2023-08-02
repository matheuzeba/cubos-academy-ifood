const numeros = [2, 3, 4, 6];

// criar variavel fora do loop, se criada dentro ela sera imutável
let soma = 0;
for(let i = 0; i < numeros.length; i++) {
    //  guardar o elemento no somar e vai somando e adicionando enquanto o i continuar
    soma += numeros[i];
}

console.log(soma);