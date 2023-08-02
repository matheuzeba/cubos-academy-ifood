const numeroCartao = '1111222233334444';

if(numeroCartao.length < 16 || numeroCartao.length > 16) {
    console.log('digite um numero valido')
}
else {
    novocpf = `${numeroCartao.slice(0, 4)}${'*'.repeat(8)}${numeroCartao.slice(12, 16)}`
    console.log(novocpf)
}
