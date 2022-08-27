
import {Link} from "react-router-dom";
interface Props{
    item:{bodyPart:string,
    equipment:string,
    gifUrl:string,
    id:string,
    name:string,
    target:string}
}


function capitalizeFirstLetter(string:string):string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const ExerciseCard = ({item }:Props) => {
  
  return (
    <Link to={`/exersise/${item.id}`}  className="exercise-card border-[1px] border-orange-400 flex flex-col items-center justify-center rounded-lg">
        <img src={item.gifUrl} alt={item.name} loading="lazy" className='mt-7 rounded-lg' />
        <div className='flex w-full justify-center items-center space-x-7  mt-6'>
      <button className='p-3 bg-orange-300 rounded-full'>
        {item.bodyPart}
      </button>
      <button className='p-3 bg-red-300 rounded-full'>
        {item.target}
      </button>
    </div>
    <h1 className='text-orange-400 text-2xl mb-5 mt-5'>
      {capitalizeFirstLetter(item.name)}
    </h1>
    </Link>
  )
}

export default ExerciseCard