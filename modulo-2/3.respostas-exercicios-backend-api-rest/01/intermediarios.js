// middleware para validar senha
const validarSenha = (req, res, next) => {
    const { senha } = req.query;

    if(!senha) {
        res.status(401).json({mensagem: 'digite a senha'})
    }
    if(senha !== 'cubos123') {
        res.status(401).json({mensagem: 'a senha digitada esta incorreta'})
    }

    next();
}

module.exports = validarSenha