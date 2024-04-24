'use client'
import React from "react";
import { cartState } from "../components/Context/context";
export default function CartPage(){
    const { state : {cart}} = cartState();
    return(
       <div className="">
             
       </div> 
    )
}