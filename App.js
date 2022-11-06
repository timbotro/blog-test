import React from "react"
import Nav from "./Nav"
import Card from "./Card"
import data from "./data"


export default function App(){
    
    const cards = data.map((a, index)=> <Card key={index} {...a}/>)
    
    return (<div>
   <Nav/ >
   {cards}
    </div>)
}