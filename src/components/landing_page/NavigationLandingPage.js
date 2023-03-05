import React from "react";
import '../../styles/LandingPage.css'
import { Link } from "react-router-dom";
const NavigationLandingPage = () => {
    return ( 
    
        <div className="home-bar">
            <div className="showcase-container">
                <div className="showcase-projects">
                    <div className="logo-show23">
                        <div className="app-name">
                            <div className="show-app">
                                <button className="show-name1">
                                    <Link to="/landing">
                                        <div className="before-name">
                                            
                                            <h1 className="exact-app">
                                                My Projects
                                            </h1>
                                            
                                        </div>
                                    </Link>

                                </button>

                            </div>

                        </div>

                        <div className="create-projects">
                        <Link to="/create-project">
                            <button className="create-button">
                                <div className="div-button">
                                     Create
                                    
                                </div>

                            </button>
                        </Link>

                        </div>

                    </div>

                    <div className="my-navigation">
                        <nav className="landing-nav">
                            <ul className="landing-nav-list">
                                <li className="nav-list1">
                                    <a href="#" className="listed-item">
                                        <div className="all-project-item">
                                            All Projects

                                        </div>

                                    </a>

                                </li>
                                {/* <li className="nav-list1">
                                    <a href="#" className="listed-item">
                                        <div className="all-project-item">
                                            Create Project

                                        </div>

                                    </a>

                                </li> */}

                            </ul>

                        </nav>

                    </div>

                </div>

            </div>
    </div>
     );
}
 
export default NavigationLandingPage;