import React, {Component} from "react";
import Project from "../Components/Project/Project";
import projectData from "../Components/Project/projects-data.json";
import Footer from '../Components/Footer';


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
                {DisplayProjects}
                <Footer/>
            </div>
        )
    }
};

export default Projects;