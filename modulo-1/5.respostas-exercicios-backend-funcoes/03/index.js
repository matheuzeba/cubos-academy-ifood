const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],

    imprimirResumo: function() {
        return console.log(`Cliente: ${this.nomeDoCliente}\nTotal de itens: ${this.calcularTotalDeItens()} itens \nTotal a pagar: ${this.calcularTotalAPagar().toFixed(2)}`)
    },

    addProduto: function(produto) {
        let devoDarPush = true;
        for(let item of this.produtos) {
            if((produto.id === item.id)) {
                devoDarPush = false
                item.qtd += produto.qtd
            }
        }
        if (devoDarPush) {
            this.produtos.push(produto)
        }
    },

    imprimirDetalhes: function() {
        console.log(`Cliente: ${this.nomeDoCliente}\n`)
        for (let item of this.produtos) {
            console.log(`Item ${item.id} - ${item.nome} - ${item.qtd} und - R$ ${item.precoUnit}`)
        }

        console.log(`\nTotal de itens: ${this.calcularTotalDeItens()} itens`)
        console.log(`Total a pagar: R$ ${this.calcularTotalAPagar().toFixed(2)}`)
    },

    calcularTotalDeItens: function() {
        let quantidade = 0;
        for(let item of this.produtos) {
            quantidade += item.qtd
        }
        return quantidade
    },

    calcularTotalAPagar: function() {
        let preco = 0;
        for(let item of this.produtos) {
            preco += item.precoUnit * item.qtd
        }
        preco /= 100;
        return preco
    },

    calcularDesconto: function() {
        let descontoAcimaDeQuatro = 0;
        let descontoAcimaDeCem = 0;
        let menorNumero = 99999;

        for(let item of this.produtos) {
            if(item.precoUnit < menorNumero) {
                menorNumero = item.precoUnit
            }
        }

        if(this.calcularTotalDeItens() > 4) {
            descontoAcimaDeQuatro = (menorNumero / 100)
            
        }

        if(this.calcularTotalAPagar() > 100) {
            descontoAcimaDeCem = (10 * this.calcularTotalAPagar()) / 100
        }
        
        if (descontoAcimaDeQuatro > descontoAcimaDeCem) {
           console.log(`o desconto deverá ser de: R$ ${descontoAcimaDeQuatro.toFixed(2)}`)
        }

        if (descontoAcimaDeCem > descontoAcimaDeQuatro) {
            console.log(`o desconto deverá ser de: ${descontoAcimaDeCem.toFixed(2)}`)
        }
    }
}


const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(novoTenis);
carrinho.addProduto(novaBermuda);

carrinho.calcularDesconto()
