import React from 'react'
import {womanData} from '../data/woman';

const Woman = () => {
    const firstFiveWoMen = womanData.slice(0,5);
  return (
    <>
   <h2>Woman</h2>
   <div className='proSection'>
        { firstFiveWoMen.map((ev)=>{
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

export default Woman