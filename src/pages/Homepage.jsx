import React, { useContext, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";

const ProductCard = (props) => {
  const { count, increaseCount, decreaseCount, addTocart, setCount } = useContext(Shopcontext);
  const [isClicked, setIsClicked] = useState(false);

  const handleAddToCart = () => {
    setIsClicked(true);
    addTocart(props.name);
  };
  const handleDecrease = () => {
    if (count > 1) {
        decreaseCount(props.name)
    } else {
        setIsClicked(false)
    }
    

  };
  const handleIncrease = () => {
    increaseCount(props.name);

  }
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-3 mb-8 bg-white border rounded-lg shadow-md relative">
      <div className="flex flex-col items-start">
        <div className="text-lg font-semibold">{props.name}</div>
        <div className="text-gray-600">Cost: #{props.cost}</div>
      </div>
      <div className="mt-auto absolute bottom-4 right-4">
        {isClicked ? (
          <div className="flex space-x-2">
            <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleDecrease}>
              -
            </button>
            <span>{count}</span>
            <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleIncrease}>
              +
            </button>
          </div>
        ) : (
          <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleAddToCart}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

const Homepage = () => {
  const products = [
    { key: 1, name: "Jollof with chicken", cost: 1500 },
    { key: 2, name: "Jollof with beef", cost: 800 },
    { key: 3, name: "Fried rice with chicken", cost: 1500 },
    { key: 4, name: "Fried rice with beef", cost: 800 },
    { key: 5, name: "Mixed with chicken", cost: 1500 },
    { key: 6, name: "Mixed with beef", cost: 800 },
    { key: 7, name: "Jollof with fish", cost: 1200 },
    { key: 8, name: "Fried rice with fish", cost: 1200 },
    { key: 9, name: "Mixed with fish", cost: 1200 },
    { key: 10, name: "Beef sharwama", cost: 1800 },
    { key: 11, name: "Chicken sharwama", cost: 2000 },
    { key: 12, name: "Plantain", cost: 100 },
  ];

  return (
    <div className="flex flex-wrap p-2 md:p-6 justify-center">
      {products.map((content) => (
        <ProductCard key={content.key} name={content.name} cost={content.cost} />
      ))}
    </div>
  );
};

export default Homepage;