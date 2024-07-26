import React from 'react'
import {menData} from '../data/men';
const Men = () => {
    const firstFiveMen = menData.slice(0,5);
  return (
    <>
      <h2>Men</h2>
    <div className='proSection'>
        { firstFiveMen.map((ev)=>{
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

export default Men