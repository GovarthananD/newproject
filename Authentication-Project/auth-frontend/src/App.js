import './App.css';
import HomePage from './components/HomePage';
import SelectDays from './components/SelectDays';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Register from './components/register';
import Signin from './components/signin';
import ForgotPassword from './components/forgotpassword';
import SavedDays from './components/saveddays';
import ColorCard from './components/colorcard';
import { useState } from 'react';


function App() {
  const [color,setColor] = useState("")
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/selectday' element={<SelectDays color={color} setColor={setColor}/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/forgotpassword' element={<ForgotPassword/>} />
          <Route path='/saveddays' element={<SavedDays/>} />
          <Route path='/colorcard' element={<ColorCard color={color} setColor={setColor} />} />
          
        </Routes>
      </BrowserRouter>
      
      {/* <div className='image'>
        <img src='https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg?auto=compress&cs=tinysrgb&w=600' alt='pic' />
        <img src='https://images.pexels.com/photos/1390600/pexels-photo-1390600.jpeg?auto=compress&cs=tinysrgb&w=600' alt='pic' />
        <img src='https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=600' alt='pic' />
        <img src='https://images.pexels.com/photos/952213/pexels-photo-952213.jpeg?auto=compress&cs=tinysrgb&w=600' alt='pic' />
        <img src='https://images.pexels.com/photos/833169/pexels-photo-833169.jpeg?auto=compress&cs=tinysrgb&w=600' alt='pic' />
        <img src='https://images.pexels.com/photos/3769160/pexels-photo-3769160.jpeg?auto=compress&cs=tinysrgb&w=600' alt='pic' />
        <img src='https://images.pexels.com/photos/2312223/pexels-photo-2312223.jpeg?auto=compress&cs=tinysrgb&w=600' alt='pic' />
        <img src='https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=600' alt='pic' />
        <img src='https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=600' alt='pic' />
        <img src='https://images.pexels.com/photos/3598250/pexels-photo-3598250.jpeg?auto=compress&cs=tinysrgb&w=600' alt='pic' />
        <img src='https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=600' alt='pic' />
        <img src='https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=600' alt='pic' />
      </div> */}
    </div>
  );
}

export default App;
