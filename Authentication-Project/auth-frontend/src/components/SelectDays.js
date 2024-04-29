import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useEffect } from "react";
import { API } from "./api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SelectDays({ color, setColor }) {
  // const [color, setColor] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios.get(`${API}/getProducts`, {
      headers: { cookies: JSON.parse(localStorage.getItem("accessToken")) },
    });
  };
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  function handleClick() {
    axios.get(`${API}`).then((res) => {
      console.log(res);
      if (res.status === 401) {
        console.log("data not found");
      }
      const number = getRandomInt(20);
      setColor(res.data[number].picturecolour);
      navigate("/colorcard");
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
              Welcome to Colour Suggestion
            </Typography>
            <Button color="inherit" onClick={() => navigate("/saveddays")}>
              Saved Days
            </Button>
            <Button color="inherit">Signout</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="days">
        <Button variant="contained" size="small" onClick={handleClick}>
          Find Today Color Suggesion
        </Button>
      </div>
    </div>
  );
}

export default SelectDays;
