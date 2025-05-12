import React from "react";
import AlgoritmoGenetico from "./components/AlgoritmoGenetico";
import AlgoritmoNB from "./components/AlgoritmoNB";
import AlgoritmoNN from "./components/AlgoritmoNN";
import "./assets/App.css";  // Asegúrate de tener este archivo con los estilos actualizados

const App = () => {
  return (
    <div className="app-container">
      <h1>Aplicación de Algoritmos</h1>
      <AlgoritmoGenetico />
      <AlgoritmoNB />
      <AlgoritmoNN />
    </div>
  );
};

export default App;
