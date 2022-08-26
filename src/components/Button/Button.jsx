import React from 'react'
import './Button.css'
const Button = ({buttonContent, clicked}) => {
  return (
    <button className='btn' onClick={clicked}>{buttonContent}</button>
  )
}

export default Button