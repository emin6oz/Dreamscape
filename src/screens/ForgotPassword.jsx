import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./login.scss";


axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8000";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setStatus("");
    setError("");
    setLoading(true);

    try {
      // Step 1: Get CSRF cookie
      await axios.get("/sanctum/csrf-cookie");

      // Step 2: Read token from cookies manually
      const csrfToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("XSRF-TOKEN="))
        ?.split("=")[1];

      // Step 3: Send reset email request with X-XSRF-TOKEN header
      await axios.post(
        "/api/forgot-password",
        { email },
        {
          headers: {
            "X-XSRF-TOKEN": decodeURIComponent(csrfToken),
          },
        }
      );

      setStatus("Reset link sent! Please check your email.");
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Forgot Password</h1>
        <p className="subtitle">
          Enter your email and we'll send you a password reset link.
        </p>

        <form onSubmit={handleForgotPassword}>
          <label>Email</label>
          <input
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {status && <p className="success-message">{status}</p>}
          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <p className="signup-text">
          <Link to="/login" className="signup-link">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
