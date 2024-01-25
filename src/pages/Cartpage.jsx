
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shopcontext } from '../context/Shopcontext';

const CartPage = () => {
  const { cartitem, setCartitem } = useContext(Shopcontext);
  

  const increaseCount = (product) => {
    setCartitem((prevItems) =>
        prevItems.map((item) =>
            item.name === product ? { ...item, count: item.count+1 } : item
        )
    );
    
};

const decreaseCount = (product) => {
    setCartitem((prevItems) => {
        const updatedItems = prevItems
            .map((item) =>
                item.name === product ? { ...item, count: Math.max(0, item.count-1) } : item
            )
            .filter((item) => item.count > 0);

        return updatedItems;
    });
};
  
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
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-3 mb-8 bg-white border rounded-lg shadow-md relative">
            <div className="flex flex-col items-start">
              <div className="text-lg font-semibold">{item.name}</div>
              <div className="text-gray-600">Cost: #{item.cost}</div>
            </div>
            <div className="mt-auto absolute bottom-4 right-4">
              <div className="flex space-x-2">
                <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => decreaseCount(item.name)}>
                  -
                </button>
                <span>{item.count}</span>
                <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => increaseCount(item.name)}>
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;