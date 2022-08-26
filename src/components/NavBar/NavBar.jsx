import React from 'react'

import { Link } from 'react-router-dom'
import {TiShoppingCart} from 'react-icons/ti'
import user from '../../assets/user.png'

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
      <TiShoppingCart className='navIcon' size='24px' color='#84a98c' />
      <Link to='/login'>
      <img src={user} alt='user' style={{height:'32px', width:'32px'}} />
      </Link>

    </div>
   </div>
  )
}

export default NavBar