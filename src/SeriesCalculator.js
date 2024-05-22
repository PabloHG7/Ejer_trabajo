class SeriesCalculator {

    static triangularNumber(n) {
      return (n * (n + 1)) / 2; // Form trian
    }
  
    static fibonacciNumber(n) {
      if (n <= 1) return n; // primeros nfibo 0 1
      return this.fibonacciNumber(n - 1) + this.fibonacciNumber(n - 2); 
    }

    //numprimo
    static isPrime(num) {
      if (num <= 1) return false; 
      if (num <= 3) return true; // 2 y 3 son números primos
      if (num % 2 === 0 || num % 3 === 0) return false; 
      for (let i = 5; i * i <= num; i += 6) { // 
        if (num % i === 0 || num % (i + 2) === 0) return false; // Elimina múltiplos de i y i+2
      }
      return true; // Si pasa todas las pruebas, el num es primo
    }
  
    static primeNumber(n) {
      let count = 0;
      let num = 2;
      while (true) { // Bucle infinito hasta encontrar el n-ésimo primo
        if (this.isPrime(num)) { // Verifica si el número actual es primo
          count++;
          if (count === n) return num; 
        }
        num++; // Incrementa el número y continua la búsqueda
      }
    }
  
    // Método estático para calcular el término n de la serie
    static series(n) {
      const triangular = this.triangularNumber(n * 2); 
      const prime = this.primeNumber(n);
      const fibonacci = this.fibonacciNumber(n); 
      return triangular - prime - fibonacci; 
    }
  }
  
  module.exports = SeriesCalculator;
  