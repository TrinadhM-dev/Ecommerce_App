import React from 'react'
import Navbar from "../components/Navbar";
import {furnitureData} from "../data/furniture";
function FurniturePage() {
  return (
    <>
    <Navbar />
    <div className='pageSection'>
        {furnitureData.map((item) => {
            return (
                <div>
                    <div className="pageImg">
                        <img src={item.image} alt="Furniture Images" />
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

export default FurniturePage