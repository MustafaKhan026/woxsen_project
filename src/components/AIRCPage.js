import React from 'react'
import "./AIRC.css"
const AIRCPage = () => {
  return (
    <div className='airc_wrapper'>
        <div className='airc_form_wrapper'>
        <h2>Upload student info</h2>
            <div className='input_container'>
                {/* <label>Student Name</label> */}
                <input type='text' placeholder=' Student Name'/>
            </div>
            <div className='input_container'>
                {/* <label>Registration ID:</label> */}
                <input type='text' placeholder=' Registration ID' />
            </div>
            <div className='input_container'>
                {/* <label>College Name</label> */}
                <input type='text' placeholder=' College Name' />
            </div>
            <div className='input_container'>
                {/* <label>Year of Passing</label> */}
                <input type='text' placeholder=' Year of Passing' />
            </div>
            <button>Upload</button>
        </div>
    </div>
  )
}

export default AIRCPage
