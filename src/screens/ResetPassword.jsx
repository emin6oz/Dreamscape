import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

export default function ResetPassword() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: params.get("email") || "",
    token: params.get("token") || "",
    password: "",
    password_confirmation: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/reset-password", form);
      setMessage(res.data.message);
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error resetting password.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Reset Password</h1>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="token" value={form.token} />
          <label>Email</label>
          <input name="email" value={form.email} onChange={handleChange} />

          <label>New Password</label>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            value={form.password}
          />

          <label>Confirm Password</label>
          <input
            name="password_confirmation"
            type="password"
            onChange={handleChange}
            value={form.password_confirmation}
          />

          <button type="submit">Reset Password</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}
