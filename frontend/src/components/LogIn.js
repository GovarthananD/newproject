import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LockOpenSharpIcon from '@mui/icons-material/LockOpenSharp';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';



 function LogIn() {   
    return (<div className="container">
      
     <Card sx={{ maxWidth: 345 }}>
        <CardContent>
            <Box
                  component="form"
                  sx={{
                  '& .MuiTextField-root': { m: 1, width: '30ch' },
                     }}
                  noValidate
                  autoComplete="off">
            <div>
            <div><span className="sign">SignIn</span> <LockOpenSharpIcon/></div><br/>
            <TextField
               label="Mail / MobileNo"
               id="outlined-size-small"
               defaultValue=""
               size="small"/>
            </div>
            <div>
            <TextField
               label="Password"
               id="outlined-size-small"
               defaultValue=""
               size="small"/>
            </div>
            <br/>
            <Button variant="contained" size="small">
               <LoginSharpIcon/> Submit
            </Button>
            </Box>         
         </CardContent>
      </Card>
    </div>    
 )}
 
  export default LogIn;