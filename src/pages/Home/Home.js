import React from 'react'
import './Home.css'

import NavBar from '../../components/NavBar/NavBar' 
import BottomBar from '../../components/BottomBar/BottomBar' 
import ImageGrid from '../../components/ImageGrid/ImageGrid' 

const foodCatergory =[
    'big-on-breakfast',
    'generous-big-meals',
    'perfected-drinks',
    'decadent-desserts'
]

const Home = () => {
  return (
    <div>
    <NavBar/>
    <ImageGrid imageCardData={foodCatergory}/>
    <BottomBar/>
    </div>
  )
}

export default Home