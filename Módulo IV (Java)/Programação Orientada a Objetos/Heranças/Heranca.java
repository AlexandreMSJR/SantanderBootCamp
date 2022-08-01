public class Heranca {
    /*
     * Class A extends B { --- modelo de herança em Java ---
     * 
     * }
     * 
     * A a = new B(); --- Modelo de Upcast ---
     * B a = (B) new A(); --- Modelo de Downcast ( Perigoso, não utilizar se
     * possível )---
     * 
     * 
     * 
     * 
     * class Veiculo {
     * String modelo;
     * String cor;
     * int capacidadeDoTanque;
     * }
     * 
     * class Carro extends Veiculo {
     * int portas;
     * }
     * 
     * class Moto extends Veiculo{
     * 
     * }
     * 
     * class Caminhao extends Veiculo{
     * int portas;
     * }
     * 
     */
    // Testando Upcast / Downcast and Polimorfismo / Sobrescrita
    class Funcionario {

    }

    class Gerente extends Funcionario {

    }

    class Vendedor extends Funcionario {

    }

    class Faxineiro extends Funcionario {

    }

    public static void main(String[] args) {

        Funcionario funcionario = new Funcionario();

        /* 
         --- Upcast é sempre implícito ---
        Funcionario gerente = new Gerente();
        Funcionario vendedor = new Vendedor();
        Funcionario faxineiro = new Faxineiro();

         --- Donwcast de forma explícita ---
         Gerente gerente = new Funcionario();
         Vendedor vendedor = (Vendedor) new Funcionario();
        */
        
    }
}
