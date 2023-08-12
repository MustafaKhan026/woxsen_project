import React from 'react'
import "./SignUp.css"

const SignUp = () => {
  return (
    <div className='login_container'>
    <h1>Sign up</h1>
    <div className='email_container'>
      <input type='text' placeholder='Name' />
    </div>
    <div className='password_container'>
    <input type='email' placeholder='Email'/>

    </div>
    <div className='password_container'>
    <input type='password' placeholder='Password'/>

    </div>
    <div className='submit_btn_container'>
      <button>Sign up</button>
    </div>
    <div className='signup_btn_container'></div>
  </div>
  )
}

export default SignUp
