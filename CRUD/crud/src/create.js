import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import { useState } from "react";
import { API } from "./api";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Create({ user, setUser }) {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [area, setArea] = useState("");

  const handleSubmit = () => {
    const newUser = {
      id: id,
      Name: name,
      Age: age,
      Area: area,
    };
    fetch(`${API}/table`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        console.log(data);
      })
      .then(() => navigate("/"))
      .catch((e) => {
        alert("Something Error in Adding User");
      });
  };

  return (
    <div className="">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Add User
            </Typography>
            <Button onClick={() => navigate("/")} color="inherit">
              Back
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <TableContainer component={Paper} className="createtable">
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

export default Create;
