// src/hooks/useRegister.js
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8000"; 
axios.defaults.withXSRFToken = true; 



export const useRegister = () => {
  const register = async (formData) => {
    try {
      // Get CSRF token first
      await axios.get("/sanctum/csrf-cookie");

      // Post to register
      const response = await axios.post("/api/register", formData);

      return response.data;
    } catch (error) {
      if (error.response?.data?.errors) {
        throw error.response.data.errors; // Laravel validation errors
      }
      throw error;
    }
  };

  return { register };
};
