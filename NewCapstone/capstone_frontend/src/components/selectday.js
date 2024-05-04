import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { API } from "./api";
import axios from "axios";

function SelectDay() {
  const navigate = useNavigate();
  const [color, setColor] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    const token = localStorage.getItem("token");
    axios
      .post(
        `${API}/getAllProducts`,
        {},
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          console.log("Data not found");
        }
        setColor(res.data);
      });
  };
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  function handleClick() {
    const token = localStorage.getItem("token");
    axios
      .post(
        `${API}/getAllProducts`,
        {},
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((res) => {
        getProducts(res);
        if (res.status === 401) {
          console.log("Data not found");
        }
        const number = getRandomInt(20);
        console.log(res, res.data.data[number]?.picturecolour, number);
        console.log(color);
        setColor(res.data.data[number]?.picturecolour);
        navigate(
          `/colorcard?img=${res.data.data[number]?.picturecolour}&colourname=${res.data.data[number].colourname}&demo=${res.data.data[number].demo}`
        );
      });
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              WELCOME TO THE DRESS COLOUR SUGGESTIONS
            </Typography>
            <Button
              color="inherit"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/");
              }}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="days">
        <Button variant="contained" size="small" onClick={handleClick}>
          Find Today Color Suggesion
        </Button>
      </div>
      {/* {color.data &&
        color.data.map((item) => {
          return <ColorCard key={item.id} />;
        })} */}
      ;
    </div>
  );
}

export default SelectDay;
