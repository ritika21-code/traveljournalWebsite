
import React from "react"
// import Joke from "./Joke"
import data from "./data"
import Travel from "./journal.js"
import Nav from "./nav"
export default function App() {
    const travel=data.map(item=>{
        return(
            <Travel
            // title={item.title}
            // location={item.location}
            // google={item.googleMapsUrl}
            // start={item.startDate}
            // end={item.endDate}
            // des={item.description}
            // image={item.imageUrl}
           {...item}
/>
        )
    })
    return (<div>
        <Nav/>
        
        {travel}
        </div>
    )
    }
