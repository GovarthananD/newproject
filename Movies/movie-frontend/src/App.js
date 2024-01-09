import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie';


function App() {
  const [moviesList,setMoviesList] = useState ([]);
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesList/>} />
        <Route path="/AddMovie" element={<AddMovie moviesList={moviesList} setMoviesList={setMoviesList}/>} />
        <Route path="/editMovie/:id" element={<EditMovie/>} />
      </Routes> 
    </BrowserRouter>
    </div>
  );
}

export default App;
