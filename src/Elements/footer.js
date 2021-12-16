import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
return (
    <div className = "persContact">
      <Link className = "willFooter" to="/contactWill">Contact Will</Link>
      <Link className = "eboneFooter" to="/contactEbone">Contact Ebone</Link>
      <Link className = "darahFooter" to="/contactDarah">Contact Darah</Link>
     </div>
)};


export default Footer;