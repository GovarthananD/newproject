import React,{useState} from 'react'
import './crud.css';

function App() {
    const namelist=[
        {"id":7463,"name":"prem","email":"prem@gmail.com","phno":7487625687,"area":"singanallur"},
        {"id":9746,"name":"sunder","email":"sunder@gmail.com","phno":465373687,"area":"sundarapuram"},
        {"id":5637,"name":"saran","email":"saran@gmail.com","phno":2746648837,"area":"thudiyalur"},
        {"id":3876,"name":"sakthi","email":"sakthi@gmail.com","phno":9377625687,"area":"saibabacolony"},
    ];
    const [data,setData] = useState((namelist))
    const columns =[
        {title:"ID", field:"id"}
        {title:"Name", field:"name"}
        {title:"Email", field:"email"}
        {title:"Phno", field:"phno"}
        {title:"Area", field:"area"}
    ]
    return(<div>

    </div>)
}

