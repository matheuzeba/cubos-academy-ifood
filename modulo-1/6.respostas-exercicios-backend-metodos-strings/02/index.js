const cpf = "12345678900";
const cnpj = "12345678900";

const reformarCpf = function(cpf) {  
    if(cpf.length < 11 || cpf.length > 11) {
        return 'CPF Inválido';
    }
    
    else {
        const novoCpf = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9, 11)}`;
        return novoCpf;
    }
}

const reformarCnpj = function(cnpj) {
    if (cnpj.length < 14 || cnpj.length > 14) {
        return 'CNPJ Inválido'
    }
    else {
        const novoCnpj = `${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(5, 8)}/${cnpj.slice(8, 12)}-${cnpj.slice(12)}`
        return novoCnpj;
    }   
}

console.log(reformarCpf(cpf))
console.log(reformarCnpj(cnpj))
