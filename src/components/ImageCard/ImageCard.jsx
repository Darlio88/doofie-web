import React from 'react'
import './ImageCard.css'


import {Link} from 'react-router-dom'
import { IKImage, IKContext, IKUpload } from 'imagekitio-react';


const ImageCard = ({imageCardData}) => {
  return (
      imageCardData.map((imageData, index) => {
        return (
          <Link to={`/catergories/${imageData}`} key={index}>
          <div className="imageContainer" key={index}>
            <div className='imagePosterContainer'>
            <IKImage 
          path={`/${imageData}.jpg`}
          urlEndpoint="https://ik.imagekit.io/x761p7oyp/doofie/main-assets"
          transformation={
            [{    
          "height":"300",    
          "width":"400" 
          }]
  }
  />
            </div>
          
            <h3 className='imagePosterName'>{imageData.split('-').join(' ')}</h3>
          </div>
          </Link>
        )
      })
   
  )
}

export default ImageCard