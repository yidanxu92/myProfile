import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const Navigation  = () =>{
 

  return (
    <Navbar>
      <Navbar.Brand href={process.env.PUBLIC_URL + "/"}>Home</Navbar.Brand>
      <Nav className='mr-auto'> 
        <Nav.Link href={process.env.PUBLIC_URL + "/#about"}>About</Nav.Link>
        <Nav.Link href={process.env.PUBLIC_URL + "/#projects"}>Projects</Nav.Link>
        <Nav.Link href={process.env.PUBLIC_URL + "/#skills"}>Skills</Nav.Link>
      </Nav>  
    </Navbar>

  );
};

export default Navigation;