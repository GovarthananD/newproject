import './App.css';
import { useEffect, useState } from 'react';
import {BrowserRouter,Routes,Route,Link,} from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import HomePage from './components/Homepage';
import LogIn from './components/LogIn';
import DayColours from './components/daycolours';
import ColourCard from './components/colourscard';
import Chooseday from './components/chooseday';

function App() {
  const [colourList, setColourList] = useState([]);
  return (
    <div className="App">
      {/* <ul>
        <li><Link to = "/">HomePage</Link></li>
        <li><Link to = "/RegisterPage">RegisterPage</Link></li>
        <li><Link to = "/LogIn">LogIn</Link></li>
      </ul> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <HomePage/> } />
          <Route path="/RegisterPage" element={ <RegisterPage/> } />
          <Route path="/LogIn" element={ <LogIn/> } />
          <Route path="/DayColours" element={ <DayColours/> } />
          <Route path="/ColourCard" element={ <ColourCard/> } />
          <Route path="/Chooseday" element={ <Chooseday colourList = {colourList} setColourList = {setColourList} /> } />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
