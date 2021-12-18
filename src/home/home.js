import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap"


const HomePage =() =>{
  return (
    <div className="homePg">
       <Button className="login" type="submit"><Link className="alink" to="/login">Login</Link></Button>
       <Button className="signupbtn" type="submit"><Link className="alink" to="/signup">Sign Up </Link></Button>
    </div>
  )};
export default HomePage;