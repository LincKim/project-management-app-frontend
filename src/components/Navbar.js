import "../styles/Home.css";
const Navbar = () => {
    return ( 
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
                        <li> <a href="#" className="lists">Blog</a></li>
                        <li> <a href="#" className="lists">Mission</a></li>
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
     );
}
 
export default Navbar;