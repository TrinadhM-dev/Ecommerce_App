import React from 'react'

const Navbar = () => {
  return (
    <div className="navSection">
        <div className="title">
            <h2>3 Mart</h2>
        </div>
            <div className="search">       
                <input type="text" placeholder='Search...' />
                     </div>
            <div className="user">
                <div className="user-detail">
                    SignIn/Signup
                </div>
                <div className="cart">Cart</div>
            </div>  
        </div>
  
  )
}

export default Navbar