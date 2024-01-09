import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


export function Counter() {
  const [Like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return (
    <div>
        
      <IconButton aria-label="like" color="primary" onClick={() => setLike(Like + 1)}><Badge badgeContent={Like} color="primary">👍</Badge></IconButton>
      <IconButton aria-label="dislike" color="error" onClick={() => setDisLike(disLike + 1)}><Badge badgeContent={disLike} color="error">👎</Badge></IconButton>
    </div>
  );
}
