/* array = [2, 4, 6, 8, 10]

let map = array.map((array) => array * 2)

console.log(map) 

Atividade */

const valores = [1, 3, 5, 7, 8 , 10]

let multiplicados = valores.map((valores) => valores * 2)

console.log(multiplicados)

const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg){
    return arr.map(function(item) {
        return item * this.value
    }, thisArg);
}

const nums = [1, 2]

console.log("this -> maçã",mapComThis(nums, maca))

console.log("this -> laranja",mapComThis(nums, laranja))

function mapSemThis(arr){
    return arr.map(function(item) {
        return item * 2
    });
}

const numbers = [2, 4, 6, 8, 10]

console.log(mapSemThis(numbers))