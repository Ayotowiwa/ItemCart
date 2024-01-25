import React, { useContext, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { addTocart, setCartitem, cartitem } = useContext(Shopcontext);
  const [isClicked, setIsClicked] = useState(null);

  const handleAddToCart = () => {
    setIsClicked(true);
    if (!cartitem.some((items) => items.name === props.name && items.cost === props.cost)) {
        setCartitem((prevItems) => [...prevItems, { name: props.name, cost:props.cost, count:1}])
    };
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-3 mb-8 bg-white border rounded-lg shadow-md relative">
      <div className="flex flex-col items-start">
        <div className="text-lg font-semibold">{props.name}</div>
        <div className="text-gray-600">Cost: #{props.cost}</div>
      </div>
      <div className="mt-auto absolute bottom-4 right-4">
        {isClicked ? (
          <Link to="/cart">
            <button className="bg-red-500 text-white px-4 py-2 rounded">
              item Added
            </button>
          </Link>
        ) : (
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={handleAddToCart}
          >
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
        <ProductCard
          key={content.key}
          name={content.name}
          cost={content.cost}
        />
      ))}
    </div>
  );
};

export default Homepage;
