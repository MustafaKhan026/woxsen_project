import React, { useState } from 'react'
import "./SignUp.css"

const SignUp = ({toggleLogin}) => {
  const [showOtp,setShowOtp] = useState(false)
  const toggleOtp = ()=>{
    setShowOtp(true)
  }

  const SignupForm = () =>{
    return(
      <div className='login_container'>
      <form action="">
        <h2>Sign up</h2>
        <div className="input-box">
          <span className="icon">
          <ion-icon name="person" className="mail_icon"></ion-icon>
          </span>
          <input type="text" placeholder='Username' required />
        </div>
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
        <button onClick={toggleOtp}>Get OTP</button>
        <div className="register-link">
          <p>Already have account have anaccount? <a onClick={toggleLogin}>Login</a></p>
        </div>
      </form>
    </div>
    )
  }


  const OtpForm = () =>{
    return(
      <div className='login_container'>
      <form action="">
        <h2>Confirm Otp</h2>
        <div className="input-box">
          <span className="icon">
          <ion-icon name="lock-closed" className="mail_icon"></ion-icon>
          </span>
          <input type="text" placeholder='OTP' required />
        </div>
        <button>Confirm</button>
      </form>
    </div>
    )
  }


  return (
    // <div className='login_container'>
    //   <form action="">
    //     <h2>Sign up</h2>
    //     <div className="input-box">
    //       <span className="icon">
    //       <ion-icon name="person" className="mail_icon"></ion-icon>
    //       </span>
    //       <input type="text" placeholder='Username' required />
    //     </div>
    //     <div className="input-box">
    //       <span className="icon">
    //       <ion-icon name="mail" className="mail_icon"></ion-icon>
    //       </span>
    //       <input type="email" placeholder='Email' required />
    //     </div>
    //     <div className="input-box">
    //       <span className="icon">
    //       <ion-icon name="lock-closed" className="mail_icon"></ion-icon>
    //       </span>
    //       <input type="password" placeholder='Password' required />
    //     </div>
    //     <button>Login</button>
    //     <div className="register-link">
    //       <p>Already have account have anaccount? <a onClick={toggleLogin}>Login</a></p>
    //     </div>
    //   </form>
    // </div>
    // <OtpForm />
    // {showOtp ? <SignupForm /> : <OtpForm />}
    // <SignupForm />
    <>

    {showOtp ? <OtpForm /> : <SignupForm/>}
    </>
  )
}

export default SignUp
