import React, { useState } from 'react';
import InputForm from './InputForm';
import calculateSeries from './SeriesCalculatorComponent';
import ResultDisplay from './ResultDisplay';
import './App.css';

const App = () => {
  const [result, setResult] = useState(null);

  const handleCalculate = (n) => {
    const result = calculateSeries(n);
    setResult(result);
  };

  return (
    <div className="App">
      <h1>Calculadora de Series Numéricas</h1>
      <InputForm onSubmit={handleCalculate} />
      <ResultDisplay result={result} />
    </div>
  );
};

export default App;
