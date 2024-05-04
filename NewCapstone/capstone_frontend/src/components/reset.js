import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import TokenIcon from "@mui/icons-material/Token";
import { API } from "./api";

function Reset() {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [newpassword, setNewpassword] = useState("");

  const handleSubmit = () => {
    const existUser = {
      token: token,
      email: email,
      newpassword: newpassword,
    };

    fetch(`${API}/resetpassword`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(existUser),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(() => navigate("/login"))
      .catch((e) => {
        console.log(e);
        alert("Something Error");
      });
  };

  const navigate = useNavigate();
  return (
    <div className="register">
      <h1>Create NewPassword</h1>
      <div className="regist">
        <table>
          <tr>
            <th>
              <TokenIcon />
            </th>
            <td>
              <input
                type="text"
                placeholder="token"
                className="bod"
                onChange={(event) => setToken(event.target.value)}
                value={token}
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
                onChange={(event) => setNewpassword(event.target.value)}
                value={newpassword}
              />
            </td>
          </tr>
        </table>
      </div>
      <p className="submit" onClick={handleSubmit}>
        <Button variant="contained" size="small">
          Submit
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={() => navigate("/register")}
        >
          Back
        </Button>
      </p>
    </div>
  );
}

export default Reset;
