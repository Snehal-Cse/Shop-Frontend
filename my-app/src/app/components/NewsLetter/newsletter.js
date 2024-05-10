"use client"
import React from 'react'
import { Input } from "@nextui-org/react";
import { MdEmail } from "react-icons/md";
import { Button, ButtonGroup } from "@nextui-org/react";
export default function newsletter() {
  return (
    <div className="w-[70%] h-full bg-gradient-to-b from-purple-200 to-pink-100 flex flex-col justify-center p-8 rounded-lg gap-y-5 ">
      <div className="flex flex-col  justify-center items-center gap-y-2">
        <h1 className="text-3xl font-bold text-cyan-950">Get Exclusive Offers On Your Email</h1>
        <h3 className="text-xl font-medium text-cyan-950">Subscribe to our newsletter and stay updated!</h3>
      </div>
      <form action="https://api.web3forms.com/submit" method='POST'>
        <div className='flex flex-row text-center'>
        <input type="hidden" className='hidden' name="subject" value="Response NewsLetter" />
          <input type="hidden"  name="access_key" value="8d061cd4-261c-4b63-a2be-ffc6609e1fa6" />
          <input
            type="hidden"
            name="redirect"
            value="http://localhost:3000/thanks" />
          <Input
            name='email'
            type="email"
            placeholder="you@example.com"
            startContent={
              <MdEmail className="text-2xl text-default-400 pointer-events-none flex-shrink-0 " />
            }
          />
          <input type="hidden" name="from_name" value="Shopper_Newsletter"/>
         
          <Button type="submit" className='bg-slate-700 text-white font-bold ml-2'>
            Subscribe
          </Button>
        </div>
      </form>
    </div>
  )
}


