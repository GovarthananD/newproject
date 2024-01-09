import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

function RegisterPage () {
    return(
        <div className="container-two">
          <Card sx={{ maxWidth: 345 }}>
        <CardContent>
            <Box
                  component="form"
                  sx={{
                  '& .MuiTextField-root': { m: 1, width: '30ch' },
                     }}
                  noValidate
                  autoComplete="off">
            <Button>Registration</Button>
            <div>       
            <TextField
               label="Full Name"
               id="outlined-size-small"
               defaultValue=""
               size="small"/>
            </div>
            <div>
            <TextField
               label="Mobile No"
               id="outlined-size-small"
               defaultValue=""
               size="small"/>
            </div>
            <div>
            <TextField
               label="Mail ID"
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
            <Button id="forgot" size="small">Forgot Password?</Button><br/>
            <Button variant="outlined" size="small">Create</Button>
            <h5>Already have an account?      <Button variant="outlined" size="small">SignIn</Button></h5>
            </Box>         
         </CardContent>
      </Card>
        </div>
    )
}
export default RegisterPage;