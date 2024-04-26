import React from "react";
import Item from "../Item/item"
import AllProduct from "../Assets/allProduct";
export default function Popular(){
    const shop = AllProduct.slice(0,4).map((item)=>{
        return <Item  id ={item.id} 
        image = {item.image}
        desc = {item.desc}
        newPrice = {item.newPrice}
        oldPrice = {item.oldPrice}
        />
    })
    return(
        <div className="flex flex-col justify-center items-center p-4 mt-6 ">
            <h1 className = "font-extrabold text-5xl pb-6">POPULAR IN WOMEN <div className="flex flex-row justify-center pt-3"><hr className="bg-slate-800 h-1 w-96" /></div></h1>
            <div className="flex flex-wrap mt-12 gap-x-8">
            {shop}
            </div>
        </div>
    )
}








