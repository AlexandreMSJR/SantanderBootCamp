let currentNumberWrapper = document.getElementById("currentNumber")
let currentNumber = 0

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

// Adicionando os eventos// incriment e decrement 2 - tente implementar os eventos usando o método addEventListener (currentNumberAdd)

let adicionar2 = document.getElementById("adicionar2")
let subtrair2 = document.getElementById("subtrair2")
let currentNumberAdd = document.getElementById("currentNumberAdd")

adicionar2.addEventListener("click", soma)
subtrair2.addEventListener("click", sub)

function soma() {
    let count = parseInt(currentNumberAdd.innerHTML) + 1
    currentNumberAdd.innerText = count
}

function sub() {
    let count = parseInt(currentNumberAdd.innerHTML) - 1
    currentNumberAdd.innerText = count
}

/* incriment e decrement 3 - Cire condicionais que desabilitam o botão de incrementar ou decrementar quando o "count" chegar a um determinado valor (currentNumberLimit)
 * (ex: 0 <= count => 10)
 */

let currentNumberLimit = document.getElementById("currentNumberLimit")
let adc = 0

function increment2() {
    if (adc < 10) {
        adc = adc + 1
        currentNumberLimit.innerHTML = adc
    } else {
        alert("Maior valor é 10.")
    }
}

function decrement2() {
    if (adc > 0) {
        adc = adc - 1
        currentNumberLimit.innerHTML = adc
    } else {
        alert("Menor valor é 0.")
    }

}

// incriment e decrement 4 - Mude a cor do texto em CURRENT_NUMBER para vermelho quando o número for negativo. (currentNumberNeg)

let currentNumberNeg = document.getElementById("currentNumberNeg")
let value = 0

function increment3() {
    if (value < 10) {
        value = value + 1
        currentNumberNeg.innerHTML = value 
        if (value >= 0) {
            currentNumberNeg.style.color = "black" 
        } 
    } else { 
        alert("Valor máximo é 10.")      
    }
}

function decrement3() {
    if (value > -10) {
        value = value - 1
        currentNumberNeg.innerHTML = value
        if (value < 0)
            currentNumberNeg.style.color = "red"
    } else {
        alert("Menor valor é -10.")
    }
}