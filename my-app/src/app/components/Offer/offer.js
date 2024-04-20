import {Button} from "@nextui-org/react";
export default function Offer(){
    return(
        <div className ="w-[80%] h-full bg-gradient-to-r from-purple-100 to-pink-100 flex flex-row justify-around p-8 ">
      <div className ="flex flex-col justify-center gap-y-5 items-start">
        <h3 className = "font-bold font-roboto text-6xl  text-cyan-950">Exclusive</h3>
        <h3 className = "font-bold font-roboto text-6xl  text-cyan-950">Offers For You</h3>
        <div className="flex flex-col justify-center items center">
            <h2 className="flex flex-row text-2xl items-center justify-center font-roboto font-semibold  text-cyan-800">ONLY ON BEST SELLING PRODUCTS</h2>
        </div>
        <div className="flex gap-4 items-center justify-center w-min  ">
      <Button radius="full" className="bg-red-600 text-white font-bold p-4 text-lg">
        Check Now 
      </Button>
        </div>
      </div>
      <div className ="flex flex-col justify-center items-center">
        <img src="./shopping2.png" className = "h-[24rem]" />
      </div>
    </div>
    )
}