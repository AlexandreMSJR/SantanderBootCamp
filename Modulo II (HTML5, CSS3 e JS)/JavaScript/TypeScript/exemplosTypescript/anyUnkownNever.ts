let anyEstaDeVolta: any
anyEstaDeVolta = 3
anyEstaDeVolta = true
anyEstaDeVolta = 'teste'

let stringTest: string = 'verificar'
stringTest = anyEstaDeVolta

let unknownValor: unknown
unknownValor = 3
unknownValor = 'opa'
unknownValor = false
unknownValor = 'Vai sim'

let stringTest2: string = 'agora vai'
// stringTest2 =  unknownValor ( vai dar erro )

if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor
}

function jogarErro(erro: string, codigo: number): never { // never nunca para !
    throw { error: erro, code: codigo }
}

jogarErro('Deu erro', 500)