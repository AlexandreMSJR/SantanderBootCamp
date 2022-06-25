function somarValoresNumericos (n1: number, n2: number): number {
    return n1 + n2
}


console.log(somarValoresNumericos(1, 3))
// console.log(somarValoresNumericos('Nao', 2)) retorna um erro

// typeof VOID, não precisa retornar nada
function printValoresNumericos(n1: number, n2: number): void {
    console.log(n1 + n2)
}

function calcularValNumericosETratar(n1: number, n2: number, callback: (numero: number) => number): number {
    let resultado = n1 + n2
    return callback(resultado)
}

function aoQuadrado(n:number):number {
    return n * n
}

function dividirPorEleMesmo(numero:number):number {
    return numero / numero
}

console.log(calcularValNumericosETratar(1, 3, aoQuadrado))
console.log(calcularValNumericosETratar(1, 3, dividirPorEleMesmo))
