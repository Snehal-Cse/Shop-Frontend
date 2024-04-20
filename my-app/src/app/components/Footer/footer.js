import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
export default function Footer(){
    return(
        <div className = "flex flex-col justify-center items-center gap-y-3 ">
                <ul className ="flex flex-row font-semibold text-xl gap-x-4 ">
                   <li className="cursor-pointer">Company</li>
                   <li className="cursor-pointer">Products</li>
                   <li className="cursor-pointer">Offices</li>
                   <li className="cursor-pointer">About</li>
                   <li className="cursor-pointer">Contact</li>
                </ul>
            
            <div className = "flex flex-row gap-x-2">
            <FaInstagram className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
            <FaWhatsapp className="cursor-pointer" />
            </div>
            <hr className="bg-gray-900 w-full h-px shadow-slate-950"/>
            <div className="flex items-center h-6 text-center pb-4 ">Copyright @2024 - All Right Reserved</div>

        </div>
    )
}