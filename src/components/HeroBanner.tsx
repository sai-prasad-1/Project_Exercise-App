import React from 'react';
import { Box,Typography,Button } from '@mui/material';
import HeroBannerImg from "../assets/images/banner.png";
const HeroBanner:React.FC = () => {
  return (
    <Box sx={{
      mt:{lg:'212px',xs:'70px'},
      ml:{sm:'50px'}

    }} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight={"600"} fontSize="26px">
        Fitness Club
      </Typography>
      <Typography fontWeight={"700"} sx={{
        fontSize:{lg:"44px",sx:"40px"}
      }} 
      mb="23px"
      mt="30px"
      >
        Smile Sweat <br/>and Repeat
      </Typography>
      <Typography fontSize={'22px'} lineHeight="35px" mb={4}>
        check out most effective exersises
      </Typography>
      <Button variant="contained" color="error" 
      sx={{backgroundColor:"#ff2526",padding:"10px"}}>
        Explore Exercises
      </Button>
      <Typography
      fontWeight={"600"}
      color="#ff2625"
      sx={{
        opacity:0.15,
        display:{lg:"block",xs:'none'}
      }}
      fontSize='200px'>
        Exercises

      </Typography>
      <img src={HeroBannerImg} alt="Hero" className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner