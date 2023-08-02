const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],

    depositar: function (valor) {
        this.saldo += valor;
        this.historicos.push({tipo: 'Depósito', valor: valor});
        return(`Deposito de R$ ${(valor/100)} realizado para o cliente: ${this.nome}`)
    },

    sacar: function(valor) {
        if(valor > this.saldo) {
            return (`Saldo insuficiente para o saque de: ${this.nome}`)
        }
        else {
            this.saldo -= valor
            this.historicos.push({tipo: 'Saque', valor: valor});
            return (`Saque de R$ ${valor/100} realizado para o cliente: ${this.nome}`)
        }
    },

    extrato: function() {
        let saque = 0;
        let deposito = 0;
        for(let item of this.historicos) {
            if(item.tipo === 'Depósito') {
                deposito += item.valor;
            }

            else if(item.tipo === 'Saque') {
                saque += item.valor;
            }
        }
        
        return `Extrato de ${this.nome} - Saldo: R$ ${(this.saldo /100).toFixed(2)}\nHistórico:\nDepósito de R$${(deposito /100)}\nSaque de R$${saque /100}`
    }
}

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato())
