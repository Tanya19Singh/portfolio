import React from "react";
import './Footer.css'
const Footer=()=>{
return (
    <div id="footer" className="container2">
    <h1>Code on!</h1>
    <div className="footer_links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact Us</a>
    </div>
    <div className="footer_copyrt">
        <small> &copy; TANYA SINGH, all rights reserved</small>
    </div>
    <br></br>
    <div className="scroll" >
    <a href="#home">
        Scroll up
        </a>
    </div>
    </div>
);
}
export default Footer;