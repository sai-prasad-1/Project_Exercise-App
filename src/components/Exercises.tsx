import React,{useState,useEffect} from 'react'
import Pagination from '@mui/material/Pagination'
import {Box,Stack,Typography} from '@mui/material'
import { fetchData,Exersiseoptions } from "../utils/fetchData";
import ExerciseCard from './ExerciseCard';

interface Props{
  exercises: any[],
  bodyPart: string,
  setExersise: React.Dispatch<React.SetStateAction<string[]>>,
}

const Exercises = ({ exercises,bodyPart,setExersise}:Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', Exersiseoptions );
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,Exersiseoptions );
      }

      setExersise(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

    // Pagination
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
  
    const paginate = (event, value:any) => {
      setCurrentPage(value);
  
      window.scrollTo({ top: 1800, behavior: 'smooth' });
    };
  
  return (
    
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
    <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
    <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
      {currentExercises.map((exercise, idx) => (
        <ExerciseCard key={idx} item={exercise} />
      ))}
    </Stack>
    <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
      {exercises.length > 9 && (
        <Pagination
          color="standard"
          shape="rounded"
          defaultPage={1}
          count={Math.ceil(exercises.length / exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size="large"
        />
      )}
    </Stack>
  </Box>
    
  )
}

export default Exercises