import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useRegister } from "../hooks/useRegister"; // A custom hook that sends the form data to your backend to register the user.

import "./signup.scss";

// SignUp component handles the registration form and logic
const SignUp = () => {
  // form: Object to store all user inputs (name, email, phone, etc.).
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date_of_birth: "",
    password: "",
    password_confirmation: ""
  });

  // passwordVisible: Toggles whether the password is shown or hidden.
  const [passwordVisible, setPasswordVisible] = useState(false);

  // errors: Object to store validation errors returned from the backend.
  const [errors, setErrors] = useState({});

  // register: Function from custom hook to handle registration API call.
  const { register } = useRegister();

  // navigate: React Router hook to redirect users.
  const navigate = useNavigate();

  // handleChange: Updates form state when user types in an input field.
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handleSubmit: Handles form submission, calls register, and manages errors.
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior.
    setErrors({}); // Clear previous errors.
    try {
      await register(form); // Attempt to register user with form data.
      navigate("/login"); // Redirect to login page on success.
    } catch (err) {
      setErrors(err); // Set validation errors if registration fails.
    }
  };

  return (
    <div className="signup-page">
      {/* Back button to navigate to login page */}
      <button className="back-button" onClick={() => navigate("/login")}>{`←`}</button>

      <div className="signup-container">
        <h1>Sign up</h1>
        <p className="subtitle">Create an account to continue!</p>

        {/* Registration form */}
        <form className="signup-form" onSubmit={handleSubmit}>
          {/* Full Name input */}
          <div>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Lois Becket"
              value={form.name}
              onChange={handleChange}
            />
            {/* Show validation error for name if present */}
            {errors.name && <p className="error">{errors.name[0]}</p>}
          </div>

          {/* Email input */}
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Loisbecket@gmail.com"
              value={form.email}
              onChange={handleChange}
            />
            {/* Show validation error for email if present */}
            {errors.email && <p className="error">{errors.email[0]}</p>}
          </div>

          {/* Date of Birth input */}
          <div>
            <label>Date of Birth</label>
            <input
              type="date"
              name="date_of_birth"
              value={form.date_of_birth}
              onChange={handleChange}
            />
            {/* Show validation error for date_of_birth if present */}
            {errors.date_of_birth && <p className="error">{errors.date_of_birth[0]}</p>}
          </div>

          {/* Phone Number input */}
          <div className="phone-input-container">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="(454) 726-0592"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          {/* Password input with visibility toggle */}
          <div className="password-wrapper">
            <label>Set Password</label>
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="******"
              value={form.password}
              onChange={handleChange}
            />
            {/* Button to toggle password visibility */}
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="toggle-visibility"
            >
              {passwordVisible ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
            </button>
            {/* Show validation error for password if present */}
            {errors.password && <p className="error">{errors.password[0]}</p>}
          </div>

          {/* Password confirmation input */}
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

          {/* Submit button */}
          <button type="submit" className="register-button">
            Register
          </button>
        </form>

        {/* Link to login page for users who already have an account */}
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