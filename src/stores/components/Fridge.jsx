import React from 'react'
import {fridgeData} from '../data/fridge';
const Fridge = () => {
    const firstFiveFridge = fridgeData.slice(0,5);
  return (
<>
<h2>Fridges</h2>
<div className='proSection'>
  {firstFiveFridge.map((ev)=>{
    return(
        <div className='imgBox'>
            <img className='proImage' src={ev.image} alt="watch" />
        </div>
    )
  })}
    </div>

</>
)}

export default Fridge