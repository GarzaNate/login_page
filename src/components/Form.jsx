import React from 'react'

const Form = () => {
  return (
    <div className='container'>
      <h1>Login Form</h1>
      <form>
        <div className='form-group'>
          <label htmlFor="email" className='form-label'>Enter Email Here!</label>
          <input type="text" className='form-control' placeholder='test@email.com'/>
        </div>
        <div className='form-group'>
          <label htmlFor="password" className='form-label'>Enter Password Here!</label>
          <input type="text" className='form-control' placeholder='password'/>
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form