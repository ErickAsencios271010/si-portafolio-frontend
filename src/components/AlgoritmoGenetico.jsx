import React, { useState } from "react";
import { ejecutarAlgoritmoGenetico } from "../services/api";

const AlgoritmoGenetico = () => {
  const [inputData, setInputData] = useState("");
  const [resultado, setResultado] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ejecutarAlgoritmoGenetico({ input: inputData });
      setResultado(response.resultado); // Ajusta según la respuesta del backend
    } catch (error) {
      console.error("Error ejecutando el algoritmo genético", error);
    }
  };

  return (
    <div className="algoritmo-container">
      <h2>Algoritmo Genético</h2>
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

export default AlgoritmoGenetico;

