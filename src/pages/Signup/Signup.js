import React from 'react'
import './Signup.css'

import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div className='loginContainer'>

    <h1 style={{color:'#000814'}}>Sign up</h1>
    <div className='inputContainer'>
        <input 
        type="text" 
        placeholder="First Name" 
        className='input' />
  </div>
  <div className='inputContainer'>
        <input 
        type="text" 
        placeholder="Last Name" 
        className='input' />
  </div>
  <div className='inputContainer'>
        <input 
        type="email" 
        placeholder="Email" 
        className='input' />
  </div>
  <div className='inputContainer'>
        <input 
        type="password" 
        placeholder="Password" 
        className='input' />
  </div>
  <div className='inputContainer'>
        <input 
        type="password" 
        placeholder="Confirm password" 
        className='input' />
  </div>
  <Link style={{textDecoration:'none'}} to='/login' >
<h6>Already have an account? sign in</h6>
</Link>
<Button buttonContent='Sign up' />
    </div>
 
  )
}


export default Signup