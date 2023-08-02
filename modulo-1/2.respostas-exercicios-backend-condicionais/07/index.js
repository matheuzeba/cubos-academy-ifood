const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

//seu código aqui

if(aposentada === false || portadoraDeDoenca === false) {
    console.log("INSENTA");
} 

else if (totalDeRendimentos <= 28_559_70) {
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
}

else {
    console.log("PEGA LEAO");
}