import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useRegister } from "../hooks/useRegister"; 
import "./signup.scss";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date_of_birth: "",
    password: "",
    password_confirmation: ""
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const { register } = useRegister();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    try {
      await register(form);
      navigate("/login");
    } catch (err) {
      setErrors(err); // Laravel validation errors
    }
  };

  return (
    <div className="signup-page">
      <button className="back-button" onClick={() => navigate("/login")}>{`←`}</button>

      <div className="signup-container">
        <h1>Sign up</h1>
        <p className="subtitle">Create an account to continue!</p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div>
            <label>Full Name</label>
            <input type="text" name="name" placeholder="Lois Becket" value={form.name} onChange={handleChange} />
            {errors.name && <p className="error">{errors.name[0]}</p>}
          </div>

          <div>
            <label>Email</label>
            <input type="email" name="email" placeholder="Loisbecket@gmail.com" value={form.email} onChange={handleChange} />
            {errors.email && <p className="error">{errors.email[0]}</p>}
          </div>

          <div>
            <label>Birth of date</label>
            <input type="date" name="date_of_birth" value={form.date_of_birth} onChange={handleChange} />
            {errors.date_of_birth && <p className="error">{errors.date_of_birth[0]}</p>}
          </div>

          <div className="phone-input-container">
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="(454) 726-0592" value={form.phone} onChange={handleChange} />
          </div>

          <div className="password-wrapper">
            <label>Set Password</label>
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="******"
              value={form.password}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="toggle-visibility"
            >
              {passwordVisible ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
            </button>
            {errors.password && <p className="error">{errors.password[0]}</p>}
          </div>

          <div>
            <label>Confirm Password</label>
            <input
              type={passwordVisible ? "text" : "password"}
              name="password_confirmation"
              placeholder="******"
              value={form.password_confirmation}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="register-button">
            Register
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
