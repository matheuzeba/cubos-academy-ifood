const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

const pegarIndex = () =>{
    let indexLivro = livros.findIndex(livro => livro === nomeDoLivro);
    indexLivro += 1
    console.log(`O livro está na posição ${indexLivro}`);
}

pegarIndex()
