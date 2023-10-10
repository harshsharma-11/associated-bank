import React from 'react'
import "./footer.css"
import facebook from "../static/images/facebook.png"
import instagram from "../static/images/instagram.jpeg"
import linkedin from "../static/images/linkedin.png"
 function footer() {
  return (
    <div className="footer-container">
        <div className="social-media">
            <p style={{fontWeight:800,color:"white"}}>FOLLOW US ON-</p>
            <div className="social-logo">
            <div className="particular-logo"><a style={{textDecoration:"none",color:"white"}} href="https://www.facebook.com/thesparksfoundation.info/ " target="_blank"><img src={facebook}></img><span >Facebook</span></a></div>
            <div className="particular-logo"><a style={{textDecoration:"none",color:"white"}} href="https://www.instagram.com/thesparksfoundation.info/?hl=en" target="_blank"><img src={instagram}></img><span>Instagram</span></a></div>
            <div className="particular-logo"><a style={{textDecoration:"none",color:"white"}} href="https://twitter.com/hashtag/Thesparksfoundation?src=hashtag_click" target="_blank"><img  src={linkedin}></img><span>LinkedIn</span></a></div>
            </div>
        </div>
        <div className="copyright">Copyright © 2023 <a  href="/"><span style={{fontWeight:900,color:'whitesmoke'}}>Sparks Bank</span></a>, All rights reserved</div>
        <div className="contact">
            <h2>Contact</h2>
            <div><span style={{fontWeight:800,color:"white"}}>Email :</span> <a style={{textDecoration:"none",color:"blue"}} href="GRIP@thesparksfoundation.sg"  target="_blank">mail@sparksBank</a></div>
            </div>
        
    </div>
  )
}

export default footer