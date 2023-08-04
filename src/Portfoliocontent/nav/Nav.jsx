import React, { useState } from "react";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import './Nav.css';
const Nav=()=>{
    const [active,setactive]=useState("#home");
    return (
        <>
       <div className="nav_bar">
        <nav>
            <a href="#home" onClick={()=>{setactive("#home");}} className={active==="#home"?"activeicn":""}><HomeOutlinedIcon/></a>
            <a href="#about" onClick={()=>{setactive("#about");}} className={active==="#about"?"activeicn":""}><AccountCircleOutlinedIcon/></a>
            <a href="#skills" onClick={()=>{setactive("#footer");}} className={active==="#footer"?"activeicn":""}><LibraryBooksOutlinedIcon/></a>
            <a href="#contact" onClick={()=>{setactive("#contact");}} className={active==="#contact"?"activeicn":""}><MessageOutlinedIcon/></a>
           

        </nav>
        </div>
        </>
    );
}
export default Nav;