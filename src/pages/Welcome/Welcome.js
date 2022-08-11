import React from 'react'
import {Link} from 'react-router-dom'


import './Welcome.css'
import backgroundImage from '../../assets/background-doofie.jpg'
import Button from '../../components/Button/Button'

const Welcome = () => {
  return (
    <div className="welcomePage">
    <img src={backgroundImage} className='backgroundImage'/>
    <div className='welcomePageContent'>
    <h1 className='welcomePageTitle'>Welcome to doofie</h1>
    <Link to='/home'>
    <Button buttonContent='START ORDER'/>
    </Link>
    </div>
   
  </div>
  )
}


export default Welcome