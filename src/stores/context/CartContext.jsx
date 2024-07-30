import { createContext, useContext, useState } from "react";

const CartContext = createContext();

   export const CartProvider = ({children})=>{
    const [cartItems,setCartitems ] = useState([]);


    const addToCart =(item)=>{
        setCartitems([...cartItems,item])
    }
    
    const removeFromCart = (item) =>{
 setCartitems(cartItems.filter((a)=>a!=item))
    }

    return (
        <CartContext.Provider value={{cartItems,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = ()=>{
    return useContext(CartContext)
}