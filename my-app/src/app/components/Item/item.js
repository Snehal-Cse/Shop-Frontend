import React from 'react'
export default function Item(props){
  return (
   <div className="">
    <div className="">
        <img src={props.image} className="h-80 w-72 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-200 ..."/>
    </div>
    <p className="flex flex-row justify-center font-semibold text-base pt-3">{props.desc}</p>
    <div className ="flex flex-row justify-evenly">
        <h3 className="">₹{props.newPrice}</h3>
        <h3 className =" line-through text-gray-400 decoration-black">₹{props.oldPrice}</h3>
    </div>
   </div>
  )
}
