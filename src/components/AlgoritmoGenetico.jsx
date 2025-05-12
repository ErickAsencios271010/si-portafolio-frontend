import React, { useState } from "react";
import axios from "axios";

const AlgoritmoGenetico = () => {
  const [params, setParams] = useState({
    population_size: 100,
    generations: 500,
    mutation_rate: 0.15,
    tournament_k: 2,
    elite_size: 2,
    reinit_interval: 50,
    reinit_rate: 0.1,
    num_vehicles: 4,
    vehicle_capacity: 15,
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
      console.error("Error ejecutando el algoritmo genético:", error);
    }
  };

  return (
    <div className="algoritmo-container">
      <h2>Algoritmo Genético</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="population_size"
          value={params.population_size}
          onChange={handleChange}
          placeholder="Tamaño de población"
        />
        <input
          type="number"
          name="generations"
          value={params.generations}
          onChange={handleChange}
          placeholder="Generaciones"
        />
        {/* Agregar más inputs aquí según sea necesario */}
        <button type="submit">Ejecutar</button>
      </form>
      {results && (
        <div>
          <h3>Resultados</h3>
          <p>Mejor solución: {results.best_solution}</p>
          <p>Distancia total: {results.total_distance}</p>
        </div>
      )}
    </div>
  );
};

export default AlgoritmoGenetico;

