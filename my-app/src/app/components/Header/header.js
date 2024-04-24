'use client'
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { ThemeSwitcher } from "../ThemeSwitcher/themeSwitch";
import { FaCartShopping } from "react-icons/fa6";
import { cartState } from "../Context/context";

export default function Header() {
  const [menu, setMenu] = useState("");
  // ---------------------------------------------------------------------------------------------------------------------
  const { state:{cart} } = cartState();
  
//----------------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    const pathName = window.location.pathname;
    switch(pathName){
      case "/":
      setMenu("shop")
      break;
      case "/men":
      setMenu("men")
      break;
      case "/women":
      setMenu("women")
      break;
      case "/kids":
      setMenu("kids")
      break;
      default:
        setMenu("")
        break;
    }
  }, []);

  return (
    <div className="w-full flex flex-row justify-between h-24 items-center p-8 ">
     <div className = "h-20 w-20">
     <img src = "/logoImp.jpg"/>
     </div>
     <div className = "flex flex-row gap-x-12 list-none justify-between p-4 font-semibold font-roboto  ">
      <a href="/"> <li className = "cursor-pointer" onClick={()=>{setMenu("shop")}}>SHOP {menu==="shop"?<hr className="bg-black h-1" />:<></>}</li></a>
      <a href="/men"> <li className = "cursor-pointer" onClick={()=>{setMenu("men")}}>MEN {menu==="men"?<hr className="bg-black h-1"/>:<></>}</li></a>
      <a href="/women"><li className = "cursor-pointer" onClick={()=>{setMenu("women")}}>WOMEN {menu==="women"?<hr className="bg-black h-1"/>:<></>}</li> </a>
      <a href="/kids"> <li className = "cursor-pointer" onClick={()=>{setMenu("kids")}}>KIDS {menu==="kids"?<hr className="bg-black h-1"/>:<></>}</li></a>
     </div>
     <div className = "flex flex-row gap-8 items-center">
     <div className=""><ThemeSwitcher /></div>
     <div className=" relative">
     <a href = "/cartPage"><FaCartShopping className = "text-2xl" /> </a>
     <div className = "w-min  h-min p-0.5 bg-red-600 items-center text-xs justify-center absolute mt-[-2.3rem] ml-[1rem] text-center rounded-full text-white">{cart.length}</div>
     </div>
    <a href="/signup"> <Button radius="full" className="bg-white border-2 border-black font-bold text-black">
         Login
       </Button></a>
     </div>
    </div>
   );
 }

