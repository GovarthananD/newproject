import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";


function ForgotPassword () {
    const navigate = useNavigate();
    return (<div className="forgotpass">
        <h2>ForgotPassword</h2>       
        <MailOutlineIcon /> <input className="reg" placeholder="Email" type="text"/>
        <div id="for">
        <Button variant="contained" size="small">
          Submit
        </Button>
        <Button variant="contained" size="small" onClick={()=>navigate('/register')}>
          register
        </Button>
        </div>
    </div>)
}

export default ForgotPassword;