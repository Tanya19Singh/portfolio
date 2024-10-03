import React from "react";
import CheckCircleIcon   from '@mui/icons-material/CheckCircle';
import './Skills.css';
const Skills=()=>{
    return (
        <>
        <div id="skills" className="container1">
          <h5>what skills do i have</h5>
          <h2>Skills</h2>
          <div className="skills_parent">
            <div className="box">
                <h4>Development</h4>
                <div className="development_skills">
                     <div className="list">
                        <CheckCircleIcon  className="icn"/>  
                          HTML
                     </div>
                     <div className="list">
                     <CheckCircleIcon  className="icn" />
                        CSS
                    </div>
                    <div className="list">
                    <CheckCircleIcon  className="icn"/>
                        Javascript
                    </div>
                    <div className="list">
                    <CheckCircleIcon className="icn"/>
                        React JS
                    </div>
                    <div className="list">
                    <CheckCircleIcon className="icn"/>
                        Bootstrap
                    </div>
                    <div className="list">
                    <CheckCircleIcon className="icn"/>
                        Node.js
                    </div>
                                   
                </div>
                </div>
                <div className="box">
                <h4>Other skills</h4>
                <div className="other_skills">
                <div className="list">
                <CheckCircleIcon className="icn"/>
                        DSA
                </div>
                <div className="list">
                <CheckCircleIcon className="icn"/>
                        OOPS
                </div>
                <div className="list">
                <CheckCircleIcon className="icn"/>
                        DBMS
                </div>
                <div className="list">
                <CheckCircleIcon className="icn"/>
                        C++
                </div>
                <div className="list">
                <CheckCircleIcon className="icn"/>
                        Computer networks
                </div>
                <div className="list">
                <CheckCircleIcon className="icn"/>
                        Operating system
                </div>
                    
                </div>
                </div> 
            </div>
            </div>
         
        </>
    );
}
export default Skills;
