
interface pessoa {
    nome: string,
    idade: number
    profissao: profissao
}

enum profissao {
    Padeiro,
    Atriz,
    Modelo,
    Cantora
}

let pessoa1: pessoa = {
    nome: "Maria",
    idade: 29,
    profissao: profissao.Atriz
}

let pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: profissao.Padeiro
}

let pessoa3 = {
    nome: "Laura",
    idade: 32,
    profissao: profissao.Padeiro
}

let pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: profissao.Padeiro
}

let pessoa5 = {
        nome: "João",
        idade: 24,
        profissao: profissao.Modelo
}

let pessoa6 = {
    nome: "Carlos",
    idade: 24,
    profissao: profissao.Cantora
}

