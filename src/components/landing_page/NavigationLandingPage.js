import React from "react";
import '../../styles/LandingPage.css'
const NavigationLandingPage = () => {
    return ( 
    
        <div className="home-bar">
            <div className="showcase-container">
                <div className="showcase-projects">
                    <div className="logo-show">
                        <div className="app-name">
                            <div className="show-app">
                                <button className="show-name1">
                                    <div className="before-name">
                                        <h1 className="exact-app">
                                            My Projects
                                        </h1>
                                    </div>

                                </button>

                            </div>

                        </div>

                        <div className="create-projects">
                            <button className="create-button">
                                <div className="div-button">
                                    Create
                                </div>

                            </button>

                        </div>

                    </div>

                    <div className="my-navigation">
                        <nav className="landing-nav">

                        </nav>

                    </div>

                </div>

            </div>
    </div>
     );
}
 
export default NavigationLandingPage;