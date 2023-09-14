const fsAsync = require('fs/promises');

const {buscarEndereco} = require('utils-playground');

const listarEnderecos = async(req, res) => {
    try{
    // pegar cep
    const {cep} = req.params

    // pegar endereco
    const endereco = await buscarEndereco(cep);

    // ler enderecos.json
    const ler = await fsAsync.readFile(process.cwd() + '/src/enderecos.json')
    
    // transformar json em objeto
    const lerParsed = JSON.parse(ler)
    
    if(JSON.stringify(lerParsed).includes(JSON.stringify(endereco))){
        res.status(500).json({mensagem: 'ESSE ENDEREÇO JA EXISTE'})
    }

    else {
        // dar push de endereco nesse objeto
        lerParsed.push(endereco)

        // transforma o objeto em json novamente
        const dado = JSON.stringify(lerParsed)
    
        // envia para o arquivo
        await fsAsync.writeFile(process.cwd() + '/src/enderecos.json', dado)

        res.status(200).json({mensagem: 'Arquivo criado'})
    }
    } catch(error) {
        console.log(error)
    }
}

module.exports = {
    listarEnderecos
}