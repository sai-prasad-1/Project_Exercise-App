import React, { useLayoutEffect } from "react";
import { Box } from "@mui/material";
import BodyPart from "./BodyPart";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper";
import 'swiper/css';
import ExerciseCard from "./ExerciseCard";


interface Props {
  data: any[];
  bodyPart?: string;
  setBodyPart?: React.Dispatch<React.SetStateAction<string>>

}
const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }: Props) => {
  const[width,setWidth]=React.useState<number>(window.innerWidth)
  const[numberOfSlides,setNumberOfSlides]=React.useState<number>(3)
  useLayoutEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    if(width>1090){
      setNumberOfSlides(3)
  
    }
    else if (width>700 && width<1090){
      setNumberOfSlides(2)
    }
    else if(width<700){
      setNumberOfSlides(1)
    }
     else{
      setNumberOfSlides(3)
    }
    console.log(width);
    console.log(numberOfSlides);
    
  }, [window.innerWidth]);



  return (
    <div className="flex items-center justify-center">
  
      <Swiper
        navigation={true}
        modules={[Autoplay, Navigation]}
        spaceBetween={50}
        slidesPerView={numberOfSlides}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
    
        className="w-[90%] "
      >
        {data.map((item) => {
          return <SwiperSlide> <Box key={item.id || item} >
            {bodyPart && setBodyPart ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard item={item} />}
          </Box>
          </SwiperSlide>;
        })}

      </Swiper>
    </div>
  );
};

export default HorizontalScrollBar;
