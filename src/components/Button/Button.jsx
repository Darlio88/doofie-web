import React from 'react'
import './Button.css'
const Button = ({buttonContent, onClick}) => {
  return (
    <button className='btn'>{buttonContent}</button>
  )
}

export default Button