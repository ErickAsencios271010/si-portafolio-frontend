import React, { useState } from "react";
import axios from "axios";

const AlgoritmoNN = () => {
  const [params, setParams] = useState({
    w_ih: [[0.1, 0.2], [0.3, 0.4]], // Pesos de entrada a oculta
    w_ho: [0.5, 0.6],               // Pesos de oculta a salida
    dataset: [
      { x: [0.0, 0.0], y: 0 },
      { x: [0.0, 1.0], y: 1 },
      { x: [1.0, 0.0], y: 1 },
      { x: [1.0, 1.0], y: 0 },
    ],
    learning_rate: 0.25,
  });
  const [results, setResults] = useState(null);

  const handleChange = (e) => {
    setParams({
      ...params,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/run-genetic", params);
      setResults(response.data.final);
    } catch (error) {
      console.error("Error ejecutando la red neuronal:", error);
    }
  };

  return (
    <div className="algoritmo-container">
      <h2>Red Neuronal</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="learning_rate"
          value={params.learning_rate}
          onChange={handleChange}
          placeholder="Tasa de aprendizaje"
        />
        {/* Agregar más campos de pesos y dataset si es necesario */}
        <button type="submit">Ejecutar</button>
      </form>
      {results && (
        <div>
          <h3>Resultados</h3>
          <p>Pesos finales: {JSON.stringify(results.final_weights)}</p>
        </div>
      )}
    </div>
  );
};

export default AlgoritmoNN;
