const produtos = require('../bancodedados/produtos');
const {getStateFromZipcode} = require('utils-playground')

//  listar todos os produtos
const listarProdutos = async (req, res) => {
    try{
        return await res.status(200).json(produtos);
    } catch(error) {
        console.log(`ocorreu um erro: ${error}`)
    }
}

//  listar produto por id
const listarProdutoId = async (req, res) => {
    try {
        const {idProduto} = req.params;

        const produto = produtos.find((produto) => {
            return produto.id === Number(idProduto);
        })

        return await res.status(200).json(produto);
        
    } catch (error) {
        console.log(`ocorreu um erro: ${error}`)
    }

}

//  calcular frete
const frete = async (req, res) => {
    // tente fazer o calculo e retornar a resposta
    try {
        const {idProduto, cep} = req.params;
        const estado = await getStateFromZipcode(cep)
        
        let frete = 0;

        const produto = produtos.find((produto) => {
            return produto.id === Number(idProduto);
        })
        
        switch (estado) {
            case 'BA':
            case 'SE':
            case 'AL':
            case 'PE':
            case 'PB':
                frete = (produto.valor * 10) / 100;
                break;
            
            case 'SP':
            case 'RJ':
                frete = (produto.valor * 15) / 100;
                break;
            default:
                frete = (produto.valor * 12) / 100;
                break;
        }    
    
        const resposta = {
            produto,
            estado,
            valor: frete
        }
    
        return res.status(200).json(resposta);
    }
    //  caso nao consiga, envie o erro
    catch (error) {
        return res.status(404).json({mensagem: "ESTE ESTADO NAO EXISTE"})
    }
}

module.exports = {
    listarProdutos,
    listarProdutoId,
    frete
}