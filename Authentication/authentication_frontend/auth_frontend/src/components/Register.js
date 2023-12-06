import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import { useState } from "react";
import { API } from "../components/api";
import { useNavigate } from "react-router-dom";

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
    fetch(`${API}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(() => navigate("/"))
      .catch((e) => {
        alert("Error in creating User");
      });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <div className="text">Register</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <PersonIcon />
            <input
              placeholder="Name"
              type="text"
              onChange={(event) => {
                setName(event.target.value);
              }}
              value={name}
            />
          </div>
          <div className="input">
            <EmailIcon />
            <input
              placeholder="Email"
              type="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              value={email}
            />
          </div>
          <div className="input">
            <LockOpenIcon />
            <input
              placeholder="Password"
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              value={password}
            />
          </div>
          <div className="input">
            <StayCurrentPortraitIcon />
            <input
              placeholder="Mobile"
              type="number"
              onChange={(event) => {
                setMobile(event.target.value);
              }}
              value={mobile}
            />
          </div>
        </div>
      </div>
      <div className="password">
        <div onClick={() => navigate("/forgotpassword")}>
          <span>Forgot Password</span>
        </div>
        <div>
          <span onClick={() => navigate("/resetpassword")}>Reset Password</span>
        </div>
      </div>
      <div className="submit-container">
        <div className="submit" onClick={handleSubmit}>
          Submit
        </div>
        <div className="submit" onClick={() => navigate("/signin")}>
          Sign In
        </div>
      </div>
    </div>
  );
}

export default Register;
