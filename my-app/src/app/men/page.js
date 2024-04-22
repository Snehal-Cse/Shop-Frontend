"use client"
import React from 'react'
import AllProduct from '../components/Assets/allProduct';
import Item from '../components/Item/item';
import { RiArrowDropDownLine } from "react-icons/ri";

export default function page() {
  const menProducts = AllProduct.filter((item) =>item.category === "men" ).map((item) => (
    <Item
      id={item.id} 
      image={item.image}
      desc={item.desc}
      newPrice={item.newPrice} 
      oldPrice={item.oldPrice} 
    />
  ));
  return (
    <div className='h-full w-screen flex flex-col items-center justify-center '>
      <img src='https://smshops.online/wp-content/uploads/2020/12/men-fashion.jpg' className="w-full "/>
      <div className='flex flex-row justify-between w-4/5 pt-4 h-20 items-center '>
      <h4 className='text-xl '><b>Showing 1-12 </b>out of 36 Products</h4>
      <button className=' flex flex-row  items-center justify-center border-2 bg-white rounded-full p-2 px-4 border-black text-black text-center font-bold'>Sort by <RiArrowDropDownLine   className='font-bold text-center text-xl'/></button>
      </div> 
      <div className='flex flex-wrap mt-10 py-4 px-10 gap-y-6 gap-x-4 justify-center'>{menProducts}</div>
      <div className='h-24 p-3'>
        <button className='border-2 bg-zinc-400 rounded-full p-2 px-4 border-zinc-400 text-white text-center font-bold flex justify -center'>Explore</button>
      </div>
    </div>
   
  );
}


