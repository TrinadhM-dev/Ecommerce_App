import React from 'react';
import { menData } from '../data/men';
import Navbar from '../components/Navbar';
function MenPages() {
  return (
    <>
    <Navbar />
    <div className='pageSection'>
        {menData.map((ev) => {
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

export default MenPages