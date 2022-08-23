import React from 'react'
import './ItemImage.css'
import Button from '../Button/Button'
import { IKImage, IKContext, IKUpload } from 'imagekitio-react';

const ItemImage = ({imageCardData}) => {
  return (imageCardData[1].map((imageData, index)=>{
  return (
    <div className="imageContainer" key={index}>
    <div className='imagePosterContainer'>
    <IKImage 
  path={`/${imageData.name}.jpg`}
  urlEndpoint={`https://ik.imagekit.io/x761p7oyp/doofie/${imageCardData[2]}/${imageCardData[0]}`}
  transformation={
    [{    
  "height":"180",    
  "width":"240" 
  }]
}
/>
    </div>
  
    <h3 className='imagePosterName'>{imageData.name.split('-').join(' ')}</h3>
    <p>Ug.Shs {imageData.price}</p>
    <Button buttonContent='ORDER'/>
  </div>
  )}))
}

export default ItemImage