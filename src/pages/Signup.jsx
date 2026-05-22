import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Dynamic state for notification alert box
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Trigger the clean successful registration notice
    setSuccessMessage(`Congratulations ${formData.username}! You have signed up successfully.`);
    
    // 2. Clear input structures smoothly
    setFormData({ username: "", email: "", password: "" });

    // 3. Automatically route redirection after 2.5 seconds straight to home
    setTimeout(() => {
      setSuccessMessage("");
      navigate("/"); // Redirects to your main application layout seamlessly
    }, 2500);
  };

  return (
    <div className="auth-container">
      {/* Dynamic Glowing Alert Box - Fixed absolute viewport position */}
      {successMessage && (
        <div className="custom-success-alert">
          <div className="alert-icon">✓</div>
          <p>{successMessage}</p>
        </div>
      )}

      <div className="auth-card">
        <h2>Create Account</h2>
        <p className="auth-subtitle">Join the Islamic Directory community</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your name"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a strong password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="auth-btn">
            Sign Up
          </button>
        </form>

        <p className="auth-footer">
          Want to explore without account? <Link to="/">Explore as Guest</Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;