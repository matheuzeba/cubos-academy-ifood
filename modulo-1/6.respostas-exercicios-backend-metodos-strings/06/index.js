const celular = 7199918888;

novoCelular = String(celular)

if(novoCelular.length === 10)  {
    console.log(`(${novoCelular.slice(0,2)}) 9 ${novoCelular.slice(2,6)}-${novoCelular.slice(novoCelular.length - 4)}`)
}

else if (novoCelular.length === 8) {
    console.log(`9 ${novoCelular.slice(0,4)}-${novoCelular.slice(novoCelular.length - 4)}`)
}
