import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { API } from './api';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Home () {
    const navigate = useNavigate();
    const [user, setUser] = useState([]);


    useEffect(()=>{
        axios.get(`${API}/table`)
        .then(res => setUser(res.data))
        .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
       const confirm = window.confirm("Are you sure?");
      if(confirm){
        axios.delete(`${API}/table/`+id)
        .then(res => {
          window.location.reload();
        }).catch(err => console.log(err));
      }
    }

    return(<div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            User Table
          </Typography>
          <Button onClick={()=>navigate('/create')} color="inherit">Add User</Button>
          </Toolbar>
      </AppBar>
    </Box>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table"> 
    <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Area</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            user.map((usr, index) => (
                <TableRow
              key={index }
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell align="right">{usr.id}</TableCell>
              <TableCell align="right">{usr.Name}</TableCell>
              <TableCell align="right">{usr.Age}</TableCell>
              <TableCell align="right">{usr.Area}</TableCell>
              <TableCell align="right">
              <Button variant="contained" color="success" size="small" onClick={()=>navigate(`/update/${usr.id}`)}>Edit</Button>
                <Button onClick={()=>handleDelete(usr.id)} variant="contained" size="small">Delete</Button>
              </TableCell>
            </TableRow>
            ))
          }
        </TableBody>
    </Table>
    </TableContainer>
    </div>)
}

export default Home;