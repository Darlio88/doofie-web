import React from 'react'
import './Catergory.css'

import {Link, useParams} from 'react-router-dom'

import NavBar from '../../components/NavBar/NavBar' 
import BottomBar from '../../components/BottomBar/BottomBar' 
import FoodImageGrid from '../../components/FoodImageGrid/FoodImageGrid' 
import {catergories} from '../../assets/data'

const Catergory = () => {
  const {item}= useParams()
  console.log(item)
  console.log(catergories[item])
  return (
    
    <div>
    <NavBar/>
    <FoodImageGrid imageCardData={[catergories[item], item]}/>
    <BottomBar/>
    </div>
  )
}

export default Catergory