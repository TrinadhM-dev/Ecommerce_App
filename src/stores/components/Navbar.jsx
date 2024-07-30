import React from 'react';
import { Link } from 'react-router-dom';
import {useCart} from '../context/CartContext.jsx';

const Navbar = () => {
    const {cartItems} = useCart();
    return (

        <>
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
                    <Link to="/cart">
                    <div className="cart">Cart 
                        <span>{cartItems.length}</span>
                    </div>
                    </Link>
                    
                </div>
            </div>
            <div className="subMenu">
                <ul>
                    <Link to='/mobiles'>
                        <li>Mobiles</li>
                    </Link>

                    <Link to='/computers'>
                        <li>Computers</li>
                    </Link>

                    <Link to='/watches'>
                        <li>Watches</li>
                    </Link>

                    <Link to='/fridges' >
                        <li>Fridges</li>
                    </Link>

                    <Link to='/books'>
                        <li>Books</li>
                    </Link>


                    <Link to='/furnitures'>
                        <li>Furniture</li>
                    </Link>


                    <Link to='/men-fashion'>
                        <li>Men Fashion</li>
                    </Link>

                    <Link to='/women-wears'>
                        <li>Women Wear</li>
                    </Link>

                    <Link to='/kitchens'>
                        <li>Kitchen</li>
                    </Link>

                    <Link to='/telvisions'>
                        <li>Telvision</li>
                    </Link>



                    <Link to='/acs'>
                        <li >Air Conditioners</li>
                    </Link>

                    <Link to='/musicspeakers'>
                        <li>Music Speakers</li>
                    </Link>

                </ul>
            </div>



        </>




    )
}

export default Navbar;