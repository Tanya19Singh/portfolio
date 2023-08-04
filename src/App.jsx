import React from 'react';
import About from './Portfoliocontent/aboutme/About';
import Contact from './Portfoliocontent/contactme/Contact';
import Profile from  './Portfoliocontent/Home/Profile';
import Nav from './Portfoliocontent/nav/Nav';
import Footer from './Portfoliocontent/footer/Footer';
import Skills from './Portfoliocontent/skills/Skills';
import Projects from './Portfoliocontent/projects/Projects';
const App = () => {
  return (
    <>
    <div className='R'>
    <Profile/>
    <Nav/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
