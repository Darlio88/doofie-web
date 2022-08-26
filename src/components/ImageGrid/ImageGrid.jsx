import React from 'react'
import './ImageGrid.css'
import ImageCard from '../ImageCard/ImageCard'

const ImageGrid = ({imageCardData}) => {
  return (
    <div className='imageGridWrapper'>
        <h1 className='catergoryHeader'>Menu</h1>
        <div className="imageGrid">
        <ImageCard imageCardData={imageCardData} />
        </div>
    </div>
  
  )
}

export default ImageGrid