import React from 'react'
import {tvData} from '../data/tv';
const Tv = () => {
    const firstFiveTvs = tvData.slice(0,5);
  return (
    <>
      <h2>TV</h2>
    <div className='proSection'>
        { firstFiveTvs.map((ev)=>{
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

export default Tv