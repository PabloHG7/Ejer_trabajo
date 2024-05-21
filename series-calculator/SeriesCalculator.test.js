// Importa la clase SeriesCalculator desde el archivo SeriesCalculator.js
const SeriesCalculator = require('./SeriesCalculator');

// Prueba específica para la serie cuando n=10
test('series calculation for n=10', () => {
  // Se espera que el resultado de la serie para n=10 sea 126
  expect(SeriesCalculator.series(10)).toBe(126);
});

// Bucle para realizar pruebas en los primeros 10 números naturales
for (let i = 1; i <= 10; i++) {
  // Define una prueba dinámica para cada valor de n desde 1 hasta 10
  test(`series calculation for n=${i}`, () => {
    // Calcula el número triangular para el valor 2*n
    const triangular = SeriesCalculator.triangularNumber(i * 2);
    // Calcula el n-ésimo número primo
    const prime = SeriesCalculator.primeNumber(i);
    // Calcula el n-ésimo número de Fibonacci
    const fibonacci = SeriesCalculator.fibonacciNumber(i);
    // Calcula el valor esperado de la serie según la fórmula dada
    const expected = triangular - prime - fibonacci;
    // Verifica que el resultado del método series sea igual al valor esperado
    expect(SeriesCalculator.series(i)).toBe(expected);
  });
}
