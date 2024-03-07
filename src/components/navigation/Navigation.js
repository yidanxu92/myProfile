import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const Navigation  = () =>{


 

  return (
    <Navbar  style={{ backgroundColor: "#183a1d", position: "fixed", width: "100%", zIndex: "1000" }} variant="dark">
      <Navbar.Brand href={process.env.PUBLIC_URL + "/"}>Home</Navbar.Brand>
      <Nav className='mr-auto'> 
        <Nav.Link href={process.env.PUBLIC_URL + "/#aboutme"}>About</Nav.Link>
        <Nav.Link href={process.env.PUBLIC_URL + "/#projects"}>Projects</Nav.Link>
        <Nav.Link href={process.env.PUBLIC_URL + "/#skills"}>Skills</Nav.Link>
  
     
      </Nav>  
    </Navbar>

  );
};

export default Navigation;