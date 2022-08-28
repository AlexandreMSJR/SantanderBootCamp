"use strict";
function somarValoresNumericos(n1, n2) {
    return n1 + n2;
}
console.log(somarValoresNumericos(1, 3));
// console.log(somarValoresNumericos('Nao', 2)) retorna um erro
// typeof VOID, não precisa retornar nada
function printValoresNumericos(n1, n2) {
    console.log(n1 + n2);
}
function calcularValNumericosETratar(n1, n2, callback) {
    let resultado = n1 + n2;
    return callback(resultado);
}
function aoQuadrado(n) {
    return n * n;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(calcularValNumericosETratar(1, 3, aoQuadrado));
console.log(calcularValNumericosETratar(1, 3, dividirPorEleMesmo));
