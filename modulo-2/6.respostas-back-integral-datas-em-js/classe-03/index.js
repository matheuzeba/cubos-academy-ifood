const teste = new Date(2015,1,1,2)

const taAberto = (data) => {
    let horas = data.getHours();
    if(horas < 8 || horas > 18){
        return false
    }
    else {
        return true
    }
}

console.log(taAberto(teste))