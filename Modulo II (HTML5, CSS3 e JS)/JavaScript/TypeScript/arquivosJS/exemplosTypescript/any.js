"use strict";
let valorAny;
valorAny = 3;
valorAny = 'Ola';
valorAny = true;
let valorString = 'Teste';
valorString = valorAny;
let valorString2 = 'testao';
valorString2 = valorAny;
function somarStrings(string1, string2) {
    console.log(string1 + string2);
}
somarStrings(valorString, valorString2);
