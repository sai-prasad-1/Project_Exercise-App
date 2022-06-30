import { Typography, Box} from '@mui/material';

import HorizontalScrollBar from './HorizontalScrollBar';
const Loader= ()=>{
  return <div>Loading</div>
}

interface Props{
  targetMuscleExercises: any[],
  equipmentExercises: any[];

}

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }:Props) => {
console.log(targetMuscleExercises)
console.log(equipmentExercises)

return(
  <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
 
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollBar data={targetMuscleExercises} /> : <Loader />}
   
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>
    
      {equipmentExercises.length !== 0 ? <HorizontalScrollBar data={equipmentExercises} /> : <Loader />}
   
  </Box>
)};

export default SimilarExercises;