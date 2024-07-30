import React ,{useState} from 'react'
//rafce
import {computerData} from '../data/computers';
import Navbar from '../components/Navbar';
import {Link} from'react-router-dom';
const ComputerPage = () => {
    const [selectedProduct,setSelectedProduct] = useState([]);
    const companyHandler =(m)=>{
        if(selectedProduct.includes(m)){
            setSelectedProduct(selectedProduct.filter(item => item !== m));
        }
        else{
            setSelectedProduct([...selectedProduct,m]);
        }
    }
  return (
   <>
   <Navbar />
 {/* product filter */}
    <div className="full-page">
    <div className="pro-selected">
            {computerData.map((computer)=>{
                return(
                    <div  className='pro-input'>
                        <label htmlFor="">
                            <input type="checkbox" checked ={selectedProduct.includes(computer.company)}
                            onChange={()=>companyHandler(computer.company)} 
                            />
                            {computer.company}
                        </label>
                    </div>
                )
            }

            )}
        </div>
        <div className='pageSection'>
            {computerData.map((item ) => {
                return(
                    <div>
                        <Link to={`/computers/${item.id}`}>
                        <div className="pageImg">
                            <img src={item.image} alt="computerImages"/>
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

export default ComputerPage