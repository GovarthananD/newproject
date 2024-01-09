import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useNavigate } from "react-router-dom";
import TokenIcon from "@mui/icons-material/Token";
import PinIcon from "@mui/icons-material/Pin";
import { API } from "./api";
import { useState } from "react";

function ResetPassword() {
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = () => {
    const updateUser = {
      userId: userId,
      token: token,
      newPassword: newPassword,      
    };
    fetch(`${API}/auth/reset-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => {
        alert("Something Error");
      });
  };

  return (
    <div>
      <div>
        <div className="App">
          <div className="container">
            <div className="header">
              <div className="text">Reset Your Password</div>
              <div className="underline"></div>
            </div>
            <div className="inputs">
              <div className="input">
                <PinIcon />
                <input placeholder="User Id" type="text" onChange={(event)=>setUserId(event.target.value)} value={userId} />
              </div>
              <div className="input">
                <TokenIcon />
                <input placeholder="Token" type="text" onChange={(event)=>setToken(event.target.value)} value={token} />
              </div>
              <div className="input">
                <LockOpenIcon />
                <input placeholder="New Password" type="password" onChange={(event)=>setNewPassword(event.target.value)} value={newPassword} />
              </div>
            </div>
          </div>
          <div className="submit-container">
            <div className="submit" onClick={handleSubmit}>Submit</div>
            <div className="submit" onClick={() => navigate("/")}>
              Back
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
