import React from "react";
export default function(props){
    return(<div>
        <h1>joke here</h1>
        {props.setup && <h3>{props.setup}</h3>}
        {props.line}
        <hr/>
        </div>
    )
}