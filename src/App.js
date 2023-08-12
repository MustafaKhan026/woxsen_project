import { useEffect, useState } from 'react';
import './App.css';
import SignInSignUpPage from './components/SignInSignUpPage';

function App() {
  // const [input, setInput] = useState("")
  // const [strength,setStrength] = useState(0)
  // const [show, setShow] = useState(true)
  // const [showText,setShowText] = useState(false)
  // const [color,setColor] = useState("#eee")

  // const handleShow = () =>{
  //   setShow(!show)
  // }
  // const clearField = () =>{
  //   setInput("")
  //   console.log("clearrrrr");
  // }
  // const checkStrength = (str) =>{
  //   if (typeof str !== "string") {
  //     return false; // Input is not a string, return false
  //   }
  //   const UpperCase = /[A-Z]/;
  //   if(UpperCase.test(str)){
  //     setStrength(1)
  //   }
  //   const LowerCase = /[a-z]/;
  //   if(LowerCase.test(str)){
  //     setStrength(2)
  //   }
  //   const specialChar = /[@#%!&*]/;
  //   if(specialChar.test(str)){
  //     setStrength(3)
  //   }
  //   if(str.length <= 8){
  //     setStrength(4)
  //   }
  //   const number = /\d/;
  //   if(number.test(str)){
  //     setStrength(5)
  //   }
  //   return
  // }
  // useEffect(()=>{
  //   checkStrength(input)
  // },[input])

  // useEffect(()=>{
  //   const f = (s) =>{
  //     if(s < 3){
  //       return(setColor("#eee"))
  //     }
  //     else if(s == 3 || 4){
  //       return(setColor("yellow"))
  //     }
  //     else {
  //      return(setColor("green")) 
  //     }
  //   }
  //   f(input)
  // },[input])

  return (
    <div className="App">
      {/* <div className='form__container'>
        <div className='input__container'>
          <input type={show ? "text" : "password"} placeholder=' Enter text'className='input__field' onChange={(e)=> setInput(e.target.value)} value={input}/>
        </div>
        <div className='btns__container'>
          <button className='hide_btn' onClick={()=>handleShow()}>
            <p>{show ? "Hide" :"Show"}</p>
          </button>
          <button className='clear_btn' onClick={()=>clearField()}>
            <p>Clear</p>
          </button>
        </div>
        <div className='strength__container'>
          <div style={{height:"60px",width:"90%",borderRadius: "20px",backgroundColor:color}}>
            <div className='strength__inner'>
            <p style={{color:"black"}}>Strength</p>
            </div>
          </div>
        </div>
      </div> */}
      <SignInSignUpPage />
    </div>
  );
}

export default App;
