const comentario = "Esse COVID é muito perigoso!";

if((comentario.includes('covid') || comentario.includes('COVID') || comentario.includes('pandemia' || comentario.includes('PANDEMIA')))) {
    console.log('Comentário bloqueado por conter palavras proibidas')
}

else {
    console.log('Comentário autorizado')
}
