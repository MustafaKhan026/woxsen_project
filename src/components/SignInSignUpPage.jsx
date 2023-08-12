import React, { useState } from "react";
// import axios from "axios";
import "./SignInSignUp.css";
import backgroundVideo from "./videos/bg_video.mp4"
import Login from "./Login";
import SignUp from "./SignUp";

const SignInSignUpPage = ({ onLoginSuccess }) => {
  const [showSignUp, setShowSignUp] = useState(true);

  const toggle = ()=>{
    setShowSignUp(!showSignUp)
  }
  const toggleLogin = () =>{
    setShowSignUp(true)
  }
  const toggleSignup = () =>[
    setShowSignUp(false)
  ]
  

  return (
    <div className="body">
      <video autoPlay loop muted className="video-bg">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <div className={`cont ${showSignUp ? "s-signup" : ".cont"}`}>
        <div className="form sign-in">
          <h2>Sign In</h2>
          <br />

          <label className="label">
            <span className="span">WOXSEN Email Address</span>
            <input
              className="input"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="label">
            <span className="span">Password</span>
            <input
              className="input"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {!otpSent && (
            <button className="submit" type="button" onClick={handleSignIn}>
              Sign In
            </button>
          )}
          {otpSent && (
            <>
              <label className="label">
                <span className="span">OTP</span>
                <input
                  className="input"
                  type="text"
                  name="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </label>
              <button
                className="submit"
                type="button"
                onClick={handleOTPValidation}
              >
                Validate OTP
              </button>
            </>
          )}
          <p className="forgot-pass">Forgot Password ?</p>
          {error && <p className="error">{error}</p>}
        </div>

        <div className="sub-cont">
          <div className="img">
            <div className="img-text m-up">
              <br />
              <br />
              <h2>New here?</h2>
              <p>
                Sign up if you are new here! and explore woxsen food management
              </p>
            </div>
            <div className="img-text m-in">
              <h2>Already have an Account</h2>
              <br />
              <br />
              <p>
                If you already have an account, just sign in. We've missed you!
              </p>
            </div>
            <div className="img-btn" onClick={handleToggleForm}>
              <span className="m-up">Sign Up</span>
              <span className="m-in">Sign In</span>
            </div>
          </div>
          {showSignUp && !otpSent && (
            <div className="form sign-up">
              <h2>Sign Up</h2>
              <label className="label">
                <span className="span">Name</span>
                <input
                  className="input"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label className="label">
                <span className="span">WOXSEN Mail</span>
                <input
                  className="input"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="label">
                <span className="span">Password</span>
                <input
                  className="input"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <label className="label">
                <span className="span">Confirm Password</span>
                <input
                  className="input"
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </label>
              <button type="button" className="submit" onClick={handleSignUp}>
                Sign Up Now
              </button>
              {error && <p className="error">{error}</p>}
            </div>
          )}
          {showSignUp &&
            otpSent && ( // Add this condition to show OTP validation form
              <div className="form sign-up">
                <h2>Verify Email</h2>
                <label className="label">
                  <span className="span">Enter OTP</span>
                  <input
                    className="input"
                    type="text"
                    name="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </label>
                <button
                  type="button"
                  className="submit"
                  onClick={handleOTPValidation}
                >
                  Verify OTP
                </button>
                {error && <p className="error">{error}</p>}
              </div>
            )}
        </div>
      </div> */}
      <div className="form__container">
        <div className="toggle_container">
          {/* 
          */}
          <div className="extra_gap"></div>
          <div className="login_switch">
          <p className="login_text" style={{color:showSignUp?"white":"black"}} onClick={toggleLogin}>Login</p>
          </div>
          <div className="signup_switch">
          <p  className="signup_text" style={{color:showSignUp?"black":"white"}}  onClick={toggleSignup}>Sign up</p>
          </div>
        </div>
        <div className="forms_container">
        {
            showSignUp ? <Login showSignUp={showSignUp} /> :<SignUp showSignUp={showSignUp}/>
          }
        </div>
          
          
      </div>
    </div>
  );
};

export default SignInSignUpPage;
