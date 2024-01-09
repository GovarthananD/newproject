import { useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import { useState } from "react";
import { Navigate } from "react-router-dom";

export function Moviedetails({ movielist }) {
  const { id } = useParams();
  console.log(id);
  console.log(movielist);
  const movie = movielist[id];
  console.log(movie);
  const [Hide, setHide] = useState(true);
  const rate = {
    color: movie.Rating >= 8.0 ? "Green" : "Red",
  };
  const navigate = useNavigate();
  return (<div>
    <iframe width="650"
      height="480"
      src={movie.Trailer}
      title={movie.Name}
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
    </iframe>
    <div className="movie-details">
      <div className="movie-specs">
        <h2 className="movie-name">{movie.Name}</h2>
        <p style={rate} className="movie-rating"><strong>⭐ {movie.Rating}</strong></p>
        <Button variant="contained" onClick={()=> navigate (-1)}>Back</Button>
      </div>
    </div>

  </div>);
}
