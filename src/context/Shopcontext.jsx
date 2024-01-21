import React, { createContext } from 'react'

export const Shopcontext = createContext(null);

export default function ShopContextProvider(props) {
  return (
    <Shopcontext.Provider>{props.children}</Shopcontext.Provider>
  )
}
