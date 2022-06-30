import React, { useState } from "react"
import { Box } from "@mui/system"
import HeroBanner from "../components/HeroBanner"
import Exercises from "../components/Exercises"
import SearchExercises from "../components/SearchExercises"
const Home = () => {
  const [exercises, setExersise] = useState<string[]>([]);
  const [bodyPart, setBodyPart] = useState<string>("all");

  return (
    <div>
      <HeroBanner/>
      <SearchExercises setExersise={setExersise} setBodyPart={setBodyPart} bodyPart={bodyPart}/>
      <Exercises setExersise={setExersise} exercises={exercises} bodyPart={bodyPart}/>
    </div>
  )
}

export default Home