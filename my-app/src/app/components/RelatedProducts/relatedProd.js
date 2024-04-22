import React from 'react'
import AllProduct from '../Assets/allProduct'
import Item from '../Item/item'

export default function RelatedProd(props) {
 
    const prod = AllProduct.filter((item) => item.category == props.category);
    const displayItems = prod.slice(0,4).map((e)=>{
        return <Item 
            id = {e.id}
            image = {e.image}
            desc = {e.desc}
            oldPrice = {e.oldPrice}
            newPrice = {e.newPrice}
         />
    })
  return (
    <div className='flex flex-col justify-center items-center w-full h-full p-8 gap-y-2'>
    <h1 className='font-bold text-4xl '>RELATED PRODUCTS</h1>
    <hr className="bg-slate-800 h-1 w-80" />
     <div className='flex flex-wrap gap-x-4 mt-10 mb-5 '>
        {displayItems}
     </div>
    </div>
  )
}

