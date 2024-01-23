// components/CartPage.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Shopcontext } from '../context/Shopcontext';

const CartPage = () => {
    const { cartitem } = useContext(Shopcontext);

    return (
        <div>
            <div>
                <Link to='/'>
                    <h1>Return to shop</h1>
                </Link>
            </div>
            <div className='receiver'>
                <h2>Your Cart:</h2>
                {cartitem.map((item, index) => (
                    <div key={index}>
                        <p>{item.product.name} - Cost: #{item.product.cost} - Quantity: {item.count}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CartPage;
