import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function HomePage () {
    const navigate = useNavigate();
    return(<div className='home' >        
        <div className='containe'>
          <p><h3>New User <Button onClick={()=>navigate('/register')} variant="contained" size="small">Register</Button></h3></p>
           <p><h3>Member <Button onClick={()=>navigate('/signin')} variant="contained" size="small">Sign In</Button></h3></p> 
        </div>       
    </div>)
}

export default HomePage;