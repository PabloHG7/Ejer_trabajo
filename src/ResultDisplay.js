import React from 'react';

const ResultDisplay = ({ result }) => {
  return (
    <div>
      <h2>Resultado:</h2>
      <p>{result !== null ? result : 'Introduce un número entero positivo'}</p>
    </div>
  );
};

export default ResultDisplay;
