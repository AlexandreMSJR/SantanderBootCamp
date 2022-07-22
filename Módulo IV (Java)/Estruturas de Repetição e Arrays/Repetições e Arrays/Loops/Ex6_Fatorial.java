import java.util.Scanner;

/*
Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário.
Ex.: 5!=5.4.3.2.1=120
*/

public class Ex6_Fatorial {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("Informe o número: ");
        int fatorial = scan.nextInt();
        int multiplicador = 1;
        
        for ( int i = 0; i >= fatorial; i--) {

            multiplicador = multiplicador * i;
            System.out.print(fatorial + "! = ");
        }

        System.out.println(multiplicador);
    }
}
