import React from 'react'
//rafce
import {computerData} from '../data/computers';
import Navbar from '../components/Navbar'
const ComputerPage = () => {
  return (
   <>
   <Navbar />
            <div className='pageSection'>
                {computerData.map((ev) => {
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

export default ComputerPage