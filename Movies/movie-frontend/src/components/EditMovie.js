import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { API } from "./api";

function EditMovie () {
    const {id} = useParams();
    const [movie,setMovie] = useState()
   

    useEffect(()=>{
        fetch(`${API}/movies/${id}`,{
            method:"GET"
        }).then((data)=>data.json())
        .then((mv)=>setMovie(mv));
    },[]);
    if(movie){
        return<EditMovieForm movie={movie}/>
    }else{
        return "......Loading"
    }
}

function EditMovieForm ({movie}) {
    const navigate = useNavigate();

    const [Poster,setPoster] = useState(movie.Poster);
    const [Name,setName] = useState(movie.Name);
    const [Trailer,setTrailer] = useState(movie.Trailer);
    const [Rating,setRating] = useState(movie.Rating);
    const [Summary,setSummary] = useState(movie.Summary);
   

    const update = () => {
        const updatedMovie = {
            Poster:Poster,
            Name:Name,
            Trailer:Trailer,
            Rating:Rating,
            Summary:Summary,
        }
        fetch(`${API}/movies/${movie.id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(updatedMovie),
        })
        .then((data)=>data.json())
        .then(()=>navigate("/"))
    }

    return(<div className="form">   
    <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}noValidate autoComplete="off" >
        Poster <TextField id="outlined-text-input" label="Movie Poster" type="text" autoComplete="current-text" onChange={(event)=>setPoster(event.target.value)} value={Poster} /><br></br>
        Name <TextField id="outlined-text-input" label="Movie Name" type="text" autoComplete="current-text" onChange={(event)=>setName(event.target.value)} value={Name} /><br></br>
        Trailer <TextField id="outlined-text-input" label="Movie Trailer" type="text" autoComplete="current-text" onChange={(event)=>setTrailer(event.target.value)} value={Trailer} /><br></br>
        Rating <TextField id="outlined-text-input" label="Movie Rating" type="text" autoComplete="current-text" onChange={(event)=>setRating(event.target.value)} value={Rating} /><br></br>
        Summary <TextField id="outlined-text-input" label="Movie Summary" type="text" autoComplete="current-text" onChange={(event)=>setSummary(event.target.value)} value={Summary} /><br></br>
        <Button variant="contained" onClick={update}>update</Button>
        <Button variant="contained" onClick={()=>navigate(-1)}>Back</Button>
        
    </Box>        
    </div>)
}

export default EditMovie;