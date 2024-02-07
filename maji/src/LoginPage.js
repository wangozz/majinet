import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="company-info">
        <img src="company-logo.png" alt=" Logo" />
        <p>
          <h2>Majinet Water Meter Remote Reading System </h2>
          Majinet Water Meter Remote Reading System
Welcome to Majinet Systeem Portal. The Portal gives you readings of your water consumption.If you are a resident/home owner please log in the Resident/ Home owner page - you will need to self register.
        </p>
      </div>
      <div className="login-prompt">
        <h2>Login as</h2>
        <nav className="login-nav">
          <ul>
            <li><a href="#">Individual</a></li>
            <li><a href="#">Manager</a></li>
            <li><a href="#"> Owner</a></li>
          </ul>
        </nav>
        <form>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
            <p><a href="#">forgot password?</a></p>
          </div>
          <div className="input-group">
            <input type="checkbox" id="remember-me" name="remember-me" />
            <label htmlFor="remember-me">Remember Me</label>
          </div>
          <button type="submit">Login</button>
          <p>Don't have an account ? <a href="#">Register here</a></p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
