import "./App.css";
import { Movielist } from "./Movielist";
import { AddColor } from "./AddColor";
import { Routes, Route, Link, Navigate, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AddMovie } from "./AddMovie";
import { Moviedetails } from "./Moviedetails";
import { Error } from "./Error";
import { HomePage } from "./HomePage";import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useEffect } from "react";


export default function App() {
  const [movielist, setMovieList] = useState([]);
  useEffect(()=>{
    fetch("https://641ec274f228f1a83ea978ad.mockapi.io/movies")
    .then((res)=>res.json())
    .then((data)=>setMovieList(data));
  },[]);
  const navigate = useNavigate();
  const [mode, setMode] = useState("dark")
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  
  
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper sx={{minHeight:"100vh"}} elevation={3} >
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={()=>navigate("/")}>Home</Button>
          <Button color="inherit" onClick={()=>navigate("/movies")}>Movies</Button>
          <Button color="inherit" onClick={()=>navigate("/colorgame")}>Add Color</Button>
          <Button color="inherit" onClick={()=>navigate("/movies/add")}>Add Movies</Button>
          <Button startIcon={mode=== "dark" ? <Brightness7Icon /> : <Brightness4Icon />} color="inherit" onClick={()=>setMode(mode==="light" ? "dark" : "light")}></Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<HomePage />} />       
        <Route path="/movies" element={<Movielist movielist={movielist} />} />
        <Route path="/movies/:id" element={<Moviedetails movielist={movielist} />} />
        <Route path="/films" element={<Navigate replace to ="/movies" />} />
        <Route path="/colorgame" element={<AddColor  />} />
        <Route path="/movies/add" element={<AddMovie movielist={movielist} setMovieList={setMovieList} />} />
        <Route path="*" element={<Error />} />
      </Routes>

  </div>
  </ Paper>
  </ThemeProvider>  
  )
}

