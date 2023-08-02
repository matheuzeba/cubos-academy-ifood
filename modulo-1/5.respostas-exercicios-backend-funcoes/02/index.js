const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if(this.ligado === true) {
            return console.log(`Este carro já está ligado.`);
        }
        else {
            this.ligado = true;
            return console.log(`carro ligado. Velocidade ${this.velocidade}.`);
        }
    },

    desligar: function () {
        if(this.ligado === false) {
            return console.log(`Este carro já está desligado.`);
        }
        else {
            this.ligado = false;
            this.velocidade = 0;
            console.log(`Carro desligado. Velocidade: ${this.velocidade}.`)
        }
    },

    acerelar: function () {
        if(this.ligado === false) {
            return console.log(`Não é possível acelerar um carro desligado.`);
        }
        else {
            this.velocidade += 10;
            return console.log(`carro ligado. Velocidade ${this.velocidade}.`);
        }
    },

    desacerelar: function () {
        if(this.ligado === false) {
            return console.log(`Não é possível desacelerar um carro desligado.`);
        }
        else {
            this.velocidade -= 10;
            console.log(`carro ligado. Velocidade ${this.velocidade}.`);
        }
    }

}

const solucao = function () {
    carro.desligar()
    carro.ligar()
    carro.ligar()
    carro.acerelar()
    carro.acerelar()
    carro.desacerelar()
    carro.desligar()
    carro.acerelar()
    carro.desacerelar()
}

solucao()