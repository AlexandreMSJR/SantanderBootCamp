import java.util.Scanner;

/*
Faça um programa que peça N números inteiros,
calcule e mostre a quantidade de números pares
e a quantidade de números impares.
*/

public class Ex4_ParEImpar {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int quantNumeros;
        int numero;
        int quantPares = 0; int quantImpares = 0;

        System.out.println("Quantidade de Números: ");
        quantNumeros = scan.nextInt();

        int count = 0;

        do {
            System.out.println("Número: ");
            numero = scan.nextInt();

            if (numero % 2 == 0 ) quantPares++;
            else quantImpares++;

            // count = count + 1;s
            count++;
        } while (count < quantNumeros); // quantidade de vezes que o laço vai se repetir.

        System.out.println("Quantidade de Pares: " + quantPares);
        System.out.println("Quantidade de Impares: " + quantImpares);
    }
}
