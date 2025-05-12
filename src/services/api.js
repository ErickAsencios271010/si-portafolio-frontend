import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';  // Cambia el puerto si es necesario

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Algoritmo Genético
export const ejecutarAlgoritmoGenetico = async (data) => {
  try {
    const response = await api.post('/algoritmos/genetico', data);
    return response.data;
  } catch (error) {
    console.error('Error ejecutando algoritmo genético', error);
    throw error;
  }
};

// Algoritmo Naive Bayes
export const ejecutarAlgoritmoNB = async (data) => {
  try {
    const response = await api.post('/algoritmos/nb', data);
    return response.data;
  } catch (error) {
    console.error('Error ejecutando algoritmo Naive Bayes', error);
    throw error;
  }
};

// Algoritmo Neural Network
export const ejecutarAlgoritmoNN = async (data) => {
  try {
    const response = await api.post('/algoritmos/nn', data);
    return response.data;
  } catch (error) {
    console.error('Error ejecutando algoritmo Neural Network', error);
    throw error;
  }
};
