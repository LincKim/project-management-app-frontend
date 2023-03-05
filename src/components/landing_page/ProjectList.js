import React from "react";
import { Link } from "react-router-dom";
const ProjectList = ({projects, title}) => {
    return ( 
        <div className="project-list">
            <div>
                
                <div>

                    <div className="wrapper1">

                        <div className="project-detail-23">

                            

                                <h2 className="my-project-displayed">{title}</h2>
                                {
                                    projects.map(project => (
                                        <div key={project.id} className="project-preview">
                                            <Link to={`/projects/${project.id}`}>
                                                <h2 className="my-project-displayed">{project.title}</h2>
                                                <p className="description-project-now">{project.description}</p>
                                            
                                            </Link>

                                        </div>
                                    ))
                                }

                            
                        </div>

                    </div>

                </div>

            </div>
        </div>
     );
}
 
export default ProjectList;