public class Quadrilatero {
    /* public static void area (double lado) {
        System.out.println("area do quadrado:" + lado * lado);
    }

    public static void area (double lado1, double lado2) {
        System.out.println("area do retângulo:" + lado1 * lado2);
    }

    public static void area (double baseMaior, double baseMenor, double altura) {
        System.out.println("area do quadrado:" + ( ( baseMaior + baseMenor ) * altura ) / 2 );
    }

    public static void area (float diagonal1, float diagonal2) { // para realizar a sobrecarga, não podemos repetir o mesmo tipo, neste caso se colocarmos o double ira dar erro.
        System.out.println("area do losango:" + ((diagonal1 * diagonal2) / 2) );
    } */

    public static double area (double lado) {
        return lado * lado;
    }

    public static double area (double lado1, double lado2) {
        return lado1 * lado2;
    }

    public static double area (double baseMaior, double baseMenor, double altura) {
        return ( ( baseMaior + baseMenor ) * altura ) / 2 ;
    }

    public static void xpto() {

        System.out.println("antes");
        return;
    }

    public static /* float */  double abc() {

        return 1.6; // da erro em vista da compatibilidade, pois deveria ser double
    }
}
