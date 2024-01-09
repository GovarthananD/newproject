import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from "axios";
import { API } from "./api";
import MoviesCard from "./movieCard";
import { useNavigate } from "react-router-dom";



function MoviesList () {
const [moviesList,setMoviesList] = useState ([]);
    useEffect(()=>{
        getMovies();
    },[]);

const getMovies = () => {
    axios.get(`${API}/movies`).then((res)=>{
        if(res.status === 401){
            console.log("Movies Not Found")
        }
        setMoviesList(res.data)
    });
};

const handleDelete = (id) => {
    axios.delete(`${API}/movies/`+id).then((res)=>{
        if(res.status === 200){
            getMovies();
        }
    });  
};

const navigate = useNavigate();

return(
<div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
             Movies World
          </Typography>
          <Button color="inherit" onClick={()=>navigate("/addMovie")}>Add Movie</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <div className="movie-list">
        {moviesList.map((mov)=>{
            return(
               <MoviesCard key={mov.id} value={mov} handleDelete={handleDelete}/> 
            )
        })}
    </div>
</div>
    )
}

export default MoviesList;