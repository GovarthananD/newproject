import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router-dom";
import { API } from "./api";
import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    const oldUser = {
      email: email,
    };

    fetch(`${API}/auth/forgot-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(oldUser),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => {
        console.log(e);
        alert("Something Error");
      });
  };
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className="App">
          <div className="container">
            <div className="header">
              <div className="text">Forgot Passowrd</div>
              <div className="underline"></div>
            </div>
            <div className="inputs">
              <div className="input">
                <EmailIcon />
                <input
                  placeholder="Email"
                  type="email"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                />
              </div>
            </div>
          </div>

          <div className="submit-container">
            <div className="submit" onClick={handleSubmit}>
              Send
            </div>
            <div className="submit" onClick={() => navigate(-1)}>
              Back
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
