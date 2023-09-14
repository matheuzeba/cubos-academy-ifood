let convidados = require('../dados/convidados');

// listar convidados
const listarConvidados = (req, res) => {
    const { nome } = req.query;

    // caso nao tenha nome
    if(!nome) {
        return res.status(200).json(convidados)
    }

    // caso tenha na lista
    if(convidados.includes(nome)) {
        return res.status(200).json({mensagem: "Convidado presente."})
    }

    // caso nao tenha na lista
    if(!convidados.includes(nome) && nome.length > 0) {
        return res.status(404).json({mensagem: "O convidado buscado não está presente na lista."})
    }
}

//  adicionar convidado
const adicionarConvidado = (req, res) => {
    const { nome } = req.body;

    // caso o banco de dados tenha o nome a ser adicionado
    if(convidados.includes(nome)) {
        // nao adicionar
        return res.status(400).json({ mensagem: "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também."})
    }

    //  caso nao tenha entao adicione ao fim do array
    convidados.push(nome);
    return res.status(201).json({mensagem: "Convidado adicionado."});
}

//  remover convidado
const removerConvidado = (req, res) => {
    const { nome } = req.params;

    //  caso esse nome nao exista na lista
    if(!convidados.includes(nome)) {
        return res.status(404).json({mensagem: "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido."})
    }
    
    //  tirar convidado da lista de array
    //  caso o nome do parametro seja igual o do array
    convidados = convidados.filter((convidado) => {
        return convidado !== nome;
    })

    return res.status(204).json({mensagem: "Convidado removido."});
}

module.exports = {
    listarConvidados,
    adicionarConvidado,
    removerConvidado
}