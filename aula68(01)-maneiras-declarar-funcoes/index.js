// declaração de função

function falaOi() {
    console.log('Oie');
}

falaOi();


//First-class objects (Objetos de primeia classe)
// Function Expression


const souUmDado = function () {
    console.log('Sou um dado.');
};

function executaFuncao(funcao) {
    console.log('Vou executar sua funcao abaixo: ')
    funcao();
}

executaFuncao(souUmDado);


//Arrow function, recurso mais novo provindo do ECMASCRIPT de 2015

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}

funcaoArrow();


// Dentro de um objeto

const obj = {
    falar: function() {
        console.log('Estou falando...');
    }
}

const objDois = {
    falar() {
        console.log('Estou falando...');
    }
}

obj.falar()

objDois.falar()