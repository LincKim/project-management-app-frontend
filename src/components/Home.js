import "../styles/Home.css";
const Home = () => {
    return (  
        <div>
          <div className="header-navigation">
            <nav className="navigation-display">
                <div className="showcase">
                    <a href="/" className="logo-show">
                        <div className="logo-wrapper">
                            <h2><i className="fas fa-project-diagram"></i><span>Project Management App</span></h2>
                        </div>
                    </a>
                    <ul>
                        <li> <a href="#">About</a></li>
                        <li> <a href="#">Contact</a></li>
                        <li><a href="#">Login/SignUp</a></li>
                    </ul>
                </div>
            </nav>
           
          </div>
        </div>
    );
}
 
export default Home;
