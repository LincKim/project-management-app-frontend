import useFetch from "./UseFetch";
import {useNavigate, useParams} from "react-router-dom"
import NavigationLandingPage from "./NavigationLandingPage";
const ProjectDetails = () => {

    const{id} = useParams();
    const {data:project, error, isPending} = useFetch("http://localhost:9292/projects/" + id)
    const navigate = useNavigate()
    const handleClick = () =>{
        fetch("http://localhost:9292/projects/destroy/" + project.id,{
            method:'DELETE'
        }).then(()=>{
            navigate("/landing")
        })
    }

    return ( 
        <div>
            <NavigationLandingPage/>
            <div className="wrapper1">
                        {isPending && <div>Loading ...</div>}
                        {error && <div> { error}</div>}
                        {project && (
                            <article>
                                <h2>{project.title}</h2>
                                <p>Project Description: {project.description}</p>
                                <p>Project Created At: {project.createdAt}</p>
                                <p>Status: {project.status}</p>
                                <p>Project Members: {project.member}</p>
                                <button onClick={handleClick}  className="delete-project-btn">Delete</button>
                            </article>
                        ) }
            </div>
        </div>
     );
}
 
export default ProjectDetails;