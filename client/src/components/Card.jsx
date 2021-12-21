import React  from "react";


export default function Card({name, image,temperament, weigth}){
    return (
    <div>
        <h3>{name}</h3>
        <h3>{temperament}</h3>
        <h3>{weigth}</h3>
        <img src={image} alt="img not found" width="600px " height="471px"/>
    </div>
    )
    }
   