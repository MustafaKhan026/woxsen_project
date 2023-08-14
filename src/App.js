import { useEffect, useState } from "react";
import "./App.css";
import SignInSignUpPage from "./components/SignInSignUpPage";
import AIRCPage from "./components/AIRCPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import OtpConfirm from "./components/OtpConfirm";

function App() {
  let user = false;
  return (
    <>
      <div className="App">
        <Router>
          <Route path="/" component={user ? AIRCPage : SignInSignUpPage} exact />
          <Route path="/airc" component={AIRCPage} exact />
          <Route path="/otp/confirm" component={OtpConfirm} exact />
        </Router>
      </div>
    </>
  );
}

export default App;
