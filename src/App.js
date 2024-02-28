import React, {useState} from 'react';
import{BrowserRouter, Route, Routes} from 'react-router-dom'; 
import Navigation from './components/navigation/Navigation';
import About from './components/about/About';
import Projects from './components/projects/Projects';  

const App = () => { 
  const titleRef = React.useRef();

  
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      <Navigation ref={titleRef}  />
      <Routes>
        <Route path="/" 
        exact 
        element={
          <>
           <About />
           <Projects />
          </>
      
        }
        />
        </Routes> 
    </BrowserRouter>

  )
};

export default App;
