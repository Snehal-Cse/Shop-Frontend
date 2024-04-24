"use client"
import React from 'react';
import AllProduct from '../components/Assets/allProduct';
import { useSearchParams } from 'next/navigation'; 
import Breadcrum from '../components/Breadcrum/breadcrum';
import ProductDisplay from '../components/ProductDisplay/productDisplay';
import DescriptionBox from '../components/descriptionBox/descriptionBox';
import RelatedProd from '../components/RelatedProducts/relatedProd';
export default function Page() {
  const searchParams = useSearchParams(); 
  const productID = searchParams.get('id')
  const product = AllProduct.find((e) => e.id === Number(productID));
  if (!product) {
    return <div>Product not found</div>;
  }
  const { category, desc } = product;
  return (
    <div className='flex flex-col h-full w-full'>
 <Breadcrum category={category} desc={desc} />
   <ProductDisplay id = {product.id}
   image = {product.image} 
      desc = {product.desc}
      oldPrice = {product.oldPrice}
      newPrice = {product.newPrice}
      category = {product.category}
       />
    <DescriptionBox />
   <RelatedProd 
   category = {category}
   />

    </div>
  )

}

