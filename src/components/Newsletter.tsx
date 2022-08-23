import React from 'react'
import {GrSend} from "react-icons/gr"
import img from "../assets/images/footer_img.png"


type Props = {}

const Newsletter = (props: Props) => {
  return (
    <div className="top grid grid-cols-2">
    <div className="grid place-content-center h-full space-y-6 w-full" >
      <h1 className="text-orange-400 font-bold font-mono tracking-[10px]">NO CREDIT CARD REQUIRED</h1>
      <h1 className="text-5xl text-white text-start font-semibold">Start using Hanover Today</h1>
      <div className="relative w-full ">

      <input type="email" className=" h-[50px] bg-transparent border-b-2 focus:border-orange-400 outline-none w-full text-orange-300 placeholder:text-orange-400" placeholder="Subscribe to our Newsletter"/>
      <a type="button"  className="absolute right-0  m-2 text-orange-400 hover:scale-150 " ><GrSend size={25}  color="#e0822b"/></a>
      </div>
    </div>


    <img src={img} alt="footer img"  className="w-[30vw] place-self-center" />
  </div>
  )
}

export default Newsletter