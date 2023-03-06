import React from "react";
import '../../styles/LandingPage.css'
import NavigationLandingPage from "./NavigationLandingPage";
import ProjectList from "./ProjectList";
import useFetch from "./UseFetch";
const LandingPage = () => {

    const {data:projects, isPending, error} = useFetch("https://project-management-backend-wtx2.onrender.com/projects")
    return ( 
        <div>
            <NavigationLandingPage/>
            {projects && <ProjectList projects={projects} />}
            
        </div>
     );
}
 
export default LandingPage;