"use strict";
const pessoa = {
    nome: 'Alexandre',
    idade: 24,
    profissao: 'Desenvolvedor'
};
pessoa.idade = 29;
const andre = {
    nome: 'Andre',
    idade: 20,
    profissao: 'Pintor'
};
const paula = {
    nome: 'Paula',
    idade: 20,
    profissao: 'Desenvolvedora'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadorDeFutebol"] = 3] = "JogadorDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const maria = {
    nome: 'Maria',
    idade: 15,
    profissao: Profissao.Desenvolvedora
};
const jessica = {
    nome: 'Jessica',
    idade: 30,
    profissao: Profissao.Atriz,
    materias: ['Matematica discreta', 'Programação']
};
const monica = {
    nome: 'Monica',
    idade: 25,
    materias: ['Matematica discreta', 'Programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
