public interface IConta { // por estar dentro de uma interface todo o conteúdo se torna público.
                          // Desta forma não sendo necessário colocar o public antes do void.
    void sacar(double valor);

    void depositar(double valor);

    void transferir(double valor, Conta contaDestino);

    void imprimirExtrato();

}
