import React from 'react'
import {Stack, Typography} from "@mui/material"
import Icon from "../assets/icons/gym.png"
import {IoMdBody} from "react-icons/io"

interface Props{
    item:string,
    bodyPart: string,
    setBodyPart: React.Dispatch<React.SetStateAction<string>>
}

function capitalizeFirstLetter(string:string):string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const BodyPart = ({item,bodyPart,setBodyPart}:Props) => {
  return (
    <div className={` ${item==bodyPart?"border-t-2 border-orange-400":""} bg-[#383736] shadow-md rounded-lg shadow-[black] h-[250px] w-[250px] flex flex-col  items-center  justify-center`} onClick={()=>setBodyPart(item)}
    >
        <IoMdBody className='text-6xl text-orange-400 '/>
        <p className={`${item==bodyPart?"text-orange-400":"text-white"} text-xl font-semibold  mt-2`}>{capitalizeFirstLetter(item)}</p>
    </div>
  )
}

export default BodyPart