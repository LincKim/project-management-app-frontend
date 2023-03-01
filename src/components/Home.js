import "../styles/Home.css";
const Home = () => {
    return (  
        <div>
          <div className="header-navigation">
            <nav className="navigation-display">
                <div className="showcase">
                    <a href="/" className="logo-show">
                        <div className="logo-wrapper">
                            <h2><i className="fas fa-project-diagram" id="project-logo"></i><span>Project Management App</span></h2>
                        </div>
                    </a>
                    <ul className="items-nav">
                        <li> <a href="#" className="lists">About</a></li>
                        <li> <a href="#" className="lists">Contact</a></li>
                    </ul>
                    <ul className="items-nav right-side">
                        <li>
                            <a href="/login" className="logo-show login1">
                                <span>Log In</span>
                            </a>
                        </li>
                        <li>
                            <div className="get-started">
                                <a href="/signup" className="signup">
                                    <span className="gs-show">
                                        <span className="gs-show2">Get Started</span>
                                    </span>   
                                </a>

                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
           
          </div>
          <section className="about">
                <div className="about-content">
                    <div className="about-column">
                        <div className="about-row">
                            <div className="about-content-wrapper">
                                <h1 className="about-heading">
                                    <span className="show-about-heading">Manage projects</span> &nbsp; work better
                                </h1>
                            </div>

                        </div>
                    </div>
                </div>
          </section>
        </div>
    );
}
 
export default Home;
