// import { useState } from "react";
// import axios from "axios";

// // Setup Axios globally
// axios.defaults.baseURL = "http://localhost:8000";
// axios.defaults.withCredentials = true;
// axios.defaults.withXSRFToken = true;

// export const useLogin = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const login = async (email, password) => {
//     setLoading(true);
//     setError("");

//     try {
//       // 1️⃣ Get CSRF cookie (sets XSRF-TOKEN + laravel_session)
//       await axios.get("/sanctum/csrf-cookie");

//       // 2️⃣ Send login request — XSRF token will be auto-attached by Axios
//       const response = await axios.post("/api/login", {
//         email,
//         password,
//       });

//       return response.data.user;
//     } catch (err) {
//       console.error("Login error:", err.response || err);
//       setError(
//         err.response?.data?.message || "Something went wrong during login."
//       );
//       return null;
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { login, loading, error };
// };


// src/hooks/useLogin.js
import { useState } from "react";
import axios from "axios";
import { useUser } from "../context/useUser";

axios.defaults.withCredentials = true;

export const useLogin = () => {
  const { setUser } = useUser(); // 🔥 pull setUser from context
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const login = async (email, password) => {
    setLoading(true);
    setError("");

    try {
      // 1️⃣ Set CSRF cookie
      await axios.get("http://localhost:8000/sanctum/csrf-cookie");

      // 2️⃣ Send login request
      const res = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });

      // 3️⃣ Store the user in context
      setUser(res.data.user); // 🔥 this makes the username show in ProfileScreen

      return res.data.user;
    } catch (err) {
      console.error("Login error:", err.response || err);
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
