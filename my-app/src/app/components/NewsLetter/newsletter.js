"use client"
import React from 'react'
import {Input} from "@nextui-org/react";
import { MdEmail } from "react-icons/md";
import {Button, ButtonGroup} from "@nextui-org/react";
export default function newsletter() {
   
  return (
        <div className ="w-[70%] h-full bg-gradient-to-b from-purple-200 to-pink-100 flex flex-col justify-center p-8 rounded-lg gap-y-5 ">
            <div className ="flex flex-col  justify-center items-center gap-y-2">
        <h1 className="text-3xl font-bold text-cyan-950">Get Exclusive Offers On Your Email</h1>
        <h3 className="text-xl font-medium text-cyan-950">Subscribe to our newsletter and stay updated!</h3>
        </div>
        <div className='flex flex-row text-center'>
      <Input
      type="email"
      placeholder="you@example.com"
      startContent={
        <MdEmail className="text-2xl text-default-400 pointer-events-none flex-shrink-0 " />
      }
    />
      <Button className='bg-slate-700 text-white font-bold ml-2'>
      Subscribe
    </Button>
        </div>
    </div>
    )
}
  

