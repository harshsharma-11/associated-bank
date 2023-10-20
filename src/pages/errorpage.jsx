import React from 'react'
import "./errorpage.css"
import {useEffect,useState} from "react"
import {useNavigate} from "react-router-dom"
function Errorpage() {
    const navigate=useNavigate();
    const [time,setTime]=useState(5);
    useEffect(()=>{
         
        const interval = setInterval(() => {
            setTime((prevTime) => prevTime - 0.5);
          }, 1000);

          setTimeout(() => {
            clearInterval(interval); // Clear the interval when the countdown is complete
            navigate('/'); // Redirect to the home page
          }, 5000);
        
    },[])
  return (
    <>
    <div className="errorpage">
        <h1>404 page not found </h1><h1>Something went wrong</h1>
        <p>Redirecting to home page in {time}sec</p>
    </div>
    </>
  )
}

export default Errorpage