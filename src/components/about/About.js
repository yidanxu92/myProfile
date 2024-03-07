
import React from "react"

const About = () =>{

  
    
        return(
            <div id="aboutme" className="py-3 m-0" style={{ backgroundColor: "#fefbe9" }}>
                <div className="container py-5">
                 <div className="container row">
                    <div className="col-5 d-none d-lg-block align-self-center"></div>
                    <img className="border border-secondary rounded-circle " src="confusedCat.jpeg" alt="profilepicture" width={175} height={175} />
                    <div className={'col-lg-12'}>
                        <h2 className="display-4 mb-5 text-center" >About Me</h2>
                        <p className="lead text-center" >My name is Yidan Xu.</p>
                        <p className="lead text-center">
                            <a
                            className="btn btn-outline-dark btn-lg"
                            href="YidanXuResume.pdf"
                            target="_blank"
                            rel="noreferrer noopener"
                            role="button"
                            aria-label="Resume/CV">
                                Resume
                                </a>
                                </p>
                        </div>
                        </div>  
                        </div>  
                        </div>
             
        )
    }   

export default About    
