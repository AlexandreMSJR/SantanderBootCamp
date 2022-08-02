public class Test {
    public static void main(String[] args) throws Exception {
        Cliente alexandre = new Cliente();
        alexandre.setNome("Alexandre");

        Conta cc = new ContaCorrente(alexandre);
        Conta poupanca = new ContaPoupanca(alexandre);
        cc.depositar(100);
        cc.transferir(100, poupanca);

        cc.impimirinfoscomuns();
        poupanca.impimirinfoscomuns();
    }
}
