import React from 'react'
import { FaTwitterSquare, FaGoogle, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';


const Form = () => {
  return (
    <div className='main'>
      <h1>Login Form</h1>
      <form className='container'>
        <div className="top">
          <FaFacebookSquare />
          <FaGoogle />
          <FaLinkedin />
          <FaTwitterSquare />
        </div>
        <div className='form-group'>
          <label htmlFor="email" className='form-label'>Enter Email Here!</label>
          <input type="text" className='form-control' placeholder='test@email.com'/>
        </div>
        <div className='form-group'>
          <label htmlFor="password" className='form-label'>Enter Password Here!</label>
          <input type="text" className='form-control' placeholder='password'/>
        </div>
        <button className="btn btn-primary m-4 " type="submit">Submit</button>
      </form>
    </div>
  )
};

export default Form