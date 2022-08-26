import React from 'react'
import './ItemImageGrid.css'
import ItemImage from '../ItemImage/ItemImage'
const ItemImageGrid = ({imageCardData}) => {

  return (
    <div className='foodItemGridWrapper'>
        <h1 className='catergoryHeader'>{imageCardData[0].split('-').join(' ')}</h1>
        <div className="foodItemGrid">
        <ItemImage imageCardData={imageCardData} />
        </div>
    </div>
  )
}

export default ItemImageGrid