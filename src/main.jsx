import React from 'react'; 
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios'; 
import './index.css';
import App from './App.jsx';

//Axios config for CSRF protection with Sanctum
axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
