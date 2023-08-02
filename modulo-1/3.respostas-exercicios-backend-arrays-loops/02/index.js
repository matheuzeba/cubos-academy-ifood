const letras = ["A", "a", "B", "C", "E", "e"];


// caso o array possua algum elemento E ou e
// Ele aumentara 1 em possui 
let possui = 0;

// loop para checar o array
for(let i=0;i<letras.length;i++) {
    if(letras[i] === "E" || letras[i] === "e") {
        possui += 1;
    }
}


// condicionais para enviar a mensagem
if(possui === 0) {
    console.log('Nenhuma letra "E" ou "e" foi encontrada.');
}

else if(possui > 0) {
    console.log(`Foram encontradas ${possui} letras "E" ou "e".`);
}
