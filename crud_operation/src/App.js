import React from 'react';
import { useEffect, useState, } from 'react';
import './App.css';
import API from './api';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Table />
    <Edit />
    </div>
  );
}

function Table ({handleSubmit}) {
  const [userslist,setUserslist] = useState([]);
  const [name,setName] = useState([]);
  const [age,setAge] = useState([]);
  const [area,setArea] = useState([]);
  const [city,setCity] = useState([]);


  useEffect (()=>{
    getUsers();
  },[]);
  const getUsers = () => {
    axios.get(`${API}/profile`).then((res)=>{
      if(res.status === 401) {
        console.log('Data not found');
      }
      console.log(res.data);
      setUserslist(res.data);
  })};

  const handleDelete = (id) => {
    axios.delete(`${API}/profile/` +id).then((res)=>{
      if(res.status === 200) {
        console.log('processing error')
      }
      getUsers();
    })
  }
  return(<div>
    <div>
      Name<input type='text' placeholder='Enter the Name' onChange={(event)=>setName(event.target.value)} value={name} />
      Age<input type='number' placeholder='Enter the Age' onChange={(event)=>setAge(event.target.value)} value={age} />
      Area<input type='text' placeholder='Enter the Area' onChange={(event)=>setArea(event.target.value)} value={area} />
      City<input type='text' placeholder='Enter the City' onChange={(event)=>setCity(event.target.value)} value={city} />
      <button onClick={()=>{
        const newUser = {
          name:name,
          age:age,
          area:area,
          city:city
        }
        setUserslist([...userslist,newUser]);
        }}>Add User</button>
    </div>

    <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Area</th>
        <th>City</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {userslist.map((usr,id)=>(
      <tr key={id} value={usr}>
        <td><h1>{usr.name}</h1></td>
        <td><h4>{usr.age}</h4></td>
        <td> <h4>{usr.area}</h4></td>
        <td><h4>{usr.city}</h4></td>
        <button onClick={()=>handleSubmit()}>edit</button>
        <button onClick={()=> handleDelete(usr.id)} >delete</button>
      </tr>
      )
    )}
    </tbody>
    </table>
    
  </div>)
  
}

function Edit () {
  const id = useParams();
  const [name,setName] = useState(profile.name);
  const [age,setAge] = useState(profile.age);
  const [area,setArea] = useState(profile.area);
  const [city,setCity] = useState(profile.city);
  const [profile,setProfile] = useState();

  useEffect(()=>{
    fetch(`${API}/profile/${id}`,{
      method:"GET",
    }).then((data)=>data.json())
    .then((pro)=>setProfile(pro))
  },[]);
   
  const handleSubmit = () => {
    const subpro = {
      name:name,
      age:age,
      area:area,
      city:city
    };
    fetch(`${API}/profile/${profile.id}`,{
      method:'PUT',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(subpro),
    })
    .then((data)=>data.json())
    .then((res)=>{
      console.log(res)
    })
  }

  
  
  
  
  
  
  
  return(<div>

  </div>)
}


export default App;
