import React from 'react';
//database for project input. 10
//resume at the bottom? or add a button to take to the resume page?
//add class names

const Project = (props) => {

    return (
        <div>
            <p>{props.name}</p>
            <img src={props.image} width={400} height={300} alt={props.alt}/>
            <p>{props.description}</p>
            
            <button onClick={()=> window.open(`${props.link}`, `_blank`)}> View </button>
        </div>
    )
};


export default Project;