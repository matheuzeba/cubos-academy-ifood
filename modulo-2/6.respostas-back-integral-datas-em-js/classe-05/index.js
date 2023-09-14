const teste = new Date(2021,3,31,12)

const taAberto = (data) => {
    let horas = data.getHours();
    let dia = data.getDay();
    console.log(dia)
    console.log(horas)
    if(horas < 8 || horas > 18 || dia === 0 || dia === 5){
        return false
    }
    if(dia === 6 && horas < 8 || horas > 12) {
        return false
    }
    else {
        return true
    }
}

console.log(taAberto(teste))