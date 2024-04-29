import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { API } from "./api";
import axios from "axios";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const excistUser = {
      email: email,
      password: password,
    };
    const res = await axios.post(`${API}/signin`, excistUser);
    if (res.status !== 200) {
      return alert("Email or Password Incorrect");
    } else if (res.status === 200) {
      console.log(res.data);
      localStorage.setItem("accessToken", JSON.stringify(res.data.accessToken));
      // const token = res.headers["set-cookie"];
      // console.log(token);
      navigate("/selectday");
    }
    // console.log(result);
    // .then((res) => {
    //   console.log(res);
    //
    // })
    // .then((data) => console.log(data))
    // // .then(()=>navigate("/selectday"))
    // .catch((e) => {
    //   console.log(e);
    //   alert("Error in creating User");
    // });
  };

  const navigate = useNavigate();
  return (
    <div className="sign">
      <h2>SignIn</h2>
      <MailOutlineIcon />{" "}
      <input
        className="reg"
        placeholder="Email"
        type="text"
        onChange={(event) => setEmail(event.target.value)}
        value={email}
      />
      <LockOpenIcon />{" "}
      <input
        className="reg"
        placeholder="Password"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
        value={password}
      />
      <Button
        id="forgot"
        variant="contained"
        size="small"
        onClick={() => navigate("/forgotpassword")}
      >
        Forgot Password
      </Button>
      <div id="submit">
        <Button
          id="submit"
          variant="contained"
          size="small"
          onClick={handleSubmit}
        >
          Sign In
        </Button>
        <Button
          id="submit"
          variant="contained"
          size="small"
          onClick={() => navigate("/register")}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
export default Signin;
