"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = true;
anyEstaDeVolta = 'teste';
let stringTest = 'verificar';
stringTest = anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = false;
unknownValor = 'Vai sim';
let stringTest2 = 'agora vai';
// stringTest2 =  unknownValor ( vai dar erro )
if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}
function jogarErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogarErro('Deu erro', 500);
