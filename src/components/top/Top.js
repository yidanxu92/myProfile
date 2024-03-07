import React from "react";
import Container from "react-bootstrap/Container";
import Typist from "react-typist-component";
import "./top.css"



const Top = () => { 
    return (
        <div id="top"
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0" 
        style={{ background:`url("rivendall.avif")`}}>
            <div id="stars"></div>
            <Container className="text-center">
                <h1 className="display-1">Yidan Xu</h1>
                <Typist>
                    <div className="lead typist">
                        An aspiring software developer
                        </div>
                </Typist>  
                <div className="p-5"></div> 
                <a
                className="btn btn-outline-light btn-lg "
                href="#aboutme"
                role="button"
                aria-label="Learn more about me">
                    More about me
                    </a>

                </Container>    
               



        </div>
        




    );
};

    export default Top;