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
      setResults(response.data.final); // Save the results from the response
    } catch (error) {
      console.error("Error ejecutando el algoritmo genético:", error);
    }
  };

  return (
    <div className="algoritmo-container">
      <h2>Algoritmo Genético</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-group">
          <label>Tamaño de población</label>
          <input
            type="number"
            name="population_size"
            value={params.population_size}
            onChange={handleChange}
            placeholder="Tamaño de población"
          />
        </div>
        <div className="input-group">
          <label>Número de generaciones</label>
          <input
            type="number"
            name="generations"
            value={params.generations}
            onChange={handleChange}
            placeholder="Número de generaciones"
          />
        </div>
        <div className="input-group">
          <label>Tasa de mutación</label>
          <input
            type="number"
            name="mutation_rate"
            value={params.mutation_rate}
            onChange={handleChange}
            step="0.01"
            placeholder="Tasa de mutación"
          />
        </div>
        <div className="input-group">
          <label>Tamaño del torneo</label>
          <input
            type="number"
            name="tournament_k"
            value={params.tournament_k}
            onChange={handleChange}
            placeholder="Tamaño del torneo"
          />
        </div>
        <div className="input-group">
          <label>Tamaño de elite</label>
          <input
            type="number"
            name="elite_size"
            value={params.elite_size}
            onChange={handleChange}
            placeholder="Tamaño de elite"
          />
        </div>
        <div className="input-group">
          <label>Intervalo de reinicio</label>
          <input
            type="number"
            name="reinit_interval"
            value={params.reinit_interval}
            onChange={handleChange}
            placeholder="Intervalo de reinicio"
          />
        </div>
        <div className="input-group">
          <label>Tasa de reinicio</label>
          <input
            type="number"
            name="reinit_rate"
            value={params.reinit_rate}
            onChange={handleChange}
            step="0.01"
            placeholder="Tasa de reinicio"
          />
        </div>
        <div className="input-group">
          <label>Número de vehículos</label>
          <input
            type="number"
            name="num_vehicles"
            value={params.num_vehicles}
            onChange={handleChange}
            placeholder="Número de vehículos"
          />
        </div>
        <div className="input-group">
          <label>Capacidad del vehículo</label>
          <input
            type="number"
            name="vehicle_capacity"
            value={params.vehicle_capacity}
            onChange={handleChange}
            placeholder="Capacidad del vehículo"
          />
        </div>
        <button type="submit">Ejecutar</button>
      </form>

      {results && (
        <div className="results">
          <h3>Resultados</h3>
          <p>Mejor solución: {JSON.stringify(results.best_solution)}</p>
          <p>Distancia total: {results.total_distance}</p>
        </div>
      )}
    </div>
  );
};

export default AlgoritmoGenetico;
