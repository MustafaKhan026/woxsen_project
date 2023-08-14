import React from 'react'
import "./Login.css"

const Login = ({toggleSignup}) => {
  return (
    <div className='login_container'>
      <form action="">
        <h2>Login</h2>
        <div className="input-box">
          <span className="icon">
          <ion-icon name="mail" className="mail_icon"></ion-icon>
          </span>
          <input type="email" placeholder='Email' required />
        </div>
        <div className="input-box">
          <span className="icon">
          <ion-icon name="lock-closed" className="mail_icon"></ion-icon>
          </span>
          <input type="password" placeholder='Password' required />
        </div>
        <button>Login</button>
        <div className="register-link">
          <p>Don't have an account? <a onClick={toggleSignup}>Signup here</a></p>
        </div>
      </form>
    </div>
  )
}

export default Login
