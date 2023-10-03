import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddMovie({movielist, setMovieList}) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  return (
    <div className="add-movie">

      <TextField label="Name" variant="standard" onChange={(event) => setName(event.target.value)}
        value={name} />
      <TextField label="Poster" variant="standard" onChange={(event) => setPoster(event.target.value)}
        value={poster} />
      <TextField label="Rating" variant="standard" onChange={(event) => setRating(event.target.value)}
        value={rating} />
      <TextField label="Summary" variant="standard" onChange={(event) => setSummary(event.target.value)}
        value={summary} />
      <Button variant="contained" onClick={() => {
        const newMovie = {
          Name: name,
          Poster: poster,
          Rating: rating,
          Summary: summary
        };
        setMovieList([...movielist, newMovie]);
      }}>
        Add Movie
      </Button>

    </div>
  );
}
