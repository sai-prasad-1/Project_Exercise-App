
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
  <div >
    <h1 className='text-5xl mb-11 text-center mt-11 text-orange-100'>
      Similar <span className="text-orange-400" style={{  textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </h1>
 
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollBar data={targetMuscleExercises} /> : <Loader />}
   
    <h1 className='text-5xl mb-11 text-center mt-11 text-orange-100'>
      Similar <span className="text-orange-400" style={{ textTransform: 'capitalize' }}>Equipment</span> exercises
    </h1>
    
      {equipmentExercises.length !== 0 ? <HorizontalScrollBar data={equipmentExercises} /> : <Loader />}
   
  </div>
)};

export default SimilarExercises;