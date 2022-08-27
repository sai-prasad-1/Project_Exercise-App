import { useState } from "react"

import HeroBanner from "../components/HeroBanner"
import Exercises from "../components/Exercises"
import SearchExercises from "../components/SearchExercises"
import Newsletter from "../components/Newsletter"
import BMI from "../components/BMI"
import{ExercisesType} from "../components/Exercises"
const Home = () => {
  const [exercises, setExersise] = useState<ExercisesType[]>();
  const [bodyPart, setBodyPart] = useState<string>("all");

  return (
    <div>
      <HeroBanner/>
      <SearchExercises setExersise={setExersise} setBodyPart={setBodyPart} bodyPart={bodyPart}/>
      <Exercises setExersise={setExersise} exercises={exercises} bodyPart={bodyPart}/>
      <BMI/>
      <Newsletter/>
    </div>
  )
}

export default Home