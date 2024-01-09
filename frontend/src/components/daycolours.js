import React, { useEffect,useState } from "react";
import axios from "axios";
import { API } from "../api";
import ColourCard from './colourscard'; 
import Container from '@mui/material/Container';

function DayColours () {
    const [colourList, setColourList] = useState([]);
    useEffect(()=>{
        getColour()
    },[]);
    const getColour = () => {
        axios.get(`${API}/drs_colour`).then((res)=>{
            alert("hi");
            if(res.status === 401){
                console.log("Sorry Data Not Found🤧")
            }
            console.log(res.data);
            setColourList(res.data);
        }); 
    };
    return(<Container>
        <h3>Colours</h3>
        {colourList.map((colours)=>{
            return(
                <ColourCard key={colours.id} value={colours} />        
           );
        })}
    </Container>)
}
export default DayColours;