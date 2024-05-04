import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Typography } from "@mui/material";
import { API } from "./api";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleLogin = async () => {
    const payload = {
      email: email,
      password: password,
    };
    const res = await fetch(`${API}/login`,{
      method: "POST",
      body: JSON.stringify(payload),
      headers: {"Content-type":"application/json"},
    });
    const data = await res.json();
    if(data.token){
     setErr("");
     localStorage.setItem("token", data.token);
     
     navigate("/selectday");
    }else {
      setErr(data.error);
    }
  };

  return (
    <div className="register">
      <h1>Login</h1>
      <div className="regist">
        <table>
          <tbody>
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
          </tbody>
        </table>
      </div>
      <p className="submit">
        <Button variant="contained" size="small" onClick={handleLogin}>
          Login
        </Button>
        {err ?<Typography color={"danger"} >{err}</Typography> : "" }
        <Button variant="contained" size="small" onClick={() => navigate("/register")}>
          Back
        </Button>
        
      </p>
    </div>
  );
}
export default Login;
