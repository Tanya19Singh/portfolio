import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typical from  'react-typical';
import pdf from "../../resume.pdf";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";
const Profile=()=>
{
return (
    <div id="home" className="container1">
        <div className="profile_parent">
        <div className="profile_details">
            <div className="cols">          
                <a href="https://www.linkedin.com/in/tanya-singh-59b398224/">
                <LinkedInIcon className="icon"/>
                </a>
                <a href="https://github.com/Tanya19Singh">
                <GitHubIcon className="icon"/>
                </a>
                <a href="https://api.whatsapp.com/send?phone=8601242316">
                <WhatsAppIcon className="icon"/>
                </a>
                <a href="https://www.instagram.com/tanyasingh9430/">
                <InstagramIcon className="icon"/>
                </a>
            </div>
            <div className="name">
                <span>Hi ! I am <span className="highlighted-text">Tanya</span></span>
            </div>
            <div className="profile-details-role">
                <Typical
                loop={Infinity}
                steps={[
                    "Passionate Dev",950,
                    "Front-end developer",950,
                    "CP enthusiast",950,
                    "Curious AI learner",950,
                ]}

                />
            </div>
            <div className="profile-hire">
            <a href="https://drive.google.com/file/d/1hT4Pj88Tbba9L9_axJd-HDCfHpPZ0xTn/view?usp=drivesdk" target="blank">
            <button className="btn btn-primary highlighted-btn">GET RESUME</button>
            </a>
            </div>
        </div>
        
            <div className="profile-picture">
                <div className="profile-picture-pic">
                </div> 
           </div>
           <div className="scroll_down">
           <a href="#footer" >Scroll Down</a>
           </div>
    </div>


    </div>
);
}
    
export default Profile;