const number = 2

console.log(number)

console.log(number + 4)

// number = 3
// console.log(number + 4) - dará erro pois a const não pode alterar.

const FIRST_NAME = "Alexandre"

console.log(FIRST_NAME)

if (FIRST_NAME == "Alexandre") {
    let FIRST_NAME = "Julia"
    console.log(FIRST_NAME)
}

console.log(FIRST_NAME)