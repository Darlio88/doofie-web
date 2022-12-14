import React, {useState} from 'react'
import './Item.css'
import {Link, useParams} from 'react-router-dom'

import NavBar from '../../components/NavBar/NavBar' 
import BottomBar from '../../components/BottomBar/BottomBar' 
import ItemImageGrid from '../../components/ItemImageGrid/ItemImageGrid' 
import {foodCosts} from '../../assets/foodCost'


const Item = () => {
  const {item}= useParams()
 
  const catergory = item.split('_')[0]
  const section=item.split('_')[1]

  const sectionItem = foodCosts[catergory].filter(item=>item.catergory===section)[0].items

 


  return (
    <div>
    <NavBar/>
    <ItemImageGrid imageCardData={[section, sectionItem, catergory]}/>
    <BottomBar/>
    </div>
   
  )
}

export default Item