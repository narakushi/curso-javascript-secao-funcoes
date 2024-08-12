//o uso de funcao no uso da palara resevada function, é possivel acessar aravés do objeto arguments todos os argumentos passados
// o uso de parametros para receber os argumentos é opcional, mas isso não é válido para arrows functions
function funcao(a, b, c) {
    let total = 0;

    for (let argumento of arguments) {
        total += argumento
    }

    console.log(total, a, b, c)
}

funcao(1, 2, 3, 4, 5);


const funcao2 = () => {
    console.log(arguments[0])
}

funcao2(0, 3, 44444, 4444, 5555, 8)