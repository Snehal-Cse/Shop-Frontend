import React from 'react'

export default function SignUp() {
  return (
   <div className='h-[32rem] w-full  flex justify-center p-3 items-center'>
         <div className='h-4/5 flex flex-col w-1/4 items-center gap-y-1 bg-white p-3 rounded-md border-3 border-slate-200 '>
            <h1 className='font-bold text-3xl text-indigo-800'> SIGN UP </h1>
            <div className='flex flex-col gap-y-4 w-4/5 mt-6 '>
            <input type = "text" placeholder='Name' className='border-2 border-slate-300 w-full pl-1 rounded h-8 '/>
            <input type = "email" placeholder='Email ' className=' h-8 border-2 border-slate-300 w-full pl-1 rounded '/>
            <input type ="password" placeholder='Password'className='border-2 border-slate-300 w-full pl-1 rounded h-8' />
            <input type ="password" placeholder='Confirm Password'className='border-2 border-slate-300 w-full pl-1 rounded h-8' />
            </div>
            <button className='w-4/5 pl-1  mt-3 h-10 bg-indigo-900 rounded-full text-white font-bold'>CONTINUE</button>
            <span className='mt-3'>Already have an account? <a href="/login text-zinc-300"><b>Login here</b></a> </span>
            
         </div>
   </div>
  ) 
}
