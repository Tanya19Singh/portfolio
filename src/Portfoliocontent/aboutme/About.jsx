import React from "react";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import './About.css'; 
const About=()=>{
return (
    <div id="about" className="container2">
    <h5>Get to know</h5>
    <h2>About Me</h2>
    <div className="about_parent">
      <div>
        <div className="about_img1">
            <div className="about_img2">

            </div>
        </div>
      </div>
        <div className="about_content">
            <div className="about_content_skills">
            <a href="#skills" className="Box">
                <LibraryBooksIcon className="about_icn"/>
                <p>Skills</p>
                
                </a>
                <a href="#projects"><div className="Box">
                <LaptopMacIcon className="about_icn"/>
                <p>Projects</p>
                </div>
                </a>
            </div>
            <div className="about_content_description">
            <p>I am Tanya singh, a student at MMMUT, currently pursuing Btech with Information Technology branch. I am a coding enthusiast with great amount of zeal and passion to contribute in tech industry. </p>
            </div>
            <a href="#contact"><button className="btn btn-primary">Let's talk</button></a>
        </div>
    </div>
    </div>
);
 }
 export default About;