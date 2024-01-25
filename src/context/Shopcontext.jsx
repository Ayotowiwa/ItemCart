import React, { useState, createContext } from 'react';

export const Shopcontext = createContext(null);

export default function ShopContextProvider(props) {
    const [count, setCount] = useState(0);
    const [cartitem, setCartitem] = useState([]);

    // const addTocart = (product) => {
    //     const existingItem = cartitem.find((item) => item.product === product);

    //     if(existingItem) {
    //         setCartitem((prevItems) => {
    //             return prevItems.map((item) => 
    //                 item.product === product ? { ...item, count: item.count+1 } : item
    //             );
    //         });
    //     } else {
    //         setCartitem((prevItems) => [...prevItems, {product, count: 1}]);
    //     }
        
    // };

    const increaseCount = (product) => {
        setCartitem((prevItems) =>
            prevItems.map((item) =>
                item.product === product ? { ...item, count: item.count+1 } : item
            )
        );
        
    };

    const decreaseCount = (product) => {
        setCartitem((prevItems) => {
            const updatedItems = prevItems
                .map((item) =>
                    item.product === product ? { ...item, count: Math.max(0, item.count-1) } : item
                )
                .filter((item) => item.count > 0);

            return updatedItems;
        });
    };

    const contextValue = {
        count,
        setCount,
        increaseCount,
        decreaseCount,
        cartitem,
        setCartitem
    };

    return (
        <Shopcontext.Provider value={contextValue}>
            {props.children}
        </Shopcontext.Provider>
    );
}