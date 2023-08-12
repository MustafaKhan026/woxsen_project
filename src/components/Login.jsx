import React from 'react'
import "./Login.css"

const Login = ({showSignUp}) => {
  return (
    <div className='login_container'>
      <h1>Login</h1>
      <div className='email_container'>
        <input type='email' placeholder='Email' />
      </div>
      <div className='password_container'>
      <input type='password' placeholder='Password'/>

      </div>
      <div className='submit_btn_container'>
        <button>Login</button>
      </div>
      <div className='signup_btn_container'>
        
      </div>
    </div>
  )
}

export default Login
