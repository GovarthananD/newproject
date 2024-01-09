import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import { Counter } from "./Counter";
import Card from '@mui/material/Card';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';

export function Movies({ movie, id }) {
  const rate = {
    color: movie.Rating >= 8.0 ? "Green" : "Red",
  };
  const [Hide, setHide] = useState(true);
  const parastyle = {
    display: Hide ? "block" : "none",
  };
  const navigate = useNavigate();
  return (
    <Card sx={{height: "min-content"}} className="movie-container">
      <img src={movie.Poster} alt="moviepicture" className="movie-poster" />
      <div className="movie-specs"> 
        <h2 className="movie-name">{movie.Name}
        <IconButton
          onClick={() => setHide(!Hide)}>
          {Hide ? <ExpandLessIcon /> : <ExpandMoreIcon />}
       </IconButton>
       <IconButton
          onClick={() => navigate(`/movies/${id}`)}>
         <InfoIcon />
       </IconButton>
        </h2>
        <p style={rate} className="movie-rating"><strong>⭐ {movie.Rating}</strong></p>
      </div> 
        <p style={parastyle} className="movie-summary">{movie.Summary}</p>
        <Counter />

    </Card>

  );
  
}
