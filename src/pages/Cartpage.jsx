import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shopcontext } from '../context/Shopcontext';
import axios from 'axios'; 

const CartPage = () => {
  const { cartitem, setCartitem } = useContext(Shopcontext);
  const [totalCost, setTotalCost] = useState(0);

  const paymentAmount = totalCost * 100

  useEffect (() => {
    const total = cartitem.reduce((acc, item) => acc + (item.cost * item.count), 0);
    setTotalCost(total);
  }, [cartitem, setTotalCost]); 

  const increaseCount = (product) => {
    setCartitem((prevItems) =>
        prevItems.map((item) =>
            item.name === product ? { ...item, count: item.count + 1 } : item
        )
    );
  };

  const decreaseCount = (product) => {
    setCartitem((prevItems) => {
        const updatedItems = prevItems
            .map((item) =>
                item.name === product ? { ...item, count: Math.max(0, item.count - 1) } : item
            )
            .filter((item) => item.count > 0);

        return updatedItems;
    });
  };

  const makePayment = async () => {
    const url = "https://api.paystack.co/transaction/initialize";
    const apiKey = process.env.REACT_APP_SECRET_KEY;
  
    try {
      const response = await axios.post(
        url,
        {
          'amount': paymentAmount.toString(),
          'email': "christlightsied@gmail.com"
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json"
          }
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  
  return (
    <div>
      <div >
        <Link to='/' className="block mb-4 font-bold underline" >
          <h1>Return to shop</h1>
        </Link>
      </div>
      <div className='receiver'>
        <h2>Your Cart:</h2>
        <div className=' min-w-[100%] mb-[30px]'>
        {cartitem.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-6 mb-8 bg-white border rounded-lg shadow-md relative">
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
              <div className="font-bold mt-2">
                Total: #{item.cost * item.count}
              </div>
            </div>
          </div>
        ))}
        </div>  
        <div className=" bottom-0 left-0 right-0 p-4 bg-gray-200 text-center">
          <button onClick={makePayment} className="bg-green-500 text-white px-8 py-4 rounded-lg">
            Pay: #{totalCost}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
