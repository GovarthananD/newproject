import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { API } from "../api";



function Chooseday () {
  const [colourList, setColourList] = useState([]);
 const [sun, setSun] = useState ();
 const [mon, setMon] = useState ();
 const [tue, setTue] = useState ();
 const [wed, setWed] = useState ();
 const [thu, setThu] = useState ();
 const [fri, setFri] = useState ();
 const [sat, setSat] = useState ();
 const newdrs = {
  sun:setSun,
  mon:setMon,
  tue:setTue,
  wed:setWed,
  thu:setThu,
  fri:setFri,
  sat:setSat
 }
const handleSubmit = () => {
  fetch(`${API}/drs_colour`,{
    method: "POST",
    headers:{"Content-Type":"application/json"},
  })
  .then((data)=> data.json())
  .then((res)=>{
    setColourList(res)
  });
};
   
    return(<div> 
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="toolbar">       
          <Typography className="toolbar" align="left" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Happy Day 
          </Typography> 
          <Button color="inherit">Register</Button>
          <Button color="inherit">SignIn</Button>
          <Button color="inherit">History</Button>
          <Button color="inherit">Select Days</Button>
        </Toolbar>
      </AppBar>
    </Box>
      <h1 className="slt-day">Select Day</h1>

    <div className="days">
      <Button variant="outlined" size="small" onClick={()=>handleSubmit(sun)}>Sunday</Button>
      <Button variant="outlined" size="small" onClick={handleSubmit} value={mon}>Monday</Button>
      <Button variant="outlined" size="small" onClick={handleSubmit} value={tue}>Tuesday</Button>
      <Button variant="outlined" size="small" onClick={handleSubmit} value={wed}>Wednesday</Button>
      <Button variant="outlined" size="small" onClick={handleSubmit} value={thu}>Thursday</Button>
      <Button variant="outlined" size="small" onClick={handleSubmit} value={fri}>Friday</Button>
      <Button variant="outlined" size="small" onClick={handleSubmit} value={sat}>Saturday</Button>
    </div>
    <div>

    </div>
    
    
    </div>);



}
export default Chooseday;