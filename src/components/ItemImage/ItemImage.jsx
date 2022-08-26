import React from 'react'
import './ItemImage.css'
import Button from '../Button/Button'
import { IKImage, IKContext, IKUpload } from 'imagekitio-react';

const ItemImage = ({imageCardData}) => {
  return (imageCardData[1].map((imageData, index)=>{
  return (
    <div className="imageContainerItem" key={index}>
    <div className='imagePosterContainerItem'>
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
  
    <h3 className='imagePosterNameItem'>{`${imageData.name.split('-').join(' ').slice(0, 18)}...`}</h3>
   <div style={{ marginBlock:'8px'}}>
   <h5 style={{color:'blue', marginBlock:'8px'}}>Ug.Shs {imageData.price}</h5>
    <Button buttonContent='ORDER'/>
   </div>
  </div>
  )}))
}

export default ItemImage