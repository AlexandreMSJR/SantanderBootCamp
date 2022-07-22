import java.util.Random;

import javax.swing.plaf.basic.BasicInternalFrameTitlePane.SystemMenuBar;

/*
Faça um Programa que leia 20 números inteiros aleatórios (entre 0 e 100) armazene-os num vetor.
Ao final mostre os números e seus sucessores.
*/

public class Ex3_NumerosAleatorios {
    public static void main(String[] args) {
        Random random = new Random();

        int[] numerosAleatorios = new int[20];

        for (int i = 0; i < numerosAleatorios.length; i ++) {
            int numero = random.nextInt(100);
            numerosAleatorios[i] = numero;
        } 

        System.out.print("\nAntecessor dos Números aleatórios: ");
        for (int numero : numerosAleatorios) {
            System.out.println(numero - 1 + " ");
        }

        System.out.print("Números aleatórios: ");
        for (int numero : numerosAleatorios) {
            System.out.println(numero + " ");
        }

        System.out.print("\nSucessores dos Números aleatórios: ");
        for (int numero : numerosAleatorios) {
            System.out.println(numero + 1 + " ");
        }


    }
}
