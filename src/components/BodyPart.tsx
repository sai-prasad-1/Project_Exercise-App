import React from 'react'
import {Stack, Typography} from "@mui/material"
import Icon from "../assets/icons/gym.png"

interface Props{
    item:string,
    bodyPart: string,
    setBodyPart: React.Dispatch<React.SetStateAction<string>>
}

const BodyPart = ({item,bodyPart,setBodyPart}:Props) => {
  return (
    <Stack alignItems={"center"} justifyContent="center" className='bodyPart-card' sx={{
            borderTop: bodyPart===item?"2px solid #00bcd4":"",
            backgroundColor: "#fff", 
            borderBottomLeftRadius: "20px",
            width: "270px",
            height: "280px",
            cursor: "pointer",
            gap: "47px",                                
        

    }}
    onClick={()=>setBodyPart(item)}
    >
        <img src={Icon} alt="Dumbell" style={{width:"40px",height:"40px"}}/>
        <Typography>{item}</Typography>
    </Stack>
  )
}

export default BodyPart