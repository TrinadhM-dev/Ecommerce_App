import React from "react";
import {computerData} from '../data/computers';

const Computers = ()=>{
    const firstFiveImages = computerData.slice(0,5);
  
    return (
        <>
        <h2>Computers</h2>
        <div className='proSection'>
            {firstFiveImages.map((ev)=>{
                return(
                    <div className="imgBox">
                        <img className="proImage" src={ev.image} alt=""  />
                    </div>
                )
            })}
        </div>
        
        </>

    )
   
}

export default Computers;