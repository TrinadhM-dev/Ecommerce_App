import React from 'react'
import { fridgeData } from '../data/fridge'
import Navbar from '../components/Navbar'
function Fridges() {
  return (
    <>
    <Navbar />
             <div className='pageSection'>
                 {fridgeData.map((ev) => {
                     return (
                         <div >
                             <div className="pageImg">
                                 <img src={ev.image} alt="ac images" />
                             </div>
 
                             <div className="proModel">
                                 {ev.company},{ev.model}
                             </div>
                         </div>
 
                     )
                 })}
             </div>
    
    </>
  )
}

export default Fridges