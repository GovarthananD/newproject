import * as React from "react";
import Card from '@mui/material/Card';

function ColourCard ({value}) {
    return(<div>
        <Card className="card-style" sx={{  Width: 345 }}>
   
        <img src={value.picturecolour} alt="PictureError" />
        <h5>{value.colour}</h5>
        <h5>{value.trailpic}</h5>

    </Card>
    </div>)
}
export default ColourCard;