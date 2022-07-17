import React from "react";
export default function Travel(props) {
    
    return (<div className="parent">
        <div >
            <img src={props.imageUrl} className="image" /></div>
        <div className="mat">
            <span>{props.location}</span>
            <span className="map"><a href="{props.google}">View on Google Maps</a></span>
            <h1>{props.title}</h1>
            <span className="bol">{props.startDate}-{props.endDate}</span>
            <p> {props.description
            }</p>
            
        </div>
        
    </div>
    )
}