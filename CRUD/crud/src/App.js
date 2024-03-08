import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./home";
import Create from "./create";
import Update from "./update";
import { useState } from "react";

function App() {
  const [user, setUser] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create user={user} setUser={setUser} />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}



export default App;
