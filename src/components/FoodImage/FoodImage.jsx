import React from 'react'
import './FoodImage.css'
import { IKImage, IKContext, IKUpload } from 'imagekitio-react';
import { Link } from 'react-router-dom';

const FoodImage = ({imageCardData}) => {
  return (
      imageCardData[0].map((imageData, index) => {
        return (
          <Link to={`/catergory/${imageCardData[1]}_${imageData}`} key={index}>
         
          <div className="imageContainer" >
            <div className='imagePostContainer'>
            <IKImage 
          path={`/${imageData}.jpg`}
          urlEndpoint={`https://ik.imagekit.io/x761p7oyp/doofie/${imageCardData[1]}`}
          transformation={
            [{    
              "height":"300",    
              "width":"400" 
          }]
  }
  />
            </div>
          
            <h3 className='imagePostName'>{imageData.split('-').join(' ')}</h3>
          </div>
          </Link>
        )
      })
   
  )
}

export default FoodImage