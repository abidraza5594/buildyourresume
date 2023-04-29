import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"
import Button from 'react-bootstrap/Button';

function Navbar(props) {
  // buttonisopen
  return (
    <nav>
        <Link to="/detailsform">
          {  !props.buttonisopen &&   <Button variant="primary" style={{marginTop:"3px"}}>Make Resume</Button> }
        
        { props.buttonisopen && <Button variant="primary" style={{marginTop:"3px" ,backgroundColor:"blue"}}><Link to="/template"><span style={{backgroundColor:"blue",color:"white"}}>See Resume</span></Link></Button>}
        </Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact" >Contact</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
