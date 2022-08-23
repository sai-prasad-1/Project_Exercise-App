import React, { ReactElement } from "react"
import logo from "../assets/icons/Logo.png"
const Footer:React.FC = ():ReactElement => {
  return (
    <div className=" text-center text-black bg-[#111213ea] p-7">
    
      <div className="bottom flex flex-wrap justify-between items-center pb-20 pl-20 pr-20">
        <div className="logo grid place-content-center justify-self-start">
          <img src={logo} alt="logo"  className="w-64"/>
          <h1 className="capitalize text-white">Make Life changing Decision by investing in Your health</h1>
        </div>
        <div className="links">
          <ul className="flex flex-col items-center">
            <li className="text-white text-lg font-semibold">About Us</li>
            <li className="text-white text-lg font-semibold">Contact Us</li>
            <li className="text-white text-lg font-semibold">Privacy Policy</li>
            <li className="text-white text-lg font-semibold">Terms of Use</li>
          </ul>
        </div>
        <div className="socials">
          <ul className="flex flex-col items-center">
            <li className="text-white text-lg font-semibold">Facebook</li>
            <li className="text-white text-lg font-semibold">Twitter</li>
            <li className="text-white text-lg font-semibold">Instagram</li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Footer