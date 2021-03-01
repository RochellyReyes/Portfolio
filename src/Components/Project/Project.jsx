import React from 'react';
import "../../styling/Projects/project.css";

const Project = (props) => {

    return (
        <div className="cards">

            <p className="name">{props.name}</p>
            
            <img src={props.image} alt={props.alt}/>

            <p className="description">{props.description}</p>
            
            <button onClick={()=> window.open(`${props.link}`, `_blank`)}> View </button>
        </div>
    )
};

export default Project;
