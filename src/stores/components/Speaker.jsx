import React from 'react'
import {speakerData} from '../data/speaker';
const Speaker = () => {
    const firstFiveSpeaker = speakerData.slice(0,5);
  return (
    <>
    <h2>Speaker</h2>
    <div className="proSection">
        {firstFiveSpeaker.map((ev)=>{
            return(
                <div className="imgBox">
                    <img src={ev.image} alt="speakers" className="proImage" />
                </div>
            )
        })}
    </div>
    
    </>
  )
}

export default Speaker