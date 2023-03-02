import React from "react";
import "../styles/Signup.css";
const Signup = () => {
    return (  
        <div className="sign-up-body">
            <div className="show-body">
                <h1>
                    <a href="/home" className="return-home">
                    <i className="fas fa-project-diagram" id="project-logo"></i><span className="logo-name">Project Management App</span>
                    </a>
                </h1>
                <h2 className="h2-signup">Sign Up With Project Management App </h2>
                <div className="form-div">
                    <form action="" className="sign-up-form">
                        <div className="signup-entries">
                            <div>
                                <div>
                                    <div className="email-entry">
                                        <label htmlFor="" className="email-label"> Enter email to get started</label>
                                    </div>
                                    <div className="placeholder-email">
                                        <input type="text" name="email" placeholder="email address" autoComplete="email" className="input-email1"/>
                                    </div>
                                </div>
                                <div>
                                    <div className="username-entry">
                                        <label htmlFor="" className="username-label"> Enter Username</label>
                                    </div>
                                    <div className="placeholder-username">
                                        <input type="text" name="username" placeholder="username"  className="input-username"/>
                                    </div>
                                </div>
                                <div>

                                    <div className="password-entry">
                                        <label htmlFor="" className="password-label"> Enter Password</label>
                                    </div>
                                    <div className="placeholder-password">
                                        <input type="password" name="password" placeholder="password" className="input-password"/>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="submit-signup">
                                <div className="get-started-submission">Get Started</div>

                            </button>
                        </div>

                    </form>

                    <div className="already-signed-up">
                        <p>
                            Already have an account?
                            <a href="/login" className="log-get-started"> Log in</a>
                        </p>
                        
                    </div>

                </div>

            </div>
        </div>
    );
}
 
export default Signup;