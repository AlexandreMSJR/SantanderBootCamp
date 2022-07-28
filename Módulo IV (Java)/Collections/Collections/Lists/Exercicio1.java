import java.util.List;
import java.util.Scanner;
import java.util.Iterator;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Collections;
import java.text.DecimalFormat;

public class Exercicio1 {
    /*
     * Faça um programa que receba a temperatura média os 6 primeiros meses do ano e
     * armazene-as em uma lista.
     * Após isto, calcule a média semestral das temperaturas e mostre todas as
     * temperaturas acima desta média,
     * e em que mês elas ocorreram (mostrar o mês por extenso: 1 – Janeiro, 2 –
     * Fevereiro e etc).
     */

     public static void main(String[] args) {
        List<Double> temperaturas = new ArrayList<>();
        Scanner scan = new Scanner(System.in);

        System.out.println("Informe a temperatura de Janeiro");
        Double resposta = scan.nextDouble();
        temperaturas.add(resposta);

        System.out.println("Informe a temperatura de Fevereiro");
        resposta = scan.nextDouble();
        temperaturas.add(resposta);
        
        System.out.println("Informe a temperatura de Março");
        resposta = scan.nextDouble();
        temperaturas.add(resposta);

        System.out.println("Informe a temperatura de Abril");
        resposta = scan.nextDouble();
        temperaturas.add(resposta);

        System.out.println("Informe a temperatura de Maio");
        resposta = scan.nextDouble();
        temperaturas.add(resposta);

        System.out.println("Informe a temperatura de Junho");
        resposta = scan.nextDouble();
        temperaturas.add(resposta);

        Iterator<Double> contador = temperaturas.iterator();
        Double somaDeTemp = 0d;
        while (contador.hasNext()) {
            Double next = contador.next();
            somaDeTemp += next;
        }
        System.out.println("Média das temperaturas: " + new DecimalFormat("#,##0.0").format((somaDeTemp / temperaturas.size())));
        System.out.println( "\nMês de Janeiro: ( " + new DecimalFormat("#,##0.0").format(temperaturas.get(0)) + " )" +
                            "\nMês de Fevereiro:  ( " + new DecimalFormat("#,##0.0").format(temperaturas.get(1)) + " )" +
                            "\nMês de Março: ( " + new DecimalFormat("#,##0.0").format(temperaturas.get(2)) + " )" +
                            "\nMês de Abril: ( " + new DecimalFormat("#,##0.0").format(temperaturas.get(3)) + " )" +
                            "\nMês de Maio: ( " + new DecimalFormat("#,##0.0").format(temperaturas.get(4)) + " )" + 
                            "\nMês de Junho: ( " + new DecimalFormat("#,##0.0").format(temperaturas.get(5)) + " )");


        System.out.println("\nMês mais quente: " + Collections.max(temperaturas));
        System.out.println("Mês mais frio: " + Collections.min(temperaturas));
     }
}
