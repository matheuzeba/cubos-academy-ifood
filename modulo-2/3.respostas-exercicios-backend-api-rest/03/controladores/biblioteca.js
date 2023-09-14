let {livros, identificador} = require('../dados/biblioteca')

//  consultar biblioteca
const consultarColecao = (req, res) => {
    return res.status(200).json(livros);
}

//  consultar livro por id
const consultarLivro = (req,res) => {
    const { id } = req.params;
    
    // retornando id 
    const livro = livros.filter((livro) => {
        return livro.id === Number(id)
    })

    // caso o id nao seja um numero
    if(isNaN(id)) {
        return res.status(400).json({mensagem: "O valor do parâmetro ID da URL não é um número válido."})
    }

    // caso nao exista o livro com esse id
    if(livro.length === 0) {
        return res.status(400).json({mensagem: "Não existe livro para o ID informado."})
    }

    // retornar livro
    return res.status(200).json(livro)
}

// adicionar livro
const adicionarLivro = (req,res) => {
    const {titulo, autor, ano, numPaginas} = req.body;
    
    // checar se tem algo faltando
    if(!titulo || !autor || !ano || !numPaginas) {
        return res.status(400).json('Favor adicionar livro corretamente')
    }

    // estrutura de adicao
    let livro = {
        id: identificador++,
        titulo,
        autor,
        ano,
        numPaginas
    }

    // enviar para o banco de dados
    livros.push(livro)
    return res.status(200).json(livro)
}

//  atualizar livro
const atualizarLivros = (req, res) => {
    const { id } = req.params;
    const {titulo, autor, ano, numPaginas} = req.body;

    // caso nao tenha
    if(!titulo || !autor || !ano || !numPaginas) {
        return res.status(400).json('Favor adicionar livro corretamente')
    }

    // encontrar id
    const livro = livros.find((livro) => {
        return livro.id === Number(id)
    })

    // caso nao tenha id
    if(!livro) {
        return res.status(400).send({mensagem: "Não existe livro a ser substituído para o ID informado."});
    }

    // alterar propriedades
    livro.titulo = titulo
    livro.autor = autor
    livro.ano = ano
    livro.numPaginas = numPaginas
    
    return res.status(200).json({mensagem: "Livro substituído."})
}

//  atualizar alguma coisa no livro
const atualizarAlgoNoLivro = (req, res) => {
    const { id } = req.params;
    const {titulo, autor, ano, numPaginas} = req.body;

    // encontrar id
    const livro = livros.find((livro) => {
        return livro.id === Number(id)
    })
    
    // caso nao tenha id
    if(!livro) {
        return res.status(400).json({mensagem: "Não existe livro a ser alterado para o ID informado."})
    }

    // condicoes para adicionar
    if(titulo) livro.titulo = titulo
    if (autor) livro.autor = autor
    if(ano) livro.ano = ano
    if(numPaginas) livro.numPaginas = numPaginas
    
    return res.status(200).json({mensagem: "Livro alterado."})
}

//  deletar livro
const deletarLivro = (req, res) => {
    const { id } = req.params;

    // encontrar id do livro
    const livro = livros.find((livro) => {
        return Number(id) === livro.id
    })
    
    // caso id não exista
    if(!livro) {
        return res.status(200).json({mensagem: "Não existe livro a ser removido para o ID informado."});
    }

    // remover livro
    livros = livros.filter((livro) => {
        return Number(id) !== livro.id
    })
    
    return res.status(200).json({mensagem: "Livro removido."});
}

module.exports = {
    consultarColecao,
    consultarLivro,
    adicionarLivro,
    atualizarLivros,
    atualizarAlgoNoLivro,
    deletarLivro
}