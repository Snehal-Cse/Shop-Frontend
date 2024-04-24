"use client"
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import AllProduct from '../Assets/allProduct';
import CartReducer from './reducer';
const Cart = createContext();
export default function Context({children}) {
// const [prod, setProd] = useState(AllProduct)
const getLocalCartData = ()=>{
  let localCartData = localStorage.getItem("cartData")
  if(localCartData == []){
    return [];
  }
  else {
    return JSON.parse(localCartData);
  }
}
const [state, dispatch] = useReducer(CartReducer, {
       products: AllProduct,
       cart: getLocalCartData()
} )
useEffect(()=>{
  localStorage.setItem("cartData", JSON.stringify(state.cart))
},[state.cart])
  return <Cart.Provider value={{state, dispatch}}>
    {children}
  </Cart.Provider>
}

export const cartState = ()=>{
    return useContext(Cart);
}