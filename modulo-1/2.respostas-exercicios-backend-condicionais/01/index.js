const jogada1 = "papel"
const jogada2 = "tesoura"

//seu código aqui

if (jogada1 === "pedra" && jogada2 === "tesoura" || jogada2 === "pedra" && jogada1 === "tesoura" ){
    console.log("pedra");
} 

else if (jogada1 === "tesoura" && jogada2 === "papel" || jogada2 === "tesoura" && jogada1 === "papel" ){
    console.log("tesoura");
} 

else if (jogada1 === "pedra" && jogada2 === "papel" || jogada2 === "pedra" && jogada1 === "papel" ){
    console.log("papel");
} 

else{
    console.log("empate");
}