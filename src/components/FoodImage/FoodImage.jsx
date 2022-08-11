import React from 'react'
import './FoodImage.css'
import { IKImage, IKContext, IKUpload } from 'imagekitio-react';


const FoodImage = ({imageCardData}) => {
  return (
      imageCardData[0].map((imageData, index) => {
        return (
          <div className="imageContainer" key={index}>
            <div className='imagePosterContainer'>
            <IKImage 
          path={`/${imageData}.jpg`}
          urlEndpoint={`https://ik.imagekit.io/x761p7oyp/doofie/${imageCardData[1]}`}
          transformation={
            [{    
          "height":"180",    
          "width":"240" 
          }]
  }
  />
            </div>
          
            <h3 className='imagePosterName'>{imageData.split('-').join(' ')}</h3>
          </div>
        )
      })
   
  )
}

export default FoodImage