import React from 'react'
import {kitchenData} from '../data/kitchen';
const Kitchen = () => {
    const firstFiveKitchen = kitchenData.slice(0,5);
  return (
    <>
      <h2>Kitchen</h2>
    <div className='proSection'>
        { firstFiveKitchen.map((ev)=>{
            return(
                <div className="imgBox">
                    <img className='proImage' src={ev.image} alt="Kitchen"  />
                </div>
            )
        })
        
        }</div>
    </>
  )
}

export default Kitchen