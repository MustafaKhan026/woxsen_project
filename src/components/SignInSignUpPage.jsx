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
      <div className="video_container">
      <video autoPlay loop muted className="video-bg" >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
      <div className="form_wrapper">
      {
            showSignUp ? <Login showSignUp={showSignUp} toggleSignup={toggleSignup} /> :<SignUp showSignUp={showSignUp} toggleLogin={toggleLogin}/>
          }

      {/* <ion-icon name="mail-outline" className="mail_icon"></ion-icon>
      <ion-icon name="lock-closed-outline"></ion-icon>
      <ion-icon name="person-outline"></ion-icon> */}
      </div>
      
    </div>
  );
};

export default SignInSignUpPage;
