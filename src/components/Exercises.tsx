import React,{useState,useEffect} from 'react'
import Pagination from '@mui/material/Pagination'
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
  
    const paginate = (event:any,value:any) => {
      setCurrentPage(value);
      
      
  
      window.scrollTo({ top: 1800, behavior: 'smooth' });
    };
  
  return (
    
    <div className='w-full flex  flex-col justify-center items-center flex-wrap bg-[#101112f5]'>
    <h1 className='text-orange-400 md:text-6xl text-3xl mt-11 mb-11
    '>Showing Results</h1>
    <div className='w-full flex justify-center items-center flex-wrap gap-7'>
      {currentExercises.map((exercise, idx) => (
        <ExerciseCard key={idx} item={exercise} />
      ))}
    </div>
    <div className='mt-11 pb-11' >
      {exercises.length > 9 && (
        <Pagination
          classes={{ul:"bg-orange-400 rounded-full"}}
          shape="rounded"
          defaultPage={1}
          count={Math.ceil(exercises.length / exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size="large"
        />
      )}
    </div>
  </div>
    
  )
}

export default Exercises