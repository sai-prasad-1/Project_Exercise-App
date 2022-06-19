import React from "react"
import { Box } from "@mui/system"
import HeroBanner from "../components/HeroBanner"
import Exercises from "../components/Exercises"
import SearchExercises from "../components/SearchExercises"
const Home:React.FC = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises/>
      <Exercises/>
    </Box>
  )
}

export default Home