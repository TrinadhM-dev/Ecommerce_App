import React from 'react'
import { womanData } from '../data/woman'
import Navbar from '../components/Navbar'
function WomenPages() {
  return (
    <>
    <Navbar />
    <div className='pageSection'>
        {womanData.map((ev) => {
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

export default WomenPages