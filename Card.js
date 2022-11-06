import React from "react"

export default function Card(props){
    
    // console.log(props)
    return (
        
        <div className="card">
            <div className="card--container">
                <img src={props.imageUrl}/>
                <div>
                    <div className="card--location">
                        <img src="./pin.svg" />
                        {props.location}
                        <a href="">View on Google Maps</a>
                    </div>
                    <h1 className="card--tile">{props.title}</h1>
                    <div className="card--date">{props.startDate} - {props.endDate}</div>
                    <div className="card--text">{props.description}</div>
                </div>
                </div>
            <hr />
        </div>
    )
}