/* Conceito

const frutas = ['Maçã fuji', 'Maçã verde', 'Laranja', 'Abacaxi']

let filter = frutas.filter((fruta) => fruta.includes('Maçã'))

console.log(filter) 

Atividade !*/

arr = [1, 5, 2, 4, 6, 9, 12]

function NumPares(value) {
    if (value % 2 === 0)
        return value
}

let pares = arr.filter(NumPares)
console.log(pares)

// Outro método

function filtraPares(arr) {
    return arr.filter(callback)
}

function filtraImpares(arr) {
    return arr.filter(callback2)
}

function callback(item) {
    return item % 2 === 0
}

function callback2(item) {
    return item % 2 !== 0
}



const meuArray = [1, 23, 55, 67, 30, 2, 4]
console.log(filtraPares(meuArray))

console.log(filtraImpares(meuArray))