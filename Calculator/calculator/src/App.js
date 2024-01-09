import './App.css';
import React, { useState } from 'react';

function App() {
  const [result,setResult] = useState("")
  const handleSubmit = (event) => {
    setResult(result.concat(event.target.name))
  }
  const clear = () =>{
    setResult("");
  }
  const backspace = () =>{
    setResult(result.slice(0));
  }
  return (
    <div className="container">
      <form>
        <input type='text' value={result}/>
      </form>
      <div className='keypad'>
        <button onClick={clear} id='clear'>Clear</button>
        <button onClick={backspace} id='backspace'>C</button>
        <button name='/' onClick={handleSubmit}>&divide;</button>
        <button name='7' onClick={handleSubmit}>7</button>
        <button name='8' onClick={handleSubmit}>8</button>
        <button name='9' onClick={handleSubmit}>9</button>
        <button name='*' onClick={handleSubmit}>&times;</button>
        <button name='4' onClick={handleSubmit}>4</button>
        <button name='5' onClick={handleSubmit}>5</button>
        <button name='6' onClick={handleSubmit}>6</button>
        <button name='-' onClick={handleSubmit}>&ndash;</button>
        <button name='1' onClick={handleSubmit}>1</button>
        <button name='2' onClick={handleSubmit}>2</button>
        <button name='3' onClick={handleSubmit}>3</button>
        <button name='+' onClick={handleSubmit}>+</button>
        <button name='0' onClick={handleSubmit}>0</button>
        <button name='.'  onClick={handleSubmit}>.</button>
        <button onClick={handleSubmit} id='result'>=</button>
      </div>
    </div>
  );
}

export default App;
