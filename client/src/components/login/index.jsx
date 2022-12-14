import React from 'react'
import './styles.css'

const Login = () => {
  return (
    <div className="full-screen-container">
    <div className="login-container">
      <h1 className="login-title">Welcome</h1>
      <form className="form">
        <div className="input-group success">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email"/>
          <span className="msg">Valid email</span>
        </div>

        <div className="input-group error">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password"/>
          <span className="msg">Incorrect password</span>
        </div>

        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  </div>
  )
}

export default Login