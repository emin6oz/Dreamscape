import { useState } from "react";
import axios from "axios";

// Always allow cookies
axios.defaults.withCredentials = true;

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const login = async (email, password) => {
    setLoading(true);
    setError("");

    try {
      // Step 1: Get CSRF token cookie
      await axios.get("http://localhost:8000/sanctum/csrf-cookie");

      // Step 2: Read XSRF token from cookie manually
      const xsrfToken = decodeURIComponent(
        document.cookie
          .split("; ")
          .find((row) => row.startsWith("XSRF-TOKEN="))
          ?.split("=")[1] || ""
      );

      // Step 3: Send login request with CSRF header
      const response = await axios.post(
        "http://localhost:8000/api/login",
        { email, password },
        {
          headers: {
            "X-XSRF-TOKEN": xsrfToken,
          },
        }
      );

      return response.data.user;
    } catch (err) {
      console.error("Login error:", err.response);
      setError(
        err.response?.data?.message || "Something went wrong during login."
      );
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
