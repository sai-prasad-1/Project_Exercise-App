import React, { ReactElement } from "react"
import { GrFacebook, GrInstagram, GrTwitter } from "react-icons/gr"
import logo from "../assets/icons/Logo.png"
const Footer:React.FC = ():ReactElement => {
  return (
    <div className=" grid md:grid-cols-3 grid-cols-1 place-content-center text-black bg-[#111213ea] p-7">
        <div className="logo grid place-content-center justify-self-start gap-4">
          <img src={logo} alt="logo"  className="w-64"/>
          <h1 className="capitalize text-white">Make Life changing Decision by investing in Your health</h1>
        </div>
        <div className="links">
          <ul className="flex flex-col items-center space-y-4">
            <li className="text-white text-lg ">About Us</li>
            <li className="text-white text-lg ">Contact Us</li>
            <li className="text-white text-lg ">Privacy Policy</li>
            <li className="text-white text-lg ">Terms of Use</li>
          </ul>
        </div>
        <div className="socials">
          <ul className="flex space-x-4 items-center justify-center h-full">
            <li className="text-white text-lg font-semibold"><a href="https://www.facebook.com"><GrFacebook/></a></li>
            <li className="text-white text-lg font-semibold"><a href="https://www.twitter.com"><GrTwitter/></a></li>
            <li className="text-white text-lg font-semibold"><a href="https://www.instagram.com"><GrInstagram/></a></li>
          </ul>
        </div>
    </div>
  )
}

export default Footer