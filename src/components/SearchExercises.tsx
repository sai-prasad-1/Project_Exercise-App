import React, { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
const SearchExercises: React.FC = () => {

  const [search, setSearch] = useState<string>("")

  const handelSearch=async()=>{
    if(search){
      // const exersisedata = await fetchData();
    }
  }
  return (
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
    </Stack>
  );
};

export default SearchExercises;
