import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { API } from "./api";

function Forgot() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    const oldUser = {
      email: email,
    };

    fetch(`${API}/forgotpassword`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(oldUser),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(() => navigate("/reset"))
      .catch((e) => {
        console.log(e);
        alert("Something Error");
      });
  };

  return (
    <div className="register">
      <h1>Forgot Password</h1>
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
          </tbody>
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

export default Forgot;
