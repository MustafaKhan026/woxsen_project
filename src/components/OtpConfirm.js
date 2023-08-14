import React from 'react'
import "./OtpConfirm.css"

const OtpConfirm = () => {
  return (
    <div className='airc_wrapper'>
        <div className='airc_form_wrapper'>
        <h2>Confirm OTP to continue</h2>
            <div className='input_container'>
                {/* <label>Student Name</label> */}
                <input type='text' placeholder=' OTP'/>
            </div>
            <button>Confirm</button>
        </div>
    </div>
  )
}

export default OtpConfirm
