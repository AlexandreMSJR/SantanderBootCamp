import javax.swing.*;

// Fazer a divisão de 2 valores inteiros

public class Unchecked {
    public static void main(String[] args) {
        boolean continueLoop = true;

        do {

            String a = JOptionPane.showInputDialog("Numerados: ");
            String b = JOptionPane.showInputDialog("Denominador: ");

            try {
                int resultado = dividir(Integer.parseInt(a), Integer.parseInt(b));
                System.out.println("Resultado: " + resultado);
                continueLoop = false;
            } catch (NumberFormatException e) {
                JOptionPane.showMessageDialog(null, "Entrada inválida, informe um número inteiro!" + e.getMessage()); // Imprimi para o usuário.
                // e.printStackTrace(); Imprimi apenas no console de desenvolvimento.
            } catch (ArithmeticException e) {
                JOptionPane.showMessageDialog(null, "Impossível dividir um número por zero!" + e.getMessage()); // Imprimi para o usuário.
            } finally { // Opcional
                System.out.println("Chegou no finally");
            }

        } while (continueLoop);

        System.out.println("O código continua ....");
    }

    public static int dividir(int a, int b) {
        return a / b;
    }
}
