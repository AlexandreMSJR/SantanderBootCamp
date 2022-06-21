// Método 1
array = [1, 5, 3, 6, 2]

const somaGeral = function (acumulado, atual) {
    return acumulado + atual
}

console.log(array.reduce(somaGeral))

// Método 2

function somaNumeros(arr) {
    return arr.reduce(function (prev, current) {
        console.log({prev})
        console.log({current})
        return prev + current
    }, 0)
}

const arr = [1, 2]

console.log(somaNumeros(arr))


// Atividade 2 

const list = [
    {
        name: "Sabao em po",
        preco: 30
    },
    {
        name: "Cereal",
        preco: 12
    },
    {
        name: "Toalha",
        preco: 30
    }
]

const saldoDisponivel = 100

function calculaSaldo(saldoDisponivel, list) {
    return list.reduce(function(prev, current, index) {
        console.log("rodada", index + 1)
        console.log({prev})
        console.log({current})
        return prev - current.preco
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel,list))