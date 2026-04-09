import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios';

function App() {
    const[data,setdata]=useState([]);

    useEffect(
      ()=>{
        getdata();

      },[]

    );
  const getdata=()=>{
    axios.get('http://localhost:8081/api/students')
    .then(res=>{
      console.log(res.data);
      setdata(res.data);
    })
    .catch(error =>{
      console.log(error);
    })
  }
  return (
    <>
      <ul>
      {data.map((student, index) => (
        <li key={index}>
          {student.name} - {student.email} - {student.phone}
        </li>
      ))}
    </ul>


    </>
  )
}

export default App
