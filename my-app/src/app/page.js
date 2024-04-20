import React from "react";
import {Button} from "@nextui-org/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Popular from "./components/Popular/popular";
import Offer from "./components/Offer/offer";
import NewCollection from "./components/NewCollection/newCollection";
import NewsLetter from "./components/NewsLetter/newsletter";

export default function Page(){
  return(
    <div>
    <div className ="w-screen h-full bg-gradient-to-r from-pink-200 to-blue-50 flex flex-row justify-around p-8 ">
      <div className ="flex flex-col justify-center gap-y-6 items-center">
        <h3 className = "font-bold font-roboto text-6xl italic subpixel-antialiased text-red-700">NEW ARRIVALS ONLY</h3>
        <div className="flex flex-col justify-center items center">
            <h2 className="flex flex-row text-4xl items-center justify-center font-roboto font-bold gap-x-3 text-yellow-500 italic subpixel-antialiased ">Shop Till You Drop !</h2>
        </div>
        <div className="flex gap-4 items-center justify-center w-min  ">
      <Button radius="full" className="bg-red-600 text-white font-bold p-4 text-lg">
        Latest Collections <FaLongArrowAltRight />
      </Button>
        </div>
      </div>
      <div className ="flex flex-col justify-center items-center">
        <img src="./shopping.png" className = "h-[38rem]" />
      </div>
    </div>
    <Popular/>
    <div className="flex justify-center p-8 mt-4 h-2/5">
    <Offer />
    </div>
    <NewCollection />
    <div className="flex justify-center p-8 mt-4 h-1/2">
    <NewsLetter />
    </div>
    </div>
  )
}


