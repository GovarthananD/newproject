import EmailIcon from "@mui/icons-material/Email";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useNavigate } from "react-router-dom";
import { API } from "./api";
import { useState } from "react";

function Signin() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = () => {
    const oldUser = {
      email: email,
      password: password
    };
  
  fetch(`${API}/auth/signin`,{
    method:'POST',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(oldUser),
  })
  .then((res)=>res.json())
  .then((data)=>console.log(data))
  .catch((e)=>{
    console.log(e)
    alert("Error in User SignIn");
  });
};
  const navigate = useNavigate();
  return (
    <div>
      <div className="App">
        <div className="container">
          <div className="header">
            <div className="text">Sign In</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <EmailIcon />
              <input placeholder="Email" type="email" onChange={(event)=>setEmail(event.target.value)} value={email} />
            </div>
            <div className="input">
              <LockOpenIcon />
              <input placeholder="Password" type="password" onChange={(event)=>setPassword(event.target.value)} value={password} />
            </div>
          </div>
        </div>
        <div className="password">
          <div onClick={() => navigate("/forgotpassword")}>
            <span>Forgot Password</span>
          </div>
          <div onClick={() => navigate("/resetpassword")}>
            <span>Reset Password</span>
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
  );
}

export default Signin;
