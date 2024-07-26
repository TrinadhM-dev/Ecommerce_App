import React from 'react'
import {furnitureData} from '../data/furniture';
const Furniture = () => {
    const firstFiveFurniture = furnitureData.slice(0,5);
  return (
    <>
      <h2>Furniture</h2>
    <div className='proSection'>
        { firstFiveFurniture.map((ev)=>{
            return(
                <div className="imgBox">
                    <img className='proImage' src={ev.image} alt="furniture"  />
                </div>
            )
        })
        
        }</div>
    </>
  
  )
}

export default Furniture