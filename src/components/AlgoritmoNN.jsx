import React, { useState } from "react";
import { ejecutarAlgoritmoNN } from "../services/api";

const AlgoritmoNN = () => {
  const [inputData, setInputData] = useState("");
  const [resultado, setResultado] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ejecutarAlgoritmoNN({ input: inputData });
      setResultado(response.resultado); // Ajusta según la respuesta del backend
    } catch (error) {
      console.error("Error ejecutando el algoritmo de Redes Neuronales", error);
    }
  };

  return (
    <div className="algoritmo-container">
      <h2>Algoritmo de Redes Neuronales</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          placeholder="Ingrese los datos"
        />
        <button type="submit">Ejecutar</button>
      </form>
      {resultado && <p>Resultado: {resultado}</p>}
    </div>
  );
};

export default AlgoritmoNN;
