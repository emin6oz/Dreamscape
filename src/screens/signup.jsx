import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import "./signup.scss";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="signup-page">
      <button className="back-button" onClick={() => navigate("/login")}>
        ←
      </button>

      <div className="signup-container">
        <h1>Sign up</h1>
        <p className="subtitle">Create an account to continue!</p>

        <form className="signup-form">
          <div>
            <label>Full Name</label>
            <input type="text" placeholder="Lois Becket" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" placeholder="Loisbecket@gmail.com" />
          </div>

          <div>
            <label>Birth of date</label>
            <input type="date" />
          </div>

          <div className="phone-input-container">
            <label>Phone Number</label>
            <input type="tel" placeholder="(454) 726-0592" />
          </div>

          <div className="password-wrapper">
            <label>Set Password</label>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="******"
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="toggle-visibility"
            >
              {passwordVisible ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
            </button>
          </div>

          <button
            type="button"
            className="register-button"
            onClick={() => navigate("/splash")}
          >
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
