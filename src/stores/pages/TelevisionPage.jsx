import React from 'react'
import Navbar from '../components/Navbar';
import {tvData} from '../data/tv';
function TelevisionPage() {
  return (
    <>
    <Navbar />
    <div className='pageSection'>
        {tvData.map((item) => {
            return (
                <div>
                    <div className="pageImg">
                        <img src={item.image} alt="Book Images" />
                    </div>
                    <div className="proModel">
                        {item.company},{item.model}
                    </div>

                </div>
            )
        })}


    </div>


</>
  )
}

export default TelevisionPage