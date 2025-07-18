import React from 'react';
import './login.css';
import BasicExample from '../navbar.jsx';
import Foot from '../footer';

function Login() {
  return (
    <>

    <BasicExample />


    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <img src="/image/logo1.avif" alt="Logo" className="login-logo" />
          <h2>Welcome to deeksam</h2>
          <p>Please login to your account</p>
        </div>

        <form className="login-form">
          <label htmlFor="email">Email or Phone</label>
          <input type="text" id="email" placeholder="Enter email or mobile" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" required />

          <button type="submit" className="login-btn">Login</button>

          <div className="login-links">
            <a href="/forgot">Forgot Password?</a>
            <a href="/signup">Create an Account</a>
          </div>
        </form>
      </div>
    </div>

    <Foot/>


    </>
  );
}

export default Login;
