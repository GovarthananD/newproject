import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { API } from "./api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Update() {
  const { id } = useParams();
  const [users, setUsers] = useState();
  

  useEffect(() => {
    fetch(`${API}/table/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setUsers(mv));
      
  }, [id]);
  if (users) {
    return <EditUserForm users={users} />;
  } else {
    return "Loading...";
  }
}

function EditUserForm({ users }) {
  const navigate = useNavigate();
  const [id, setId] = useState(users.id);
  const [name, setName] = useState(users.Name);
  const [age, setAge] = useState(users.Age);
  const [area, setArea] = useState(users.Area);

  const handleSubmit = () => {
    const updateUser = {
      id: id,
      Name: name,
      Age: age,
      Area: area,
    };
    fetch(`${API}/table/${users.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateUser),
    })
      .then((data) => data.json())
      .then(() => navigate("/"));
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Update User
          </Typography>
          <Button onClick={()=>navigate('/')} color="inherit">Back</Button>
          </Toolbar>
      </AppBar>
    </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TextField
              id="standard-basic"
              label="id"
              variant="standard"
              onChange={(event) => setId(event.target.value)}
              value={id}
            />
            <br />
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
            <br />
            <TextField
              id="standard-basic"
              label="Age"
              variant="standard"
              onChange={(event) => setAge(event.target.value)}
              value={age}
            />
            <br />
            <TextField
              id="standard-basic"
              label="City"
              variant="standard"
              onChange={(event) => setArea(event.target.value)}
              value={area}
            />
            <br />
            <br />
            <Button variant="contained" color="success" onClick={handleSubmit}>
              Update
            </Button>
          </TableHead>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Update;
