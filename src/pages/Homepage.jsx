import React from "react";

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

const ProductCard = (props) => {
  return (
    <div className="w-1/3 p-4 mx-auto mb-8 bg-white border rounded-lg shadow-md">
      <div className="flex flex-col items-start">
        <div className="text-lg font-semibold">{props.name}</div>
        <div className="text-gray-600">Cost: ${props.cost}</div>
      </div>
      <div className="mt-4">
        <button className="justify-end bg-red-500 text-white px-4 py-2 rounded">Add to cart</button>
      </div>
    </div>
  );
};

const Homepage = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {products.map((content, index) => (
        <ProductCard key={index} name={content.name} cost={content.cost} />
      ))}
    </div>
  );
};

export default Homepage;