import React from 'react'
import {computerData} from "../stores/data/computers";
import { useParams } from 'react-router-dom';
import Navbar from '../stores/components/Navbar';
import { useCart } from '../stores/context/CartContext';
function ComputerSingle() {
  const {id} = useParams();
  const {addToCart,cartItems} = useCart();
  const product = computerData.find((item)=> item.id === id)
  return (
    <>
     <Navbar />
       <div className="ind-section">
         <div className="ind-image">
           <img src={product.image} alt="" />
         </div>
       <div className="ind-details spac">
         <div className="ind-comapny">
           <h2>{product.company}</h2>
         </div>
       <div className="ind-model">
           <h3>{product.model}</h3>
         </div>
         <div className="ind-price">
           <h2>{product.price}</h2>
         </div>
         <div className="ind-desc">
           <p>{product.description}</p>
         </div>
         <button onClick={()=>addToCart(product)}>Add to Cart</button>
       </div>
       </div>
    </>
     )
}

export default ComputerSingle