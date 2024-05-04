import { useSearchParams } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";


function ColorCard() {
  const navigate = useNavigate();
  let [query] = useSearchParams();
  console.log(query.get("img"));
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
      <h2>This color suit for you today</h2>
      <h3>{query.get("colourname")}</h3>
      <img className="box" src={query.get("img")} alt="pic" />
      <p>{query.get("demo")}</p>
    </div>
  );
}
export default ColorCard;
