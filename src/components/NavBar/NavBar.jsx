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
      <div style={{position:'relative'}}>
      <TiShoppingCart className='navIcon' size='24px' color='#84a98c' />
      <div style={{
        display:'flex',
        justifyContent:'center',
         alignItems:'center',
        height:'16px',
      width:'16px', 
      borderRadius:'100%',
      backgroundColor:'red',
      color:'white',
      position:'absolute',
      top:'-4px',
      right:'-4px'
      }}>
        6
      </div>
      </div>
      <Link to='/login'>
      <img src={user} alt='user' style={{height:'32px', width:'32px'}} />
      </Link>

    </div>
   </div>
  )
}

export default NavBar