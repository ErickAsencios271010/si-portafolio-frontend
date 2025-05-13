import React, { useState } from 'react';
import "./assets/App.css";

function App() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('Algoritmo Genético');
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
    test_size: 0.2,
    random_state: 42,
    dataset: '[{ "x": [0.0, 0.0], "y": 0 }, { "x": [0.0, 1.0], "y": 1 }, { "x": [1.0, 0.0], "y": 1 }, { "x": [1.0, 1.0], "y": 0 }]',
    learning_rate: 0.25,
    w_ih: [[0.1, 0.2], [0.3, 0.4]],
    w_ho: [0.5, 0.6],
  });

  const handleChange = (e) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', params);
    // Aquí puedes hacer la llamada al backend para ejecutar el algoritmo
  };

  return (
    <div className="app-container">
      <h1>Selecciona el algoritmo</h1>
      <select
        name="algorithm"
        value={selectedAlgorithm}
        onChange={(e) => setSelectedAlgorithm(e.target.value)}
      >
        <option value="Algoritmo Genético">Algoritmo Genético</option>
        <option value="Algoritmo Naive Bayes">Algoritmo Naive Bayes</option>
        <option value="Algoritmo Redes Neuronales">Algoritmo Redes Neuronales</option>
      </select>

      <div className="algoritmo-container">
        <h2>{selectedAlgorithm}</h2>
        <form onSubmit={handleSubmit} className="form-container">
          {selectedAlgorithm === 'Algoritmo Genético' && (
            <>
              <div className="input-group">
                <label>Tamaño de población</label>
                <input
                  type="number"
                  name="population_size"
                  value={params.population_size}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label>Número de generaciones</label>
                <input
                  type="number"
                  name="generations"
                  value={params.generations}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label>Tasa de mutación</label>
                <input
                  type="number"
                  step="0.01"
                  name="mutation_rate"
                  value={params.mutation_rate}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label>Tamaño del torneo</label>
                <input
                  type="number"
                  name="tournament_k"
                  value={params.tournament_k}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label>Tamaño de elite</label>
                <input
                  type="number"
                  name="elite_size"
                  value={params.elite_size}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label>Intervalo de reinicio</label>
                <input
                  type="number"
                  name="reinit_interval"
                  value={params.reinit_interval}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label>Tasa de reinicio</label>
                <input
                  type="number"
                  step="0.01"
                  name="reinit_rate"
                  value={params.reinit_rate}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label>Número de vehículos</label>
                <input
                  type="number"
                  name="num_vehicles"
                  value={params.num_vehicles}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label>Capacidad del vehículo</label>
                <input
                  type="number"
                  name="vehicle_capacity"
                  value={params.vehicle_capacity}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          {selectedAlgorithm === 'Algoritmo Naive Bayes' && (
            <>
              <div className="input-group">
                <label>Tamaño de test</label>
                <input
                  type="number"
                  step="0.01"
                  name="test_size"
                  value={params.test_size}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label>Random State</label>
                <input
                  type="number"
                  name="random_state"
                  value={params.random_state}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          {selectedAlgorithm === 'Algoritmo Redes Neuronales' && (
            <>
              <div className="input-group">
                <label>Dataset</label>
                <textarea
                  name="dataset"
                  value={params.dataset}
                  onChange={handleChange}
                  rows="4"
                ></textarea>
              </div>
              <div className="input-group">
                <label>Learning Rate</label>
                <input
                  type="number"
                  step="0.01"
                  name="learning_rate"
                  value={params.learning_rate}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label>Pesos de Entrada a Capa Oculta (w_ih)</label>
                <textarea
                  name="w_ih"
                  value={JSON.stringify(params.w_ih)}
                  onChange={handleChange}
                  rows="3"
                ></textarea>
              </div>
              <div className="input-group">
                <label>Pesos de Capa Oculta a Capa de Salida (w_ho)</label>
                <textarea
                  name="w_ho"
                  value={JSON.stringify(params.w_ho)}
                  onChange={handleChange}
                  rows="2"
                ></textarea>
              </div>
            </>
          )}

          <button type="submit">Ejecutar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
