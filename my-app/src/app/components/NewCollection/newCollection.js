import React from "react"
import dataProduct2 from "../Assets/data2"
import Item from "../Item/item"
export default function NewCollection(){
    const newest = dataProduct2.map((item)=>{
        return <Item 
        id = {item.id}
        image = {item.image}
        desc = {item.desc}
        newPrice = {item.newPrice}
        oldPrice = {item.oldPrice}
        />
    })
    return(
        <div className="flex flex-col justify-center items-center p-4 mt-6 ">
            <h1 className = "font-extrabold text-5xl pb-6">NEW COLLECTIONS <div className="flex flex-row justify-center pt-3"><hr className="bg-slate-800 h-1 w-96" /></div></h1>
            <div className="flex flex-wrap mt-12 ml-12 mr-12 justify-center items-center gap-x-7 gap-y-7">
            {newest}
            </div>
        </div>
    )
}





