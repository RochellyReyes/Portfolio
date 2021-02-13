import React, {Component} from "react";
import Project from "../Components/Project/Project";
import projectData from "../Components/Project/projects-data.json";

//Add a filter for products? Nice to have, maybe add later, by subjects?

class Projects extends Component {
    constructor(props){
        super(props);

        this.state = {
            projects: projectData,
            filterProjects: projectData,
        }
    }
    render() {
        const DisplayProjects = this.state.filterProjects.map((project, i) => {
            return(
                <Project
                    key={i}
                    name={project.name}
                    image={project.image}
                    alt={project.alt}
                    description={project.description}
                    link={project.link}
                />
            );
        });
        return(
            <div>
                <h1>Projects</h1>
                <h2>Test</h2>
                <p>Mauris sem velit, vehicula eget sodales vitae,
                rhoncus eget sapien:</p>
                <ol>
                    <li>Nulla pulvinar diam</li>
                    <li>Facilisis bibendum</li>
                    <li>Vestibulum vulputate</li>
                    <li>Eget erat</li>
                    <li>Id porttitor</li>
                </ol>
                {DisplayProjects}

            </div>
        )
    }
};

export default Projects;