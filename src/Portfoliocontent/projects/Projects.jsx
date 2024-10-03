import React from "react";
import './Projects.css';
const Projects =()=>{
    return (
<>
<div id="projects"className="container2">
<h5>Have a glimpse</h5>
<h2>Projects</h2>
<div className="projects_parent">
    <div className="projects_box">
        <div className="project_img i1"></div>
         <p  className="desc">An online bookstore using MERN</p>
         <div className="gh_link"> <a  href="https://onlinebookstore-1-qlqe.onrender.com/">  <button className="btn btn-primary">GitHub Link</button></a>
    </div>
    </div>
    <div className="projects_box">
        <div className="project_img i2"></div>
        <p className="desc"> To-do list using React</p>
         <div className="gh_link"> <a  href="#home">  <button className="btn btn-primary">GitHub Link</button></a>
    </div>
    </div>
    <div className="projects_box">
        <div className="project_img i3"></div>
        <p  className="desc"> A project describing traditional handicrafts</p>
         <div className="gh_link"><a href="https://tanya19singh.github.io/IndianArt2/">  <button className="btn btn-primary">GitHub Link</button></a>
    </div>
    </div>
    <div className="projects_box">
        <div className="project_img i4"></div>
       <p className="desc">  Portfolio</p>
       <div className="gh_link">
       <a href="#home"><button className="btn btn-primary">GitHub Link</button></a>
    </div></div>
</div>
</div>
</>
    );
}
export default Projects;