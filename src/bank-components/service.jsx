import React from 'react'
import "./service.css"
function service(props) {
  return (
    <>
    <div className="service-container">
        <div className="service-name"><h1>{props.name}</h1></div>
        <div className="service-img"><img alt={props.name} src={props.img}/></div>
        <div className="service-info">{props.info}</div>
        <div className="service-button"><a href={props.link}><button>{props.butnTxt}</button></a></div>

    </div>
    </>
  )
}

export default service