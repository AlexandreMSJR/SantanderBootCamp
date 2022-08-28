"use strict";
var profissao;
(function (profissao) {
    profissao[profissao["Padeiro"] = 0] = "Padeiro";
    profissao[profissao["Atriz"] = 1] = "Atriz";
    profissao[profissao["Modelo"] = 2] = "Modelo";
    profissao[profissao["Cantora"] = 3] = "Cantora";
})(profissao || (profissao = {}));
let pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: profissao.Atriz
};
let pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: profissao.Padeiro
};
let pessoa3 = {
    nome: "Laura",
    idade: 32,
    profissao: profissao.Padeiro
};
let pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: profissao.Padeiro
};
let pessoa5 = {
    nome: "João",
    idade: 24,
    profissao: profissao.Modelo
};
let pessoa6 = {
    nome: "Carlos",
    idade: 24,
    profissao: profissao.Cantora
};
