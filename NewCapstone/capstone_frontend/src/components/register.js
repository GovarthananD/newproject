import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { API } from "./api";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const newUser = {
      name: name,
      mobile: mobile,
      email: email,
      password: password,
    };
    fetch(`${API}/register`, {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        res.json();
        if (res.status === 201) {
          navigate("/login");
        } else {
          alert("Something error while register");
        }
      })
      .then((data) => console.log(data))
      .catch((e) => {
        console.log(e);
        alert("Error in creating user");
      });
  };
  return (
    <div className="register">
      <h1>Register</h1>
      <div className="regist">
        <table>
          <tbody>
            <tr>
              <th>
                <PersonIcon />
              </th>
              <td>
                <input
                  type="text"
                  placeholder="Name"
                  className="bod"
                  onChange={(event) => setName(event.target.value)}
                  value={name}
                />
              </td>
            </tr>
            <tr>
              <th>
                <StayCurrentPortraitIcon />
              </th>
              <td>
                <input
                  type="number"
                  inputMode="numeric"
                  placeholder="mobile"
                  className="bod"
                  onChange={(event) => setMobile(event.target.value)}
                  value={mobile}
                />
              </td>
            </tr>
            <tr>
              <th>
                <EmailIcon />
              </th>
              <td>
                <input
                  type="text"
                  placeholder="Email"
                  className="bod"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                />
              </td>
            </tr>
            <tr>
              <th>
                <LockIcon />
              </th>
              <td>
                <input
                  type="Password"
                  placeholder="Password"
                  className="bod"
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                />
              </td>
            </tr>
            <tr>
              <th></th>
              <td>
                <Button size="small" onClick={() => navigate("/forgot")}>
                  Forgot Password
                </Button>
              </td>
            </tr>
            <tr>
              <th></th>
              <td>
                <Button size="small" onClick={() => navigate("/reset")}>
                  Reset Password
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="submit">
        <Button variant="contained" size="small" onClick={handleSubmit}>
          Submit
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </p>
    </div>
  );
}

export default Register;
