import React from "react";
import { Box} from "@mui/material";
import BodyPart from "./BodyPart";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import ExerciseCard from "./ExerciseCard";


interface Props {  data: any[];
    bodyPart?: string;
    setBodyPart?: React.Dispatch<React.SetStateAction<string>>
  
}
const HorizontalScrollBar = ({ data,bodyPart,setBodyPart }: Props) => {
  return (
    <div className="flex items-center justify-center">
         <Swiper
         navigation={true}
          modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
      breakpoints={{
        320: {
          slidesPerView: 1.5,
        },
        991: {
          slidesPerView: 3,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="w-[90%]"
    >
      {data.map((item) => {
        return<SwiperSlide> <Box key={item.id||item} >
            {bodyPart && setBodyPart ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard item={item} /> }
        </Box>
        </SwiperSlide>;
      })}

</Swiper>
    </div>
  );
};

export default HorizontalScrollBar;
