import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function HomePage () {
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
        <h1 className="smart">We Make You Smart</h1>
        <div className="homeimg">
            <img src="https://img.freepik.com/premium-photo/women-model-demonstrating-cloths_1303-31620.jpg?w=360" />
            <img src="https://img.freepik.com/free-photo/stylish-woman-summer-outfit-isolated-posing-fashion-trend-isolated_285396-480.jpg?w=360&t=st=1684469516~exp=1684470116~hmac=5cc5f736f472dddaf11e16039e2885e98f90c4d8f0c84da3976152ffbe4b5445" />
            <img src="https://img.freepik.com/free-photo/start-thinking-positive-about-your-life_329181-4744.jpg?w=360&t=st=1684469010~exp=1684469610~hmac=f3786608d99781648e3e8d1b25a4d264b04737d6d50b83696db305c9bd7edc84" />
        </div>
        
    </div>)
}
export default HomePage;