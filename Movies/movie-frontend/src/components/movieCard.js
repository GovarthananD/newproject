import React from "react";
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from '@mui/material/Link';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useNavigate } from "react-router-dom";


function MoviesCard ({value,handleDelete}) {
    const navigate = useNavigate();
    return(<div className="movie-container">
        <img src={value.Poster} alt={value.Name} className="movie-poster" />
        <div className="movie-specs">
            <h2 className="movie-name">{value.Name}</h2>
            <Link href={value.Trailer} target="_blank"><YouTubeIcon/></Link>
            <p className="movie-rating">⭐ {value.Rating}</p>
        </div>
        <p className="movie-summary">{value.Summary}</p>
        
        <div className="button">
        <Button variant="contained" onClick={()=>navigate(`/editMovie/${value.id}`)}><EditIcon/></Button>
        <Button variant="contained" onClick={()=>handleDelete(value.id)}><DeleteIcon/></Button>
        </div>

    </div>)
}

export default MoviesCard;