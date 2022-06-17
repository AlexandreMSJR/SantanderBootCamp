// Primeira tentativa

compara = (a, b) => {
    const soma = a + b
    if (a === b && soma >= 10 && soma >= 20) {
        return `Os numeros ${a} e ${b} São números iguais. Sua soma é : ${soma} que é maior/igual que 10 e maior/igual que 20.`
    } else if (a === b && soma >= 10 && soma <= 20) {
        return `Os numeros ${a} e ${b} São números iguais. Sua soma é : ${soma} que é maior/igual que 10 e menor que 20.`
    } else if (a === b && soma <= 10 && soma <= 20) {
        return `Os numeros ${a} e ${b} São números iguais. Sua soma é : ${soma} que é menor que 10 e menor que 20.`
    } else if (a != b && soma >= 10 && soma >= 20) {
        return `Os numeros ${a} e ${b} São números diferentes, Sua soma é: ${soma} que é maior/igual que 10 e maior/igual que 20.`
    } else if (a != b && soma >= 10 && soma <= 20) {
        return `Os numeros ${a} e ${b} São números diferentes. Sua soma é : ${soma} que é maior/igual que 10 e menor que 20.`
    } else if (a != b && soma <= 10 && soma <= 20) {
        return `Os numeros ${a} e ${b} São números diferentes. Sua soma é : ${soma} que é menor que 10 e menor que 20.`
    } else
        return "Valores inválidos"
}

console.log(compara(15, 15))
console.log(compara(6, 6))
console.log(compara(3, 3))
console.log(compara(20, 25))
console.log(compara(7, 9))
console.log(compara(2, 5))


// Exemplo da aula + ajustes de comparativo com números iguais que dão 10 e 20.

function comparaNumeros(num1, num2) {
    if (!num1 || !num2) return "Valores inválidos"
    const primeiraFrase = criaPrimeiraFrase(num1, num2)
    const segundaFrase = criaSegundaFrase(num1, num2)

    return primeiraFrase + segundaFrase
}

function criaPrimeiraFrase (num1, num2) {
    let saoIguais = ""

    if (num1 !== num2) {
        saoIguais = "Não"
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais. `
}

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2

    let igual10 = soma === 10 
    let igual20 = soma === 20
    let resultado10 = "menor que"
    let resultado20 = "menor que"
    const compara10 = soma > 10
    const compara20 = soma > 20

    if (igual10 === true) {
        resultado10 = "igual a"
    } else if (compara10){
        resultado10 = "maior que"
    }

    if (igual20 === true) {
        resultado20 = "igual a"
    } else if (compara20){
        resultado20 = "maior que"
    }

    return `Sua soma é ${soma}, que é ${resultado10} 10 e ${resultado20} 20.`
}


console.log(comparaNumeros(10, 10))
console.log(comparaNumeros(5, 5))
console.log(comparaNumeros(3, 3))
console.log(comparaNumeros(20, 25))
console.log(comparaNumeros(7, 9))
console.log(comparaNumeros(2, 5))