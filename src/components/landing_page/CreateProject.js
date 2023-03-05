import React,{useState} from 'react';
import '../../styles/CreateProject.css'
import { Link, useNavigate } from "react-router-dom";

const CreateProject = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState ({
        title: "",
        description: "",
    });


    const handleCreateProject = (e) => {
        e.preventDefault();

        fetch("http://localhost:9292/projects/create",{
            method: "POST",
            headers:{
                "Content-type": "application/json",
            },
            body: JSON.stringify(formData),
        }).then((response)=>{
            if(response.ok){
                response.json().then((data) => {
                    localStorage.setItem("Authorization", data.token);
                    localStorage.setItem("user", JSON.stringify(data.user));
                    console.log("Project added Successfully")
                    navigate("/landing");
                  });
            }else{
                console.log("Error in Adding Project");
            }
        })
    }

    return ( 
        <>
        <div className="sign-up-body">
            <div className="show-body">
                <h1>
                    <Link href="/landing" className="return-home">
                    <i className="fas fa-project-diagram" id="project-logo"></i><span className="logo-name">Project Management App</span>
                    </ Link>
                </h1>
                <h2 className="h2-signup"> Create Project </h2>
                <div className="form-div">
                    <form  className="sign-up-form" onSubmit={(e) => handleCreateProject(e)}>
                        <div className="signup-entries">
                            <div>
                                <div>
                                    <div className="email-entry">
                                        <label htmlFor="" className="email-label"> Project Title</label>
                                    </div>
                                    <div className="placeholder-email">
                                        <input 
                                        type="text" 
                                        name="title" 
                                        placeholder="title" 
                                        autoComplete="off" 
                                        className="input-email1"
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                       
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="username-entry">
                                        <label htmlFor="" className="username-label"> Project Description</label>
                                    </div>
                                    <div className="placeholder-username">
                                        <textarea 
                                        type="text" 
                                        name="description" 
                                        placeholder="Describe project..."  
                                        className="input-username"
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                       
                                        />
                                    </div>
                                </div>
                                <div>

                                    {/* <div className="password-entry">
                                        <label htmlFor="" className="password-label"> Enter Password</label>
                                    </div>
                                    <div className="placeholder-password">
                                        <input 
                                        type="password" 
                                        name="password" 
                                        placeholder="password" 
                                        className="input-password"
                                       
                                        />
                                    </div> */}
                                </div>
                            </div>
                            <button type="submit" className="submit-signup">
                                {" "}
                                <Link to="/landing"></Link>
                                <div className="get-started-submission">Create Project</div>

                            </button>
                        </div>

                    </form>


                </div>

            </div>
        </div>
        </>
     );
}
 
export default CreateProject;