
// Solução 1
function verificandoPalindromo (string) {
    if(!string) return "String inexistente"

    return string.split("").reverse().join("") === string
}

let myVar = true

console.log(verificandoPalindromo("ovo"))
console.log(verificandoPalindromo("gato"))
console.log(verificandoPalindromo(""))

// Solução 2
// omo
// 012
// abba
// 0123
function verificandoPalindromo2 (string) {
    if(!string) return "String inexistente"

    for(let i = 0; i < string.lenght / 2; i++) {
        if(string[i] !== string[string.lenght - 1 - i]) {
            return false
        }
    }
    return true
}

console.log(verificandoPalindromo2("abba"))
console.log(verificandoPalindromo2("gato"))