import React, { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import "./login.scss";
import { Link } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "test@example.com" && password === "password") {
      onLogin();
    } else {
      alert("Invalid email or password");
    }
  };

  return (

    <div className="login-page">
      <div className="login-container">
        <h1>Log in to your</h1>
        <h1>Account</h1>
        <p className="subtitle">Enter your email and password to log in</p>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="toggle-visibility"
            >
              {showPassword ? <EyeIcon size={18} /> : <EyeOffIcon size={18} />}
            </button>
          </div>

          <div className="forgot-password">Forgot Password?</div>

          <button type="submit" className="login-button">
            Log In
          </button>
        </form>

        <div className="divider">Or</div>

        <div className="social-buttons">
          <button>
            <FaGoogle className="google-icon" />
            Continue with Google
          </button>
          <button>
            <FaFacebookF className="facebook-icon" />
            Continue with Facebook
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
  Don’t have an account?{" "}
  <Link to="/signup" className="text-black font-semibold cursor-pointer">
    Sign Up
  </Link>
</p>
      </div>
    </div>
  );
};

export default Login;
