import React from 'react'
import { useCart } from './context/CartContext'


const UserCart =()=> {
    const {cartItems, addToCart,removeFromCart} = useCart();
  return (
 <div>
{cartItems.map((item)=>{
    return(
        <div className='cart-section'>
            <div className="cart-img">
                <img src={item.image} alt="" />
            </div>
            <div className="cart-details">
                <h3>{item.product}</h3>
            <div>{item.price}</div>
            <h3>{item.model}</h3>
            </div>
            <button className="removeBtn" onClick={()=>removeFromCart(item)}>Remove</button>
        </div>
    )
})}
 </div>
  )
}

export default UserCart