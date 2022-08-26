import React from 'react'
import './BottomBar.css'
const BottomBar = () => {
  return (
    <div className='bottomBar'>
    <div className='bottomBarUpper'>
      
      <div>
      <h1 className='bottomBarUpperHeader'>Locations</h1>
      <div>
        <h4 className='bottomBarUpperlinks'>Kiira road</h4>
        <h4 className='bottomBarUpperlinks'>Wandegeya</h4>
        <h4 className='bottomBarUpperlinks'>Bombo road</h4>
        <h4 className='bottomBarUpperlinks'>Parliament Avenue</h4>
        <h4 className='bottomBarUpperlinks'>Oasis Mall</h4>
        <h4 className='bottomBarUpperlinks'>Lugogo</h4>
        <h4 className='bottomBarUpperlinks'>Nakawa</h4>
        </div>
      </div>
      <div>
        <h1 className='bottomBarUpperHeader'>Contact Us</h1>
        <div>
          <h4 className='bottomBarUpperlinks'>info@doofie.co.ug</h4>
          <h4 className='bottomBarUpperlinks'>+256785124779</h4>
          <h4 className='bottomBarUpperlinks'>+256758994368</h4>
        </div>
      </div>
      <div>
        <h1 className='bottomBarUpperHeader'>Our Menu</h1>
        <div>
          <h4 className='bottomBarUpperlinks'>BreakFast</h4>
          <h4 className='bottomBarUpperlinks'>Drinks</h4>
          <h4 className='bottomBarUpperlinks'>Mains</h4>
          <h4 className='bottomBarUpperlinks'>Desserts</h4>
        </div>
      </div>
    </div>
    <div className='bottomBarBottom'>
      <p className='bottomBarUpperHeader' style={{paddingRight:'10px'}}>
      We're commited to great food, great coffee, great service, an experience that will make your time with us fabulous. All visuals are serving suggestions only.
  Prices are quoted in Uganda Shillings and inclusive of VAT.
      </p>
      <div className='bottomBarBottomlinksContainer'>
        <h5 className='bottomBarUpperlinks'>Privacy Policy</h5>
        <h5 className='bottomBarUpperlinks'>Terms of use</h5>
        <h5 className='bottomBarUpperlinks'>Contact Us</h5>
        <h5 className='bottomBarUpperlinks'>Partners</h5>
        <h5 className='bottomBarUpperlinks'>FeedBack</h5>
        <h5 className='bottomBarUpperlinks'>Blog</h5>
      </div>
      <p className='bottomBarUpperHeader'>© 2022 Doofie. All Rights Reserved</p>
    </div>
  </div>
  )
}

export default BottomBar