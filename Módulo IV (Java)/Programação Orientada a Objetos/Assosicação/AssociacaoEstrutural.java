public class Associacao {
    class Pessoa { // Associação Estrutural de Composição **** Se um existir o outro também existe(Com Parte Todo) ****
        Endereco endereco;
    }
    class Disciplina {// Associação Estrutural de Agregação **** Se um existir não necessariamente o outro existe(Sem Parte Todo) ****
        Aluno aluno;
    }
    class Compra { /* Associação Comportamental **** Depende do método(Depende de) ****
        ...
        finalizar (Cupom Cupom, ...);
          ... */
    }
}

// Herança (Mais rigida) X Associação (Mais fléxivel), porém na análise de regra de negócio,
// será perceptível a melhor opção.
// Uma coisa é a outra ? (Se sim, Herança)
// Uma coisa é a outra ? (Se não, Assosiação)