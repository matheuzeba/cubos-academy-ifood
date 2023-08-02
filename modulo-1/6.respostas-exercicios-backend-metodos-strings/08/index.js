const cpf = "011.022.033-44";

let removerPonto;
let removerUnderline;

if(cpf.includes('-') && cpf.includes('.')) {
    removerPonto = cpf.replaceAll('.', '');
    removerUnderline = removerPonto.replaceAll('-', '')
    console.log(removerUnderline)
}

else if (cpf.includes('-') && !cpf.includes('.')) {
    removerUnderline = cpf.replaceAll('-', '')
    console.log(removerUnderline)
}

else if (cpf.includes('.') && !cpf.includes('-')) {
    removerPonto = cpf.replaceAll('.', '');
    console.log(removerPonto)
}

else {
    console.log(cpf)
}
