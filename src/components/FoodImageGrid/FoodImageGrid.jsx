import React from 'react'
import './FoodImageGrid.css'
import FoodImage from '../FoodImage/FoodImage'

const FoodImageGrid = ({imageCardData}) => {
  return (
    <div className='foodGridWrapper'>
        <h1 className='catergoryHeader'>{imageCardData[1].split('-').join(' ')}</h1>
        <div className="foodGrid">
        <FoodImage imageCardData={imageCardData} />
        </div>
    </div>
  
  )
}

export default FoodImageGrid