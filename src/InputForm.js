import React, { useState } from 'react';

const InputForm = ({ onSubmit }) => {
  // Estado local para almacenar el valor del campo de entrada y el mensaje de error
  const [numero, setNumero] = useState('');
  const [mensajeError, setMensajeError] = useState('');

    const manejarEnvio = (evento) => {
        evento.preventDefault(); 
        const numeroParseado = parseInt(numero, 10); 
        if (!isNaN(numeroParseado) && Number.isInteger(numeroParseado) && numeroParseado > 0) { 
        setMensajeError(''); 
        onSubmit(numeroParseado); 
        } else {
        setMensajeError('Por favor, introduce un número entero positivo válido'); // Establece el mensaje de error si la entrada no es válida
        }
    };

  const manejarCambio = (evento) => {
    const valor = evento.target.value;
    if (/^\d*$/.test(valor)) { 
      setNumero(valor); 
      setMensajeError(''); 
    } else {
      setMensajeError('Por favor, introduce un número entero positivo válido'); 
    }
  };

  return (
    <form onSubmit={manejarEnvio}>
      <label>
        Introduce el número n:
        <input
          type="number" 
          value={numero} 
          onChange={manejarCambio} 
          required // campo obligatorio
        />
      </label>
      <button type="submit">Calcular</button> {/* Boton para enviar el formulario */}
      {mensajeError && <p style={{ color: 'red' }}>{mensajeError}</p>} {/* Muestra el mensaje de error si existe */}
    </form>
  );
};

export default InputForm;
