import React from 'react'
import { watchData } from '../data/watch'
import Navbar from '../components/Navbar'
//rafce
const WatchPage = () => {
    return (
        <>
            <Navbar />
            <div className='pageSection'>
                {watchData.map((item) => {
                    return (
                        <div>
                            <div className="pageImg">
                                <img src={item.image} alt="watchImages" />
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

export default WatchPage;