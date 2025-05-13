import React, { useState } from "react";
import axios from "axios";

const AlgoritmoNN = () => {
  const [params, setParams] = useState({
    w_ih: [[0.1, 0.2], [0.3, 0.4]],
    w_ho: [0.5, 0.6],
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
      const response = await axios.post("http://localhost:5000/run-nn", params);
      setResults(response.data.final); // Save the results from the response
    } catch (error) {
      console.error("Error ejecutando el algoritmo de Red Neuronal:", error);
    }
  };

  return (
    <div className="algoritmo-container">
      <h2>Red Neuronal</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-group">
          <label>Pesos de la capa de entrada a capa oculta</label>
          <input
            type="text"
            name="w_ih"
            value={params.w_ih}
            onChange={handleChange}
            placeholder="Pesos capa entrada-oculta"
          />
        </div>
        <button type="submit">Ejecutar</button>
      </form>

      {results && (
        <div className="results">
          <h3>Resultados</h3>
          <p>Pesos finales: {JSON.stringify(results.final_weights)}</p>
        </div>
      )}
    </div>
  );
};

export default AlgoritmoNN;
