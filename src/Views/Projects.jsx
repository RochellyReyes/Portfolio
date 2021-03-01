import React, {Component} from "react";
import Project from "../Components/Project/Project";
import projectData from "../Components/Project/projects-data.json";
import "../styling/Projects/projects.css";
import Footer from '../Components/Footer';


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
            <div className="page" >
                <p className="checkit">Check out some of my work in chronological order. Additional projects are in Github. 
                <br/>
                Enjoy!</p>
                <div className="project">
                    {DisplayProjects}
                </div>
                <Footer/>
            </div>
        )
    }
};

export default Projects;