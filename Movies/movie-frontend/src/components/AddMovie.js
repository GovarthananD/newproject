import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { API } from "./api";
import { useNavigate } from "react-router-dom";


function AddMovie ({moviesList,setMoviesList}) {
    const [Poster,setPoster] = useState("");
    const [Name,setName] = useState("");
    const [Trailer,setTrailer] = useState("");
    const [Rating,setRating] = useState("");
    const [Summary,setSummary] = useState("");

    const navigate = useNavigate();

    const handleSubmit = () => {
        const newmovie = {
            Poster:Poster,
            Name:Name,
            Trailer:Trailer,
            Rating:Rating,
            Summary:Summary,
        }
        fetch(`${API}/movies`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newmovie),
        })
        .then((data)=>data.json())
        .then((res)=>{setMoviesList(res)})
        .then(()=> navigate("/"));
    }

    return(<div className="form">   
    <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}noValidate autoComplete="off" >
        Poster <TextField id="outlined-text-input" label="Movie Poster" type="text" autoComplete="current-text" onChange={(event)=>setPoster(event.target.value)} value={Poster} /><br></br>
        Name <TextField id="outlined-text-input" label="Movie Name" type="text" autoComplete="current-text" onChange={(event)=>setName(event.target.value)} value={Name} /><br></br>
        Trailer <TextField id="outlined-text-input" label="Movie Trailer" type="text" autoComplete="current-text" onChange={(event)=>setTrailer(event.target.value)} value={Trailer} /><br></br>
        Rating <TextField id="outlined-text-input" label="Movie Rating" type="text" autoComplete="current-text" onChange={(event)=>setRating(event.target.value)} value={Rating} /><br></br>
        Summary <TextField id="outlined-text-input" label="Movie Summary" type="text" autoComplete="current-text" onChange={(event)=>setSummary(event.target.value)} value={Summary} /><br></br>
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        <Button variant="contained" onClick={()=>navigate(-1)}>Back</Button>
    </Box>        
    </div>)
}

export default AddMovie;