import React from "react";
import './Projects.css';
const Projects =()=>{
    return (
<>
<div id="projects"className="container2">
<h5>Have a glimpse</h5>
<h2>Websites designed and developed by me</h2>
<div className="projects_parent">
    <div className="projects_box">
        <div className="project_img i1"></div>
         <p  className="desc">An online bookstore - full stack project</p>
         <div className="gh_link"> <a  href="https://onlinebookstore-1-qlqe.onrender.com/">  <button className="btn btn-primary">GitHub Link</button></a>
    </div>
    </div>
    <div className="projects_box">
        <div className="project_img i1"></div>
         <p  className="desc"></p>
         <div className="gh_link"> <a  href="https://github.com/Tanya19Singh/decentralized-drive">  <button className="btn btn-primary">GitHub Link</button></a>
    </div>
    </div>
    <div className="projects_box">
        <div className="project_img i4"></div>
         <p  className="desc">Styles</p>
         <div className="gh_link"> <a  href="https://styles-w67a.onrender.com/">  <button className="btn btn-primary">GitHub Link</button></a>
    </div>
    </div>
    <div className="projects_box">
        <div className="project_img i5"></div>
        <p className="desc">Dice bet game </p>
         <div className="gh_link"> <a  href="https://dice-bet-game-4.onrender.com/">  <button className="btn btn-primary">GitHub Link</button></a>
    </div>
    </div>
    <div className="projects_box">
        <div className="project_img i3"></div>
        <p  className="desc"> A project describing traditional handicrafts</p>
         <div className="gh_link"><a href="https://tanya19singh.github.io/IndianArt2/">  <button className="btn btn-primary">GitHub Link</button></a>
    </div>
    </div>
    <div className="projects_box">
        <div className="project_img i6"></div>
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