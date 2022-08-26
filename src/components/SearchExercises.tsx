import React, { useState, useEffect } from "react";
import { fetchData,Exersiseoptions } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

interface ExersiseSearch{
  name:string;
  target:string;
  equipment:string;
  bodyPart:string;
}

interface Props{
  setBodyPart: React.Dispatch<React.SetStateAction<string>>,
  bodyPart: string,
  setExersise: React.Dispatch<React.SetStateAction<string[]>>,
}
const SearchExercises = ({ bodyPart,setBodyPart,setExersise}:Props) => {



  const [search, setSearch] = useState<string>("")
  const [bodyParts, setBodyParts] = useState<string[]>([])

  useEffect(() => {
    const fetchExersiseData = async () => {
      const bodypartsData:string[] =["back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist"]
      setBodyParts(["all",...bodypartsData])
      
      
    }

    fetchExersiseData();
  }, [])
  
  

  const handelSearch=async()=>{
    if(search){
      const exercisedata = await fetchData('https://exercisedb.p.rapidapi.com/exercises',Exersiseoptions);

      console.log(exercisedata);
      const serachdata = exercisedata.filter((exercise:ExersiseSearch) => exercise.name.toLowerCase().includes(search.toLowerCase()) || exercise.target.toLowerCase().includes(search.toLowerCase()) ||exercise.equipment.toLowerCase().includes(search.toLowerCase())||exercise.bodyPart.toLowerCase().includes(search.toLowerCase()));
      
      setSearch("")
      setExersise(serachdata);
    }
  }
  return (
    <React.Fragment>
    <div className="relative pb-9 search--bg z-10">
      <div className="absolute top-0 left-0 bg-[#111213ea] w-full h-full "></div>
      <div className="w-full min-h-[50vh]  flex flex-col justify-center items-center ">
      <h3 className="md:text-5xl font-bold text--gradient mb-7 z-10">
        Dive into the world of Exercises
      </h3>
      <div className="w-full flex justify-center items-center z-10">
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
          className="w-[40%] p-2"
        />
        <button className="p-2 pl-4 pr-4 w bg-orange-400 z-10"
        
        onClick={handelSearch}>
          Search
        </button>
        </div>
        <h1 className="md:text-3xl font-bold text-orange-400 mt-7 text-center z-[100]">
        Select Catagery
      </h1>
      </div>
     
      <div className="z-50">
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </div>
    </div></React.Fragment>
  );
};

export default SearchExercises;
