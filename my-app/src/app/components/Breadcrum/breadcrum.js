import React from 'react'
import { FaArrowRight } from "react-icons/fa";
export default function Breadcrum(props) {
  return (
    <div className = "flex flex-row items-center gap-x-4 ml-10 text-center font-semibold"> 
        Shop  <FaArrowRight /> {props.category} <FaArrowRight /> {props.desc}
    </div>
  )
}

