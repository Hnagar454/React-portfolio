import React from "react";
import "./Index.css"


function Navbar(){
    return(
<div className="header">
<nav className="navbar navbar-expand-lg" style={{color:"white"}} >
  <a className="navbar-brand headnav heading1" href="#">Himanshu Nagar</a>


  <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto "> 
      <li className="nav-item active h3 m-2">
        <a className="nav-link" href="Home.js"> Home <span className="sr-only"></span></a>
      </li>
     
      <li className="nav-item h3 m-2">
        <a className="nav-link"  href="skill.js">Skills</a>
      </li>
      <li className="nav-item h3 m-2">
        <a className="nav-link " href="Experience">Experience</a>
      </li>
      <li className="nav-item h3 m-2">
        <a className="nav-link " href="#">Achievement</a>
      </li>
      <li className="nav-item h3 m-2">
        <a className="nav-link " href="#">Hire me</a>
      </li>
      <li className="nav-item h3 m-2">
        <a className="nav-link "  id="Contact" href="#">Contact Me</a>
      </li>
    </ul>
    
  </div>
</nav>
</div>
    )
}

export default Navbar;