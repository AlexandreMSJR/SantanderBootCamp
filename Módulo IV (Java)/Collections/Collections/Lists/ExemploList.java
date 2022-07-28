import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

public class ExemploList {
    public static void main(String[] args) {
        /*
         * List<Double> notas = Arrays.asList(7d, 1.5, 9.5, 5d, 7d);
         * notas.add(1d); Quando utilizamos o asList, não podemos adicionar mais nada
         * dentro do array.
         * System.out.println(notas);
         * 
         * List<Double> notas = Arrays.of(7d, 1.5, 9.5, 5d, 7d); ( Similar com a
         * situação acima )
         * notas.add(1d);
         * notas.remove(5d);
         * System.out.println(notas);
         */

        System.out.println("Crie uma lista e adicione as setes notas: ");

        List<Double> notas = new ArrayList<Double>();
        notas.add(7.0);
        notas.add(8.5);
        notas.add(9.3);
        notas.add(5.0);
        notas.add(7.0);
        notas.add(0.0);
        notas.add(3.6);
        /*
        System.out.println(notas);
        // System.out.println(notas.toString()); ( Funciona chamando assim também )

        System.out.println("Exiba a posição da nota 5.0: " + notas.indexOf((5d)));

        System.out.println("Adicione na lista a nota 8.0 na posição 4: ");
        notas.add(4, 8.0);
        System.out.println(notas);

        System.out.println("Substitua a nota 5.0 pela nota 6.0: ");
        notas.set(notas.indexOf(5d), 6.0);
        System.out.println(notas);

        System.out.println("Confira se a nota 5.0 está na lista: " + notas.contains(5d));

        // System.out.println("Exiba todas as notas na ordem em que foram informados :
        // ");
        // for (Double nota : notas) System.out.println(nota);

        System.out.println("Exiba a terceira nota adiconada: " + notas.get(2));

        System.out.println("Exiba a menor nota: " + Collections.min(notas));

        System.out.println("Exiba a menor nota: " + Collections.max(notas));

        System.out.println("Exiba a menor nota: ");

        // Exiba a soma dos valores
        Iterator<Double> iterator = notas.iterator(); // Iterando os valores, ele verificar de forma boolean se há next
                                                      // e vai somando o array.
        Double soma = 0d;
        while (iterator.hasNext()) {
            Double next = iterator.next();
            soma += next;
        }
        System.out.println("Exiba a soma dos valores: " + soma);

        System.out.println("Exiba a média das notas: " + (soma / notas.size()));

        System.out.println("Remova a nota 0: ");
        notas.remove(0d);
        System.out.println(notas);

        System.out.println("Remova as notas menores que 7 e exiba a lista: ");
        Iterator<Double> iterator1 = notas.iterator();
        while (iterator1.hasNext()) {
            Double next = iterator1.next();
            if (next < 7)
                iterator1.remove();
        }
        System.out.println(notas);

        /*
         * System.out.println("Apague toda a lista");
         * notas.clear();
         * System.out.println(notas);
         */

        System.out.println("Confira se a lista está vazia:" + notas.isEmpty());

        /*
         * Para você: Resolva esses exercícios utilizando os métodos da implementação
         * LinkedList:
         */

        System.out.println("Crie uma lista chamada notas2 " + "e coloque todos os elementos da list Arraylist nessa nova lista: ");
        List<Double> notas2 = new ArrayList<>();
        notas2.addAll(notas);
        System.out.println(notas2);

        System.out.println("Mostre a primeira nota da nova lista sem removê-lo: " + notas2.get(0));

        System.out.println("Mostre a primeira nota da nova lista removendo-o: ");
        notas2.remove(0);
        System.out.println(notas2.get(0));

    }
}
