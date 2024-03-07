import react from 'react';  
import Container from "react-bootstrap/Container";

const GetInTouch = () => {  
    const bgStyle = {  backgroundColor: "#e1eedd" }; 
    const email = 'yx265@cornell.edu';
    return(
        <div style={bgStyle} className="mt-auto py-5 text-center">
            <Container>
                <h2 className="display-4 text-center pb-3 text-center">Get In Touch</h2>        
                 <p className='lead text-center pb-3'>I am currently looking for a full-time job in software development. 
                 If you are interested in my work, please feel free to email me at , <a className="text-decoration-none" href={`mailto:${email}`}>{email}</a>.</p>  
        </Container>
        </div>  
        
    );
};

export default GetInTouch;