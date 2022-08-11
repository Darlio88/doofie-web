import React from 'react'
import {TiShoppingCart} from 'react-icons/ti'
import './NavBar.css'
const NavBar = () => {
  return (
    <div className='nav'>
    <h1 className='navHeader'>Doofie</h1>
    <div className='navLeft'>
      <h3 className='navLink'>Home</h3>
      <h3 className='navLink'>Menu</h3>
      <h3 className='navLink'>Featured Products</h3>
      <h3 className='navLink'>Deals</h3>
      <TiShoppingCart size='24px' color='#84a98c' />
    </div>
   </div>
  )
}

export default NavBar