import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
return (
    <div className = "persContact">
      <Link className = "willFooter" to="/src/Contact/contactWill.js">Contact Will</Link>
      <Link className = "eboneFooter" to="/src/Contact/contactEbone.js">Contact Ebone</Link>
      <Link className = "darahFooter" to="/src/contact/contactDarah.js">Contact Darah</Link>
     </div>
)};


export default Footer;