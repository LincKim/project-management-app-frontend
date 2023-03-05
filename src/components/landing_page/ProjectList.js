import React from "react";
import { Link } from "react-router-dom";
const ProjectList = ({projects, title}) => {
    return ( 
        <div>
            <h2>{title}</h2>
            {
                projects.map(project => (
                    <div key={project.id}>
                        <Link to={`/projects/${project.id}`}>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        
                        </Link>

                    </div>
                ))
            }
        </div>
     );
}
 
export default ProjectList;