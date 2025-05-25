import React, { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import "./login.scss";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login, loading, error } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (user) {
      onLogin(user);
      navigate("/sleepscreen");
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const devMode = true;

  //   if (devMode) {
  //     const fakeUser = { email: "dev@user.com", name: "Dev User" };
  //     onLogin(fakeUser);
  //     navigate("/sleepscreen");
  //     return;
  //   }

  //   const user = await login(email, password);
  //   if (user) {
  //     onLogin(user);
  //     navigate("/sleepscreen");
  //   }
  // };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Log in to your</h1>
        <h1>Account</h1>
        <p className="subtitle">Enter your email and password to log in</p>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <div className="password-wrapper">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="toggle-visibility"
            >
              {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
            </button>
          </div>

          <div className="forgot-password">Forgot Password?</div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <div className="divider">Or</div>

        <div className="social-buttons">
          <button>
            <FaGoogle className="google-icon" />
            Continue with Google
          </button>
        </div>

        <p className="signup-text">
          Don’t have an account?{" "}
          <Link to="/signup" className="signup-link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
