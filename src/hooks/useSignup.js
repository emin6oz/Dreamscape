import { useState } from "react";
import axios from "axios";

// Always send cookies with requests
axios.defaults.withCredentials = true;

export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const signup = async ({ name, email, dob, phone, password }) => {
    setLoading(true);
    setError("");

    try {
      // Step 1: Get CSRF cookie
      await axios.get("http://localhost:8000/sanctum/csrf-cookie");

      // Step 2: Send registration data
      const response = await axios.post("http://localhost:8000/api/register", {
        name,
        email,
        dob,
        phone,
        password,
      });

      return response.data.user; // return the created user
    } catch (err) {
      console.error("Signup error:", err.response);
      setError(
        err.response?.data?.message ||
          err.response?.data?.errors?.email?.[0] ||
          "Something went wrong during signup."
      );
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error };
};
