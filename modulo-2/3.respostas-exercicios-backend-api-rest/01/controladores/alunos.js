let {alunos, identificadorAlunos} = require('../dados/bancodedados')

// controlador para listar alunos
const listarAlunos = (req, res) => {
    return res.status(200).json(alunos)
}

// controlador para listar alunos por id
const listarAlunoId = (req, res) => {
    const { id } = req.params;

    // encontrar aluno baseado na id
    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id);
    })

    // checar se o id é valido ou nao
    if(isNaN(id)) {
        res.status(400).json({mensagem: 'O ID DEVE SER UM NUMERO VALIDO'})
    }

    // checar se existe alunos pra id ou nao
    if(!aluno) {
        res.status(404).json({mensagem: 'O ALUNO NAO FOI ENCONTRADO'})
    }
    
    return res.status(200).json(aluno)
}

// controlador que cadastra aluno
const cadastrarAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body;
    
    // funcao para checar se tem erro em variaveis
    const checar = () => {
        let erros = [];
        if (nome === undefined || nome.length === 0 || nome.trim().length === 0) erros.push('nome')
        if (sobrenome === undefined || sobrenome.length === 0 || sobrenome.trim().length === 0) erros.push('sobrenome')
        if (idade === undefined || idade < 18) erros.push('idade')
        if (curso === undefined || curso.length === 0 || curso.trim().length === 0) erros.push('curso')

        return erros
    }

    // caso tenha erro
    if(checar().length > 0) {
        // retorne uma mensagem de erro
        return res.status(400).json({mensagem: `Existem erros nessas areas ${checar()}`})
    }
    
    // adicionar objeto
    const aluno = {
        id: identificadorAlunos++,
        nome: nome.trim(),
        sobrenome: sobrenome.trim(),
        idade,
        curso: curso.trim()
    }

    // enviar objeto para o banco de dados
    alunos.push(aluno)

    // enviar um status sem corpo
    return res.status(201).json()
}

const excluirAluno = (req, res) => {
    const { id } = req.params;

    // encontrar aluno baseado na id
    let aluno = alunos.find((aluno) => {
        return aluno.id === Number(id);
    })

    // checar se o id é valido ou nao
    if(isNaN(id)) {
        res.status(400).json({mensagem: 'O ID DEVE SER UM NUMERO VALIDO'})
    }

    // checar se tem aluno
    if(!aluno) {
        res.status(404).json({mensagem: 'O ALUNO A SER EXCLUIDO NAO FOI ENCONTRADO'})
    }

    // excluir id
    alunos = alunos.filter((aluno) => {
        return aluno.id !== Number(id)
    })

    // retornar status
    return res.status(200).json()
}

module.exports = {
    listarAlunos,
    listarAlunoId,
    cadastrarAluno,
    excluirAluno
}