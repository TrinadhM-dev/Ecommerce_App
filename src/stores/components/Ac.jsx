import React from 'react';
import {acData} from '../data/ac';
const Ac = () => {
    const firstFiveACs = acData.slice(0,5);
  return (
    <>
    <h2>Air Conditioners</h2>
    <div className='proSection'>
            {firstFiveACs.map((ev)=>{
                return (
<div className='imgBox'>
<img className='proImage' src={ev.image} alt="Air Conditioners" />

</div>

                )
            })}

    </div>
    
    </>
  )
}

export default Ac