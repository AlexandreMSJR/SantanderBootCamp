public class RodarAplicacaoDeHeranca {
    
    public static void main(String[] args) {
        ClasseMae[] classes = new ClasseMae[]{new ClasseFilha1(), new ClasseFilha2(),new ClasseFilha3(), new ClasseMae()};

        for (ClasseMae classe: classes) {
            classe.metodo1();
        }
        System.out.println("");

        for (ClasseMae classe: classes) {
            classe.metodo2();
        }
        System.out.println("");

        for (ClasseMae classe: classes) {
            classe.metodo3();
        }
        System.out.println("");
    
        ClasseFilha2 classeFilha2 = new ClasseFilha2();
        classeFilha2.metodo2();

        ClasseFilha3 classeFilha3 = new ClasseFilha3();
        classeFilha3.metodo1();
        classeFilha3.metodo3();
    }
}
