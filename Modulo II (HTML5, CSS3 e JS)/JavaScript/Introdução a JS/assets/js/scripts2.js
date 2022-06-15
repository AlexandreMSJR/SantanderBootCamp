// Adicionando os eventos// incriment e decrement 2 - tente implementar os eventos usando o método addEventListener (currentNumberAdd)

let currentNumberAdd = document.getElementById("currentNumberAdd")
let count = 0

function soma() {
    currentNumberAdd = currentNumberAdd + 1
    currentNumberAdd.innerHTML = currentNumberAdd
}