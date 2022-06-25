const pessoa = {
    nome: 'Alexandre',
    idade: 24,
    profissao: 'Desenvolvedor'
}

pessoa.idade = 29

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 20,
    profissao: 'Pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 20,
    profissao: 'Desenvolvedora'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadorDeFutebol
}

interface Pessoa {
    nome: String,
    idade: Number,
    profissao?: Profissao // ? faz com que não seja obrigatório.
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 15,
    profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 30,
    profissao: Profissao.Atriz,
    materias: ['Matematica discreta', 'Programação']
}

const monica: Estudante = {
    nome: 'Monica',
    idade: 25, // profissão não é obrigatório, pois há " ? " dentro da definição de profissão.
    materias: ['Matematica discreta', 'Programação']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item)
    }
} 

listar(monica.materias)