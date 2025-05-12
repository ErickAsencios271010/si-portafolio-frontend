import React, { useState } from "react";
import AlgoritmoGenetico from "./components/AlgoritmoGenetico";
import AlgoritmoNB from "./components/AlgoritmoNB";
import AlgoritmoNN from "./components/AlgoritmoNN";
import "./assets/App.css";

const App = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("genetico");

  const handleAlgorithmChange = (event) => {
    setSelectedAlgorithm(event.target.value);
  };

  return (
    <div className="app-container">
      <h1>Selecciona el algoritmo</h1>
      <select onChange={handleAlgorithmChange} value={selectedAlgorithm}>
        <option value="genetico">Algoritmo Genético</option>
        <option value="nb">Naive Bayes</option>
        <option value="nn">Red Neuronal</option>
      </select>

      {selectedAlgorithm === "genetico" && <AlgoritmoGenetico />}
      {selectedAlgorithm === "nb" && <AlgoritmoNB />}
      {selectedAlgorithm === "nn" && <AlgoritmoNN />}
    </div>
  );
};

export default App;

