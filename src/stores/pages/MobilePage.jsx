import React, { useState } from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar'
import {Link} from'react-router-dom';
function MobilePage() {
    const [selectedProduct,setSelectedProduct] = useState([]);

    const companyHandler =(m)=>{
        if(selectedProduct.includes(m)){
            setSelectedProduct(selectedProduct.filter(item => item !== m));
        }
        else{
            setSelectedProduct([...selectedProduct,m]);
        }
    }

const filteredProduct = selectedProduct.length === 0 ? mobileData : mobileData.filter((x)=>selectedProduct.includes(x.company))

    return (
 <>
 <Navbar/>
 {/* product filter */}
    <div className="full-page">
    <div className="pro-selected">
            {mobileData.map((mobile)=>{
                return(
                    <div  className='pro-input'>
                        <label htmlFor="">
                            <input type="checkbox" checked ={selectedProduct.includes(mobile.company)}
                            onChange={()=>companyHandler(mobile.company)} 
                            />
                            {mobile.company}
                        </label>
                    </div>
                )
            }

            )}
        </div>
        <div className='pageSection'>
            {filteredProduct.map((item ) => {
                return(
                    <div>
                        <Link to={`/mobiles/${item.id}`}>
                        <div className="pageImg">
                            <img src={item.image} alt="mobileImages"/>
                        </div>
                        </Link>

                        <div className="proModel">
                            {item.company},{item.model}
                        </div>

                    </div>
                )
            })}


        </div>
 
    </div>
 
 </>
    )
}

export default MobilePage