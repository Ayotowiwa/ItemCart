import React, { useState, createContext } from 'react';

export const Shopcontext = createContext(null);

export default function ShopContextProvider(props) {
    const [count, setCount] = useState(1);
    const [counter, setCounter] = useState(false);

    const increaseCount = () => {
        
        setCount((prev) => prev + 1);
    };

    const decreaseCount = () => {
        if (count > 1) {
            setCount((prev) => prev - 1);
        } else {
            setCounter(false);
        }
    };

    const contextValue = {
        counter,
        setCounter,
        count,
        setCount,
        increaseCount,
        decreaseCount,
    };

    return (
        <Shopcontext.Provider value={contextValue}>
            {props.children}
        </Shopcontext.Provider>
    );
}
