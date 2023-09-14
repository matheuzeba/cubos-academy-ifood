const teste = new Date(2021,3,31,12)

const taAberto = (data) => {
    let horas = data.getHours();
    let dia = data.getDay();
    console.log(dia)
    if(horas < 8 || horas > 18 || dia === 0 || dia === 6){
        return false
    }
    else {
        return true
    }
}

console.log(taAberto(teste))