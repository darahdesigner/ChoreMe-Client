import React, {useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap"
import "../App.css";
import homeBg from "../assets/homeBackground.png";
import blueBg from "../assets/blueBackground.png";



const HomePage =() =>{
  // const pathBg = useState(window.location.pathname);
  // const imageUrl = pathBg == "" || "/" ? homeBg : blueBg;
  
  return (
    
    <div className="homePg">
       <Button className="login" type="submit"><Link className="alink" to="/login">Login</Link></Button>
       <Button className="signupbtn" type="submit"><Link className="alink" to="/signup">Sign Up </Link></Button>
     
    </div>

  )};
export default HomePage;