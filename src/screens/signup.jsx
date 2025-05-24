import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useSignup } from "../hooks/useSignup"; // Make sure this exists
import "./signup.scss";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    phone: "",
    password: "",
  });

  const { signup, loading, error } = useSignup();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = await signup(formData);
    if (user) {
      navigate("/splash?from=signup");
    }
  };

  return (
    <div className="signup-page">
      <button className="back-button" onClick={() => navigate("/login")}>
        ←
      </button>

      <div className="signup-container">
        <h1>Sign up</h1>
        <p className="subtitle">Create an account to continue!</p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Lois Becket"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="loisbecket@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>

          <div className="phone-input-container">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="(454) 726-0592"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="password-wrapper">
            <label>Set Password</label>
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="******"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="toggle-visibility"
            >
              {passwordVisible ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
            </button>
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="register-button" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="bottom-text">
          Already have an account?{" "}
          <Link to="/login" className="login-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
