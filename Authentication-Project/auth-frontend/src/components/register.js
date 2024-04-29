import PersonIcon from "@mui/icons-material/Person";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { API } from "./api";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const newUser = {
      name: name,
      email: email,
      password: password,
      mobile: mobile,
    };
    fetch(`${API}/register`, {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
    .then((res) => {
      res.json();
      if (res.status === 201)
      {
        navigate('/selectday');
      }else{
        alert("Something Error while register");
      }
      
    })
    .then((data) => console.log(data))
    
    // .then(() => navigate("/selectday"))
    .catch((e) => {
      console.log(e)
      alert("Error in creating User");
    });
  }

  return (
    <div className="regist">
      <h2>Register</h2>
      <PersonIcon />{" "}
      <input
        className="reg"
        placeholder="Name"
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
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
      <StayCurrentPortraitIcon />{" "}
      <input
        className="reg"
        placeholder="Mobile"
        type="number"
        onChange={(event) => setMobile(event.target.value)}
        value={mobile}
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
          Submit
        </Button>
        <Button
          id="submit"
          variant="contained"
          size="small"
          onClick={() => navigate("/signin")}>
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Register;
