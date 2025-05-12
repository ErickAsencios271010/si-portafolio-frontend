import React, { useState } from "react";
import { ejecutarAlgoritmoNB } from "../services/api";

const AlgoritmoNB = () => {
  const [inputData, setInputData] = useState("");
  const [resultado, setResultado] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ejecutarAlgoritmoNB({ input: inputData });
      setResultado(response.resultado); // Ajusta según la respuesta del backend
    } catch (error) {
      console.error("Error ejecutando el algoritmo Naive Bayes", error);
    }
  };

  return (
    <div className="algoritmo-container">
      <h2>Algoritmo Naive Bayes</h2>
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

export default AlgoritmoNB;
