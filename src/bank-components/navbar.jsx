import React from "react"
import "./navbar.css"
import {Outlet,NavLink} from "react-router-dom"
import logoImage from "../static/images/bank.png"


export default function Navbar (){

    return (
        <>
        <nav>
            <div className="bank-logo"><a  style={{fontWeight:900,color:'whitesmoke',fontFamily:"serif",fontSize:"22px"}} href="/"><img alt="bank" src={logoImage}></img><h2>The Associated Bank</h2></a></div>
            <div className="service-links">
                <span><NavLink to ="/customers" style={{fontWeight:800,color:'whitesmoke'}}>Customers</NavLink></span>
                <span><NavLink to="/transaction-history"  style={{fontWeight:800,color:'whitesmoke'}}>Transaction</NavLink></span>
                <span><NavLink to="/transfer" style={{fontWeight:800,color:'whitesmoke'}}>Transfer Money</NavLink></span>
            </div>
        </nav>
        <Outlet/>
        </>
    )
}