import React from 'react'
import { acData } from '../data/ac';
import Navbar from '../components/Navbar'
const AcPage = () => {
    return (
        <>
            <Navbar />
            <div className='pageSection'>
                {acData.map((ev) => {
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

export default AcPage