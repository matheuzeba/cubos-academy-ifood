const {listarPokemons, detalharPokemon} = require('utils-playground')


// listar pokemon
const listarPokemon = async (req, res) => {
    try {
        let pokemon = await listarPokemons();

        // pegando o results em pokemon
        pokemon = pokemon.results;
    
        return res.status(200).json(pokemon);
    } catch (error) {
        return res.status(400).json({mensagem: `ocorreu um erro, ${error}`});
    }

}

//  detalhar pokemon
const detalharOPokemonNum = async(req, res) => {
    try{
        const {pesquisar} = req.params
    
        //   buscar pokemon, o parametro pode ser uma string
        let pokemon = await detalharPokemon(pesquisar);
        
        // escolhendo o que deve ser mostrado
        const resultado = {
            id: pokemon.id,
            name: pokemon.name,
            height: pokemon.height,
            weigth: pokemon.weigth,
            base_experience: pokemon.base_experience,
            forms: pokemon.forms,
            abilities: pokemon.abilities,
            species: pokemon.species
        }
    
        res.status(200).json(resultado);
    } catch(error){
        return res.status(400).json({mensagem: `ocorreu um erro, ${error}`});
    }

}


module.exports = {
    listarPokemon,
    detalharOPokemonNum
}