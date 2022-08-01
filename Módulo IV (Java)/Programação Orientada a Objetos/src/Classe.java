class Carro { // definição de classe
    String cor; // atríbuto de uma classe
    String modelo;
    int capacidadeDoTanque;

    // Construtor sempre abaixo dos atríbutos.

    Carro() { // Método especial ( Construtor ), não precisa de um void por exemplo.

    }

    Carro(String cor, String modelo, int capacidadeDoTanque) { // Sobrecarga
        this.cor = cor;
        this.modelo = modelo;
        this.capacidadeDoTanque = capacidadeDoTanque;
        /*
         * Sobrecarga
         * m1 ();
         * m1 ( int i);
         * m1 ( float f);
         */
    }

    void setCor(String cor) {
        this.cor = cor;
    }

    String getCor() {
        return cor;
    }

    void setModelo(String modelo) {
        this.modelo = modelo;
    }

    String getModelo() {
        return modelo;
    }

    void setCapacidadeTanque(int capacidadeDoTanque) {
        this.capacidadeDoTanque = capacidadeDoTanque;
    }

    int getCapacidadeDoTanque() {
        return capacidadeDoTanque;
    }

    double totalValorTanque(Double valorCombustivel) {
        return capacidadeDoTanque * valorCombustivel;
    }

    /*class Carro { // Método especial ( Destrutor ), obrigatório ter void. Útil para otimizar o
                  // sistema.
        void finalize() {

        }
    

    void ligar() { // método de uma classe

    };

    void frear() { // método de uma classe

    };

    Objeto
    Carro carro = new Carro(); // Construtor default
    carro.<método>; ( Mensagem a forma de chamar o método )
    */
}
