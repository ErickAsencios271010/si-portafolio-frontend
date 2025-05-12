import React, { useState } from "react";
import axios from "axios";

const AlgoritmoNB = () => {
  const [params, setParams] = useState({
    test_size: 0.2,
    random_state: 42,
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
      console.error("Error ejecutando Naive Bayes:", error);
    }
  };

  return (
    <div className="algoritmo-container">
      <h2>Naive Bayes</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="test_size"
          value={params.test_size}
          onChange={handleChange}
          placeholder="Tamaño de prueba"
        />
        <input
          type="number"
          name="random_state"
          value={params.random_state}
          onChange={handleChange}
          placeholder="Estado aleatorio"
        />
        {/* Agregar más campos si es necesario */}
        <button type="submit">Ejecutar</button>
      </form>
      {results && (
        <div>
          <h3>Resultados</h3>
          <p>Exactitud: {results.metrics.BernoulliNB.accuracy}</p>
          {/* Muestra más métricas según se requiera */}
        </div>
      )}
    </div>
  );
};

export default AlgoritmoNB;
