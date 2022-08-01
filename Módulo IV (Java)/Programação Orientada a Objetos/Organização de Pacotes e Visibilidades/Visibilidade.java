public class Visibilidade {
    private class Private { // Só dentro da classe
        private int i;
        // private void do();
    }

    protected class Protect { // Dentro da classe, mesmo pacote e subclasses.
        protected int i;
        // protected void do();
    }
    
    public class Public { // Em qualquer lugar
        public int i;
        // public void do();
    }
}
