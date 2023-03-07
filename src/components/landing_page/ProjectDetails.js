import useFetch from "./UseFetch";
import {useNavigate, useParams} from "react-router-dom"
import NavigationLandingPage from "./NavigationLandingPage";
const ProjectDetails = () => {

    const{id} = useParams();
    const {data:project, error, isPending} = useFetch("https://project-management-backend-wtx2.onrender.com/projects/" + id)
    const navigate = useNavigate()
    const handleClick = () =>{
        fetch("https://project-management-backend-wtx2.onrender.com/projects/destroy/" + project.id,{
            method:'DELETE'
        }).then(()=>{
            navigate("/landing")
        })
    }
    // const handleUpdate = () =>{
    //     fetch("https://project-management-backend-wtx2.onrender.com/projects/update/" + project.id,{
    //         method:'PUT',
    //     }).then(()=>{
    //         navigate("/update")
    //     })
    // }

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
                                <p>Project Created At (UTC): {project.createdAt}</p>
                                <p>Status: {project.status}</p>
                                <p>Project Members: {project.member}</p>
                                <button onClick={handleClick}  className="delete-project-btn">Delete</button>
                                {/* <button onClick={handleUpdate}  className="delete-project-btn">Update</button> */}
                            </article>
                        ) }
            </div>
        </div>
     );
}
 
export default ProjectDetails;