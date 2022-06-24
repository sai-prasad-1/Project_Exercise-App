import React, { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
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
      const bodypartsData:string[] = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',Exersiseoptions);
      setBodyParts(["all",...bodypartsData])
      console.log(bodypartsData);
      
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
    <Stack alignItems={"center"} justifyContent="center" p="20px" mt="37px">
      <Typography
        fontWeight={"700"}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        textAlign={"center"}
      >
        Awesome Exersise You <br /> Should Know
      </Typography>
      <Box position={"relative"} mb="72px">
        <TextField
          sx={{
            height: "76px",
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width:{lg: "800px", xs: "350px"},
            backgroundColor: "#FFF",
            borderRadius: "40px",
          }}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
        />
        <Button className="search-btn"
        sx={{
          bgcolor:"#FF2635",
          color:"#FFF",
          textTransform: "none",
          width:{lg: "175px", xs: "80px"},
          fontSize: {lg: "20px", xs: "14px"},
          height: "56px",
          position: "absolute",
          right: "0",
           
        }}
        onClick={handelSearch}>
          Search
        </Button>
      </Box>

      <Box sx={{
        postion:"relative",
        width:"100%",
        p:"20px"
      }}>
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack></React.Fragment>
  );
};

export default SearchExercises;
