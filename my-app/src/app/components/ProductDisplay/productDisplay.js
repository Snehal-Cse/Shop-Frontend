'use client'
import React, { useEffect } from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { cartState } from '../Context/context';
import { Button, ButtonGroup } from "@nextui-org/react";
export default function ProductDisplay(props) {
    const { state: { products, cart }, dispatch } = cartState();
    useEffect(() => {
        console.log(cart)
    }, [cart])
    const isInCart = cart.some((p) => p.id === props.id);

    return (
        <div className='h-full w-screen flex flex-row justify-center p-6 gap-x-12'>
            <div className="flex flex-row w-1/4 h-full justify-center items-center ">
                <img src={props.image} alt="image" className='w-full h-[22rem]' />
            </div>
            <div className=' flex flex-col justify-evenly'>
                <div className='flex flex-col gap-y-4'>
                    <h1 className='font-bold text-5xl text-red-600'>{props.desc}</h1>
                    <div className="flex flex-row gap-x-1 p-1 items-center text-center ">
                        <FaStar /> <FaStar /> <FaStar /> <FaStar />  <FaRegStar />
                        <h4 className='font-semibold ml-2'>(122)</h4>
                    </div>
                </div>
                <div className=' flex flex-row gap-x-5'>
                    <h3 className='text-2xl text-red-600 '>₹{props.oldPrice}</h3>
                    <h3 className='text-2xl text-slate-600 line-through'>₹{props.newPrice}</h3>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <h1 className='text-3xl font-semibold'>Select Size</h1>
                    <div className='flex flex-row gap-x-2 items-center'>
                        <span className='w-8 h-8 border-2 font-semibold border-slate-400 text-center'>S</span>
                        <span className='w-8 h-8 border-2 border-slate-400 text-center font-semibold'>M</span>
                        <span className='w-8 h-8 border-2 border-slate-400 text-center font-semibold'>L</span>
                        <span className='w-8 h-8 border-2 border-slate-400 text-center font-semibold'>XL</span>
                    </div>
                </div>
                {isInCart
                    ?   <Button className="w-36 font-bold" onClick={() => {
                        dispatch({
                            type: 'Remove_From_Cart',
                            payLoad: props.id
                        })
                    }} color="danger">Remove From Cart</Button> : <Button className="w-36 font-bold" onClick={() => {
                        dispatch({
                            type: 'Add_To_Cart',
                            payLoad: { 
                                id: props.id,
                                image:props.image,
                                desc: props.desc,
                                category:props.category,
                                oldPrice: props.oldPrice,
                                newPrice: props.newPrice
                              
                              }
                        })
                    }} color="success">Add To Cart</Button>}

            </div>
        </div>
    )
}

