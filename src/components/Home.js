import "../styles/Home.css";
import Navbar from "./Navbar";
const Home = () => {
    return (  
        <div>
            <Navbar />
          <section className="about">
                <div className="about-content">
                    <div className="about-column">
                        <div className="about-row">
                            <div className="about-content-wrapper">
                                <h1 className="about-heading">
                                    <span className="show-about-heading">Manage projects</span> &nbsp; work smarter
                                </h1>
                                <div className="main-content">
                                    <p className="p-content">
                                        We help manage your projects and enhance collaboration amongst your team. Join us today and watch your business grow
                                    </p>
                                    <div className="button-container">
                                        <span className="sign-up-button">

                                        </span>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
          </section>
        </div>
    );
}
 
export default Home;
