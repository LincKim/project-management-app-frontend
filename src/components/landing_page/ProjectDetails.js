import useFetch from "./UseFetch";
import {useNavigate, useParams} from "react-router-dom"
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
            {isPending && <div>Loading ...</div>}
           {error && <div> { error}</div>}
            {project && (
                <article>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <button onClick={handleClick}>Delete</button>
                </article>
            ) }
        </div>
     );
}
 
export default ProjectDetails;