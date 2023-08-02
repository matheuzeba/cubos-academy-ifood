const caractere = "E";
const vogal = "A,E,I,O,U,a,e,i,o,u";


if (caractere === String(caractere).toUpperCase() && vogal.includes(caractere)) {
    console.log("Vogal maiúscula");
}

else if(caractere === String(caractere).toLowerCase() && vogal.includes(caractere)) {
    console.log("Vogal minúscula");
}

else if (typeof(caractere) === typeof(1)) {
    console.log("Número");
}

else {
    console.log("Consoante");
}
