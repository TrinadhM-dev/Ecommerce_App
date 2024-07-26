import React from 'react'
import {watchData} from '../data/watch';
const Watches = () => {
    const firstWatches = watchData.slice(0,5);
  return (
<>
<h2>Watches</h2>
<div className='proSection'>
  {firstWatches.map((ev)=>{
    return(
        <div className='imgBox'>
            <img className='proImage' src={ev.image} alt="watch" />
        </div>
    )
  })}
    </div>

</>
 
)}

export default Watches