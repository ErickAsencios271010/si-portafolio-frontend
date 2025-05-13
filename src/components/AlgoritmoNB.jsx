import React, { useState } from "react";
import axios from "axios";

const AlgoritmoNB = () => {
  const [params, setParams] = useState({
    test_size: 0.2,
    random_state: 42,
    lowercase: true,
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
      const response = await axios.post("http://localhost:5000/run-naive-bayes", params);
      setResults(response.data.final); // Save the results from the response
    } catch (error) {
      console.error("Error ejecutando el algoritmo Naive Bayes:", error);
    }
  };

  return (
    <div className="algoritmo-container">
      <h2>Naive Bayes</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-group">
          <label>Tamaño del test</label>
          <input
            type="number"
            name="test_size"
            value={params.test_size}
            onChange={handleChange}
            step="0.01"
            placeholder="Tamaño del test"
          />
        </div>
        <div className="input-group">
          <label>Estado aleatorio</label>
          <input
            type="number"
            name="random_state"
            value={params.random_state}
            onChange={handleChange}
            placeholder="Estado aleatorio"
          />
        </div>
        <button type="submit">Ejecutar</button>
      </form>

      {results && (
        <div className="results">
          <h3>Resultados</h3>
          <p>Exactitud: {results.metrics.BernoulliNB.accuracy}</p>
          <p>Precisión: {results.metrics.BernoulliNB.precision}</p>
        </div>
      )}
    </div>
  );
};

export default AlgoritmoNB;
