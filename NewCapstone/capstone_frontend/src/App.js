import "./App.css";
import Forgot from "./components/forgot";
import Login from "./components/login";
import Register from "./components/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reset from "./components/reset";
import SelectDay from "./components/selectday";
import ColorCard from "./components/colorcard";
import { useState } from "react";
// import Home from "./components/home";

function App() {
  const [color, setColor] = useState("")
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/selectday" element={<SelectDay color={color} setColor={setColor} />} />
          <Route path="/colorcard" element={<ColorCard color={color} setColor={setColor} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
