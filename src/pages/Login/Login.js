import React from 'react'
import './Login.css'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='loginContainer'>

    <h1 style={{color:'#000814'}}>Login</h1>
    <div className='inputContainer'>
        <input 
        type="email" 
        placeholder="Email" 
        className='input' />
  </div>
  <div className='inputContainer'>
        <input 
        type="password" 
        placeholder="Enter password" 
        className='input' />
  </div>
  <Link style={{textDecoration:'none'}} to='/signup' >
<h6>Do not have an account? Sign Up</h6>
</Link>
<Button buttonContent='login' />
    </div>
 




  )
}

export default Login