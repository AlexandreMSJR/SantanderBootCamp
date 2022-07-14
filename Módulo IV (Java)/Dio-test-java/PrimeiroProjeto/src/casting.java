public class casting {
    
    public static void main (String[] args) {

        // Implicíto = upcast, não há a nececidade de declarar a alteração
        // Explicíto =  downcast precisa informar o que sera transformado (byte, float, int, double)

        byte b1;
        short s1 = 1000;
        b1 = (byte) s1; // downcast (Reduzindo a capacidade), desta forma ocasionará perda de informação.

        long l1;
        int i1 = 10;
        l1 = i1; //  upcast (aumentando a capacidade (promovendo)), desta forma ocasionará a sobra de espaço.

        int i2;
        long l2 = 1000000000000L;
        i2 = (int) l2; // downcast

        int i3;
        long l3 = 10000L;
        i3 = (int) l3; // downcast sem efeito colateral

        double d1;
        float f1 = 10.5f;
        d1 = f1; // upcast

        float f2;
        float f3;
        double d2 = 10000.58d;
        f2 = (float) d2; // downcast sem perde
        double d3 = 10000.5999999999999999999999999999999d;
        f3 = (float) d3; // downcast com perda

        int i4;
        float f4 =  11.546453f;
        i4 = (int) f4; // (real para um inteiro ) = trucar ou seja, ignorou o valor fracionado (atentar a isso em vista da perda de informação)


        System.out.println("b1:" + b1);
        System.out.println("l1:" + l1);
        System.out.println("i2:" + i2);
        System.out.println("i3:" + i3);
        System.out.println("d1:" + d1);
        System.out.println("f2:" + f2);
        System.out.println("f3" + f3);
        System.out.println("i4:" + i4);

        b1 = (byte) d3;

        System.out.println("b1:" + b1);
    }

}
