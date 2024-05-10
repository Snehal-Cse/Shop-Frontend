import React from 'react'
export default function Page() {
  return (
    <div className='flex flex-col w-screen h-[32.5rem] justify-center items-center gap-y-4 p-8'>
        <div className='text-7xl text-red-600'>THANKYOU!</div>
        <div className='font-bold w-9/12 flex-row justify-center'>Every Friday, expect a delivery of meticulously researched content, accompanied by clear writing and captivating visuals, all centered around the fascinating world of fashion. Our aim is to provide valuable insights for anyone eager to delve deeper into the realm of fashion. </div>
        <a href="/" className=' '>
            <button className="font-bold rounded-full decoration-1 p-2 border bg-slate-200">Go Back</button></a>
    </div>
  )
}

